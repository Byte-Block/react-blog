import { useEffect, useState } from 'react'
import uuid from 'react-uuid'

import classes from './BlogPosts.module.css'
import BlogPost from './BlogPost/BlogPost'
import Modal from '../UI/Modal/Modal'
import BlogPostForm from '../../containers/BlogPostForm/BlogPostForm'

const BlogPosts = props => {
  const [modalShow, setModalShow] = useState(false)
  const [singleBlogPost, setSingleBlogPost] = useState(null)
  console.log('singleBlogPost after useState: ',singleBlogPost)

  const toggleModal = () => {
    setModalShow(!modalShow)
    // if (modalShow === false) {
    //   setSingleBlogPost(null)
    // }
  }

  const selectSinglePostForEditing = (postId) => {
    const singlePostToBeEdited = props.postList.filter(post => post.id === postId)
    console.log('singlePostToBeEdited', singlePostToBeEdited[0])
    setSingleBlogPost(singlePostToBeEdited[0])
    toggleModal()
  }

  // useEffect(() => {

  // },[singleBlogPost])

  return (
    <div className={classes.Wrapper}>
      {props.postList &&
        props.postList.map(individualPost => (
          <BlogPost
            id={individualPost.id}
            key={uuid()}
            postCreateDate={individualPost.createdAt}
            postTitle={individualPost.title}
            postText={individualPost.text}
            postCategoryId={individualPost.Id}
            onEditClick={selectSinglePostForEditing}
          />
        ))}
      <Modal show={modalShow} modalClosed={toggleModal}>
        { singleBlogPost !== null ?
          (<BlogPostForm
          key={uuid()}
          modalToggled={toggleModal}
          blogPostInfo={singleBlogPost}
          isBeingEdited={true}
          getAndSetAllBlogPosts={props.getAndSetAllBlogPosts}
        />) : null
        }
      </Modal>
    </div>
  )
}

export default BlogPosts
