// declaracion de variables de notas
let nota1;
let nota2;
let nota3;
let prom;
// if anidados si una nota no es correcta no saca el promedio y muestra mensaje
nota1 = parseInt(prompt("Ingrese primer nota: "));
if (nota1>=0 && nota1<=10){
    nota2 = parseInt(prompt("Ingrese segunda nota: "));
    if (nota2>=0 && nota2<=10){
        nota3 = parseInt(prompt("Ingrese tercer nota: "));
        if (nota3>=0 && nota3<=10){
        prom= (nota1+nota2+nota3)/3;
        var nom = prompt("Ingrese su nombre: ");
        if (prom>=7){
            alert(nom + " ¡Felicidades! Has aprobado con un promedio de: " + prom);
        }else{
            alert(nom + " Gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es: " + prom);
        }
        } else {
            alert("Ingresa nota entre los rangos 0 a 10");
        }    
    } else {
        alert("Ingresa nota entre los rangos 0 a 10");
    }    
} else {
    alert("Ingresa nota entre los rangos 0 a 10");
}
