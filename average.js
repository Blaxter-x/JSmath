const lista = [];

function calcularPromedio(lista) {
    //     let sumaLista = 0;
    //     for (let i = 0; i < lista.length; i++) {
    //         sumaLista = sumaLista + lista[i];
    //     }

    //     return (sumaLista / lista.length);
    // }

    function addAllElemments(accumulatedValue, newValue) {
        return (accumulatedValue + newValue)
    }

    const sumList = lista.reduce(addAllElemments);

    const average = sumList / lista.length;
    console.log(average);
    return average;
}

