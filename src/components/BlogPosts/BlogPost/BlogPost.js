import classes from './BlogPost.module.css'

import TinTinAvatar from '../../../assets/TinTin_avatar_80x80.png'
import CaptainHaddockPhoto from '../../../assets/captain_haddock_100x100.png'
import ThomsonThompsonPhoto from '../../../assets/ThomsonThompson_100x100.png'
import ProfessorTournesolPhoto from '../../../assets/calculus_100x100.png'

const blogPost = props => {
  let date = new Date(props.postCreateDate)
  
  let dateString = `${date.getDate()}.${(Number.parseInt(date.getMonth())+1).toString()}.${date.getFullYear()}.`
  let timeString = `${date.getHours()}:${date.getMinutes()}`

  return (
    <article className={classes.Wrapper}>
      <div className={classes.postInfoWrapper}>
        <div className={classes.authorInfoWrapper}>
          <img
            className={classes.avatar}
            src={TinTinAvatar}
            alt="author avatar"
          ></img>
          <section className={classes.authorInfo}>
            <span className={classes.title}>
              <strong>{props.postTitle}</strong>
            </span>
            <span style={{ fontSize: '12px' }}>Posted date: <time dateTime={props.postCreateDate}>{dateString} at {timeString} </time>by Some Person</span>
          </section>
        </div>
        <div className={classes.controls}>
          <button className={classes.button} onClick={() => props.onEditClick(props.id)}>Edit</button>
          <button className={classes.button} onClick={() => props.onDeleteClick(props.id)}>Delete</button>
        </div>
      </div>
      <p className={classes.text}>{props.postText}</p>
      <div className={classes.photoWrapper}>
        <figure>
          <img
            className={classes.blogPhoto}
            src={CaptainHaddockPhoto}
            alt="author photos"
          ></img>
        </figure>
        <figure>
          <img
            className={classes.blogPhoto}
            src={ThomsonThompsonPhoto}
            alt="author photos"
          ></img>
        </figure>
        <figure>
          <img
            className={classes.blogPhoto}
            src={ProfessorTournesolPhoto}
            alt="author photos"
          ></img>
        </figure>
      </div>
    </article>
  )
}

export default blogPost
