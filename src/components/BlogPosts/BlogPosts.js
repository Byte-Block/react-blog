import BlogPost from './BlogPost/BlogPost'
import classes from './BlogPosts.module.css'
const blogPosts = props => (
  <div className={classes.Wrapper}>
    <BlogPost></BlogPost>
    <BlogPost></BlogPost>
    <BlogPost></BlogPost>
  </div>
)

export default blogPosts