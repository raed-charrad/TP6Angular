export class Employee{
  constructor(
    public code :number,
    public _id:String,
    public nom?: String,
    public prenom?: String,
    public specialite?: String,
    public cin? : number,
    public phone ?: number,
    public email ?: String,
    public adress ?: String,
  ){}
}
