import mongoose from "mongoose";
let DB_URL = "mongodb+srv://aakashjadhavphotographer:<db_password>@cluster0.evqywst.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
