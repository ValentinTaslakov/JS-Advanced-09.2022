function solve() {
   let buttonAdd = Array.from(document.getElementsByClassName('add-product'));
   //тук селектира директно бутона за добавяне
   let fieldForResult = document.querySelectorAll('textarea')[0];
   let buttonCheckout = document.getElementsByClassName('checkout')[0];

   let totalPrice = 0;
   let list = []


   for (let pressedButton of buttonAdd) {
      // и тук за всеки бутон добавя евент
      pressedButton.addEventListener('click', addToCart)
   }
   buttonCheckout.addEventListener('click', checkout)


   function addToCart(event) {
      let nameOfProduct = event.currentTarget.parentNode.parentNode.getElementsByClassName('product-title')[0].textContent;
      //event.currentTarget е бутона
      //event.currentTarget.parentNode бутона е разположен в друг таг това връща него заедно с бутона
      //event.currentTarget.parentNode.parentNode връща елемента в който е разположена
      //цялата информация за продукта и от тук вече взимаме елемента където е 
      //името на продукта
      let price = event.currentTarget.parentNode.parentNode.getElementsByClassName('product-line-price')[0].textContent;
      // по същия начин взимаме и цената
      if (!list.includes(nameOfProduct)) {
         //проверяваме в празния лист който сме създали дали се съдържа името
         //ако го няма го добавяме в масива. По изискване трябва да покажем броя на 
         // уникалните продукти които са добавени или ако сме добавили 5 пъти
         //домат уникалните продукти са 1
         list.push(nameOfProduct);
      }
      //към крайната цена добавяме цената на избрания продукт
      totalPrice += Number(price);
      //към резултата добавяме продукта във изисквания формат
      fieldForResult.textContent += `Added ${nameOfProduct} for ${price} to the cart.\n`

   }

   function checkout(event) {
      // функцията за другия бутон който вади крайната сметка
      //към полето за резултат вече добавяме закупените уникални продукти
      // и крайната цена
      fieldForResult.textContent += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`
      for (let pressedButton of buttonAdd) {
         pressedButton.disabled = true;
      }
      event.target.disabled = true;
      //деактивираме бутоните, в цикъла всички бутони за добавяне на продукт
      //а под него бутона от който се вади крайната сметка
   }

}

//function solve() {
//   let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
      // тук взимаме парент елемента на всички продукти
//   let result = document.querySelector('textarea');
//   let checkoutDone = false;
// 
//   let products = [];
//   let totalPrice = 0;
//   shoppingCart.addEventListener('click', function (event) {
      // и когато добавим евент той реагира на всички поделементи в този парент
//     if (event.target.nodeName !== 'BUTTON') {
      //обаче кликване на всякъде ще реагира, затова проверяваме дали името на 
      //кликнатия елемент е бутон, така си гарантираме че само при натиснат бутон
      //ще има реакция
//       return;
//     }
// 
//     if (checkoutDone) {
      // проверяваме флага с който изключваме бутоните
//       return;
//     }
// 
//     let btn = event.target;
// 
//     if (Array.from(btn.classList).indexOf('add-product') >= 0) {
//       let productElement = event.target.parentElement.parentElement;
//       let name =
//         productElement.querySelectorAll('.product-title')[0].textContent;
//       let price = Number(
//         productElement.querySelectorAll('.product-line-price')[0].textContent
//       );
// 
//       result.textContent += `Added ${name} for ${price
//         .toFixed(2)} to the cart.\n`;
// 
//       if (products.indexOf(name) < 0) {
//         products.push(name);
//       }
// 
//       totalPrice += price;
//     } else if (Array.from(btn.classList).indexOf('checkout') >= 0) {
//       result.textContent += `You bought ${products
//         .join(', ')} for ${totalPrice.toFixed(2)}.`;
//       checkoutDone = true;
//     }
//   });
// }