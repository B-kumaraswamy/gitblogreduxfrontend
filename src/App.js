import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BlogComponent from './components/blog';
import PublishComponent from './components/publish';
import store from './components/store';
import { Provider } from 'react-redux';
import BlogPage from './components/fullblogs';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route exact path = '/' element = {<BlogComponent/>}/>
              <Route exact path = '/publish' element = {<PublishComponent/>}/>
              <Route exact path = "/blogs/:id" element = {<BlogPage/>}/>
          </Routes>
      </BrowserRouter>
   </Provider>
  )
}

export default App;