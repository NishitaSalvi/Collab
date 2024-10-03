import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  password: String,
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;