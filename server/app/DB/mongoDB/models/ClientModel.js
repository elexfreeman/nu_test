const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  providers: [{ type: Schema.Types.ObjectId, ref: 'Provider' }]  
});

export default mongoose.model('Client', ClientSchema);
