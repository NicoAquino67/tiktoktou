function juegoR(usuario, computadora){
     if (usuario == computadora){
               alert("usuario elije: " + usuario )
               alert("pc elije "+ computadora)}
     if (usuario == eleccion[0] && computadora!=eleccion[1]){
               alert("usuario elije: "+ usuario);
               alert("pc elije: "+ computadora);
                   ganaX=0;}                     
     else if (usuario == eleccion[1] && computadora!=eleccion[2]){
               alert("usuario elije: "+ usuario);
               alert("pc elije: "+ computadora);
                   ganaX=0;}
     else if (usuario == eleccion[2] && computadora!=eleccion[0]){
               alert("usuario elije: "+ usuario);
               alert("pc elije: "+ computadora);
                   ganaX=0;}
              else{
              alert("usuario elije: "+ usuario);
              alert("pc elije: "+ computadora);
                   ganaX=1;}
}
var eleccion = ["piedra", "papel", "tijeras"];
var user = prompt("elije tu juego: ", "piedra, papel o tijeras");
var pc = eleccion[Math.floor(Math.random()*eleccion.length)]
var ganaX=0;
//1 gana pc
//0 gana user
//2 es empate
var numeroJ=0;
var contadorPc =0;
var contadorUser=0;

while(numeroJ<5&&contadorPc==3||contadorUser==3){
     juegoR(user,pc);
     if (ganaX==2){alert("por lo que es un empate")} 
     else if(ganaX==1){alert("Gana el Pc")
     contadorPc++;
     }
     else{alert("Gana el usuario")
     contadorUser++;
     }
     user = prompt("elije tu juego: ", "piedra, papel o tijeras");
     pc = eleccion[Math.floor(Math.random()*eleccion.length)]
     numeroJ++;
}