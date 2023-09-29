import Post from "@/model/Post";
import dbConnect from "@/utils/dbConnect";
import { createRouter } from "next-connect";

// connexion db
dbConnect()

const router = createRouter()
// req  vient de user et res c ce que le serveur renvoie au user
router.get(async(req, res) =>{
    
    try {
        console.log(req.query.title);
        const post = await Post.findOne({title:req.query.title})
        res.json(post)
    } catch (error) {
        return res.status(400).json({message:error}) 
    }
  })

  export default router.handler({
        onError: (error, req, res) => { // onError est la function qui va faire la gestion d'erreur
        console.error(error.stack);
        res.status(error.statusCode || 500).end(error.message);
    },
  });