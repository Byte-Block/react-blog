import { useEffect, useState } from 'react'

import Layout from './hoc/Layout/Layout'
import ApplicationMessagesContainer from './components/ApplicationMessagesContainer/ApplicationMessagesContainer'
import BlogCategories from './components/BlogCategories/BlogCategories'
import BlogPosts from './components/BlogPosts/BlogPosts'
import Modal from './components/UI/Modal/Modal'
import BlogPostForm from './containers/BlogPostForm/BlogPostForm'
import axios from './axios-nul-tien-blog-swagger'

function App() {
  console.log('App render')
  const [modalShow, setModalShow] = useState(false)
  const [allBlogPosts, setAllBlogPosts] = useState([])
  // const [singleBlogPost, setSingleBlogPost] = useState({})

  useEffect(() => {
    const getAllBlogPosts = async () => {
      const resultData = await axios.get('/api/BlogPosts').then(response => {
        console.log(response)
        return response.data.resultData
      })

      setAllBlogPosts([...resultData])
    }

    getAllBlogPosts().catch(error => console.error(error))
  }, [])

  const toggleModal = () => {
    setModalShow(!modalShow)
  }

  const getAndSetAllBlogPosts = () => {
    axios.get('/api/BlogPosts')
      .then(response => {
        console.log(response)
        setAllBlogPosts([...response.data.resultData])
      })
      .catch(error => console.error(error))
  }

  // const selectSinglePostForEditing = (postId) => {
  //   const singlePostToBeEdited = allBlogPosts.filter(post => post.id === postId)
  //   console.log('singlePostToBeEdited', singlePostToBeEdited)
  //   setSingleBlogPost(singlePostToBeEdited)
  //   setModalShow(true)
  // }

  return (
    <div>
      <Layout>
        <button onClick={() => setModalShow(!modalShow)}>SHOW MODAL</button>
        <h2 style={{ paddingTop: '0.83em', paddingLeft: '19%' }}>
          Welcome to My Blog
        </h2>
        <ApplicationMessagesContainer />
        <div
          style={{
            height: '55px',
            display: 'flex',
            flexDirection: 'row-reverse',
            marginRight: '1%',
          }}
        >
          <button style={{ marginBottom: '36px' }} onClick={() => setModalShow(!modalShow)}>Add post</button>
        </div>
        <div style={{ display: 'flex' }}>
          <BlogCategories />
          <BlogPosts 
            postList={allBlogPosts}
            getAndSetAllBlogPosts={getAndSetAllBlogPosts}
          />
        </div>
        <Modal show={modalShow} modalClosed={toggleModal}>
          <BlogPostForm
            modalToggled={toggleModal}
            getAndSetAllBlogPosts={getAndSetAllBlogPosts}
          />
        </Modal>
      </Layout>
    </div>
  )
}

export default App
