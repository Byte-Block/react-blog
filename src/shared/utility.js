export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  }
}

export const checkValidity = (value, rules) => {
  let isValid = true
  if (!rules) {
    return true
  }

  if (rules.required || rules.isNotEmpty) {
    isValid = value.trim() !== '' && isValid
  }

  return isValid
}