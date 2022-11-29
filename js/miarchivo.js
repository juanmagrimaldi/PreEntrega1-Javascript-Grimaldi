// TIENDA DE ROPA//////////////////////////////////////////////////////////////////////////////////////////////////



// let prenda;
// let cantidad;
// let montoFinal;
// while((prenda!=1)&&(prenda!=2)&&(prenda!=3)){
//     prenda = prompt ("Hola! gracias por visitar nuestra tienda! ¿Qué tipo de prenda deseas llevar? (1- Para REMERAS, 2- Para PANTALONES y 3- para BUZOS)")
// }
// if(prenda==1){
//     cantidad = parseInt(prompt("Elegíste REMERAS! ¿Cuántas deseas llevar? (cada una sale $100)"));
//     if(cantidad>=1){
//         montoFinal = (cantidad * 100)
//         alert(`Elegiste ${cantidad} remeras y el precio final es de $${montoFinal}`)
//     }
//     else{
//         alert("Solo podés seleccionar una o más REMERAS");
//     }
// }else if(prenda==2){
//     cantidad = parseInt(prompt("Elegiste PANTALONES ¿Cuántos deseas llevar? (cada uno sale $200)"));
//     if(cantidad>=1){
//         montoFinal = (cantidad * 200)
//         alert(`Elegiste ${cantidad} pantalones y el precio final es de $${montoFinal}`)
//     }
//     else{
//         alert("Solo podés seleccionar una o más REMERAS");
//     }
// }else if(prenda==3){
//     cantidad = parseInt(prompt("Elegiste BUZOS ¿Cuántos deseas llevar? (cada uno sale $300)"));
//     if(cantidad>=1){
//         montoFinal = (cantidad * 300)
//         alert(`Elegiste ${cantidad} buzos y el precio final es de $${montoFinal}`)
//     }
//     else{
//         alert("Solo podés seleccionar una o más BUZOS");
//     }
// }



// CALCULA PAGOS EN CUOTAS SOBRE UN MONTO DETERMINADO//////////////////////////////////////////////////////////////



let monto;
let cuotas;
let adicional;
let montoFinal;

alert("Bienvendo, en esta sección deberás ingresar el MONTO y la cantidad de CUOTAS");

do{
    monto = parseInt(prompt("¿Cuál es el monto?(DESDE $10 HASTA $1000)"));
}while((monto<10) || (monto>1000));

do{
    cuotas = parseInt(prompt("En cuántas cuotas deseas abonar dicho monto?(HASTA 3 CUOTAS)"));
}while((cuotas<1) || (cuotas>3)); 

if(cuotas==1){
    adicional = 10;
    montoFinal = (monto + ((monto * adicional)/100));
    alert(`Tu monto final en una cuota es: $${montoFinal}`);
}else if(cuotas==2){
    adicional = 20;
    montoFinal = (monto + ((monto * adicional)/100));
    alert(`Tu monto final en dos cuotas es: $${montoFinal}`);
}else if(cuotas==3){
    adicional = 30;
    montoFinal = (monto + ((monto * adicional)/100));
    alert(`Tu monto final en tres cuotas es: $${montoFinal}`);
}



// CALCULAR PROMEDIO FINAL DE 4 ALUMNOS A LO LARGO DE UNA CURSADA (2 EXÁMENES PARCIALES) Y DETERMINAR SI APRUEBAN O NO///////////////////////////////////////////////////////////



// let nombreAlumno;
// let nota1;
// let nota2;
// let cantidadAlumnos = prompt("Hola! ¿Cuántos alumnos necesitan saber su promedio?");
// for(i=1; i<=cantidadAlumnos; i++){
//     nombreAlumno = prompt("Decime el nombre del alumno " + i).toUpperCase();
//     alert("El nombre del alumno " + i + ` es ${nombreAlumno}`);
//     const promedio = (nombreAlumno)=>{
//         nota1 = parseInt(prompt(`Decime la nota del primer parcial de ${nombreAlumno}`));
//         nota2 = parseInt(prompt(`Decime la nota del segundo parcial de ${nombreAlumno}`));
//         if((nota1<1) || (nota1>10)){
//             alert("Ingrese nuevamente la nota del PRIMER PARCIAL de " + `${nombreAlumno}` + " corroborando que los números esten bien tipeados");
//             return;
//         }
//         else if((nota2<1) || (nota2>10)){
//             alert("Ingrese nuevamente la nota del SEGUNDO PARCIAL de " + `${nombreAlumno}` + " corroborando que los números esten bien tipeados");
//             return;
//         }
//         else{
//             alert(`el promedio de ${nombreAlumno} es `+ ((nota1 + nota2)/2));
//         }
//     }
//     promedio(nombreAlumno);
// }


