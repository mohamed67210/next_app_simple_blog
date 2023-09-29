import Post from "@/model/Post";
import dbConnect from "@/utils/dbConnect";
import { createRouter } from "next-connect";

// connexion db
dbConnect()

const router = createRouter()
router.get(async(req, res) => {
    // recupere les tout les postes
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (error) {
        return res.status(400).json({message:"il y'a un problem pour le get"})
    }
  }).post(async(req, res)=>{
    // enregistrer un poste
    const {title,user,content,date} = req.body
    const newPost = new Post({title,user,content,date})
    try {
        await newPost.save()
        res.send("le post est bien enregistré !")
        res.status(200).json({ status: 'post ajouter' })
    } catch (error) {
        return res.status(400).json({message:"il y'a un problem pour le post d'un nouveau post"})
    }

  })
  export default router.handler({
        onError: (error, req, res) => { // onError est la function qui va faire la gestion d'erreur
        console.error(error.stack);
        res.status(error.statusCode || 500).end(error.message);
    },
  });