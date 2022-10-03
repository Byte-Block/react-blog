import { useState } from 'react'
import uuid from 'react-uuid'

import classes from './BlogPosts.module.css'

import BlogPost from './BlogPost/BlogPost'
import Modal from '../UI/Modal/Modal'
import BlogPostForm from '../../containers/BlogPostForm/BlogPostForm'

import axios from '../../axios-nul-tien-blog-swagger'
import { useApplicationMessage } from '../../hooks/useApplicationMessage'

const BlogPosts = props => {
  const message = useApplicationMessage(4000)

  const [modalShow, setModalShow] = useState(false)
  const [singleBlogPost, setSingleBlogPost] = useState(null)

  const toggleModal = () => {
    setModalShow(!modalShow)
  }

  const selectSinglePostForEditing = (postId) => {
    const singlePostToBeEdited = props.postList.filter(post => post.id === postId)
    setSingleBlogPost(singlePostToBeEdited[0])
    toggleModal()
  }

  const deleteSingleBlogPost = (postId) => {
    axios.delete(`/api/BlogPosts/${postId}`).then(response => {
      console.log('response from deleting an existing blog post: ', response)
      message('Post deleted successfully')
      props.getAndSetAllBlogPosts()
    })
    .catch(error => {
      console.error('error from deleting an existing blog post: ', error)
      message('Post failed to delete')
    })
  }

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
            onDeleteClick={deleteSingleBlogPost}
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
