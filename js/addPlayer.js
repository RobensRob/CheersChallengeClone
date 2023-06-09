var input = document.getElementById('addPlayer');
var switchable = document.getElementById('switchable');
var playerOl = document.getElementById('players');
var players = [];
var tasks = ["trinke 4 Schlücke", "mache 8 Handstände", "trinke 4 brötchen", "Bring Sascha um"];

function addPlayer() {

    if(input.value == "") {
        alert('Es muss ein Name eingetragen werden!');
    } else {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(input.value));
        playerOl.appendChild(item);
        players.push(input.value);
        input.value = "";
    }
}

function startGame() {
    input.value = "";
    if(!players.length == 0) {
        switchable.innerHTML = "";
        var task = document.createElement('h3');
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode("Weiter >"));
        btn.setAttribute('onClick', 'startGame()');
        
        var random = Math.floor(Math.random() * players.length);
        var random2 = Math.floor(Math.random() * tasks.length);
        task.appendChild(document.createTextNode(players[random] + ", " + tasks[random2]));
        switchable.appendChild(task);
        switchable.appendChild(btn);
    } else {
        alert('Es gibt keine Spieler!')
    }
}