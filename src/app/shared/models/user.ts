import {Address} from './../../shared';


export class User {
  constructor(
    public id: number,
    public userType: number,
    public username: string,
    public password: string,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public gender: number,
    public email: string,
    public birthdate: Date,
    public isActive: Boolean,
    public isRegistered: Boolean,
    public lastUpdated: Boolean,
    public creatorId: number,
    public updaterId: number,
    public address: Address,
    public phoneNumber: {
      
    }
      
  ) {}
}