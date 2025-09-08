import mongoose, {Document, Schema, Model} from "mongoose";

interface ITags{
    title: string,
    color: string
}

interface ITagSchema extends Document, ITags {}

const TagsSchema :Schema<ITagSchema> = new mongoose.Schema({
    title: String,
    color: {
        type: String, 
        default: null
    }
})


const Tags: Model<ITagSchema> = mongoose.model<ITagSchema>("Tags", TagsSchema);
export default Tags