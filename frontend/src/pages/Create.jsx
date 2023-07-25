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
  const submitted = ()=>{

  }
  const handleChange = (e)=>{

  }
   
  const handleSurpriseMe = ()=>{

  }
  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <section className="max-w-7xl mx-auto">
       <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>
                Create
            </h1>
            <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
                Create visually stunning images through DALL-E AI
            </p>
        </div>

        <form className="mt-16 max-w-3xl" onSubmit={submitted}>
            <div className="flex flex-col gap-5">
              <Form
              labelName="Your name"
              type="text"
              name="name"
              placeholer="Joe Doe"
              value = {form.name}
              handleChange = {handleChange}

              />

              <Form
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholer="a painting of a fox in the style of Starry Night"
              value = {form.prompt}
              handleChange = {handleChange}
              isSurpriseMe
              handleSurpriseMe = {handleSurpriseMe}

              />

            </div>
        </form>

    </section>
  )
}

export default Create