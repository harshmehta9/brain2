import mongoose, {Document, Schema, Model} from "mongoose";


interface ILink extends Document{
    hash: string,
    userId: any
}

const linkSchema: Schema<ILink> = new mongoose.Schema({
    hash: {
        type: String,
        unique: true
    },
    userId: {type: mongoose.Schema.Types.ObjectId, ref:"UserModel"}
}) 

const Link: Model<ILink> = mongoose.model<ILink>("Link", linkSchema);
export default Link;