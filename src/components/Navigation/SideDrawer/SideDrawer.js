import { NavLink } from 'react-router-dom' 

import classes from './SideDrawer.module.css'

import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../../UI/Backdrop/Backdrop'
import NavigationItems from '../NavigationItems/NavigationItems'

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
      <NavLink onClick={props.closed} to="/" exact="true" className={classes.Logo}>My Blog</NavLink>
        <nav onClick={props.closed}>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer
