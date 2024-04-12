// function addnumbers( a:number, b:number ) {
//     return a+b
// }


// const addnumbers_arrow =(a:number, b:number):string =>{
//      return `${ a + b}`
// }


// function multiplicar( A: number,  B?: number, C: number = 2){
//     return A*C;
// }
 
// const result2: string = addnumbers_arrow(5, 5)
// const result: number = addnumbers(5, 5)
// const resul3: number = multiplicar(12)
// console.log({result, result2, resul3})

interface Character{
    Nombre: string  
    hp: number
    mostrarVida: () =>void
}

const healing = (Character: any, cantidad: number) => {
     if(Character.hp + cantidad > 100)
        console.log("¡¡CURACION EXCESIVA!!!")
    else if (Character.hp >= 100)
        console.log("¡¡CURACION EXCESIVA!!!")
    else
        Character.hp += cantidad;

     
}

const SteveTheMagicCheeseWizard: Character ={
    Nombre: "SteveTheMagicCheeseWizard",
    hp: 50,
    mostrarVida: function () {
        console.log(`Vida: ${this.hp}`)
    }
}

SteveTheMagicCheeseWizard.mostrarVida();

healing(SteveTheMagicCheeseWizard, 50)

SteveTheMagicCheeseWizard.mostrarVida();

healing(SteveTheMagicCheeseWizard, 50)


export{}