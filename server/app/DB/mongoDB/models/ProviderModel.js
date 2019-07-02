const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  name: String 
});

export default mongoose.model('Provider', ProviderSchema);
