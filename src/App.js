import { Route, Link } from 'wouter'
import Detail from './pages/Detail/index'
import SearchResults from './pages/SearchResults/index'
import Home from './pages/Home/index'

export default function App () {
  return (
    <div>
      <div className='text-center mt-4'>
        <Link to='/' className='text-xl text-center font-bold'>All Gifs</Link>
      </div>
      <Route path='/' component={Home}/>
      <Route path='/search/:keyword' component={SearchResults}/>
      <Route path='/gif/:id' component={Detail}/>
    </div>
  )
}