function frozen() {
    var banner = document.querySelector(".filme-principal");
    banner.style.backgroundImage = "url('../../img/banner_frozen.jpg')";

    var titulo = document.querySelector(".titulo");
    titulo.innerHTML = "FROZEN";

    var sinopse = document.querySelector(".descricao");
    sinopse.innerHTML = "De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma visita à floresta dos elementos, onde um acontecimento inesperado teria provocado a separação dos habitantes da cidade com os quatro elementos fundamentais: ar, fogo, terra e água. Esta revelação ajudará Elsa a compreender a origem de seus poderes."
    
    
}

function greyhound() {
    var banner = document.querySelector(".filme-principal");
    banner.style.backgroundImage = "url('../../img/banner_grey.jpg')";

    var titulo = document.querySelector(".titulo");
    titulo.innerHTML = "GREYHOUND";

    var sinopse = document.querySelector(".descricao");
    sinopse.innerHTML = "Na Mira do Inimigo, o comboio internacional de 37 navios aliados liderado pelo capitão Ernest Krause (Tom Hanks), que está em seu primeiro comando de destróier norte-americano, atravessa o temido Atlântico Norte e precisa enfrentar a perseguição por matilhas de submarinos nazistas."
}

function casaPapel() {
    var banner = document.querySelector(".filme-principal");
    banner.style.backgroundImage = "url('../../img/banner_casa.jpg')";

    var titulo = document.querySelector(".titulo");
    titulo.innerHTML = "LA CASA DE PAPEL";

    var sinopse = document.querySelector(".descricao");
    sinopse.innerHTML = "Um homem misterioso que atende pelo nome de El Profesor, está planejando o maior assalto do século. A fim de realizar o ambicioso plano ele recruta uma gangue de oito pessoas com certas habilidades que não tem nada a perder. O objetivo é infiltrar na Casa da Moeda, de modo que eles possam imprimir 2,4 bilhões de euros. Para fazer isso eles precisam de onze dias de reclusão, durante o qual eles vão ter que lidar com sessenta e sete reféns e as forças da Polícia de Elite, com cenas de muita ação e planos brilhantes de El Profesor."
}

function power() {
    var banner = document.querySelector(".filme-principal");
    banner.style.backgroundImage = "url('../../img/banner_power.jpg')";

    var titulo = document.querySelector(".titulo");
    titulo.innerHTML = "POWER";

    var sinopse = document.querySelector(".descricao");
    sinopse.innerHTML = "Um ex-soldado, uma adolescente e um policial varrem New Orleans em busca de uma pílula perigosa que desperta superpoderes temporários."
}

function diabo() {
    var banner = document.querySelector(".filme-principal");
    banner.style.backgroundImage = "url('../../img/banner_diabo.jpg')";
    banner.style.backgroundColor = "linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50) 100%)";

    var titulo = document.querySelector(".titulo");
    titulo.innerHTML = "O DIABO DE CADA DIA";

    var sinopse = document.querySelector(".descricao");
    sinopse.innerHTML = "Em um lugar tomado por corrupção e violência, um jovem enfrenta figuras sinistras para proteger quem mais ama."

    mostraInfo();
}


 function mostraInfo() {
    $("#info").slideToggle("info-toggle");
 }