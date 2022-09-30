import classes from './BlogPost.module.css'
const blogPost = props => (
  <article className={classes.Wrapper}>
    <div className={classes.postInfoWrapper}>
      <div className={classes.authorInfoWrapper}>
        <img className={classes.avatar} alt="author avatar"></img>
        <section className={classes.authorInfo}>
          <span className={classes.title}><strong>Blog Post</strong></span>
          <span style={{ fontSize: '12px'}}>
            Posted date: <time>12.12.2022. at 12:00 </time> by Some Person
          </span>
        </section>
      </div>
      <div className={classes.controls}>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
    <p className={classes.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
      malesuada lorem. Maecenas id sollicitudin elit. Aliquam tempus, nulla
      rutrum sagittis pretium, justo sem imperdiet ex, vel aliquam neque felis
      ut neque. Donec pulvinar mi eget egestas rhoncus. Curabitur purus nunc,
      ullamcorper eget sagittis sit amet, lobortis nec purus. Etiam sit amet
      lobortis massa, ut varius lectus. Cras tempus purus in magna iaculis
      ornare.
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
