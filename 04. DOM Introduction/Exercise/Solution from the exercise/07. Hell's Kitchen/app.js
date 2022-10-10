function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestInfo = document.querySelector("#bestRestaurant p");
      let bestRestWorker = document.querySelector("#workers p")
      let restaurants = [];

      for (const rest of input) {
         let [name, listOfWorkers] = rest.split(" - ");
        
         if(restaurants.find(e => e.name === name)){
            let restaurantToUpdate =  restaurants.find(e => e.name === name);
            let currentWorkers = getWorkers(listOfWorkers.split(", "));
            currentWorkers.forEach(w => restaurantToUpdate.workersList.push(w));
            restaurantToUpdate.avrSalary = getAverageSalary(restaurantToUpdate.workersList);
            restaurantToUpdate.workersList.sort((a,b) => b.salary - a.salary);
            restaurantToUpdate.bestsalary = restaurantToUpdate.workersList[0].salary;
           
         }else{
            
           let obj = {
            name,
            workersList: getWorkers(listOfWorkers.split(", ")),
            avrSalary: 0, 
            bestsalary : 0
           };
           obj.avrSalary = getAverageSalary(obj.workersList);
           obj.bestsalary = obj.workersList[0].salary;
           
           restaurants.push(obj);
         }
         
      }

      let bestRest = restaurants.sort((a,b) => b.avrSalary - a.avrSalary)[0];

      

      bestRestInfo.textContent = 
      ` Name: ${bestRest.name} Average Salary: ${bestRest.avrSalary.toFixed(2)} Best Salary: ${(bestRest.bestsalary).toFixed(2)}`;

      bestRestWorker.textContent =
         getWorkersMessage(bestRest['workersList']);

   }

   function getWorkersMessage(workers) {
      let message = "";

      for (const key of workers) {
         message += `Name: ${key.name} With Salary: ${(key.salary)} `;

      }
      return message;
   }


   function getWorkers(workers) {
      let work = [];
      for (const iterator of workers) {
         let worker = iterator && iterator.split(" ");
         let name = worker[0];
         let salary = Number(worker[1]);

         work.push({
            name,
            salary
         });
        
      }
      work = work.sort((a,b) => b.salary - a.salary);
      return work;
   }

   function getAverageSalary(worker) {
      let salarySum = 0;
      for (const key of worker) {
         salarySum += key.salary;

      }

      return (salarySum / worker.length);
   }
}

//function solve() {
//   document.querySelector('#btnSend').addEventListener('click', onClick);
//
//   function onClick() {
//       const firstArr = document.querySelector('#inputs textarea').value;
//
//       let arr = JSON.parse(firstArr);
//
//       let obj = {};
//
//       let maxAvg = 0;
//       let maxSalary = 0;
//       let keyResturantName = '';
//
//       for (let i = 0; i < arr.length; i++) {
//           let salary = [];
//           let nestedObj = [];
//           let keyList = arr[i].split(" - ");
//           let valueList = keyList[1].split(', ');
//
//           for (let k = 0; k < valueList.length; k++) {
//               let valueParameters = valueList[k].split(' ');
//               nestedObj.push({ names: valueParameters[0], salary: valueParameters[1] });
//               salary.push(Number(valueParameters[1]));
//           }
//
//           avgSalary = salary.reduce((a, b) => a + b, 0) / salary.length;
//
//           if (avgSalary > maxAvg) {
//               keyResturantName = keyList[0];
//               maxAvg = avgSalary.toFixed(2);
//               maxSalary = Math.max(...salary).toFixed(2);
//           }
//           obj[keyList[0]] = nestedObj;
//       }
//
//       document.querySelector('#bestRestaurant p').textContent = `Name: ${keyResturantName} Average Salary: ${maxAvg} Best Salary: ${maxSalary}`
//
//       for (const value of obj[keyResturantName]) {
//           let sal = value.salary;
//           let names = value.names;
//           document.querySelector('#workers p').textContent += `Name: ${names} With Salary: ${sal} `
//       }
//   }
//}