function iniciarJogo() {
  return (location = "../index.html");
}

function Vsroark(ataque) {
  var ataque = prompt("Planta ou Terrestre");
  if (ataque == "Planta") {
    return (location = "./Vitoria_roark.html");
  } else if (ataque == "Terrestre") {
    return (location = "./gameover_roark.html");
  } else {
    alert("Resposta incorreta!  Favor responda Planta ou Terrestre!");
    Vsroark();
  }
}

function AvancarSurge() {
  return (location = "./VsSurge.html");
}

function VsSurge(ataque) {
  var ataque = prompt("Planta ou Terrestre");
  if (ataque == "Terrestre") {
    return (location = "./vitoria_Surge.html");
  } else if (ataque == "Planta") {
    return (location = "./gameover_Surge.html");
  } else {
    alert("Resposta incorreta!  Favor responda Planta ou Terrestre!");
    VsSurge();
  }
}

function EvolucaoTurtwig() {
  return (location = "./evolucaoTurtwig.html");
}

function AvancarMisty() {
  return (location = "./VsMisty.html");
}

function VsMisty(ataque) {
  var ataque = prompt("Planta ou Terrestre");
  if (ataque == "Planta") {
    return (location = "./vitoria_Misty.html");
  } else if (ataque == "Terrestre") {
    return (location = "./gameover_misty.html");
  } else {
    alert("Resposta incorreta!  Favor responda Planta ou Terrestre!");
    VsMisty();
  }
}

function EvolucaoGrotle() {
  return (location = "./evolucaoGrotle.html");
}

function AvancarSiebold() {
  return (location = "./VsSiebold.html");
}

function VsSiebold(ataque) {
  var ataque = prompt("Planta ou Terrestre");
  if (ataque == "Planta") {
    return (location = "./vitoria.html");
  } else if (ataque == "Terrestre") {
    return (location = "./gameover_siebold.html");
  } else {
    alert("Resposta incorreta!  Favor responda Planta ou Terrestre!");
    VsSiebold();
  }
}