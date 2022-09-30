// import Aux from '../../hoc/Auxiliary/Auxiliary'
import classes from './ApplicationMessage.module.css'
const applicationMessage = ({text}) => (
  <div className={classes.Container}>
    <p>{ text ? text : 'Container for showing application messages'}</p>
  </div>
)

export default applicationMessage
