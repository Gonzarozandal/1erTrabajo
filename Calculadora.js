
let a, b, operacion,resultado, valor;
let prompt=require("prompt-sync")();

do{
    valor=prompt("Introduzca un Numero: ");
    a=parseInt(valor);
    operacion=prompt('introduzca una operacion "+", "-", "*", "/", o "0" para salir ');

switch(operacion){
    case "+":
        valor=prompt("Introduzca el siguiente numero: ");
        b=parseInt(valor);
        resultado=a+b;
        break;

    case "-":
        valor=prompt("Introduzca el siguiente numero: ");
        b=parseInt(valor);
        resultado=a-b;
        break;

    case " * ":
        valor=prompt("Introduzca el siguiente numero: ");
        b=parseInt(valor);
        resultado=(a*b);
        break;
        
    case "/":
        
        valor=prompt("Introduzca el siguiente numero: ");
        b=parseInt(valor);
        while (valor === "0") {

            valor=prompt("No se puede dividir por 0. Introduzca otro valor: ");
        b=parseInt(valor);
        }

        resultado=a/b;       
        break;
    default:
            console.log("Esta operacion no existe");
            break;
        }
    
    console.log("El resultado es:" + resultado );
    
        let pausa=prompt("presiona enter para continuar");
        console.clear();

}
    while(operacion!=="0");