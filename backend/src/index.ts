import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());
dotenv.config();




//checking health check route
app.get(('/health'), (req, res) => {
    res.status(200).json({status: "OK", message: "Server is running"});
})


app.use("/api/v1/", userRoutes);

//starting server
const startServer = async() => {
    try {
        //waits for db to connect
        await connectDB();

        //start sever only if the connected to db;
        app.listen(process.env.PORT || 3000, () => {
            console.log("App has started running on port")
        })
    } catch (error) {
       console.error("Failed to start server", error);
       process.exit(1); 
    }
}

startServer();