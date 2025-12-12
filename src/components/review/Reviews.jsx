import './review.css'
import reviews from './reviewData';
// react icon
import { FaRegStar } from "react-icons/fa6";
import { GoCodeReview } from "react-icons/go";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { useState } from 'react';
const Reviews = () => {
  const [rating, setRating] = useState(0);
  
  

  
  return (
    <div className='reviewPage'>
      <header>
        <h2>Client Reviews & Testimonials</h2>
        <p>See what clients and collaborators have to say about working with me</p>
      </header>

      <section>
       <div className='reviewPreview'>
        <div className="ratingIcon">
          <FaRegStar/>
        </div>
          <div className='previewDiscription'>
             <p>Average Rating</p>
             
             <span><b>4.7</b> out of 5</span>
          </div>
        </div>


        {/* .... */}



        <div className='reviewPreview'>
        <div className="reviewIcon">
          <GoCodeReview/>
        </div>
          <div className='previewDiscription'>
            <p>Total Reviews</p>
            <span><b>6</b> Reviews</span>
          </div>
        </div>

         {/* .... */}

        <div className='reviewPreview'>
        <div className="fiveStarIcon">
          <FaArrowTrendUp/>
        </div>
            <div className='previewDiscription'>
              <p>5-star Reviews</p>
              <span><b>90%</b> Total</span>
            </div>
        </div>
      </section>


    <hr />

    <main className='main-container'>
       <div className="slide1 ">

           <div className="filter">
            <button>All</button><button>Web Development</button> 
            <button>Design</button> <button>Marketing</button>
           </div>{/* marketing button */}
           
           <div className="cards">
            {
              reviews.map((data, index)=>(
                <div className="card" key={index}>

                  <div className='title'>
                    <div className='rolesAndImg'>
                      <img src={data.userPhoto} alt={data.userName} />
                      
                       <div className="role" >
                        <h3>{data.userName}</h3>
                        <p>{data.userRole}</p>
                        <span>{data.rating}</span>
                       </div>
                       
                    </div>
                       <p className='p'>{data.category}</p>

                  </div>
                    
                    <p>{data.userReview}</p>
                    <u>{data.date}</u>
                  
                </div>
              ))
            }
           </div>
       </div>
{/* ............................................ */}
       <aside>
        <b>Leave a Review</b>
           <form>
              <div className="ratingStar">
                {
                  [...Array(5)].map((_, index)=>{
                    const value = index + 1 ;
                  
                    return(
                      <FaStar
                        key={index}
                        onClick={()=> {
                          setRating(value) ;
                          console.log(rating)
                        }}
                        
                        
                       className='ratingStarIcon'/>
                    )
                  })
                }
                
              </div>
             <input type="text" name="name" id="name" placeholder='Enter name' required />
             <input type="text" name="role" id="role" placeholder='Your Role' required />
             <input type="text" name="categorey" id="categorey"  placeholder='Categorey' required />
             <textarea name="review" id="review">Share Review</textarea>
             <button type="submit"><HiOutlinePaperAirplane className='i'/> Submit Review</button>
           </form>
       </aside>
    </main>


    </div>
  )
}

export default Reviews