import { useState } from 'react'
import './admin.css'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../src/firebase'


const ControlPanel = () => {
    const [loading, setLoading] = useState(false)

    const [formdata, setFormdata] = useState({
        title: "",
        date: "",
        photo: null,
        description: ""

    })

    // handle input change
    const DataRecived = (e) => {
        const { name, value, files } = e.target;
        setFormdata((prev) => ({
            ...prev,
            [name]: files ? files[0] : value
        }))
    }


    // upload image to cloudinary
  const uploadImg = async (photo) => {
  if (!photo) throw new Error("No image selected");

  const data = new FormData();
  data.append("file", photo);
  data.append("upload_preset", "portfolio");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/drlvom5qf/image/upload",
    {
      method: "POST",
      body: data,
    }
  );

  const result = await res.json();
  console.log("Cloudinary response:", result);

  if (!res.ok || !result.secure_url) {
    throw new Error(result.error?.message || "Cloudinary upload failed");
  }

  return result.secure_url;
};




    //  submit handler....
    const handleSubmit = async (e) => {
        e.preventDefault()

        const { title, date, description, photo } = formdata;

        try {
            setLoading(true);
            //    upload img
            const imageUrl = await uploadImg(photo);

            //save firestore
        await addDoc(collection(db, "experiences"), {
      title,
      date,
      description,
      photo: imageUrl,   // 🔥 always valid now
      createdAt: new Date(),
    });


            alert("experiences added succesfully")

            //reset form

            setFormdata({
                title: "",
                date: "",
                description: "",
                photo: null,
            })

        }
        catch (error) {
         console.log(error)
         alert('formupload failed')
        }finally{
            setLoading(false)
        }

    }






    return (
        <div className='controlPanel'>
            <header>
                <h2></h2>
            </header>
            <form onSubmit={handleSubmit}>
                <header>
                    <h3>Set experience data from here</h3>
                </header>
                <input
                    onChange={DataRecived}
                    value={formdata.title}
                    type="text" name="title" id="title" placeholder="Title" required />

                <input
                    onChange={DataRecived}
                    value={formdata.date}
                    type="datetime-local" name="date" id="date" />

                <input
                    onChange={DataRecived}
                    type="file" name="photo" id="photo" accept='image/*' required />

                <textarea
                    onChange={DataRecived}
                    value={formdata.description}
                    name="description" id="description" placeholder="Description" required></textarea>

                <button disabled={loading} type="submit">
                    {loading ? 'uploading...' : "Set Now"}
                </button>
            </form>
        </div>
    )
}

export default ControlPanel