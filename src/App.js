import { useState } from 'react'
import Layout from './hoc/Layout/Layout'
import ApplicationMessagesContainer from './components/ApplicationMessagesContainer/ApplicationMessagesContainer'
import BlogCategories from './components/BlogCategories/BlogCategories'
import BlogPosts from './components/BlogPosts/BlogPosts'
import Modal from './components/UI/Modal/Modal'
import BlogPostForm from './containers/BlogPostForm/BlogPostForm'

function App() {
  const [modalShow, setModalShow] = useState(false);
  const closeModal = () => {
    setModalShow(false);
  };
  return (
    <div>
      <Layout>
        <button onClick={() => setModalShow(!modalShow)}>SHOW MODAL</button>
        <h2 style={{ paddingTop: '0.83em', paddingLeft: '19%' }}>
          Welcome to My Blog
        </h2>
        <ApplicationMessagesContainer />
        <div style={{ display: 'flex' }}>
          <BlogCategories />
          <BlogPosts />
        </div>
        <Modal
          show={modalShow}
          modalClosed={closeModal}
        >
          <BlogPostForm />  
        </Modal>
      </Layout>
    </div>
  )
}

export default App
