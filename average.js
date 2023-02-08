const lista = [];

function esPar(lista) {
    return !(lista.length % 2);
}

function calcularMediana(lista) {
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        const indexMitadListaPar = Math.floor(lista.length / 2);
        console.log(indexMitadListaPar)
    } else {
        const indexMitadListaimpar = Math.floor(lista.length / 2);
        console.log(lista[indexMitadListaimpar])
    }
}

function calcularPromedio(lista) {


    function addAllElemments(accumulatedValue, newValue) {
        return (accumulatedValue + newValue)
    }

    const sumList = lista.reduce(addAllElemments);

    const average = sumList / lista.length;
    console.log(average);
    return average;
}

