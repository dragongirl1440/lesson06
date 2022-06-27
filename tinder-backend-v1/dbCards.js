import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    url: String,
    alt: String
});

export default mongoose.model('cards', cardSchema);