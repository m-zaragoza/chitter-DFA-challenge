import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    peeperName: {
        type: String,
        required: [true, `Please supply your first name`],
        match: [/^[a-z]+$/i, `Invalid format`]
    },
    peeperLastName: {
        type: String,
        required: [true, `Please supply your last name`],
        match: [/^[a-z]+$/i, `Invalid format`]
    },
    userName: {
        type: String,
        required: [true, `Please supply a user name`],
        unique: [true, `User name already in use`],
        trim: true,
        match: [/^[a-z0-9]+$/i, `Invalid format`]
    },
    email: {
        type: String,
        required: [true, `Please supply your email address`],
        unique: true,
        trim: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, `Invalid email format`]
    },
    password: {
        type: String,
        required: [true, `Please choose a password`],
        match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, `Invalid password format`]
    }
});

const User = mongoose.model(`User`, userSchema);

export default User;

