import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        const connection = await mongoose.connect(process.env.MONGOURI!);
        console.log(`Mongoose Connected: ${connection.connection.host}`);
        console.log(`More parameters: ${connection}`)
    } catch (error) {
       console.error("There is a error connnecting ", error);
       process.exit(1); 
    }
}

export default connectDB;