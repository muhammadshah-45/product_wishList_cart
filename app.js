let wishlistEmptyArray = [];

function setup() {
  // console.log("window is loading");
  const products = document.querySelectorAll(".button");

  for (let i = 0; i < products.length; i++) {
    products[i].onclick = function (event) {
      addItem(event);
    };
  }
}

function addItem(event) {
  const productId = event.target.getAttribute("id");

  if (!wishlistEmptyArray.find((item) => item === productId)) {
    const productDiv = document.getElementById("product" + productId);

    const wishDiv = document.createElement("div");

    wishDiv.setAttribute("id", "wish" + productId);
    wishDiv.setAttribute("class", "product");
    wishDiv.appendChild(productDiv);
    wishDiv.innerHTML += productDiv.innerHTML;

    console.log("object");

    //   // Create input for removeButton
    const removeButton = document.createElement("input");
    //  //Create and add Attributes to an input
    removeButton.setAttribute("id", "remove" + productId);
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("value", "Remove");

    //  //Create onclick function for removeItem to add productDiv in wishlist Cart.
    // // and give it a unique ID.
    removeButton.onclick = function () {
      removeItem(productId);
    };
    wishDiv.appendChild(removeButton);
    
    let aside = document.getElementById("wishlist");
    aside.appendChild(wishDiv);
    wishlistEmptyArray.push(productId);
    console.log(wishlistEmptyArray);
  }
}

function removeItem(productId) {
  const product = document.getElementById("wish" + productId);
  product.remove();

  wishlistEmptyArray = wishlistEmptyArray.filter(item => item  !== productId);
  console.log(wishlistEmptyArray);
}

window.addEventListener("load", setup);
