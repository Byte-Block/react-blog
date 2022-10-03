import { NavLink } from 'react-router-dom'
import classes from './BlogCategories.module.css'
const blogCategories = props => (
  <aside className={classes.Wrapper}>
    <h3>Blog categories</h3>
    <NavLink path="/" exact="true" onClick={() => props.getCategories(1)}>Category 1</NavLink>
    <NavLink path="/" exact="true" onClick={() => props.getCategories(2)}>Category 2</NavLink>
    <NavLink path="/" exact="true" onClick={() => props.getCategories(3)}>Category 3</NavLink>
  </aside>
)

export default blogCategories