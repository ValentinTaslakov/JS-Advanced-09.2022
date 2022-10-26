window.addEventListener("load", solve);


function solve() {

  let brand = document.getElementById('make');
  let model = document.getElementById('model');
  let productionYear = document.getElementById('year');
  let fuelType = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  let tableWithPublishOffer = document.getElementById('table-body');




  let button = document.getElementById('publish');
  button.addEventListener('click', publishOffer);


  function publishOffer(event) {
    event.preventDefault();

    let brandValue = brand.value;
    let modelValue = model.value;
    let productionYearValue = productionYear.value;
    let fuelTypeValue = fuelType.value;
    let originalCostValue = originalCost.value;
    let sellingPriceValue = sellingPrice.value;
    if (brandValue !== ''
    && modelValue !== ''
    && productionYearValue !== ''
    && fuelTypeValue !== ''
    && sellingPriceValue > originalCostValue) {
      let tableRow = document.createElement('tr');
      tableRow.classList.add('row');
  
  
      let column1 = document.createElement('td');
      column1.textContent = brandValue;
      tableRow.appendChild(column1);
  
      let column2 = document.createElement('td');
      column2.textContent = modelValue;
      tableRow.appendChild(column2);
  
      let column3 = document.createElement('td');
      column3.textContent = productionYearValue;
      tableRow.appendChild(column3);
  
      let column4 = document.createElement('td');
      column4.textContent = fuelTypeValue;
      tableRow.appendChild(column4);
  
      let column5 = document.createElement('td');
      column5.textContent = originalCostValue;
      tableRow.appendChild(column5);
  
      let column6 = document.createElement('td');
      column6.textContent = sellingPriceValue;
      tableRow.appendChild(column6);
  
  
  
  
      let buttonsData = document.createElement('td');
  
      let editButton = document.createElement('button');
      editButton.classList.add('action-btn');
      editButton.classList.add('edit');
      editButton.setAttribute('id', 'edit');
      editButton.textContent = 'Edit';
  
  
      let sellButton = document.createElement('button');
      sellButton.classList.add('action-btn');
      sellButton.classList.add('edit');
      sellButton.setAttribute('id', 'sell');
      sellButton.textContent = 'Sell';
  
  
      buttonsData.appendChild(editButton);
      buttonsData.appendChild(sellButton);
  
      tableRow.appendChild(buttonsData);
  
      tableWithPublishOffer.appendChild(tableRow);
  
      brand.value = '';
      model.value = '';
      productionYear.value = '';
      fuelType.value = '';
      originalCost.value = '';
      sellingPrice.value = '';
  
      editButton.addEventListener('click', edit);
      sellButton.addEventListener('click', sell);
    }

   
  }



  function edit(event) {

    let currentRow = event.target.parentElement.parentElement;
    let rowData = Array.from(currentRow.children);

    brand.value = rowData[0].textContent;
    model.value = rowData[1].textContent;
    productionYear.value = rowData[2].textContent;
    fuelType.value = rowData[3].textContent;
    originalCost.value = rowData[4].textContent;
    sellingPrice.value = rowData[5].textContent;

    let parent = currentRow.parentElement;
    parent.removeChild(currentRow);
  }

  function sell(event) {
    let currentRow = event.target.parentElement.parentElement;
    let rowData = Array.from(currentRow.children);

    let soldCars = document.getElementById('cars-list');

    let li = document.createElement('li');
    li.classList.add('each-list');

    let car = document.createElement('span');
    let year = document.createElement('span');
    let profit = document.createElement('span');

    car.textContent = rowData[0].textContent + ' ' + rowData[1].textContent;
    year.textContent = rowData[2].textContent;
    profit.textContent = Number(rowData[5].textContent) - Number(rowData[4].textContent);

    li.appendChild(car);
    li.appendChild(year);
    li.appendChild(profit);
    soldCars.appendChild(li);

    let parent = currentRow.parentElement;
    parent.removeChild(currentRow);


    let profitMade = document.getElementById('profit');
    profitMade.textContent = (Number(profitMade.textContent) + Number(profit.textContent)).toFixed(2); 
    
  }


}
