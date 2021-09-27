import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  short_description: {
    type: String,
    required: true,
  },
  long_description: {
    type: String,
    required: true,
  },
  course_module: {
    type: Array,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  total_students: {
    type: Number,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  instructor_photo_url: {
    type: String,
    required: true,
  },
  instructor_title: {
    type: String,
    required: true,
  },
  intro_video_url: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
