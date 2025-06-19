import { Schema, model } from 'mongoose';

const attendeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  attendanceType: {
    type: String,
    enum: ['ENTRY', 'EXIT'],
    required: true,
  },
});

const Attendee = model('Attendee', attendeeSchema);

export default Attendee;