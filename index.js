const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 47.95,
    colors: [
      {
        code: "black",
        img: "https://pictures-tanzania.jijistatic.com/4382295_NjIwLTYwNS0xYzM2NWIzN2Uw.webp",
      },
      {
        code: "darkblue",
        img: "https://pictures-tanzania.jijistatic.com/4382295_NjIwLTYwNS0xYzM2NWIzN2Uw.webp",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 36.56,
    colors: [
      {
        code: "lightgray",
        img: "https://cf.shopee.co.id/file/504253c4ba815c30dba0c30a89e156c2",
      },
      {
        code: "green",
        img: "https://cf.shopee.co.id/file/504253c4ba815c30dba0c30a89e156c2",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 25.18,
    colors: [
      {
        code: "lightgray",
        img: "https://cms-cdn.thesolesupplier.co.uk/2021/08/nike-blazer-mid-77-se-first-use-bone-green-dh6757-001-side-tsw.jpg",
      },
      {
        code: "green",
        img: "https://cms-cdn.thesolesupplier.co.uk/2021/08/nike-blazer-mid-77-se-first-use-bone-green-dh6757-001-side-tsw.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 35.96,
    colors: [
      {
        code: "black",
        img: "https://i.ebayimg.com/images/g/PMAAAOSwf-ZiPn-o/s-l1200.jpg",
      },
      // {
      //   code: "lightgray",
      //   img: "./img/crater2.png",

      // },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 23.97,
    colors: [
      {
        code: "gray",
        img: "https://sneakernews.com/wp-content/uploads/2021/04/nike-space-hippie-01-obsidian-DJ3056-400-8.jpg",
      },
      {
        code: "black",
        img: "https://sneakernews.com/wp-content/uploads/2021/04/nike-space-hippie-01-obsidian-DJ3056-400-8.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
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