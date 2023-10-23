function Menu(){
    console.log("¿Que desea hacer?");
    console.log("[1] Ver mis tareas ");
    console.log("[2] Buscar mis tareas ");
    console.log("[3] Agregar tarea ");
    console.log("[0] Salir");
}

//!================================================================================================================================

function VerTarea(){
    console.log("¿Que tarea desea ver?\n\n");
    console.log("[1] Todas ");
    console.log("[2] Pendientes ");
    console.log("[3] En curso ");
    console.log("[4] Terminadas");
    console.log("[0] Volver");
}

//!================================================================================================================================

function listaDeTareas (a, tarea){
    let prompt = require("prompt-sync")();
    let tareaAux=[];
    let i, j=0, edit;
    switch(a){
        case "1":
        for(i=0; i<tarea.length; i++){    
            console.log("[" ,i+1 +" ] " + "Tarea: " +tarea[i].titulo );
            
}   
            console.log("¿Desea ver los detalles de alguna? ");
            console.log("Introduce el numero para ver la descripcion o 0 para volver\n opcion: ");
            op=parseInt(prompt("Opcion: "));

            if(op!==0 && tarea.length>=op){

            console.log("descripcion: " +tarea[op-1].descripcion );
            console.log("Estado: " +tarea[op-1].estado );
        
            console.log("Fecha de Creacion: " +tarea[op-1].fechaCreacion.toLocaleDateString() );
            if (tarea[op-1].fechaVencimiento === null) {
                console.log("Fecha de Vencimiento: No hay fecha limite");
            }else{
            console.log("Fecha de Vencimiento: " +tarea[op-1].fechaVencimiento.toLocaleDateString() );
            }
            console.log("Dificultad: " +tarea[op-1].dificultad );

            

            edit=prompt('si deseas editar la tarea precione "1" sino precione "0"');
            if (edit==="1"){
                modificar(tarea, op-1);
            }

        }
            else{
                console.log("Opcion invalida");
                prompt("ENTER para continuar");
            }   
            break;
        case "2":

        for(i=0; i<tarea.length; i++){  
            if (tarea[i].estado==="Pendiente"){  
            tareaAux[j]=tarea[i];
            j++
            
            ;}}

            for(i=0; i<tareaAux.length; i++){
                console.log("[" ,i+1 +" ] " + "Tarea: " +tareaAux[i].titulo );
            }


            console.log("¿Desea ver los detalles de alguna? ");
            console.log("Introduce el numero para ver la descripcion o 0 para volver");
            op=parseInt(prompt("Opcion: "));

            if(op!==0 && tareaAux.length>=op){

            console.log("descripcion: " +tareaAux[op-1].descripcion );
            console.log("Estado: " +tareaAux[op-1].estado );
            console.log("Fecha de Creacion: " +tareaAux[op-1].fechaCreacion.toLocaleDateString() );
            if (tareaAux[op-1].fechaVencimiento === null) {
                console.log("Fecha de Vencimiento: No hay fecha limite");
            }else{
            console.log("Fecha de Vencimiento: " +tareaAux[op-1].fechaVencimiento.toLocaleDateString() );
            }
            console.log("Dificultad: " +tareaAux[op-1].dificultad );

            edit=prompt('si deseas editar la tarea precione "1" sino precione "0"\opcion: ');
            if (edit==="1"){
                for(i=0; i<tarea.length; i++){
                    if(tarea[i]===tareaAux[op-1]){
                modificar(tarea, i);
                tareaAux[op-1]=null;

            }}

            }

        }
            else{
                console.log("Opcion invalida");
                prompt("ENTER para continuar");
            }             
            
        break;

        case "3":

        for(i=0; i<tarea.length; i++){  
            if (tarea[i].estado==="En curso"){  
            tareaAux[j]=tarea[i];
            j++;}}

            for(i=0; i<tareaAux.length; i++){
                console.log("[" ,i+1 +" ] " + "Tarea: " +tareaAux[i].titulo );
            }


            console.log("¿Desea ver los detalles de alguna? ");
            console.log("Introduce el numero para ver la descripcion o 0 para volver");
            op=parseInt(prompt("Opcion: "));

            if(op!==0 && tareaAux.length>=op){

            console.log("descripcion: " +tareaAux[op-1].descripcion );
            console.log("Estado: " +tareaAux[op-1].estado );
        
            console.log("Fecha de Creacion: " +tareaAux[op-1].fechaCreacion.toLocaleDateString() );
            if (tareaAux[op-1].fechaVencimiento === null) {
                console.log("Fecha de Vencimiento: No hay fecha limite");
            }else{
            console.log("Fecha de Vencimiento: " +tareaAux[op-1].fechaVencimiento.toLocaleDateString() );
            }
            console.log("Dificultad: " +tareaAux[op-1].dificultad );
            edit=prompt('si deseas editar la tarea precione "1" sino precione "0"\opcion: ');
            if (edit==="1"){
                for(i=0; i<tarea.length; i++){
                    if(tarea[i]===tareaAux[op-1]){
                modificar(tarea, i);
                tareaAux[op-1]=null;
            }}
            }}
            else{
                console.log("Opcion invalida");
                prompt("ENTER para continuar");
            }   
            break;
        case "4":
            for(i=0; i<tarea.length; i++){  
                if (tarea[i].estado==="Terminada"){  
                tareaAux[j]=tarea[i];
                j++;}}
    
                for(i=0; i<tareaAux.length; i++){
                    console.log("[" ,i+1 +" ] " + "Tarea: " +tareaAux[i].titulo );
                }
    
    
                console.log("¿Desea ver los detalles de alguna? ");
                console.log("Introduce el numero para ver la descripcion o 0 para volver");
                op=parseInt(prompt("Opcion: "));
    
                if(op!==0 && tareaAux.length>=op){
    
                console.log("descripcion: " +tareaAux[op-1].descripcion );
                console.log("Estado: " +tareaAux[op-1].estado );
            
                console.log("Fecha de Creacion: " +tareaAux[op-1].fechaCreacion.toLocaleDateString() );
                if (tareaAux[op-1].fechaVencimiento === null) {
                    console.log("Fecha de Vencimiento: No hay fecha limite");
                }else{
                console.log("Fecha de Vencimiento: " +tareaAux[op-1].fechaVencimiento.toLocaleDateString() );
                }
                console.log("Dificultad: " +tareaAux[op-1].dificultad );



                edit=prompt('si deseas editar la tarea precione "1" sino precione "0"\opcion: ');
            if (edit==="1"){
                for(i=0; i<tarea.length; i++){
                    if(tarea[i]===tareaAux[op-1]){
                modificar(tarea, i);
                tareaAux[op-1]=null;
            }}
            }
            }
                else{
                    console.log("Opcion invalida");
                    prompt("ENTER para continuar");
                }   

            break;


    }


}

