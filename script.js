// const container = document.querySelector('.container');
// const productName = document.querySelector('#productName');
// const productPrice = document.querySelector('#productPrice');
// const saveChangeBtn = document.querySelector('#saveChange');

// const PRODUCTS = []

// function getProduct(array){
//     saveChangeBtn.addEventListener('click', () =>{
//         let innerHTML = ""
//         for(let i=0; i<array.length; i++){
//         innerHTML+=`
//         <div class="card" style="width: 18rem;">
//         <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ed291e67-4618-49ec-8dda-2c2221a5df41/revolution-6-next-nature-mens-road-running-shoes-FgfhgR.png" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${productName.value}</h5>
//           <p class="card-text">$${productPrice.value}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//       `
      
//       container.innerHTML = innerHTML
//       // console.log("salam");
//     }
//     PRODUCTS.push(innerHTML)
// }
// )
    
// }
// getProduct(PRODUCTS) 
// console.log(PRODUCTS);

let index = 1
let Products = []
let newProducts = []

const nameInp = document.getElementById('nameInp')
const priceInp = document.getElementById('priceInp')
const prodContainer = document.getElementById('prodContainer')
const prodCanvas = document.getElementById('prodCanvas')
const addBtn = document.getElementById('addBtn')

if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify(Products))
} else {
  Products = JSON.parse(localStorage.getItem('products')) // 3
  if (Products.length > 1) {
    index = Products.length + 1
  } else {
    index = 1
  }
}

class Product {
  constructor(name, price) {
    ;(this.id = index),
      (this.name = name),
      (this.price = price)
      
  }
}
function addProduct(name, price) {
  let product = new Product(name, price)
  Products.push(product)
  index++
  localStorage.setItem("products", JSON.stringify(Products));
  renderList(Products)
  console.log(Products);

}
addBtn.addEventListener('click', () => {
  // if(nameInp.value =='' || priceInp.value =='') {
  //     alert('Please complate inputs before saving')
  //     return
  // }
  // else{

      addProduct(nameInp.value, priceInp.value)
     let localStorage = JSON.parse(localStorage.getItem('products'))
     renderList(localStorage)
     
  // }
})
function addProductCanvas(name, price) {
  let product = new Product(name, price)
  newProducts.push(product)
  index++
  rendersCanvas(Products)
  console.log(Products);
}

function deleteProduct(id) {
    alert("Are you sure you want to delete")
  let targetProduct = customFind(Products, id)
  let targetProductIndex = Products.indexOf(targetProduct)
  Products.splice(targetProductIndex, 1)
  renderList(Products)
}
function deleteProductCnvas(id) {
    alert("Are you sure you want to delete")
  let targetProduct = customFind(Products, id)
  let targetProductIndex = Products.indexOf(targetProduct)
  Products.splice(targetProductIndex, 1)
  rendersCanvas(Products)
}
function customFind(array, id) {
  for (let i = 0; i < array.length; i++) {
    if (id == array[i].id) {
      return array[i]
    }
  }
  return 'not found'
}


function rendersCanvas (arr){
    let innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
      innerHTML += `<div class="col-3 mb-5 me-4">
              <div class="card" style="width: 18rem">
              <img
                  src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ed291e67-4618-49ec-8dda-2c2221a5df41/revolution-6-next-nature-mens-road-running-shoes-FgfhgR.png"
                  class="card-img-top"
                  alt="..." />
                  <div class="card-body">
                  <h5 class="card-title" id="prodName">${arr[i].name}</h5>
                  <h2 id="prodPrice">$ ${arr[i].price}</h2>
                  <a href="#" class="btn btn-danger deleteBtn">Delete</a>
                  </div>
                  </div>
                  </div>`
                  console.log(arr[i].name);
                }
                prodCanvas.innerHTML = innerHTML
  
    const deleteBtns = document.getElementsByClassName('deleteBtn')
    for (let i = 0; i < deleteBtns.length; i++) {
      
      deleteBtns[i].addEventListener('click', () => {
        deleteProductCnvas(arr[i].id)
      })
    }
}
function sayHello(){
  const addBasket = document.querySelector('.addBasket')
for (let i = 0; i< addBasket.length;i++){
  
       addProductCanvas(arr[i].id)
      
  
}
}

function renderList(arr) {
  let innerHTML = ''
  for (let i = 0; i < arr.length; i++) {
    innerHTML += `<div class="col-3 mb-5 me-4">
            <div class="card" style="width: 18rem">
            <img
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ed291e67-4618-49ec-8dda-2c2221a5df41/revolution-6-next-nature-mens-road-running-shoes-FgfhgR.png"
                class="card-img-top"
                alt="..." />
            <div class="card-body">
                <h5 class="card-title" id="prodName">${arr[i].name}</h5>
                <h2 id="prodPrice">$ ${arr[i].price}</h2>
                <a href="#" class="btn btn-danger deleteBtn">Delete</a>
                <button href="#" class="btn btn-success addBasket" onclick="addProductCanvas(name,value)">Add Basket</button>
            </div>
            </div>
        </div>`
  }
  prodContainer.innerHTML = innerHTML
  
  const addBasket = document.querySelector('.addBasket')
  // for(let i = 0; i < addBasket.length; i++){
    
  // }
  addBasket.addEventListener('click',()=>{
    
  })



  const deleteBtns = document.getElementsByClassName('deleteBtn')
  for (let i = 0; i < deleteBtns.length; i++) {
    
    deleteBtns[i].addEventListener('click', () => {
      deleteProduct(arr[i].id)
    })
  }
}
let localArr = JSON.parse(localStorage.getItem('products'))
renderList(localArr)