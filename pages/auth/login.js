'use client'
import domain from "@/utils/config";
import axios from "axios";
import { useState } from "react"


function login() {
    const[pseudo,setPseudo] = useState('');
    const[password,setPassword] = useState('');
    const[email,setEmail] = useState('');
    const[loading,setLoading] = useState(false);


    async function addUser(){
        const user ={pseudo,email,password}
        try {
            setLoading(false)
            await axios.post(`${domain}/auth/signup`,user);
            alert('le post est bien enregister dans bdd !')
        } catch (error) {
            console.log(error.message)
        }finally{
            setLoading(false)
        }
    }
  return (
    <div className="flex flex-col items-center gap-5 mt-7">
        <h2>Bienvenue sur Bec.blog</h2>
        <section className="flex flex-col gap-4 bg-slate-500 p-2 items-center w-full md:w-1/2">
            <h3>Connexion</h3>
            <div className="flex flex-col w-1/2 gap-2">
                <input type="text" placeholder="votre adresse"/>
                <input type="password" placeholder="votre mot de passe"/>
                <button className="p-2 bg-rose-400 border-none w-full md:w-1/4 text-white cursor-pointer">connexion</button>
            </div>
        </section>
        <section className="flex flex-col gap-4 bg-slate-500 p-2 items-center w-full md:w-1/2">
            <h3>{loading ? "En cours..." : "Inscription"}</h3>
            <div className="flex flex-col w-1/2 gap-2">
                <input value={pseudo} type="text" placeholder="votre pseudo" onChange={(e)=>{setPseudo(e.target.value)}}/>
                <input value={email} type="text" placeholder="votre adress" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input value={password} type="password" placeholder="votre mot de passe" onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className="p-2 bg-rose-400 border-none w-full md:w-1/4 text-white cursor-pointer" onClick={addUser}>connexion</button>
            </div>
        </section>
    </div>
  )
}

export default login