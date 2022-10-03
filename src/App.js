import { useState } from 'react'

import Layout from './hoc/Layout/Layout'
import ApplicationMessagesContainer from './components/ApplicationMessagesContainer/ApplicationMessagesContainer'
import MainBLogView from './containers/MainBlogView/MainBlogView'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const onKeyPressEnter = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(event.target.value)
      event.target.value = ''
    }
  }

  return (
    <div>
      <Layout onKeyPressEnter={onKeyPressEnter}>
        <h2>
          Welcome to My Blog
        </h2>
        <ApplicationMessagesContainer />
        <MainBLogView termToBeSearched={searchTerm} />
      </Layout>
    </div>
  )
}

export default App
