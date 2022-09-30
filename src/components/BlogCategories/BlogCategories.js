import { NavLink } from 'react-router-dom'
import classes from './BlogCategories.module.css'
const blogCategories = props => (
  <aside className={classes.Wrapper}>
    <h3>Blog categories</h3>
    <NavLink>Category 1</NavLink>
    <NavLink>Category 2</NavLink>
    <NavLink>Category 3</NavLink>
  </aside>
)

export default blogCategories