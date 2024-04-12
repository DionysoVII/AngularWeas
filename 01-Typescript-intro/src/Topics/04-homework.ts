/*
    ===== Código de TypeScript =====
*/
interface SuperHero{
    name: string
    age: number
    address: address
    showAddress: () => string
}
interface address{
    Street:string
    Country: string
    City: string
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        Street: 'Main St',
        Country: 'USA',
        City: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.City + ', ' + this.address.Country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};
