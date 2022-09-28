import { useState } from 'react'

import classes from './Layout.module.css'

import Aux from '../Auxiliary/Auxiliary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerClosedHandler = () => setShowSideDrawer(false)

  const sideDrawerToggleHandler = () => setShowSideDrawer(!showSideDrawer)

  return (
    <Aux>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  )
}

export default Layout
