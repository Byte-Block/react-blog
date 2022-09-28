import classes from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'

const navigationItem = props => {
    
  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? '#7f7f7f' : '',
      borderBottom: isActive ? '4px solid #40a4c8' : ''
    };
  }

  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.link} exact={`${props.exact}`} style={navLinkStyles}>
        {props.children}
      </NavLink>
    </li>
  );
}

export default navigationItem
