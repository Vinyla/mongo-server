import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  courseName: String,
  points: Number
});

export default mongoose.model('Course', CourseSchema);
