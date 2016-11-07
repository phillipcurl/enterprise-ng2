
export class Address {
  constructor(
    public id: string,
    public city: string,
    public created: Date,
    public updated: Date,
    public creatorId: number,
    public updaterId: number,
    public isActive: Boolean,
    public isMailing: Boolean,
    public isUSPS: Boolean,
    public postalCode: number,
    public state: string,
    public street: string,
    public unit_designator: string
  ) {}
}