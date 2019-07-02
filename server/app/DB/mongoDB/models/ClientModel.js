const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String  
});

export default mongoose.model('Client', ClientSchema);
