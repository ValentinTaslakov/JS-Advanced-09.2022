function solve(arr){
    let initial = 1;
    let res = [];

    for (let comand of arr) {
        switch(comand){
            case "add": 
                res.push(initial);
                initial++;
                break;
            case "remove":
                res.pop();
                initial++;
        }
    }
    if(res.length === 0){
        console.log("Empty");
        return;
    }
    console.log(res.join("\n"));
}

solve(['remove', 
'remove', 
'remove']
);