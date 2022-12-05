import User from "./models/user.model";

export const seed = async () => {
	// clear db

	// seed db
	console.log('Seeding...');

	let count = await User.countDocuments();
	if (count < 3) {
		let item = new User({
			"code": "abc",
			"nom": "jone",
			"prenom": "doe",
			"specialite": "IT",
			"cin": "23456789",
			"phone": "22332233",
			"email": "test@email.com",
			"adress": "Av sakiet sidi youssef",
		});
		await item.save();

		item = new User({
			"code": "dcb",
			"nom": "Mr",
			"prenom": "dsoe",
			"specialite": "IT",
			"cin": "54326789",
			"phone": "22331133",
			"email": "testa@email.com",
			"adress": "Av  sidi youssef",
		});
		await item.save();
	}


	console.log('Seeding done');

}