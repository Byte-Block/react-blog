// import Aux from '../../hoc/Auxiliary/Auxiliary'
import classes from './ApplicationMessages.module.css'
const applicationMessages = props => (
  <div className={classes.Wrapper}>
    <h2>Welcome to My Blog</h2>
    <div className={classes.Container}>
      <p>Container for showing application messages</p>
    </div>
  </div>
)

export default applicationMessages
