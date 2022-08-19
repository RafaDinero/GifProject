import getAPI from '../../services/getAPI'
import { useEffect, useState } from 'react'

export default function useGif ({ keyword } = { keyword: null }) {
  
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    const KeywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    // const KeywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword')
    
    getAPI({ keyword : KeywordToUse })
      .then(gifs => {
        setGifs(gifs)
        localStorage.setItem('lastKeyword', keyword)
        setLoading(false)
    })
  }, [keyword])

  return { loading, gifs }
}
