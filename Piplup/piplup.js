function iniciarJogo() {
  return (location = "../index.html");
}

function VsBlaine(ataque) {
  var ataque = prompt("Agua ou Aço");
  if (ataque == "Agua") {
    return (location = "./Vitoria_blaine.html");
  } else if (ataque == "Aço") {
    return (location = "./gameover_blaine.html");
  } else {
    alert("Resposta incorreta!  Favor responda Agua ou Aço !");
    VsBlaine();
  }
}

function AvancarValerie() {
  return (location = "./VsValerie.html");
}

function VsValerie(ataque) {
  var ataque = prompt("Agua ou Aço");
  if (ataque == "Aço") {
    return (location = "./Vitoria_Valerie.html");
  } else if (ataque == "Agua") {
    return (location = "./gameover_valerie.html");
  } else {
    alert("Resposta incorreta!  Favor responda Agua ou Aço !");
    VsValerie();
  }
}

function EvolucaoPiplup() {
  return (location = "./evolucaoPiplup.html");
}

function AvancarGiovanni() {
  return (location = "./VsGiovanni.html");
}

function VsGiovanni(ataque) {
  var ataque = prompt("Agua ou Aço");
  if (ataque == "Agua") {
    return (location = "./Vitoria_Giovanni.html");
  } else if (ataque == "Aço") {
    return (location = "./gameover_giovanni.html");
  } else {
    alert("Resposta incorreta!  Favor responda Agua ou Aço !");
    VsGiovanni();
  }
}

function EvolucaoPrinplup() {
  return (location = "./evolucaoPrinplup.html");
}

function AvancarLorelei() {
  return (location = "./VsLorelei.html");
}

function VsLorelei(ataque) {
  var ataque = prompt("Agua ou Aço");
  if (ataque == "Aço") {
    return (location = "./Vitoria.html");
  } else if (ataque == "Agua") {
    return (location = "./gameover_lorelei.html");
  } else {
    alert("Resposta incorreta!  Favor responda Agua ou Aço !");
    VsLorelei();
  }
}