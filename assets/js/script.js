let url = 'https://fakestoreapi.com/products';
fetch(url)
  .then((res) => res.json())
  .then((json) => {
    const articlesSection = document.querySelector("#articles");
    
   for (const produit of json) {
    articlesSection.innerHTML += generateCard(produit.title,produit.image, produit.description, produit.category, produit.price)

     }
   });

const generateCard = (title, image, description, category, price) => {
  return `
    <div id="productId" class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-8 m-5">
       <img class="h-56 w-full object-cover mt-2" src=${image}>
        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
           <h1 class="text-gray-200 font-bold text-xl">${price}€</h1>
            <button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded" onclick="addToCard('${title}','${image}','${price}')")>Add to card</button>
        </div>
        <div class="px-4 py-2">
          <h1 class="text-gray-900 font-bold text-1xl uppercase">${title}</h1>
          <p class="text-gray-600 text-sm mt-1">${description}</p>
        </div>  
    </div>
  ` 
}

  

function checkInputValue(inputValue) {
  switch(inputValue) {
    case 'all':
      url = 'https://fakestoreapi.com/products';
      break;
    case 'men':
      url = 'https://fakestoreapi.com/products/category/men clothing';
      break;
    case 'women':
      url = 'https://fakestoreapi.com/products/category/women clothing';
      break;
    case 'jewelery':
      url = 'https://fakestoreapi.com/products/category/jewelery';
      break;
    case 'electronics':
      url = 'https://fakestoreapi.com/products/category/electronics';
      break;
    default:
      url = 'https://fakestoreapi.com/products';
      break;
  }

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const articlesSection = document.querySelector("#articles");
      articlesSection.innerHTML = '';  
      $("#articles").hide().fadeIn('slow');
      for (const produit of json) {
        articlesSection.innerHTML += generateCard(produit.title,produit.image, produit.description, produit.category, produit.price)
      }             
   });

}
  

function addToCard(title, image, price) {
  let monPanier = document.getElementById("panier");
  const popup = document.createElement("p").innerText = "Votre produit a été ajouté au panier"
  panier.append(popup)
    // if (document.getElementById("productId") === (document.getElementById("one") {
    //   const one = document.getElementById("one") = (document.getElementById("one")++
    

  // title
  let para = document.createElement("p");
  let productTitle = document.createTextNode(title);
  para.appendChild(productTitle);
  para.style.fontSize = "12px";
  // image
  let img = document.createElement("img");
  img.src = image;
  img.alt = "";
  img.width = "50";
  img.height = "50";
  // price
  let paraPrice = document.createElement("p");
  let productPrice = document.createTextNode(price+'€');
  paraPrice.appendChild(productPrice);
  paraPrice.style.fontSize = "12px";

  monPanier.appendChild(para);
  monPanier.appendChild(img);
  monPanier.appendChild(paraPrice);
}
