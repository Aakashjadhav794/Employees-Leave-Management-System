import mongoose from "mongoose";
let DB_URL = "mongodb+srv://aakashjadhavphotographer:Aakash%40123@cluster0.evqywst.mongodb.net/Employees_Details?retryWrites=true&w=majority&appName=Cluster0"
async function connectToDatabase()
{
   try{
    let connection = await mongoose.connect(DB_URL)
    console.log("DataBase Is Connected...", connection.connection.name)
   } catch (error) {
    console.log(error)
   }
}
export { connectToDatabase}
