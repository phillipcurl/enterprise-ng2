import { Address } from './address';

export class Event {
  constructor(
    public address: Address,
    public contact: String,
    public contactFName: String,
    public contactLName: String,
    public date: Date,
    public description: String,
    public id: Number,
    public location: String,
    public phoneNumber: String,
    public title: String
  ) {}
}
