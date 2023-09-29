import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Header() {
    const router = new useRouter()
    const [inputSearch,setInputSearch] = useState('');
    function search(){
        if (typeof inputSearch === "string") {
            router.push(`/api/posts/title/${inputSearch}`)
        }
    }
  return (
    <header className=' grid grid-cols-3 bg-black m-0 p-4 gap-5'>
        <div className=''>
            <h2 className='text-white cursor-pointer' onClick={()=>{
                router.push('/')
            }}>Bec.Blog</h2>
        </div>
        <div className='flex justify-center items-center bg-white rounded-lg relative overflow-hidden'>
            <input className='w-full border-none h-full p-2' type='text' placeholder='Chercher un post par titre' value={inputSearch} onChange={(e)=>{setInputSearch(e.target.value)}} />
            <button className='absolute right-0 h-full md:w-28 w-10 rounded-lg bg-rose-400 text-white border-none font-semibold cursor-pointer' onClick={search}>ok</button>
        </div>
        <div className='flex justify-end items-center gap-4 pr-3'>
        <h5 className='text-white cursor-pointer' onClick={()=>{router.push('/auth/login')}}>Mon compte</h5>
        <button className=' bg-rose-400 border-none rounded-lg text-white p-2 cursor-pointer hover:bg-red-400' onClick={()=>{router.push('/posts/addPost')}}>nouveau post</button>
        </div>
    </header>
  )
}

export default Header