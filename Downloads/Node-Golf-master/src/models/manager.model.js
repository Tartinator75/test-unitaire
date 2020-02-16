const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managerSchema = new Schema({
	prenom:{
        type: String,
        required: true	
	},
	nom:{
        type: String,
        required: true		
	},
    mail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    telephone: {
        type: String,
        required: true
    },
    golf_id: {
        type: String
    }
});
module.exports = mongoose.model('Manager', managerSchema);