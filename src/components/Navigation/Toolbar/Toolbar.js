import classes from './Toolbar.module.css'

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>My Blog</div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
    <DrawerToggle clicked={props.drawerToggleClicked} />
  </header>
)

export default toolbar
