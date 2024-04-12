
export interface Producto {
    descripcion: string;
    precio: number;
}

const Telefono: Producto ={
    descripcion: 'Nokia A1',
    precio: 150
}


const Tablet: Producto ={
    descripcion: 'iPad Air',
    precio: 275
}




const Carrito = [Telefono, Tablet];
// const tax = 0.15;

interface ImpuestosCalculadoOptions {
    tax: number;
    productos: Producto[];
}

export function ImpuestosCalculado( options: ImpuestosCalculadoOptions ):number[]{
    let total = 0;
    options.productos.forEach( Producto => {
        total += Producto.precio
    });
    return [total, total*options.tax]
}

const [total, tax] = ImpuestosCalculado({
    productos: Carrito,
    tax: 0.15
})

// const{descripcion: DescTel, precio: PrecioTel }=Telefono
// const{descripcion: DescTb, precio: PrecioTb}=Tablet



// console.log(DescTel, PrecioTel)
// console.log(DescTb, PrecioTb)





console.log('total', total)
console.log('total', tax)  




export{}