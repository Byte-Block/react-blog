import Layout from './hoc/Layout/Layout';
import ApplicationMessages from './components/ApplicationMessages/ApplicationMessages';
import BlogCategories from './components/BlogCategories/BlogCategories';
import BlogPosts from './components/BlogPosts/BlogPosts';

function App() {
  return (
    <div>
      <Layout>
        <div style={{backgroundColor: '#535353'}}>
          <ApplicationMessages />
          <div style={{display: 'flex'}}>
            <BlogCategories />
            <BlogPosts />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
