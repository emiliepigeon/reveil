// fonction afficher l'heure
function clock() {
    // constante 
    let date = new Date();
    //contante 2 heures entre 0 et 12
    let hours = ((date.getHours() + 12) % 12);
    let hourss = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let alarmHeure = parseInt(document.getElementById("h").textContent);
    let alarmMinute = parseInt(document.getElementById("m").textContent);
    // degrés de rotation
    // constantes pour la rotation (calculs) 0 et 360
    let hour = hours * 30; 
    // 360/12h=12 ---- 12x30=360
    let minute = minutes * 6;
    // 360/60mn=6 ---- 6x60=360
    let second = seconds * 6;
    // affichage on modification (propriété css = transform: rotate)
    // 'valeur de rotate=hours'
    document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;    
    document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
    if (hourss == alarmHeure && minutes == alarmMinute && seconds < 15) {
        playSound(alarme); 
    }
}

let alarme = new Audio("/sound/frog.wav");

function initClock(){
    clock();
window.setInterval("clock()", 1);
}

function playSound(sound) {
sound.play();
}

