// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 
function resultRanked(win, lose){
    let rank = win - lose
    let result;
    switch(true){
        case(rank <= 10):
            result = "Ferro"
            break
        case(rank > 10 && rank <= 20):
            result = "Bronze"
            break
        case(rank > 21 && rank <= 50):
            result = "Prata"
            break
        case(rank > 51 && rank <= 80):
            result = "Ouro"
            break
        case(rank > 81 && rank <= 90):
            result = "Diamante"
            break
        case(rank > 91 && rank <= 100):
            result = "Lendario"
            break
        case(rank > 100):
            result = "Imortal"
            break
        default:
            result="ERROR"
            break
    }
    let arrayResult = [rank, result]
    return arrayResult
}


console.log(`O Herói tem de saldo de ${resultRanked(34,2)[0]} está no nível de ${resultRanked(34,2)[1]}`)

