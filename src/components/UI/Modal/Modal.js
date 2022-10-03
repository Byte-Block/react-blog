import classes from './Modal.module.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from 'react-icons/vsc'

const modal = props => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translate(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        <header className={classes.Header}>
          <span>Add/Edit blog post</span>{' '}
          <div className={classes.HeaderIcons}>
            <VscChromeMinimize className={classes.SVG}/>
            <VscChromeMaximize className={classes.SVG}/>
            <VscChromeClose className={classes.SVG} onClick={props.modalClosed}/>
          </div>
        </header>
        <div className={classes.ContentBody}>{props.children}</div>
      </div>
    </Aux>
  )
}

export default modal
