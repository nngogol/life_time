var data;
var man = []
var p;
var canvas;

function preload(){
	data = loadJSON("tesx.json");
}

function mouseClicked(){
	for (var i = 0; i < man.length; i++) {
    man[i].clicked(mouseX,mouseY)
  }
}

function setup() {

	// создает и смещаем
  canvas = createCanvas(2500, 2500);
  //frameRate(1)
  //canvas.position(-1200, 0)

  // heigth_ = расстояние между авторами
  var heigth_ = 30
  for (var item in data) {
    man.push(new Man(data[item]['name'], data[item]['b_year'], data[item]['d_year'], 18, heigth_))
    heigth_ += 24
  }

}

function draw() {

  //background(153, 141, 134);

  // разметка на годы
  stroke(10);
  textSize(25);
  //textAlign(RIGHT);
  fill(255, 0, 0);
  for (var i = 1600; i < 2100; i += 100) {
    text(i + "", i, 25);
  	ellipse(i, 25, 5, 5);
  }

  // авторы
  for (var item in man) {
    man[item].draw();
    man[item].visible();
  }

}
