import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import './story.css'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router'
import { db } from '../../firebase'

import myPhoto2 from "../../assets/myphoto/myphoto2.png"
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaPhoenixFramework } from "react-icons/fa6";
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

  console.log(experiences)

  const limitWords = (word, limit = 20) => {
    const words = word.split(" ");
    if (words.length <= limit) return word
    return words.slice(0, limit).join(' ')
  }

  if(loading) return <p style={{textAlign:"center"}}>Loading experiences...</p>

  return (
    <div className='story'>
    

      <header className='headerBanner'>
          <img className='myImg2' src={myPhoto2} alt="" />
          <h2>My Journey & Story</h2>
          <p className='description'>Welcome to my portfolio! Here I share my professional experiences,<br></br> achievements, and the story of my growth as a developer. Each moment has<br></br> shaped who I am today.</p>
          <div className='ExperinceTitle'>
            <p>
               <FaPhoenixFramework className='icon'/>
               <span>15+</span>
               <span>Projects</span>
             </p>
               <p>
               <MdOutlineWorkspacePremium className='icon'/>
               <span>2+</span>
               <span>Achievments</span>
             </p>
               <p>
               <MdOutlineWorkHistory className='icon'/>
               <span>2025</span>
               <span>Active Year</span>
             </p>
          </div>
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
              {limitWords(data.description, 25)}
              {data.description.split(" ").length > 25 && (
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
