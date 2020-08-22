function setup() {

  tam = 800

  createCanvas(tam, tam);

  frameRate(1);
  incrementSeconds = radians(6);
  incrementMinutes = radians(0.1);
  incrementHours = radians(30 / 3600);

  horaAtual = new Date();

  let hora = horaAtual.getHours();
  let minuto = horaAtual.getMinutes();
  let segundo = horaAtual.getSeconds();

  stopSeconds = -HALF_PI + radians(6 * segundo);
  stopMinutes = -HALF_PI + radians(6 * minuto);
  stopHours = -HALF_PI + radians(30 * hora);

  diameterClock = tam * 0.75;
  diameterSeconds = diameterClock * 0.9;
  diameterMinutes = diameterClock * 0.675;
  diameterHours = diameterClock * 0.45;
  posx = width * 0.5;
  posy = height * 0.5;

}

function draw() {
  background(220);

  fill(120);
  stroke(0);
  clock = circle(width * 0.5, height * 0.5, diameterClock);

  start = -HALF_PI;

  textSize(tam * 0.02);
    
  segundoAtual = round(degrees(stopSeconds + HALF_PI) / 6) % 60; 

  minutoAtual = round(degrees(stopMinutes + HALF_PI) / 6) % 60;

  horaAtual = round(degrees(stopHours + HALF_PI) / 30) % 12;

  //arco dos segundos
  fill('blue');
  stroke('blue');
  text(segundoAtual + 's', posx + (diameterSeconds * 0.5 * cos(stopSeconds)), posy + (diameterSeconds * 0.5 * sin(stopSeconds)));
  noFill();
  arc(posx, posy, diameterSeconds, diameterSeconds, start, stopSeconds);

  //arco dos minutos
  fill('red');
  stroke('red');
  text(minutoAtual + 'm', posx + (diameterMinutes * 0.5 * cos(stopMinutes)), posy + (diameterMinutes * 0.5 * sin(stopMinutes)));
  noFill();
  arc(posx, posy, diameterMinutes, diameterMinutes, start, stopMinutes);

  //arco das horas
  fill('yellow');
  stroke('yellow');
  text(horaAtual + 'h', posx + (diameterHours * 0.5 * cos(stopHours)), posy + (diameterHours * 0.5 * sin(stopHours)));
  noFill();
  arc(posx, posy, diameterHours, diameterHours, start, stopHours);

  stopSeconds += incrementSeconds;
  stopMinutes += incrementMinutes;
  stopHours += incrementHours;


}