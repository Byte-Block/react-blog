import { useState } from 'react' 

import classes from './BlogPostForm.module.css'

import Input from '../../components/UI/Input/Input'

import { updateObject, checkValidity } from '../../shared/utility'

const BlogPostForm = () => {
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
      [controlName]: updateObject(blogForm[controlName],{
        value: event.target.value,
        valid: checkValidity(event.target.value, blogForm[controlName].validation),
        touched: true
      })
    })

    setBlogForm(updatedControls)
  }

  let formElementsArray = []
  for (let key in blogForm) {
    formElementsArray.push({
      id: key,
      config: blogForm[key],
      valueType: key,
      labelName: blogForm[key].labelName
    });
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
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ))

  return (
    <div className={classes.BlogPostForm}>
      <form>
        {form}
        <div className={classes.ButtonWrapper}>
            <button>Post</button>
            <button>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default BlogPostForm