//!================================================================================================================================



function modificar(array, a){
    console.clear();
    console.log("Introduzca el Titulo nuevo a tu tarea:\n Si no deseas cambiar nada presiona ENTER");
    let crearTitulo=prompt(">");
    if (crearTitulo!==""){

        array[a].titulo=crearTitulo

    }

    console.clear();
    console.log("Introduzca una  descripcion nueva a tu tarea. Si no deseas cambiar nada presiona ENTER ");
    let crearDescripcion=prompt(">");
    if (crearDescripcion!==""){

        array[a].descripcion=crearDescripcion

    }
    console.clear();


    console.log("Introduzca la fecha de vencimiento . En el caso que no Cambair poner una fecha presione ENTER : ");
    let dia=(prompt("Ingrese el Dia: "));
    if (dia===""){
    }else{
    let mes=(prompt("Ingrese el Mes: ")); 
    let año=(prompt("Ingrese el Año: "));
    crearFecha=new Date(año, mes-1, dia)
    array[a].fechaVencimiento=crearFecha
    }
    

    console.clear();

    console.log("Elige la dificultad:");
    console.log("[1]Facil\n[2]Medio\n[3]Dificil");
    let crearDificultad=prompt("Opcion: ")

    switch(crearDificultad){
        case "1":
            crearDificultad="🌕🌑🌑";
            array[a].crearDificultad=crearDificultad;
        break;
        case "2":
            crearDificultad="🌕🌕🌑";
            array[a].crearDificultad=crearDificultad;
            break;
        case "3":
            crearDificultad="🌕🌕🌕";
            array[a].crearDificultad=crearDificultad;
            break;

        default:
                console.log("El valor ingresado es incorrecto");
                prompt("Preciona ENTER para continuar");
            break;
            }

            console.log("Introduzca una opcion para cambiar el estado de la tarea");
            console.log("[1]Pendiente\n[2]En curso\n[3]Terminada");
            let crearEstado=prompt("Opcion: ");
            switch(crearEstado){
                case "1":
                    crearEstado="Pendiente";
                    array[a].estado=crearEstado;
                break;

                case "2":
                    crearEstado="En curso";
                    array[a].estado=crearEstado;
                    break;
                case "3":
                    crearEstado="Terminada"
                    array[a].estado=crearEstado;
                    break;
                default:
                        console.log("El valor ingresado es incorrecto");
                        prompt("Preciona ENTER para continuar");
                    break;
                }
                    


}


