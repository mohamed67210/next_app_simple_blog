import Post from "@/model/Post";
import dbConnect from "@/utils/dbConnect";
import { createRouter } from "next-connect";

// connexion db
dbConnect()

const router = createRouter()
// req  vient de user et res c ce que le serveur renvoie au user
router.delete(async(req, res) => {
    // recupere les tout les postes
    try {
        const post = await Post.findOneAndDelete({_id:req.query.id})
        res.send('le post est supprimé !')
    } catch (error) {
        return res.status(400).json({message:"il y'a un problem"})
    }
  }).put(async(req, res) => { //pour editer un poste
    // if (req.user.id !== req.query.id) {
    //   throw new ForbiddenError("You can't update other user's profile");
    // }
    try {
        const post = await Post.findOne({_id:req.query.id}); //chercher le post dans bdd
        // remplacer les valeurs par les valeurs envoyer par le user
        post.title = req.body.title
        post.user = req.body.user
        post.date = req.body.date
        // 
        await post.save()
        res.json({ post });
    } catch (error) {
        return res.status(400).json({message:"il y'a un probleme on peut pas editer le post"})
    }
  }).get(async(req, res) =>{
    try {
        const post = await Post.findById({_id:req.query.id})
        res.json(post)
    } catch (error) {
        return res.status(400).json({message:"il y'a un probleme on trouve pas le post"})
        
    }
  })



  export default router.handler({
        onError: (error, req, res) => { // onError est la function qui va faire la gestion d'erreur
        console.error(error.stack);
        res.status(error.statusCode || 500).end(error.message);
    },
  });