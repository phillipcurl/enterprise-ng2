
export class TimeEntry {
  constructor(
      public id: string,
      public compensation: number,
      public created: Date,
      public creatorId: number,
      public updated: Date,
      public updatorId: number,
      public isActive: boolean,
      public isLocked: boolean,
      public paymentStartDate: Date,
      public paymentEndDate: Date,
      public total: number
      
  ) {}
}