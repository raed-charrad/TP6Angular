import { Request, Response } from 'express';
import User from '../models/user.model';

export const findAll = async (req: Request, res: Response) => {
	const search = req.query.search || '';
	const page: number = parseInt(req.query.page?.toString() || '1');
	const size: number = parseInt(req.query.size?.toString() || '5');

	// paginate search and populate comments
	User.find().then(data=>{
		res.send(data)
	})
};
export const findOne = async (req: Request, res: Response) => {
	const id = req.params.id;
	User.findById(id).then(data=>{
		res.send(data)
	})
};

export const create = async (req: Request, res: Response) => {
	const user = new User(req.body);
	user.save().then(data=>{
		res.send(data)
	})
}
export const deleteUser = async (req: Request, res: Response) => {
	const id = req.params.id;
	User.findByIdAndDelete(id).then(data=>{
		res.send(data)
	})
}
export const updateUser = async (req: Request,res: Response) => {
	const user = new User(req.body);
	User.findByIdAndUpdate(user._id, user).then(data=>{
		res.send(data)
	})
}
