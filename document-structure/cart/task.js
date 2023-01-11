const product = Array.from(document.querySelectorAll(".product"));
let products = [];
const cart = document.querySelector(".cart__products")

product.forEach((el) => {
    products.push([{
        product: el,
        add: el.querySelector(".product__add"),
        dec: el.querySelector(".product__quantity-control_dec"),
        inc: el.querySelector(".product__quantity-control_inc"),
        value: el.querySelector(".product__quantity-value"),
        flag: 0
    }
    ])
})
for (let i = 0; i < products.length; i++) {
    let oneProduct = products[i];
    console.log(oneProduct[0].add);
    oneProduct[0].dec.addEventListener("click", () => {
        if (oneProduct[0].value.textContent != 1) {
            oneProduct[0].value.textContent--;
        }
    });
    oneProduct[0].inc.addEventListener("click", () => {
        oneProduct[0].value.textContent++;
    });
    let prodId = oneProduct[0].product.dataset.id;
    let prodImg = oneProduct[0].product.querySelector("img").src
    console.log(prodImg)

    oneProduct[0].add.addEventListener("click", () => {
        if (checkProduct (prodId) == true) {
            let cartProducts = Array.from(cart.querySelectorAll(".cart__product"));
            cartProducts.forEach((el) => {
                if (el.dataset.id == prodId) {
                    let cartProductCount = Number(el.querySelector(".cart__product-count").textContent);
                    el.querySelector(".cart__product-count").textContent = cartProductCount + Number(oneProduct[0].value.textContent);
                }

            })

        }
        if (checkProduct (prodId) == false) {
            cart.insertAdjacentHTML('beforeEnd',
                `<div class="cart__product" data-id="${prodId}">
                        <img class="cart__product-image" src="${prodImg}">
                        <div class="cart__product-count">${oneProduct[0].value.textContent}</div>
                    </div>`
            )
            oneProduct[0].flag = 1;
        };

        oneProduct[0].flag = 1;
    });
}

function checkProduct (idItem){
    if (Array.from(cart.querySelectorAll(".cart__product")).find(item => item.getAttribute("data-id") == idItem) !== undefined) return true;
    else return false;
}

