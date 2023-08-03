const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")


const spanMascotaEnemigo = document.getElementById("mascota-enemigo")


const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-Del-Jugador")
const ataquesDelEnemigo = document.getElementById("ataques-Del-Enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")

const spanVidasJugador = document.getElementById("vidaJ")
const spanVidasEnemigo = document.getElementById("vidaE")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones

let inputHipodoge
let inputCapipepo
let inputRatigueya

let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Hipodoge = new Mokepon("Hipodoge", "./../assets/mokepons_mokepon_hipodoge_attack.webp", 5)

let Capipepo = new Mokepon("Capipepo", "./../assets/mokepons_mokepon_capipepo_attack.webp", 5)

let Ratigueya = new Mokepon("Ratigueya", "./../assets/mokepons_mokepon_ratigueya_attack.webp", 5)

Hipodoge.ataques.push(
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🌱", id: "boton-tierra" },
)

Capipepo.ataques.push(
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },

)

Ratigueya.ataques.push(
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🌱", id: "boton-tierra" },

)

mokepones.push(Hipodoge, Capipepo, Ratigueya)

function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="Mascota" id=${mokepon.nombre}/>
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputHipodoge = document.getElementById("Hipodoge")
     inputCapipepo = document.getElementById("Capipepo")
     inputRatigueya = document.getElementById("Ratigueya")


    })

    sectionReiniciar.style.display = "none"
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
        
    botonFuego.addEventListener("click", ataqueFuego)
    
    botonAgua.addEventListener("click", ataqueAgua)
    
    botonTierra.addEventListener("click", ataqueTierra)

    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya
    } else {
        alert("SELECCIONA UNA MASCOTA")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
        let mascotaAleatorio = aleatorio(1, 3)
        
        if (mascotaAleatorio == 1){
            spanMascotaEnemigo.innerHTML = "Hipodoge"
        } else if (mascotaAleatorio == 2){
            spanMascotaEnemigo.innerHTML = "Capipepo"
        } else {
            spanMascotaEnemigo.innerHTML = "Ratigueya"
        }
}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)
    if (ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego"
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "Agua"
    } else {
        ataqueEnemigo = "Tierra"
    }
    combate()
}

function combate(){

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
    
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! Ganaste")
    } else if (vidasJugador == 0){
        crearMensajeFinal("Lo siento, perdiste")
    }
}

function crearMensaje(resultado){
    
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    
    sectionReiniciar.style.display = "block"

    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
        return Math.floor(Math.random()* (max-min+1)+min)
}

window.addEventListener("load", iniciarJuego)