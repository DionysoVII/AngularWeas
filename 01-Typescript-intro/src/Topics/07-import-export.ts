import { ImpuestosCalculado, Producto } from './06-function-destructuring'; 


const Carrito: Producto[] = [
    {
            descripcion: 'Pc',
            precio: 270
    },
    {
            descripcion: 'monitor',
            precio: 150
    }
];

const [total, tax] = ImpuestosCalculado({
    productos: Carrito,
    tax: 0.15,
});

console.log('Total', total);
console.log('Tax', tax);

const{descripcion: Pc}=Carrito[0]
const{descripcion: Monitor}=Carrito[1]

console.log("El producto 2 es: " + Pc)
console.log("El producto 1 es: " + Monitor)















