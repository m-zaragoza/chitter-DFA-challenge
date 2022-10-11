import mongoose from "mongoose";

const peepSchema = new mongoose.Schema({
    peeperName: {
        type: String,
        required: true
    },
    peeperLastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    peepPosted: {
        type: Date,
        default: Date.now,
        required: true
    },
    peepBody: {
        type: String,
        maxlength: 280,
        required: [true, `Nothing to post`],
        match: [/^[a-zA-Z0-9!?.@_', ]*$/, `Invalid characters`]
    }
});

const Peep = mongoose.model(`Peep`, peepSchema);

export default Peep;