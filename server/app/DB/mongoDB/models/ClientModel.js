const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ClientProvider = new Schema({ id:  Schema.Types.ObjectId });

const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  providers: [ClientProvider]  
});

export default mongoose.model('Client', ClientSchema);
