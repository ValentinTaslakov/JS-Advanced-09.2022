function oddPositions (arr){
    return arr.filter((el, i) => i % 2 !== 0)
    //приема елемент, индекс задаваме условие  индекса да е нечетен
    .map(x => x * 2)
    // всеки елемент преминал през филтъра го умножаваме по 2
    .reverse()
    //обръща резултатния масив
    .join(" ");
}

function oddPositions2 (arr){
    let res = arr.filter((el, i) => i % 2 !==0);

    return res ;

}


console.log(oddPositions2([10, 15, 20, 25]))