import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import './story.css'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router'
import { db } from '../../firebase'

const MyStory = () => {
  const navigate = useNavigate()
  const [experiences, setExperiences] = useState([]) // live data
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "experiences"), orderBy("createdAt", "desc"))
        const querySnapshot = await getDocs(q)
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setExperiences(data)
      } catch (error) {
        console.error("Firestore fetch error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const limitWords = (word, limit = 15) => {
    const words = word.split(" ");
    if (words.length <= limit) return word
    return words.slice(0, limit).join(' ')
  }

  if (loading) return <p style={{textAlign:"center"}}>Loading experiences...</p>

  return (
    <div className='story'>
      <header>
        <h2 style={{ fontFamily: "sans-serif" }}>See my experience and story</h2>
        <p>“Hi dear friends,<br></br> on this page you can explore my work-related experiences and stories.”</p>
      </header>

      <div className='mainStory'>
        {experiences.map((data) => (
          <div className="card" key={data.id}>
            <img loading='lazy' src={data.imageUrl} alt={data.title} />
            <p> 
              <b>{data.title}</b> 
              <span>{data.date}</span>
            </p>
            <span className='description'>
              {limitWords(data.description, 15)}
              {data.description.split(" ").length > 15 && (
                <span className='seeMore' onClick={() => navigate(`/story/${data.id}`)}> see more...</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyStory
