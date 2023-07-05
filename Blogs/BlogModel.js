import mongoose from "mongoose"

let blogSchema = new mongoose.Schema({
    titre : String,
    post : String 
})

export default mongoose.model('Blog', blogSchema)
