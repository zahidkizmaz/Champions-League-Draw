var pot1 = "Real Madrid, Bayern Munich, Juventus, Benfica, Chelsea, Shakhtar Donetsk, Monaco, Spartak Moscow".split(", ");
var pot2 = "Barcelona, Atletico Madrid, Paris Saint-Germain, Borussia Dortmund, Sevilla, Manchester City, Porto, Manchester United".split(", ");
var pot3 = "Napoli, Tottenham, FC Basel, Roma, Besiktas, Olympiakos, Anderlecht, Liverpool".split(", ");
var pot4 = "Celtic, CSKA Moscow, Sporting CP, APOEL, Feyenoord, Maribor, Qarabag, RB Leipzig".split(", ");

var groupa = [];
var groupb = [];
var groupc = [];
var groupd = [];
var groupe = [];
var groupf = [];
var groupg = [];
var grouph = [];

function getRandomTeam(pot){
  var random_number = Math.floor(Math.random()* pot.length);
  var elem = pot.splice(random_number,1)[0];
  return elem;
}

function setup() {
  	stroke(0);
  	createCanvas(1224,1288);
    var pots = [pot1,pot2,pot3,pot4];
    for (var i = 0; i < pots.length; i++) {
      groupa.push(getRandomTeam(pots[i]));
      groupb.push(getRandomTeam(pots[i]));
      groupc.push(getRandomTeam(pots[i]));
      groupd.push(getRandomTeam(pots[i]));
      groupe.push(getRandomTeam(pots[i]));
      groupf.push(getRandomTeam(pots[i]));
      groupg.push(getRandomTeam(pots[i]));
      grouph.push(getRandomTeam(pots[i]));
    }
    print(groupa);
    print(groupb);
    print(groupc);
    print(groupd);
    print(groupe);
    print(groupf);
    print(groupg);
    print(grouph);

}

function draw() {
  	background(255,255,255);
    rect(50,50,250,250);
    rect(300,50,250,250);
    rect(550,50,250,250);
    rect(800,50,250,250);
    rect(50,350,250,250);
    rect(300,350,250,250);
    rect(550,350,250,250);
    rect(800,350,250,250);
    fill(255,255,255);



}
