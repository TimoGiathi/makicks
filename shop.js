const cart = document.querySelector("#cart");
const filledCart = document.querySelector(".dropDown");
const orderBtns = document.querySelectorAll(".orderBtns");
const navItems = document.querySelectorAll(".navItems");
const men = document.querySelector("#menHub");
const women = document.querySelector("#womenHub");
const children = document.querySelector("#childrenHub");
const product = document.getElementById("productName");
const bubble = document.getElementById("bubble");
const searchInput = document.querySelector(".search-input");
const shoeNames = document.querySelectorAll(".shoeName");
const matchNotFoundMessage = document.getElementById("missingMatch");

//Drop down menu
cart.addEventListener("click", () => {
  filledCart.classList.toggle("display");
  bubble.classList.toggle("display");
});
//Cart content
function updateCart() {}
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    const sectionId = navItem.id.replace("Hub", "Section");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//Add to cart
let cartItemCount = 0;

orderBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.parentElement;
    const shoeName = parent.querySelector(".shoeName").textContent;
    const shoePrice = parent.querySelector(".price").textContent;
    if (parent) {
      const boughtItem = document.createElement("p");
      boughtItem.textContent = shoeName;
      const price = document.createElement("span");
      price.classList.add("priceSpan");
      price.textContent = `- ${shoePrice}`;
      boughtItem.appendChild(price);
      const icon = document.createElement("i");
      icon.className =
        'fa-solid fa-trash-can fa-sm" style="color: #b6b9be  iconSpace';
      boughtItem.appendChild(icon);
      icon.addEventListener("click", () => {
        boughtItem.remove();
        reduceCounter(--cartItemCount);
      });
      filledCart.appendChild(boughtItem);
      addCounter(++cartItemCount);
    }
  });
});

//Cart counter function
function addCounter(count) {
  const cartCount = bubble;
  cartCount.textContent = count;
  cartCount.style.display = count > 0 ? "block" : "none";
}

//trash functionality
function reduceCounter(count) {
  const cartCount = bubble;
  cartCount.textContent = count;
  cartCount.style.display = count > 0 ? "block" : "none";
}

//Search and Filter Functionality
document.addEventListener("DOMContentLoaded", function () {
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    let matchFound = false;

    shoeNames.forEach(function (shoeName) {
      const shoeNameText = shoeName.textContent.toLowerCase();
      const shoeContainer = shoeName.parentElement;

      if (shoeNameText.includes(searchTerm)) {
        shoeContainer.style.display = "block";
        matchFound = true;
      } else {
        shoeContainer.style.display = "none";
      }
    });
    if (matchFound) {
      matchNotFoundMessage.style.display = "none";
    } else {
      matchNotFoundMessage.style.display = "block";
    }
  });
});
