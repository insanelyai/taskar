import mongoose, { mongo } from "mongoose";

let mongoInstance: Promise<typeof mongoose> | null = null;

export default function connect() {
    try {
        
       if(!mongoInstance) {
        mongoInstance =  mongoose.connect(process.env.MONGODB_URI as string)

         mongoose.connection.on("connected", () => {
            console.log("Connected to MongoDB")
        })
       }
        
    } catch (error) {
        mongoose.connection.on("error", () => {
            console.error("Services Error:", error)
        })
        process.exit(1)
    }
}