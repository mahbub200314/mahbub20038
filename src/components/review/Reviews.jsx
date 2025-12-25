import './review.css'
//import reviews from './reviewData';
// react icon
import { FaRegStar } from "react-icons/fa6";
import { GoCodeReview } from "react-icons/go";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';
const Reviews = () => {
  const [login, setLogin] = useState(null)
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState([])

  // login logic
  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider)
      alert("verified succesfully ❤️✌️")

      setLogin(result)

    } catch (error) {
      alert("something wrong")
      console.log(error)
    }
  }





  // form data sent firebase.....
  const formHandle = async (e) => {
    e.preventDefault()


    if (!login) {
      alert("Please verified for avoid fake review")
      return
    }

    if (rating === 0) {
      alert("please give minium one star ⭐")
      return
    }

    const form = e.target;

    const reviewData = {
      name: form.name.value,
      role: form.role.value,
      category: form.category.value,
      review: form.review.value,
      rating: rating,
      userPhoto: login.user.photoURL,
      usEmail: login.user.email,
      createdAt: serverTimestamp()

    }

    try {
      setLoading(true);

      await addDoc(collection(db, "reviews"), reviewData)
      alert("Form Submit succesfully ❤️👍")

      form.reset();
    } catch (error) {
      console.log(error)
      alert("Form submission Failed ❌")
    } finally {
      setLoading(false)
    }


  }


  // form data import from firebase

  useEffect(() => {
    const fetchReviews = async () => {

      try {

        const query2 = query(
          collection(db, "reviews"),
          orderBy("createdAt", "desc")
        );

        const snapsot = await getDocs(query2);
        const reviewArray = snapsot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setFormData(reviewArray)
      } catch (error) {
        alert("error data fetch")
        console.log(error)
      }
    };
    fetchReviews()
  }, [])



  if (loading) return <p style={{ textAlign: "center", color: "red", fontSize: "5rem" }}>Loading experiences...</p>
  return (
    <div className='reviewPage'>
      <header>
        <h2>Client Reviews & Testimonials</h2>
        <p>See what clients and collaborators have to say about working with me</p>

      </header>

      <section>
        <div className='reviewPreview'>
          <div className="ratingIcon">
            <FaRegStar />
          </div>
          <div className='previewDiscription'>
            <p>Average Rating</p>

            <span><b>4.7</b> out of 5</span>
          </div>
        </div>


        {/* .... */}



        <div className='reviewPreview'>
          <div className="reviewIcon">
            <GoCodeReview />
          </div>
          <div className='previewDiscription'>
            <p>Total Reviews</p>
            <span><b>6</b> Reviews</span>
          </div>
        </div>

        {/* .... */}

        <div className='reviewPreview'>
          <div className="fiveStarIcon">
            <FaArrowTrendUp />
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
            <button>All</button><button>Landing Page</button>
            <button>Admin Panel</button> <button>Functionality </button>
            <button>Animation</button><button>UX & UI</button><button>Others</button>
          </div>{/* marketing button */}


          <div className="cards">
            {loading ? (
              <p style={{ textAlign: "center", color: "#ef2b08ff", padding: "40px" , backgroundColor:"blue" }}>
                Loading reviews...
              </p>
            ): (
              formData.map((data) => (
                <div className="card" key={data.id}>
                  <div className='title'>
                    <div className='rolesAndImg'>
                      <img src={data.userPhoto || "default-avatar.png"} alt={data.name} />
                      <div className="role">
                        <h3>{data.name}</h3>
                        <p>{data.usEmail}</p>
                        <p>{data.role}</p>
                        <span>{data.rating} </span>
                      </div>
                    </div>
                    <p className='p'>{data.category}</p>
                  </div>
                  <p>{data.review}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ............................................ */}
        <aside>
          <b>Leave a Review</b>
          <form onSubmit={formHandle}>
            <div className="ratingStar">
              {
                [...Array(5)].map((_, index) => {
                  const value = index + 1;

                  return (
                    <FaStar
                      key={index}
                      color={value <= rating ? "yellow" : ""}
                      onClick={() => {
                        setRating(value);

                      }}


                      className='ratingStarIcon' />
                  )
                })
              }

            </div>
            <input type="text" name="name" id="name" placeholder='Enter name' required />
            <input type="text" name="role" id="role" placeholder='Your Role' required />
            <select name="category" id="category">
              <option value="Landing page">Landing page</option>
              <option value="Admin panel">Admin Panel</option>
              <option value="Functionality">Functionality</option>
              <option value="Animation">Animation</option>
              <option value="UX & UI">UX & UI</option>
              <option value="Others">Others</option>
            </select>
            <textarea name="review" id="review" placeholder='Enter Review'></textarea>
            <div onClick={googleLogin} className='verifyReview'>Verify Your Review</div>
            <button type="submit"><HiOutlinePaperAirplane className='i' /> Submit Review</button>
          </form>
        </aside>
      </main>


    </div>
  )
}

export default Reviews