import express from "express"
import mongoose from "mongoose"
import Cat from "./catSchema.js"



mongoose.connect(`mongodb+srv://andrea_chalat:AtlasAndrea95^^@cluster0.ogvhdgx.mongodb.net/`, 
{ useNewUrlParser: true, useUnifiedTopology: true }) 
.then (()=> console.log("connexion a la base de donnée etablis"))
.catch(()=> console.log("connexion a la base de donnée echouee"))

let app=express()

function createCat(nom, couleur, age) {
    try {
        let cat = Cat.create({ nom, couleur, age });
        console.log(cat);
    } catch (err) {
        console.log(err);
    }
}


createCat('Merlin','Noir',10)
createCat('Loki','Blanc et Noir',9)
createCat('Morray','Roux et Blanc',9)
createCat('Duchesse','Noir et blanc',20)
createCat('Nana','Beige',18)
createCat('Baguerra','Noir',12)
createCat('Simba','Gris',11)
createCat('Léo','Roux et Blanc',23)
createCat('Cléo','Gris',22)
createCat('Berlioz','Gris',20)
createCat('Simba','Gris',20)
createCat('Chipie','Tapir',20)
createCat('Caramel','Gris',20)
createCat('Garfield','Orange',90)



async function changeCatName(id, newName) {
    try {
        // findById retourne un document et pas un tableau de documents
        let cat = await Cat.findById(id);
        cat.nom = newName;
        await cat.save();
        console.log(cat);
    } catch (err) {
        console.log(err);
    }
}

changeCatName("64a43239ded74dd441ad585a", "Omalley");

async function deleteCat(id) {
    try {
        let cat = await Cat.findById(id);
        await cat.deleteOne();
        console.log(cat);
    } catch (err) {
        console.log(err);
    }
}

deleteCat("64a41454fe8e36367712d4eb");


let port=5000
app.listen(port, ()=>console.log(`le serveur tourne bien sur le port ${port}`))