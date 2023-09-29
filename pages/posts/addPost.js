import React, { useState } from 'react'
import axios from 'axios'
import domain from '@/utils/config'


function addPost() {
  const [title,setTitle] = useState('')
  const [user,setUser] = useState('')
  const [date,setDate] = useState('')
  const [content,setContent] = useState('')
  console.log(content)
  
  async function addOnePost(){
    const post = {title,user,date,content}
    try {
      await axios.post(`${domain}/posts/`,post)
      alert('le post est bien enregister dans bdd !')
    } catch (error) {
      alert('un probleme est survenu ')
    }
    
  }
  return (
    <section className='flex flex-col justify-center items-center h-screen'>
      <h3>nouveau post</h3>
      <div className='flex flex-col gap-3 items-center w-1/2 bg-rose-500 p-6 rounded-lg'>
        <input className=' w-1/2' placeholder='titre' type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <input className=' w-1/2' placeholder='user' type='text' value={user} onChange={(e)=>{setUser(e.target.value)}}/>
        <input className=' w-1/2' placeholder='date' type='date' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
        <textarea className=' w-1/2' placeholder='contenu de post' value={content} onChange={(e)=>{setContent(e.target.value)}}/>
        <button className=' w-1/3'onClick={addOnePost}>ok</button>
      </div>
    </section>
  )
}

export default addPost