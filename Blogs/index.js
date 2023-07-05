import mongoose from "mongoose"
import express from "express"
import Blog from "./BlogModel.js"

let app = express()
let port = 3000
//console.log(process.env)
mongoose.connect(`mongodb+srv://andrea_chalat:AtlasAndrea95^^@cluster0.ogvhdgx.mongodb.net/`, 
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("Connexion à la base de donnée établie"))
.catch(()=> console.log("Connexion à la base de donnée échouée"))

async function createBlog(titre, post){
    try{
    await Blog.create({titre, post})
    }catch(err){
        console.log(err)
    }
}

//createBlog ('Sport','transfert')

async function getBlogs(){
    try{
        let b = await Blog.find()
        console.log(b)
    }catch(err){
        console.log(err)
    }
}

//getBlogs()

async function getBlog(_id){
    try{
        let b = await Blog.find({_id})
        //let b = await Blog.findById(id)
        console.log(b)
    }catch(err){
        console.log(err)
    }
}

getBlog("64a537e4da35321eafa514a8")

async function updateBlogtitle(id , NewTitre){
    try{
        let b = await Blog.findById(id)
        b.titre = NewTitre 
        b.save()
    }catch(err){
        console.log(err)
    }
}
//updateBlogtitle('64a537e4da35321eafa514a8','Actualité')

async function updateBlogPost(id , NewPost){
    try{
        let b = await Blog.findById(id)
        b.post = NewPost 
        b.save()
    }catch(err){
        console.log(err)
    }
}
//updateBlogPost( '64a537e4da35321eafa514a8', 'Les mairies en france' )

async function deleteBlog(id){
    try{
        let b = await Blog.findById(id)
        b.deleteOne()
    }catch(err){
        console.log(err)
    }
}
//deleteBlog('64a537abbd6a3ec570cc91d8')

app.listen(port || process.env.port , ()=>console.log(`Le serveur tourne bien sur le port ${port}`))

