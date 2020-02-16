const Manager = require('../models/manager.model');
const Golf = require('../models/golf.model');

//CREER UN MANAGER
exports.create = (req,res) => {

	if("golf_id" in req.body){
		Golf.findById(req.body.golf_id)
			.then(golf =>{
				if(golf.manager_id==null){
					const manager = new Manager({
						prenom: req.body.name,
						nom: req.body.surname,
						mail: req.body.mail,
						telephone: req.body.telephone,
				        golf_id: req.body.golf_id
			        })	
					manager.save().then(data=>{
						res.send(data);
					}).catch(err =>{
						res.status(500).send({
							message: err.message
						})
					})				        				
				}
				else{
					res.send("Golf a déjà un manager")
				}
			})
		.catch(err =>{
			res.status(500).send({
				message:err.message || "Erreur apparu lors de la recherche de manager"
			})
		})
	}
	else{
		const manager = new Manager({
			prenom: req.body.prenom,
			nom: req.body.nom,
			mail: req.body.mail,
			telephone: req.body.telephone,
	        golf_id: null
	        
		})
		manager.save().then(data=>{
			res.send(data);
		}).catch(err =>{
			res.status(500).send({
				message: err.message
			})
		})		
	}
}

// SUPPRIMER UN MANAGER
exports.findOneAndRemove = (req, res) => {
	Manager.findById({_id:req.params.id})
	.then(manager =>{
			if(manager.golf_id!=null){
				res.status(500).send("Désolé mais vous ne pouvez pas supprimer un manager déjç assigné à un golf")
			}else{
				Manager.findOneAndRemove({_id:req.params.id})
				.then(manager =>{
					res.send("Suppression réussite !")
				})
				.catch(err=>{
					res.status(500).send({
						message:err.message || "Erreur"
					})
				})
			}
		})
	.catch(err=>{
	res.status(500).send({
			message:err.message || "Erreur"
		})
	})
}

// METTRE A JOUR UN MANAGER
exports.findOneAndUpdate = (req,res) => {
	if("golf_id" in req.body){
		res.status(500).send("Désolé mais vous ne pouvez pas modifier")
	}
	else{
		Manager.findByIdAndUpdate( {_id:req.params.id}, req.body)
			.then(manager =>{
				res.send("Modification réussite !");
			})
			.catch(err =>{
				res.status(500).send({
					message:err.message || "Erreur apparu lors de la recherche de manager"
			})
		})
	}
}

// LIRE UN MANAGER
exports.findById = (req,res) => {
	Manager.findById( req.params.id )
	.then(manager =>{
		res.send(manager);
	})
	.catch(err =>{
		res.status(500).send({
			message:err.message || "Erreur apparu lors de la recherche de manager"
		})
	})
}

// LIRE TOUS LES MANAGERS
exports.findAll = (req, res) => {
	Manager.find()
	.then(managers =>{
		res.send(managers);
	})
	.catch(err => {
		res.status(500).send({
			message:err.message || "Erreur apparu lors de la recherche des manager"
		})
	})
}