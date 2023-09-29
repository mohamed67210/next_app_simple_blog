import dbConnect from "@/utils/dbConnect";
import User from "@/model/User";
import { createRouter } from "next-connect";


// connexion a notre bdd
dbConnect()

const router = createRouter()
router.post(async(req, res) => {

    // recupere le user
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if (user) {

            res.sen({message:"connexion succes"})
            
        } else {
            res.send({message:"connexion failed"})
            
        }
    } catch (error) {
        return res.status(400).json({message:"il y'a un problem pour le get"})
    }
    
  })
  export default router.handler({
        onError: (error, req, res) => { // onError est la function qui va faire la gestion d'erreur
        res.json({message:"soucis"})
        console.error(error.stack);
        res.status(error.statusCode || 500).end(error.message);
        
    },
  });




