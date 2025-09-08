
import mongoose, {Document, Schema, Model} from "mongoose";
import Tags from "./tags";

interface IContent extends Document{
    link: string, 
    photourl: string 
    title: string, 
    note: string,
    tags: any,
    userId: any,
    createdAt: Date,
    
}


const ContentSchema: Schema<IContent> = new mongoose.Schema({
    link: {
        type: String,
    },
    photourl: {
        type: String
    },
    title: {
        type: String,
        default: "No-title"
    },
    note: {
        type: String
    },
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: "Tags"}],
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Content: Model<IContent> = mongoose.model<IContent>("Content", ContentSchema);
export default Content;

