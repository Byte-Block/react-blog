import { NavLink } from 'react-router-dom'

import classes from './Toolbar.module.css'

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = props => (
  <header className={classes.Toolbar}>
    <NavLink to="/" exact="true" className={classes.Logo}>
      My Blog
    </NavLink>
    
    <nav className={classes.DesktopOnly}>
      <div className={classes.Input}>
        <input
          className={classes.SearchBar}
          {...props.elementConfig}
          value={props.value}
          placeholder={'Search'}
          onChange={props.changed}
          onKeyDown={(event) => props.onKeyPressEnter(event)}
        />
      </div>
      <NavigationItems />
    </nav>
    <DrawerToggle clicked={props.drawerToggleClicked} />
  </header>
)

export default toolbar
