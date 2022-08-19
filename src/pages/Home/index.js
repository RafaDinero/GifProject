import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import useGif from '../Hook/useGif'
import ListGifs from '../../components/ListGifs'

const SECTION_GIFS = ['Anime', 'Cars', 'Dogs']

export default function Home () {
  const [keyword, setKeyword] = useState('')
  const [search, setSearch] = useLocation() //eslint-disable-line
  const { loading, gifs } = useGif() //eslint-disable-line

  const handleSubmit = event => {
    event.preventDefault()
    setSearch(`/search/${keyword}`)
  }

  const handleChange = event => {
    setKeyword(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='border border-black ml-6 my-6 px-4 py-2' onChange={handleChange} placeholder='Search a gif' value={keyword} type='text'/>
        <button className='border border-black px-4 py-2 bg-blue-400 rounded-sm'>Search</button>
      </form>
      <div>
        {
          SECTION_GIFS.map(single => <Link className='px-4 py-2 m-6 text-xl border' key={single} to={`/search/${single}`}>{single}</Link>)
        }
      </div>
      <ListGifs gifs={gifs}/>
    </div>
  )
}
