const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const administrateurSchema = new Schema({
	prenom:{
        type: String,
        required: true	
	},
	nom:{
        type: String,
        required: true		
	},
	role:{
        type: String,
        required: true		
	},
    mail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    mdp: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 128
    },
    administrateur:{
    	type:Boolean
    }  	
});
module.exports = mongoose.model('Administrateur', administrateurSchema);