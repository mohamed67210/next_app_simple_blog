const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{ type: String, required: true },
    user : { type: String, required: true },
    content : {type: String, required: true },
    date : { type: String, required: true }
})
// on recupere le post si il existe dans notre bd ou si non on cree un nouveau post
export default mongoose.models.Post || mongoose.model('Post',postSchema)