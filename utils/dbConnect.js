const mongoose = require('mongoose');

// la function pour se connecter a la base de données
// on utilise async await pour attendre qu'on recupere tout les données
async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://mohamed:mohamed@cluster0.8la8id6.mongodb.net/test',{useUnifiedTopology: true,useNewUrlParser:true})
        console.log('connecté a la base de données!!!!!!')

    } catch (error) {
        console.log(error)
    }
    
}

export default dbConnect;