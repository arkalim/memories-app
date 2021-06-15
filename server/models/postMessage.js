import mongoose from "mongoose";

// define the schema for the DB
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

// convert the schema into a model
// we can run methods like find, delete etc on this model
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
