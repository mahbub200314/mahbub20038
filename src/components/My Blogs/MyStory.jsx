import './story.css'
import { experiences } from './experience'
import { useNavigate } from 'react-router'
const MyStory = () => {

  const navigate = useNavigate()

const limitWords = (word, limit = 15)=>{
    const words = word.split(" ");
    if(words.length <= limit) return word
    return words.slice(0, limit).join(' ') 
}
  return (
    <div className='story'>
      <header>
        <h2>See now experience and story</h2>
        <p>“Hi dear friends,<br></br> on this page you can explore my work-related experiences and  stories.”</p>
      </header>

      <div className='mainStory'>
        {
        experiences.map((data, index)=>(
          <div className="card" key={index}>
              <img  src={data.img} alt={data.id} />
              <p> 
                <b>{data.title}</b> 
                <span>{data.time}</span>
                </p>
                <span className='description'>
                  {limitWords(data.description , 15)} 
                  {data.description.split(" ").length > 15 && (

                      <span  className='seeMore' onClick={()=>navigate(`/story/${data.id}`)}> see more...</span>

                  )}
                 
                  </span>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default MyStory
