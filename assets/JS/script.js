let num = document.getElementById("num")
let lista = document.getElementById("selecTab")
let res = document.getElementById("resultado")
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inList(n, l) {
    return l.includes(Number(n))

}

function AdicionarNum() {
    let numero = Number(num.value)
    if (isNum(numero) && !inList(numero, valores)) {
        valores.push(numero)
        let item = document.createElement("option")
        item.text = `Número ${numero} adicionado`
        lista.appendChild(item)
        num.value = ""

    } else {
        window.alert('Valor inválido ou já encontrado na lista. ')
    }

}
function resultado() {
    let divResultado = document.getElementById("resultado")
    divResultado.style.display = "block";
    divResultado.innerHTML = ""

    let total = valores.length;
    let maior = Math.max(...valores)
    let menor = Math.min(...valores)
    let soma = valores.reduce((acc, num) => acc + num, 0);
    let media = soma / total

    divResultado.innerHTML += `<p>Total de números adicionados: ${total}</p>`
    divResultado.innerHTML += `<p>Maior número: ${maior}</p>`
    divResultado.innerHTML += `<p>Menor número: ${menor}</p>`
    divResultado.innerHTML += `<p>Soma dos números: ${soma}</p>`
    divResultado.innerHTML += `<p>Média dos números: ${media.toFixed(2)}</p>`

}