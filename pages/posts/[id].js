import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/router'
import domain from '@/utils/config'



// ********************$ pour chercher un post de l'api par id

function onePost({post}) {
    const router = useRouter()
  return (
    <>
      <h2>page : resultat de recherche de post par id</h2>
      {/* // pas besoin d'utiliser map pcq on recoit qu'un seul post */}
      <section className=' flex flex-col justify-center items-center p-10'>
        <article className='flex flex-col bg-black w-full rounded-lg p-5 gap-2'>
            <p className=" text-xs text-white">By : {post.user}</p>
            <h2 className=" text-gray-300">{post.title}</h2>
            <p className=" text-gray-300">{post.content}</p>
            <small className=" text-rose-600">{post.date}</small>
        </article>
      </section>
    </>
    

  )
}

export async function getServerSideProps(context) {
    // context il va recuperer le id passer dans le url 
    try {
        const response = await axios.get(`${domain}/posts/${context.query.id}`)
        return { props: { post:response.data } }
    } catch (error) {    
        console.log(error) 
    }
  }

export default onePost