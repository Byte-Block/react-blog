import { useState } from 'react'

import classes from './BlogPostForm.module.css'

import Input from '../../components/UI/Input/Input'

import { updateObject, checkValidity } from '../../shared/utility'
import axios from '../../axios-nul-tien-blog-swagger'
import { useApplicationMessage } from '../../hooks/useApplicationMessage'

const BlogPostForm = props => {
  const message = useApplicationMessage(4000)

  let titleEditValue
  let textEditValue

  if (props.blogPostInfo !== undefined && props.blogPostInfo.title !== undefined && props.blogPostInfo.text !== undefined) {
    titleEditValue = props.blogPostInfo.title
    textEditValue = props.blogPostInfo.text
  } else {
    titleEditValue = ''
    textEditValue = ''
  }

  const [blogForm, setBlogForm] = useState({
    blogTitle: {
      elementType: 'input',
      labelName: 'Title',
      elementConfig: {
        type: 'text',
        placeholder: 'Title of the post'
      },
      value: titleEditValue,
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
      value: textEditValue,
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

  const submitNewOrEditExistingBlogPost = event => {
    event.preventDefault()
    if (!props.isBeingEdited) {
      const blogPostBody = {
        title: blogForm.blogTitle.value,
        text: blogForm.blogText.value,
        categoryId: Math.floor(Math.random() * (3 - 1 + 1) + 1)
      }
      axios.post('/api/BlogPosts', blogPostBody)
        .then(response => {
          console.log('response from posting a new blog post: ', response)
          let updatedControls = blogForm
          for (let key in blogForm) {
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
          props.getAndSetAllBlogPosts()
          props.modalToggled()
        })
        .catch(error => {
          console.error('error from posting a new blog post: ', error)
          message('Post failed to submit')
        })
    } else {
      console.log('proceeding to edit post')
      const blogPostBody = {
        id: props.blogPostInfo.id,
        title: blogForm.blogTitle.value,
        text: blogForm.blogText.value,
        categoryId: props.blogPostInfo.categoryId
      }
      axios.put(`/api/BlogPosts/${props.blogPostInfo.id}`, blogPostBody)
        .then(response => {
          console.log('response from editing an existing blog post: ', response)
          let updatedControls = blogForm
          for (let key in blogForm) {
            updatedControls = updateObject(updatedControls, {
              [key]: updateObject(updatedControls[key], {
                value: '',
                valid: false,
                touched: false
              })
            })
          }
          setBlogForm(updatedControls)
          message('Post edited successfully')
          props.getAndSetAllBlogPosts()
          props.modalToggled()
        })
        .catch(error => {
          console.error('error from editing an existing blog post: ', error)
          message('Post failed to edit')
        })
    }
  }

  const cancelBlogPost = event => {
    event.preventDefault()
    let updatedControls = blogForm
    for (let key in blogForm) {
      updatedControls = updateObject(updatedControls, {
        [key]: updateObject(updatedControls[key], {
          value: '',
          valid: false,
          touched: false
        })
      })
    }
    setBlogForm(updatedControls)
    props.modalToggled()
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
          <button className={classes.Button} onClick={event => submitNewOrEditExistingBlogPost(event)}>Post</button>
          <button className={classes.Button} onClick={event => cancelBlogPost(event)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default BlogPostForm
