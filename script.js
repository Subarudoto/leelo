
let contador = 0;

const declaración = document.getElementById("declaración");
const ticket = document.getElementById("ticket");
const mensaje = document.getElementById("mensaje");

function Si(){
    declaración.style.display= 'none';
    ticket.style.display='block';
}

function No(){
contador++;
 const respuestas=[
 "Amiga pa llantear pe? 🥺",
 "Ya p dime que si 🥺",
 "amia llantis llantis pe 😘",
 "Piensalo bien no te vas arrepentir",
 "Amiga no te botes pe"
 ]
 
 mensaje.textContent= respuestas[Math.min(contador,respuestas.length -1)];
}