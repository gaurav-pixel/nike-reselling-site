const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    title: "Air Force",
    price: 119,
    colors: [
      { code: "black", img: "./img/air.png" },
      { code: "darkblue", img: "./img/air2.png" },
    ],
  },
  {
    title: "Air Jordan",
    price: 149,
    colors: [
      { code: "lightgray", img: "./img/jordan.png" },
      { code: "green", img: "./img/jordan2.png" },
    ],
  },
  {
    title: "Blazer",
    price: 109,
    colors: [
      { code: "lightgray", img: "./img/blazer.png" },
      { code: "green", img: "./img/blazer2.png" },
    ],
  },
  {
    title: "Crater",
    price: 129,
    colors: [
      { code: "black", img: "./img/crater.png" },
      { code: "lightgray", img: "./img/crater2.png" },
    ],
  },
  {
    title: "Hippie",
    price: 99,
    colors: [
      { code: "gray", img: "./img/hippie.png" },
      { code: "black", img: "./img/hippie2.png" },
    ],
  },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(-${100 * index}vw)`;
    chosenProduct = products[index];
    updateProductDisplay();
  });
});

function updateProductDisplay() {
  currentProductTitle.textContent = chosenProduct.title;
  currentProductPrice.textContent = `$${chosenProduct.price}`;
  currentProductImg.src = chosenProduct.colors[0].img;

  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = chosenProduct.colors[index]?.code || "transparent";
  });
}

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index]?.img || currentProductImg.src;
  });
});

currentProductSizes.forEach(size => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach(s => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
