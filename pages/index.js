import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const router = new useRouter()
  return (
    <main>
      {/* <h1 className=' text-red-700'>page d'accueil</h1> */}
      <section className='relative h-80 mb-20 border-2'>
        <Image className='absolute h-full w-full' src={"https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2992&q=80"}
        layout='fill' alt='image' objectFit='cover'/>
      </section>
      <section className='flex flex-col justify-center items-center mb-20'>
        <h2>bienvenue sur mon blog c'est un petit projet</h2>
        <ul>
          <li>vous pouvez acceder a la liste des posts</li>
          <li>vous pouvez ajouter un post</li>
        </ul>
      </section>
      <section className='flex items-center justify-center h-40'>
        <article className='bg-slate-700 w-1/3 h-full rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-400' onClick={()=>{router.push('/posts')}}>
          <h2 className='  text-white'>Voir mes posts</h2>
        </article>
      </section>
      
    </main>
  )
}
