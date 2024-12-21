import { addToCart } from "./addToCart";

const productContainer = document.querySelector(".productContainer") //tshirt prod cont
const productContainerH = document.querySelector(".productContainerH") //hoodie prod cont
const productTemplate = document.querySelector("#productTemplate") //template

export const showTshirts = (tshirts) => {
    if (!tshirts) {
        return false;
    }

    tshirts.forEach((curProd) => {
        const { id, name, price, image } = curProd;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`)

        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productPrice").textContent = `$${price}.00`;
        productClone.querySelector(".productImage").src = image;
        // productClone.querySelector(".productName").textContent = id;

        
        productClone.querySelector(".productActionsButton").addEventListener("click", (event) => {
            addToCart(event, id, price)
        });

        productContainer.append(productClone);

    });
};

export const showHoodies = (hoodies) => {
    if (!hoodies) {
        return false;
    }

    hoodies.forEach((curProd) => {
        const { id, name, price, image } = curProd;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productPrice").textContent = price;
        productClone.querySelector(".productImage").src = image;
        // productClone.querySelector(".productName").textContent = id;

        productContainerH.append(productClone)
    });
} 
