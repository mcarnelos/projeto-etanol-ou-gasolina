function calcular() {

    let inputEtanol = document.getElementById('val_etanol')
    let inputGasolina = document.getElementById('val_gasolina')
    let resultado = document.getElementById('resultado')

    let etanol = inputEtanol.value
    let gasolina = inputGasolina.value

    let val_eta = etanol/9
    let val_gas = gasolina/12

    if(val_eta < val_gas) {
        resultado.innerHTML = `<p>Abastecer com <strong>Etanol</strong></p>`
    } else {
        resultado.innerHTML = `<p>Abastecer com <strong>Gasolina</strong></p>`
    }
    
}
