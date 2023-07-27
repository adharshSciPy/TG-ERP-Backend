const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName :{
      type : String,
      required : true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role :{
      type: String,
      required: true,
      default:"user"
    },
    Company :{
      type: String,
      required : false,
      default: null
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }

  },
  { timestamps: true });

module.exports = mongoose.model("user", UserSchema);
