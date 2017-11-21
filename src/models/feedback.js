import mongoose from 'mongoose'

const FeedbackSchema = new mongoose.Schema({
  input: String,
  result: String,
  feedback: Boolean
})

const Feedback = mongoose.model('FeedbackSchema', FeedbackSchema)

export default Feedback
