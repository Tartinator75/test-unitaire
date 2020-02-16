const Administrateur = require('../models/administrateur.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs/jwt.config');

exports.create = (req,res) => {
	let hashedMdp = bcrypt.hashSync(req.body.password, 8);
	const administrateur = new Administrateur({
		prenom: req.body.prenom,
		name: req.body.name,
		role: req.body.role,
		mdp: hashedMdp,
		mail: req.body.mail,
		administrateur: req.body.administrateur
	})
	administrateur.save().then(data=>{
		let administrateurToken = jwt.sign(
			{
				id: administrateur.mail, 
				administrateur: administrateur.administrateur
			},
			config.secret,
			{
				expiresIn: 86400
			}
		)
		res.send({
			administrateur: true,
			token: administrateurToken,
			body: {
				mail: data.mail,
				prenom: data.prenom,
				mdp: data.mdp
			}
		});
	}).catch(err =>{
		res.status(500).send({
			message: err.message
		})
	})
}

// connexion administrateur 
exports.login = (req,res) => {

	// bcrypt.compareSync(mdp envoyé, mdp en base de donnée);

	//cherche l'administrateur via l'email
	//validation du mot de passe associé au mail
	//génère un token et renvoi la réponse
	Administrateur.findOne( {mail: req.body.mail}, (err, administrateur) =>{
		if(err){
			console.log(err)
		}
		else{
			if(bcrypt.compareSync(req.body.password, administrateur.mdp)){
				let administrateurToken = jwt.sign(
								{
								id: administrateur.mail, 
								administrateur: administrateur.administrateur
								},
								config.secret,
								{
									expiresIn: 86400
								}
							)
							res.send({
								administrateur: true,
								token: administrateurToken
							}
						);	
			}
			else{
				res.status(401).send("Password Invalid");
			}
		}
	})
}

exports.login2 = (req,res) => {
	Administrateur.findOne({mail: req.body.mail},
		function(err, administrateur){
			// Si l'administeur n'existe pas
			if(!administrateur) return res.status(404).send("L'administrateur n'existe pas");
			//compare les mots de passe
			let mdpValide = bcrypt.compareSync(req.body.mdp, administrateur.mdp);
			//validation du mot de passe
			if(!mdpValide) return res.status(401).send({
				administrateur: false,
				token: null
			});
			//On génère le token
			let token = jwt.sign({
				id: administrateur._id,
				administrateur: administrateur.administrateur,
				data: administrateur
			},
			config.secret, {
				expiresIn: 86400
			}
			);
			res.status(200).send({
				administrateur: true,
				token: token
			})
		}
	)
}