function iniciarJogo() {
  return (location = "../index.html");
}

function VsErika(ataque) {
  var ataque = prompt("Fogo ou Lutador");
  if (ataque == "Fogo") {
    return (location = "./Vitoria_erika.html");
  } else if (ataque == "Lutador") {
    return (location = "./gameover_erika.html");
  } else {
    alert("Resposta incorreta!  Favor responda Fogo ou Lutador!");
    VsErika();
  }
}

function AvancarViola() {
  return (location = "./VsViola.html");
}

function VsViola(ataque) {
  var ataque = prompt("Fogo ou Lutador");
  if (ataque == "Fogo") {
    return (location = "./vitoria_viola.html");
  } else if (ataque == "Lutador") {
    return (location = "./gameover_viola.html");
  } else {
    alert("Resposta incorreta!  Favor responda Fogo ou Lutador!");
    VsViola();
  }
}

function EvolucaoChimchar() {
  return (location = "./evolucaoChimchar.html");
}

function AvancarWhitney() {
  return (location = "./VsWhitney.html");
}

function VsWhitney(ataque) {
  var ataque = prompt("Fogo ou Lutador");
  if (ataque == "Lutador") {
    return (location = "./vitoria_Whitney.html");
  } else if (ataque == "Fogo") {
    return (location = "./gameover_whitney.html");
  } else {
    alert("Resposta incorreta!  Favor responda Fogo ou Lutador!");
    VsMisty();
  }
}

function EvolucaoMonferno() {
  return (location = "./evolucaoMonferno.html");
}

function AvancarGrinsley() {
  return (location = "./VsGrinsley.html");
}

function VsGrinsley(ataque) {
  var ataque = prompt("Fogo ou Lutador");
  if (ataque == "Lutador") {
    return (location = "./vitoria.html");
  } else if (ataque == "Fogo") {
    return (location = "./gameover_grinsley.html");
  } else {
    alert("Resposta incorreta!  Favor responda Fogo ou Lutador!");
    VsGrinsley();
  }
}