import dbConnect from "@/utils/dbConnect";
import User from "@/model/User";
import { createRouter } from "next-connect";
import bcryptjs from "bcryptjs";



// connexion a notre bdd
dbConnect()
const router = createRouter()

router.post(async(req, res)=>{
    // enregistrer un nouveau user
    // recuperer les données envoyer du formulaire de signup
    const {pseudo,email,password} = req.body
    
    // verifeir si le user exist
    const user = await User.findOne({email})
    if (user) {
        return res.send("il y'a un compte avec cet adresse"),
        res.status(200).json({ status: 'post ajouter' })
    }
    // si il n'existe pas on cree un nouveau compte
    else{
        // hasher le mot de passe
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)

        const newUser = new User({pseudo,email,password: hashedPassword})
        try {
            await newUser.save()
            res.send("le user est bien enregistré !")
            res.status(200).json({ status: 'user ajouter' })
        } catch (error) {
            return res.status(400).json({message:"il y'a un problem"})
        }
    }

  })
  export default router.handler({
        onError: (error, req, res) => { // onError est la function qui va faire la gestion d'erreur
        console.error(error.stack);
        res.status(error.statusCode || 500).end(error.message);
    },
  });




