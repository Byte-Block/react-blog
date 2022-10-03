import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import classes from './MainBlogView.module.css'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import BlogCategories from '../../components/BlogCategories/BlogCategories'
import BlogPosts from '../../components/BlogPosts/BlogPosts'
import Modal from '../../components/UI/Modal/Modal'
import BlogPostForm from '../BlogPostForm/BlogPostForm'

import axios from '../../axios-nul-tien-blog-swagger'

const MainBLogView = props => {
  console.log('MainBLogView render')
  const [modalShow, setModalShow] = useState(false)
  const [allBlogPosts, setAllBlogPosts] = useState([])

  useEffect(() => {
    const getAllBlogPosts = async () => {
      const resultData = await axios.get('/api/BlogPosts').then(response => {
        console.log(response)
        return response.data.resultData
      })
      
      setAllBlogPosts([...resultData])
    }

    const searchBlogPosts = async () => {
      const resultData = await axios
        .get(`/api/BlogPosts/Search?term=${props.termToBeSearched}`)
        .then(response => {
          console.log(response)
          return response.data.resultData
        })
    //   props.resetSearch()
      setAllBlogPosts([...resultData])
    }

    if (props.termToBeSearched !== undefined && props.termToBeSearched !== '') {
      searchBlogPosts().catch(error => console.error(error))
    } else {
        getAllBlogPosts().catch(error => console.error(error))
    }
  }, [props.termToBeSearched])

  const toggleModal = () => {
    setModalShow(!modalShow)
  }

  const getAndSetAllBlogPosts = () => {
    axios
      .get('/api/BlogPosts')
      .then(response => {
        console.log(response)
        setAllBlogPosts([...response.data.resultData])
      })
      .catch(error => console.error(error))
  }

  const getAndSetBlogPostsByCategory = category => {
    axios
      .get(`/api/BlogPosts/GetPostByCategory?categoryId=${category}`)
      .then(response => {
        console.log(response)
        setAllBlogPosts([...response.data.resultData])
      })
      .catch(error => console.error(error))
  }

  return (
    <Aux>
      <div
        style={{
          height: '55px',
          display: 'flex',
          flexDirection: 'row-reverse',
          marginRight: '1%'
        }}
      >
        <button
          className={classes.Button}
          style={{ marginBottom: '36px' }}
          onClick={() => setModalShow(!modalShow)}
        >
          Add post
        </button>
        <button
          className={classes.Button}
          style={{ marginRight: '32px', marginBottom: '36px'}}
          onClick={() => getAndSetAllBlogPosts()}
        >
          Get all posts
        </button>
      </div>
      <div style={{ display: 'flex' }}>
        <Routes>
          <Route path="/link1" exact element={<h1>Link1 Page!</h1>} />
          <Route path="/link2" exact element={<h1>Link2 Page!</h1>} />
          <Route path="/link3" exact element={<h1>Link3 Page!</h1>} />
          <Route path="/myprofile" exact element={<h1>My Profile Page!</h1>} />
          <Route path="/logout" exact element={<h1>Logout Page!</h1>} />
          <Route
            path="/"
            exact
            element={
              <>
                <BlogCategories getCategories={getAndSetBlogPostsByCategory} />
                <BlogPosts
                  postList={allBlogPosts}
                  getAndSetAllBlogPosts={getAndSetAllBlogPosts}
                />
              </>
            }
          />
        </Routes>
        {/* <BlogPosts
          postList={allBlogPosts}
          getAndSetAllBlogPosts={getAndSetAllBlogPosts}
        /> */}
      </div>
      <Modal show={modalShow} modalClosed={toggleModal}>
        <BlogPostForm
          modalToggled={toggleModal}
          getAndSetAllBlogPosts={getAndSetAllBlogPosts}
        />
      </Modal>
    </Aux>
  )
}

export default MainBLogView
