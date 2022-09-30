import Layout from './hoc/Layout/Layout'
import ApplicationMessagesContainer from './components/ApplicationMessagesContainer/ApplicationMessagesContainer'
import BlogCategories from './components/BlogCategories/BlogCategories'
import BlogPosts from './components/BlogPosts/BlogPosts'

function App() {
  return (
    <div>
      <Layout>
        <div style={{ backgroundColor: '#535353' }}>
          <h2 style={{ paddingTop: '0.83em', paddingLeft: '19%' }}>
            Welcome to My Blog
          </h2>
          <ApplicationMessagesContainer />
          <div style={{ display: 'flex' }}>
            <BlogCategories />
            <BlogPosts />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default App
