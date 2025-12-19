import { useParams } from "react-router"
import { useEffect, useState } from "react"
// import { doc, getDoc } from "firebase/firestore"
// import { db } from "../src/firebase"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
const MyStoryDetails = () => {
  const { id } = useParams()
  const [storyDetails, setStoryDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const docRef = doc(db, "experiences", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setStoryDetails(docSnap.data())
        } else {
          console.log("No such document!")
        }
      } catch (error) {
        console.error("Firestore fetch error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStory()
  }, [id])

  if (loading) return <p style={{ textAlign: "center" }}>Loading story...</p>
  if (!storyDetails) return <p style={{ textAlign: "center" }}>Story not found</p>

  return (
    <div className="storyDetails">
      <header>
        <h2>Here you see my story in details</h2>
      </header>

      <div className="details">
        <img src={storyDetails.imageUrl} loading="lazy" alt={storyDetails.title} />
        <span>{storyDetails.date}</span>
        <h2>{storyDetails.title}</h2>
        <p>{storyDetails.description}</p>
      </div>
    </div>
  )
}

export default MyStoryDetails
