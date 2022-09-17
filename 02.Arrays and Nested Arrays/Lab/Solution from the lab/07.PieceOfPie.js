function piece (arr, str1, str2){
    let start = arr.indexOf(str1);
    let end = arr.indexOf(str2);

    let res = arr.slice(start, end+1);

    return res;

}

console.log(piece(
    ['Apple Crisp',
 'Mississippi Mud Pie',
 'Pot Pie',
 'Steak and Cheese Pie',
 'Butter Chicken Pie',
 'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));