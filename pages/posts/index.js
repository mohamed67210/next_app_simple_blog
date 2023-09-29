import axios from "axios"
import { useRouter } from "next/router";
import { useState } from "react";
import domain from "@/utils/config";
import { stringify } from "postcss";


// passer posts recuperer de la function getstaticprops dans la function posts pour afficher les information
function posts({posts}) {
    const router = useRouter()
    const [searchInput,setSearchInput] = useState('');

    function search(){
        if (typeof searchInput != null ) {
            console.log(searchInput)
            router.push(`/posts/${searchInput}`)
        }else{
            console.log('ne marche pas')
        }
        
    }
  return (
    <div className=" m-4">
        <h1>Posts</h1>
        <div className=" bg-rose-500 h-12 flex justify-center items-center mb-6">
        <input value={searchInput} min={1}  type="text" onChange={(e)=>{setSearchInput(e.target.value) ;console.log(searchInput)}} />
        <button onClick={search}>Chercher</button>
        </div>
        {posts.map(
            (post)=>{
                return(
                    <div key={post.user + post.date} className=" bg-black p-3 mb-3 flex flex-col gap-2">
                        <p className=" text-xs text-white">By : {post.user}</p>
                        <h2 className=" text-gray-300">{post.title}</h2>
                        <p className=" text-gray-300">{post.content}</p>
                        <small className=" text-rose-600">{post.date}</small>
                    </div>
                )
            }
        )}
    </div>
  )
}

// recuperer (lire uniquement) les données a partir du server et les envoyer au post avec props , cette function elle va se compiler avant que la page se charge
export async function getStaticProps() {
    try {
        // attendre pour recuperer data 
        // utilisation de bibliotheque axios pour recuperer l'api
        const response = await axios.get(`${domain}/posts`)
        console.log(response.data);
        return{
            props:{posts:response.data}
        }
    } catch (error) {
        console.log(error);
    }
  }
export default posts