import classes from './ApplicationMessagesContainer.module.css'
import ApplicationMessage from './ApplicationMessage/ApplicationMessage'
import { useApplicationMessageStateContext } from '../../context/ApplicationMessageContext'

const ApplicationMessagesContainer = props => {
  const { messages } = useApplicationMessageStateContext()

  return (
    <div className={classes.Container}>
      {messages &&
        messages.map(message => (
          <ApplicationMessage
            id={message.id}
            key={message.id}
            text={message.text}
          />
        ))}
    </div>
  )
}

export default ApplicationMessagesContainer
