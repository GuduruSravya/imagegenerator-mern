import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {preview} from '../assets'
import { getRandomPrompt } from '../utils'

import { Form,Load } from '../components'


const Create = () => {
  const nav = useNavigate()
  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo:''
  });
  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async()=>{
    if (form.prompt) {
      try {
        setGeneratingImage(true);
        const response = await fetch('https://mindcanvas.onrender.com/api/v1/ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImage(false);
      }
    } else {
      alert('Please provide proper prompt');
    }

  }
  const submitted = async(e)=>{
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('https://mindcanvas.onrender.com/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        alert('Success');
        nav('/');
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    }

  }
  const handleChange = (e)=>{
    setForm({
      ...form,[e.target.name]:e.target.value
    })

  }
   
  const handleSurpriseMe = ()=>{
    
    const generatedPrompt = getRandomPrompt(form.prompt)
    setForm({
      ...form,prompt:generatedPrompt
    })

  }
 
  return (
    <section className="max-w-7xl mx-auto">
       <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>
                Create Image
            </h1>
            <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
                Create visually stunning images through AI
            </p>
        </div>

        <form className="mt-16 max-w-3xl" onSubmit={submitted}>
            <div className="flex flex-col gap-5">
              <Form
              labelName="Your name"
              type="text"
              name="name"
              placeholder="Harry Potter"
              value = {form.name}
              handleChange = {handleChange}

              />

              <Form
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholder="A painting of a fox in the style of Starry Night"
              value = {form.prompt}
              handleChange = {handleChange}
              isSurpriseMe
              handleSurpriseMe = {handleSurpriseMe}

              />

              <div className="relative bg-gray-50 border border=gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
              w-64 p-3 h-64 flex justify-center item-center">
                {form.photo ?(
                  <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain' />
                ):(
                  <img src={preview} className='w-9/12 h-9/12 object-contain opacity-40' />
                )}

                {generatingImage && (
                  <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                    <Load/>
                  </div>
                )}

              </div>

            </div>
            <div className="mt-5 flex gap-5">
                  <button
                  type="button"
                  onClick={generateImage}
                  className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                  >
                    {generatingImage?'Generating...':'Generate'}
                  </button>
            </div>
            <div className="mt-10">
              <p className='mt-2 text-[#666e75] text-[14px]'>Once you have created the image you want, you can share the image with others</p>
              <button
               type="submit"
               className='mt-3 text-white bg-[#38b6ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
              >
                {loading?'Sharing':'Share with the community'}

              </button>
            </div>
        </form>

    </section>
  )
}

export default Create