// import Aux from '../../hoc/Auxiliary/Auxiliary'
import classes from './ApplicationMessage.module.css'

import { VscChromeClose } from 'react-icons/vsc'
import { useApplicationMessageDispatchContext } from '../../../context/ApplicationMessageContext'
const ApplicationMessage = ({text, id}) => {
  const dispatch = useApplicationMessageDispatchContext()
  return (
    <div className={classes.Container}>
      <VscChromeClose className={classes.Close} onClick={() => dispatch({ type: 'DELETE_APPLICATION_MESSAGE' , id})} />
      <p>{ text }</p>
    </div>
  )
}

export default ApplicationMessage
