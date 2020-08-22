# Relógio que utiliza a biblioteca p5js

https://user-images.githubusercontent.com/24496195/90964154-6a6c5a00-e494-11ea-9606-78992f0f1444.png

## Trata-se de uma idéia de relógio com indicadores de horas, minutos e segundos que utilizam arcos concêntricos.

## No arquivo 'sketch.js' serão observadas apenas duas funções.

### Função setup()
    
1. Inicializa variáveis relacionadas ao tamanho do relógio, tais como:

* tam;
* diameterClock;
* diameterSeconds;
* diameterMinutes;
* diameterHours.

2. Inicializa variáveis de translação para o referencial do canvas que será renderizado:

* posx.
* posy.

3. Faz a customização de quantos frames serão renderizados por segundo, no caso 1:

* frameRate(1);

4. Inicializa as variáveis que memorizarão as taxas com as quais os ponteiros serão incrementados em seus ângulos:

* A variável incrementSeconds é responsável por avançar o ponteiro dos segundos com incremento de 6 graus por segundo;
* A variável incrementMinutes é responsável por avançar o ponteiro dos segundos com incremento de 6 graus por minuto ou 0,1 grau por segundo;
* A variável incrementHours é responsável por avançar o ponteiro dos segundos com incremento de 30 graus por hora;

5. Busca a hora atual do sistema para inicializar os ponteiros do relógio:

* Cria uma instância de Date();
* Por meio de métodos do objeto Date(), inicializa as variáveis responsáveis por memorizar a hora, minuto e segundo do sistema;

6. Inicializa (foi necessário decrementar em -HALF_PI radianos cada variável para corrigir as definições do p5js que divergem da origem do relógio às 12 h) as variáveis que serão incrementadas a cada novo frame, segundo as taxas calculadas anteriormente:

* A variável stopSeconds é responsável por avançar o ponteiro dos segundos;
* A variável stopMinutes é responsável por avançar o ponteiro dos minutos;
* A variável stopHours é responsável por avançar o ponteiro das horas;


### Função draw()

1. Instancia o fundo cinza claro (220) por meio da seguinte função:

* background(220)

2. Instancia um círculo que será o fundo do relógio com um cinza mais escuro (120).

3. Ajusta o tamanho do texto que será renderizado para informar as horas, minutos e segundos, além dos ponteiros em forma de arco.

* textSize(tam * 0.02).

4. Faz uma conversão para obter as horas, minutos e segundos atualizados com base nas informações de ângulos (que são incrementadas a cada frame). Nesse caso, utilizaram-se as variáveis:

* segundoAtual; 

* minutoAtual;

* horaAtual;

5. Instancia os arcos que servirão de ponteiros para horas, minutos e segundos.

6. Incrementa as variáveis para que o frame futuro obtenha a posição correta dos ponteiros:

* stopSeconds += incrementSeconds;
* stopMinutes += incrementMinutes;
* stopHours += incrementHours;