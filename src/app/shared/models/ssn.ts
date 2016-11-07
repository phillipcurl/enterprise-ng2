export class SSN{

    constructor(
      public id: string,
      public created: Date,
      public creatorId: number,
      public isActive: Boolean,
      public updated: Date,
      public updaterId: number,
      public ssn1: string,
      public ssn2: string,
      public ssn3: string
    ){}
}
