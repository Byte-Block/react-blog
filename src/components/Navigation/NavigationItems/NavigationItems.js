import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/link1" exact>Link 1</NavigationItem>
    <NavigationItem link="/link2" exact>Link 2</NavigationItem>
    <NavigationItem link="/link3" exact>Link 3</NavigationItem>
    <NavigationItem link="/myprofile" exact>My Profile</NavigationItem>
    <NavigationItem link="/logout" exact>Logout</NavigationItem>
  </ul>
);

export default navigationItems;