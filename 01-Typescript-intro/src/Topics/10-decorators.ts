function ClassDecorator(constructor: any ) {
    return class extends constructor{
        newProperty ='New Property'
        hello='override';
    }
}



class SuperClass{
    public MyProperty: string ='YoMama'

    print() {
        console.log('Hola Mundo')

    }
}


console.log(SuperClass);


const MyClass = new SuperClass()

console.log(MyClass)