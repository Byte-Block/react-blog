import classes from './Input.module.css'

const input = props => {
  let inputElement = null
  const inputClasses = [classes.InputElement]
  let validationError = null

  if(props.invalid && props.shouldValidate && props.touched){
    inputClasses.push(classes.Invalid);
  }

  if (props.invalid && props.touched) {
    validationError = <p className={classes.ValidationError}>*</p>
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      )
      break
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      )
      break
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      )
      break
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.labelName}</label>
      {inputElement}
      {validationError}
    </div>
  )
}

export default input