import { createContext, useReducer, useContext } from 'react'

const ApplicationMessageStateContext = createContext({ messages: [] })
const ApplicationMessageDispatchContext = createContext(null)

const ApplicationMessageReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_APPLICATION_MESSAGE': {
      return {
        ...state,
        messages: [...state.messages, action.message],
      }
    }
    case 'DELETE_APPLICATION_MESSAGE': {
      const updatedMessages = state.messages.filter(
        message => message.id !== action.id
      )
      return {
        ...state,
        messages: updatedMessages,
      }
    }
    default:
      throw new Error('Unhandled action')
  }
}

export const ApplicationMessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ApplicationMessageReducer, {
    messages: [],
  })

  return (
    <ApplicationMessageStateContext.Provider value={state}>
      <ApplicationMessageDispatchContext.Provider value={dispatch}>
        {children}
      </ApplicationMessageDispatchContext.Provider>
    </ApplicationMessageStateContext.Provider>
  )
}

export const useApplicationMessageStateContext = () =>
  useContext(ApplicationMessageStateContext)
export const useApplicationMessageDispatchContext = () =>
  useContext(ApplicationMessageDispatchContext)
