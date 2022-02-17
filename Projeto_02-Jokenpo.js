var prompt = require('prompt-sync')();
const jokenpo = ['PEDRA', 'PAPEL', 'TESOURA'];
const min = Math.ceil(0);
const max = Math.floor(2);
let player = '';
let cpu = '';
let replay = true;
let cont = 0;

function sleep(milliseconds = 1) {
    milliseconds = milliseconds * 1000;
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
            break;
        }
    }
}

console.log('-----------------------------------------------------');
console.log('JO-KEN-PÔ');
console.log();
console.log(
    'Regra:\n',
    '\n Você escolhe uma entre 3 opções,',
    '\n São elas PEDRA, PAPEL E TESOURA.\n',
    '\n Lembrando quê:\n',
    '\n TESOURA ganha de PAPEL',
    '\n PAPEL ganha de PEDRA',
    '\n PEDRA ganha de TESOURA',
);
console.log();
console.log('-----------------------------------------------------');
console.log();
const nome = prompt('Qual seu nome: ');

while (replay) {
    let vitPLAY = 0;
    let vitCPU = 0;
    if (cont > 0) {
        console.log('-----------------------------------------------------');
        console.log();
    }
    cont++;
    let rodadas = parseInt(prompt('Diga quantas rodadas você gostaria: '));
    while (rodadas > 0) {
        console.log();
        while (true) {
            console.log('Escolha uma das 3 opções');
            console.log('PEDRA, PAPEL ou TESOURA');
            player = prompt().toUpperCase();
            console.log();
            if (player == 'PEDRA' || player == 'PAPEL' || player == 'TESOURA') {
                break;
            }
        }
        for (const joke of jokenpo) {
            if (player == joke) {
                let random = parseInt(Math.random() * (max - min + 1) + min);
                cpu = jokenpo[random];

                if (player == cpu) {
                    sleep();
                    console.log('EMPATE');
                } else if (
                    (player == 'PEDRA' && cpu == 'TESOURA') ||
                    (player == 'PAPEL' && cpu == 'PEDRA') ||
                    (player == 'TESOURA' && cpu == 'PAPEL')
                ) {
                    vitPLAY++;
                    sleep();
                    console.log(`PARABÉNS ${nome} você GANHOU a rodada.`);
                } else {
                    vitCPU++;
                    sleep();
                    console.log('Você PERDEU a rodada.');
                }
                break;
            }
        }
        console.log();
        sleep();
        console.log(`Você escolheu ${player} e o CPU escolheu ${cpu}`);
        console.log();
        console.log('-----------------------------------------------------');
        console.log();
        rodadas--;
    }
    if (vitPLAY > vitCPU) {
        console.log();
        sleep(2);
        console.log(`PARABÉNS ${nome} você VENCEU o game.`);
    } else if (vitPLAY < vitCPU) {
        console.log();
        sleep(2);
        console.log(`${nome.toUpperCase()} você é PÉSSIMO, tente uma próxima vez.`);
    } else {
        console.log();
        sleep(2);
        console.log(`${nome.toUpperCase()} não é porquê você EMPATOU, que você é bom.`);
    }
    console.log('\nDeseja jogar novamente?');
    console.log('"s" para SIM e "n" para NÃO');
    const resp = prompt();
    if (resp == 'n') {
        replay = false;
    }
    console.clear();
}
