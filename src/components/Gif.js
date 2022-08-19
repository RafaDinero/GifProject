import { Link } from 'wouter'

export default function Gif ({id, url}) {
  return (
    <div className='m-4'>
      <Link to={`/gif/${id}`}><img className='rounded-md cursor-pointer border-black border' alt={id} src={url}></img></Link>
    </div>
  )
}