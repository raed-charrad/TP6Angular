import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";


let userSchema = new mongoose.Schema({
	"code":{ type: String, required: true },
	"nom":{ type: String, required: true },
	"prenom":{ type: String, required: true },
	"specialite":{ type: String, required: true },
	"cin":{ type: Number, required: true },
	"phone":{ type: Number, required: true },
	"email":{ type: String, required: true },
	"adress":{ type: String, required: true }
});

const User = mongoose.model("user", userSchema, "user");

export default User;
