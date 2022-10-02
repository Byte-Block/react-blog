import { useState } from 'react'

import classes from './BlogPostForm.module.css'

import Input from '../../components/UI/Input/Input'

import { updateObject, checkValidity } from '../../shared/utility'
import axios from '../../axios-nul-tien-blog-swagger'
import { useApplicationMessage } from '../../hooks/useApplicationMessage'

const BlogPostForm = props => {
  console.log('BlogPostForm render')
  const message = useApplicationMessage(4000)

  const [blogForm, setBlogForm] = useState({
    blogTitle: {
      elementType: 'input',
      labelName: 'Title',
      elementConfig: {
        type: 'text',
        placeholder: 'Title of the post'
      },
      value: '',
      validation: {
        required: true,
        isNotEmpty: true
      },
      valid: false,
      touched: false
    },
    blogText: {
      elementType: 'textarea',
      labelName: 'Text',
      elementConfig: {
        type: 'text',
        placeholder: 'Text of the post'
      },
      value: '',
      validation: {
        required: true,
        isNotEmpty: true
      },
      valid: false,
      touched: false
    }
  })

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(blogForm, {
      [controlName]: updateObject(blogForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          blogForm[controlName].validation
        ),
        touched: true
      })
    })

    setBlogForm(updatedControls)
  }

  const submitNewBlogPost = event => {
    event.preventDefault()
    const blogPostBody = {
      title: blogForm.blogTitle.value,
      text: blogForm.blogText.value,
      categoryId: Math.floor(Math.random() * (3 - 1 + 1) + 1)
    }
    axios.post('/api/BlogPosts', blogPostBody).then(response => {
      console.log('response from posting a new blog post: ', response)
      let updatedControls = blogForm
      for (let key in blogForm) {
        console.log('key after posting', key)
        updatedControls = updateObject(updatedControls, {
          [key]: updateObject(updatedControls[key], {
            value: '',
            valid: false,
            touched: false
          })
        })
      }
      setBlogForm(updatedControls)
      message('Post submitted successfully')
      props.modalClosed()
    }).catch(error => {
        console.error('error from posting a new blog post: ', error)
        message('Post failed to submit')
    })
  }

  const cancelAddNewBlogPost = event => {
    event.preventDefault()
    props.modalClosed()
  }

  let formElementsArray = []
  for (let key in blogForm) {
    formElementsArray.push({
      id: key,
      config: blogForm[key],
      valueType: key,
      labelName: blogForm[key].labelName
    })
  }

  let form = formElementsArray.map(formElement => (
    <Input
      key={formElement.id}
      labelName={formElement.labelName}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={event => inputChangedHandler(event, formElement.id)}
    />
  ))

  return (
    <div className={classes.BlogPostForm}>
      <form>
        {form}
        <div className={classes.ButtonWrapper}>
          <button onClick={event => submitNewBlogPost(event)}>Post</button>
          <button onClick={event => cancelAddNewBlogPost(event)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default BlogPostForm
