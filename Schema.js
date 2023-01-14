const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  GeneralSec: {
    type: String,
    required: true
  },
  JoinSec: {
    type: String,
    required: true
  }
});

const MyModel = mongoose.model('voteSystem', VoteSchema);

module.exports = MyModel;