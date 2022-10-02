import classes from './BlogPost.module.css'
const blogPost = props => (
  <article className={classes.Wrapper}>
    <div className={classes.postInfoWrapper}>
      <div className={classes.authorInfoWrapper}>
        <img className={classes.avatar} alt="author avatar"></img>
        <section className={classes.authorInfo}>
          <span className={classes.title}><strong>{props.postTitle}</strong></span>
          <span style={{ fontSize: '12px'}}>
            Posted date: <time>12.12.2022. at 12:00 </time> by Some Person
          </span>
        </section>
      </div>
      <div className={classes.controls}>
        <button onClick={() => props.onEditClick(props.id)}>Edit</button>
        <button onClick={() => props.onDeleteClick(props.id)}>Delete</button>
      </div>
    </div>
    <p className={classes.text}>
      {props.postText}
    </p>
    <div className={classes.photoWrapper}>
      <figure>
        <img className={classes.blogPhoto} alt="author photos"></img>
      </figure>
      <figure>
        <img className={classes.blogPhoto} alt="author photos"></img>
      </figure>
      <figure>
        <img className={classes.blogPhoto} alt="author photos"></img>
      </figure>
    </div>
  </article>
)

export default blogPost
