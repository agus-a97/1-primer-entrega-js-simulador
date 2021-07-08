//creamos la clase para el simulador. En este caso vamos a vender juegos
class Juego{
    //creamos el contructor
    //          nombre precio codigo numerico
    constructor(nombre,precio,codigo){
        this.nombre=nombre;
        this.precio=precio;
        this.codigo=codigo;
    }
    //la funcion iva para que agregue al precio cuando lo vende
    agregarIva(precio){
        this.precio+=precio*0.21;

    }
    toString(){
        return `Juego: ${this.nombre}\nPrecio: $${this.precio}\nCodigo: ${this.codigo}\n`;
    }
}

const juego01= new Juego("Doom Eternal",5000,110001);
const juego02= new Juego ("FIFA 21",4500,11002);
const juego03= new Juego("Crash Bandicoot",4000,110003);
const juego04= new Juego("The Last of Us",6000,110004);
const juego05= new Juego("Uncharthed 4",2500,110005);
const juego06= new Juego("GT Sport",1500,1010006);
const juego07= new Juego("God of War",1300,110007);
const juego08= new Juego("The Order",2100,110008);
const juego09= new Juego("Horizon Zero Dawn",2300,110009);
const juego10= new Juego("Cyberpunk 2077",8200,110010);


function juegos(comprar){
    switch(comprar){
        case 1:
            juego01.agregarIva(juego01.precio);

            const mostrar1=juego01.toString();
            console.log("Usted compro: \n"+mostrar1+"\n");

            acum+=juego01.precio;
            break;
        case 2:
            juego02.agregarIva(juego02.precio);

            const mostrar2=juego02.toString();
            console.log("Usted compro: \n"+mostrar2+"\n");

            acum+=juego02.precio;
            break;
        case 3:
            juego03.agregarIva(juego03.precio);

            const mostrar3=juego03.toString();
            console.log("Usted compro: \n"+mostrar3+"\n");

            acum+=juego03.precio;
            break;
        case 4:
            juego04.agregarIva(juego04.precio);

            const mostrar4=juego04.toString();
            console.log("Usted compro: \n"+mostrar4+"\n");

            acum+=juego04.precio;
            break;
        case 5:
            juego05.agregarIva(juego05.precio);

            const mostrar5=juego05.toString();
            console.log("Usted compro: \n"+mostrar5+"\n");

            acum+=juego05.precio;
            break;
        case 6:
            juego06.agregarIva(juego06.precio);

            const mostrar6=juego06.toString();
            console.log("Usted compro: \n"+mostrar6+"\n");

            acum+=juego06.precio;
            break;
        case 7:
            juego07.agregarIva(juego07.precio);

            const mostrar7=juego07.toString();
            console.log("Usted compro: \n"+mostrar7+"\n");

            acum+=juego07.precio;
            break;
        case 8:
            juego08.agregarIva(juego08.precio);

            const mostrar8=juego08.toString();
            console.log("Usted compro: \n"+mostrar8+"\n");

            acum+=juego08.precio;
            break;
        case 9:
            juego09.agregarIva(juego09.precio);

            const mostrar9=juego09.toString();
            console.log("Usted compro: \n"+mostrar9+"\n");

            acum+=juego09.precio;
            break;
        case 10:
            juego10.agregarIva(juego10.precio);

            const mostrar10=juego10.toString();
            console.log("Usted compro: \n"+mostrar10+"\n");

            acum+=juego10.precio;
            break;
        default:
            break;

    }
}

function crearJuego(){
    let nuevoJuego = prompt("Ingrese el nombre del juego: ");
    let nuevoPrecio = Number(prompt("Ingrese un precio estimativo que espera del juego: "));

    let nuevoCodigo = Number(prompt("Ingrese un codigo entre 110011 y 110100"));        
    while (nuevoCodigo<110011||nuevoCodigo>110100){
        nuevoCodigo=Number(prompt("Ingrese un codigo entre 110011 y 110100"));
    }

    return new Juego(nuevoJuego,nuevoPrecio,nuevoCodigo);
}

alert("Bienvenido a Tienda Gamer.");
//acumulador para las compras
let acum=0;
//acumulador para las ventas del usuario
let acumv=0;

//ponemos toUpperCase para que lo vuelva mayuscula directamente
let opcion=prompt("Seleccione que opcion desea ejecutar: \nCOMPRAR: para comprar juegos.\nVENDER: para vendernos su juego. \n(con otro valor termina)").toUpperCase();

while(opcion==='COMPRAR'||opcion==='VENDER'){
    switch(opcion){
        case 'COMPRAR':
             compra= Number(prompt("Bienvenido que juego desea comprar (seleccion de 1 a 10 con otro valor termina)\n1:"+juego01.nombre+"\n2:"+juego02.nombre+"\n3:"+juego03.nombre+"\n4: "+juego04.nombre+"\n5: "+juego05.nombre+"\n6: "+juego06.nombre+"\n7: "+juego07.nombre+"\n8: "+juego08.nombre+"\n9: "+juego09.nombre+"\n10: "+juego10.nombre));

            //hacemos una validacion aqui para que no salga hasta que no se ponga un numero entre 1 y 10
             while(compra<1||compra>10){
                compra= Number(prompt("Bienvenido que juego desea comprar (seleccion de 1 a 10 con otro valor termina)\n1:"+juego01.nombre+"\n2:"+juego02.nombre+"\n3:"+juego03.nombre+"\n4: "+juego04.nombre+"\n5: "+juego05.nombre+"\n6: "+juego06.nombre+"\n7: "+juego07.nombre+"\n8: "+juego08.nombre+"\n9: "+juego09.nombre+"\n10: "+juego10.nombre));
             }

            juegos(compra);
            break;
        
        case 'VENDER':
            venta=crearJuego();
            console.log("Usted vendio:\n"+venta.toString()+"\n ");
            acumv+=venta.precio;
            break;
        default:
            break;

    }
    opcion=prompt("Seleccione que opcion desea ejecutar: \nCOMPRAR: para comprar juegos.\nVENDER: para vendernos su juego. \n(con otro valor termina)").toUpperCase();
}

if (acum!=0) {
    console.log("\nTotal a pagar: $"+acum+"\nGracias por su compra!");
}
else{
    console.log("No se registro ninguna compra.");
}

if (acumv!=0) {
    console.log("Total a recibir por los juegos: $"+acumv+"\nEn breve no pondremos en contacto");
    
}
else{
    console.log("No se registro ninguna venta.");
}