import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

try{
if(!process.env.MONGODB_URI){
    throw new Error(
        "Please provide MONGODB_URI in the .env file"
    )
 
}
}
catch (Error) {
    handleError(Error);
  }
async function connectDB(){
    try {
        console.log('Conncecting DB');
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected DB")
    } catch (error) {
        console.log("Mongodb connect error",error)
        process.exit(1)
    }
}

export default connectDB