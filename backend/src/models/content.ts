
import mongoose, {Document, Schema, Model} from "mongoose";
import Tags from "./tags";

interface IContent extends Document{
    link: string, 
    type: string 
    title: string, 
    tages: any,
    userId: any,
    createdAt: Date,
}


const ContentSchema: Schema<IContent> = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required:true,
        default: "No-type"
    },
    title: {
        type: String,
        default: "No-title"
    },
    tages: {type: mongoose.Schema.Types.ObjectId, ref: "Tags"},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
    createdAt: Date()
})

const Content: Model<IContent> = mongoose.model<IContent>("Content", ContentSchema);
export default Content;

