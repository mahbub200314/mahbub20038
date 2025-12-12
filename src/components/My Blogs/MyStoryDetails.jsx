
import { useParams } from "react-router"
import { experiences } from "./experience"
 


const MyStoryDetails = () => {
    const {id} = useParams()
    const storyDetais = experiences.find((details)=> details.id === Number(id))
  return (
    <div className="storyDetails">
 
         <header>
            <h2>Here you see my story in details </h2>
         </header>
         
        <div className="details">
        <img src={storyDetais.img} loading="lazy" alt="" />
        <span>{storyDetais.time}</span>
        <h2>{storyDetais.title}</h2>
        <p>{storyDetais.description}</p>
        </div>

    </div>
  )
}

export default MyStoryDetails