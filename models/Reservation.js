const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  appointmentTime: {
    type: Date,
    required: true,
  },
});

module.exports = Reservation = mongoose.model("reservation", ReservationSchema);
