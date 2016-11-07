export class Client{

    constructor(
        public id: string,
        public name: string,
        public notes: string,
        public created: Date,
        public updated: Date,
        public isActive: Boolean,
        public creatorId: number,
        public updatorId: number
        
    ){}
}
