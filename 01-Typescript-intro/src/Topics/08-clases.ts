export class person {
    
    constructor(
        public name:string,
        public address: string ='No address'
    ) {}
}


export class hero extends person{

    constructor(
        public AlterEgo: string,
        public age: number,
        public RealName: string
    ) {
        super(RealName, 'New York'  );
    }
}


const IronMan = new hero('IronMan', 45, 'Tony')

console.log(IronMan);