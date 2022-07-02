import mongoose from 'mongoose';

const ImageSchema = mongoose.Schema({
  image: {
    type: String,
    required: [true, 'Please provide image'],
  },
});

export default mongoose.model('Image', ImageSchema);
