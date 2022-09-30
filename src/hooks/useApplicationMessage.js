import { useApplicationMessageDispatchContext } from '../context/ApplicationMessageContext'

export const useApplicationMessage = delay => {
  const dispatch = useApplicationMessageDispatchContext()

  const message = text => {
    const id = Math.random().toString(36).substring(2, 9)

    dispatch({
      type: 'ADD_APPLICATION_MESSAGE',
      message: {
        id,
        text
      }
    })

    setTimeout(() => {
      dispatch({ type: 'DELETE_APPLICATION_MESSAGE', id })
    }, delay)
  }

  return message
}