//!=======================================================================================================================================


function CrearTarea(tarea){
    let prompt = require("prompt-sync")();
    
        let crearTitulo=prompt("Ponle un Titulo a tu tarea: ");
        console.clear();
        let crearDescripcion=prompt("Agrega una descripcion a tu tarea. Si no deseas poner nada presiona ENTER: ");
        if (crearDescripcion===""){
    crearDescripcion=("Sin descripcion");
};
    console.clear();


    console.log("Ingresa una fecha de vencimiento . En el caso que no desee poner una fecha presione ENTER : ");
    let dia=(prompt("Ingrese el Dia: "));

    if (dia===""){
    crearFecha=null;
    }else{
    let mes=(prompt("Ingrese el Mes: ")); 
    let año=(prompt("Ingrese el Año: "));
    crearFecha=new Date(año, mes-1, dia)
    }
    console.clear();

    console.log("Elige la dificultad:");
    console.log("Si no desea agregar una dificultad preciona Enter(se guardara como dificultad facil)");
    console.log("[1]Facil\n[2]Medio\n[3]Dificil");
    let crearDificultad=prompt("Opcion: ")
    switch(crearDificultad){
        case "1":
            crearDificultad="🌕🌑🌑";
        break;
        case "2":
            crearDificultad="🌕🌕🌑";
            break;
        case "3":
            crearDificultad="🌕🌕🌕"
        default:
            if (crearDificultad===""){

                crearDificultad="🌕🌑🌑";

            }else{
                crearDificultad="🌕🌑🌑";
                console.log("El valor ingresado es incorrecto, la dificultad se ha guardado en -Facil- ");
                prompt=("Preciona ENTER para continuar");
            }
            break;
    }

    const NewTarea = {
        titulo:crearTitulo,
        descripcion: crearDescripcion,
        estado:crearEstado="Pendiente",
        fechaCreacion: new Date(),
        fechaVencimiento:crearFecha,
        dificultad:crearDificultad,
    };
    tarea.push(NewTarea);     
}


//!=======================================================================================================================================

    function buscar(tarea) {
        let i;
        console.log("Ingrese el titulo de la tarea");
        palabra=prompt(">");

        for (i=0; i<tarea.length; i++){
            let texto=tarea[i].titulo
            let textoEnMinusculas=texto.toLowerCase();
            if(textoEnMinusculas.includes(palabra)){

                console.log("[",i+1+" ]" ,tarea[i].titulo);
                
        }
        else{if(i===tarea.length-1){
            console.log("No se encontro ninguna tarea relacionada");

        }

        }
    }
    let edit=prompt('si deseas editar la tarea precione "1" sino precione "0"\n opcion: ');
    if (edit==="1"){
        modificar(tarea, i);
        tareaAux[op-1]=null;}
}




let op, op20
let tarea =[];
let prompt = require("prompt-sync")();
do{
console.clear();
Menu();
op=prompt("Opcion: " );
switch(op){
    case "1":
        console.clear();
        VerTarea();
        op2=prompt("Opcion: ");
        listaDeTareas(op2, tarea);
        break;
    case "2":
        buscar(tarea)
    break;
        
    case "3":

        CrearTarea(tarea);
        break;
}


}while(op!=="0");
