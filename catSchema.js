import mongoose from "mongoose";

const catSchema = new mongoose.Schema({
    nom:String,
    couleur:String,
    age:Number,

});
const Cat = mongoose.model("Cat", catSchema)
export default Cat;