import mongoose, {Document, Schema, Model} from "mongoose";

interface IUser extends Document{
    name: string, 
    username: string,
    email: string, 
    password: string
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        trim: true
    },
    email:{
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required:true,
        trim: true
    }, 
    username: {
        type:String,
        required: true
    }
},

{timestamps: true}
)

const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default UserModel;