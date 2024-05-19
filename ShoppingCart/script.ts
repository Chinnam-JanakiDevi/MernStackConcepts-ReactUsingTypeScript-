interface product {
    name: string,
    price: number,
    qty:number
}

class shoppingCart {
    private items: cartItems[]
    constructor() {
        this.items = []
    }
    addItems(item: cartItems) {
        this.items.push(item)
        console.log(this.items);
    }
    getItems() {
        return this.items
    }
    getTotal() {
        return this.items.reduce((acc, items) => {
            return acc + items.price
        }, 0)
    }
}
class cartItems implements product {
    constructor(public name: string, public price: number,public qty:number) {
    }

}
const cart = new shoppingCart()
const priceButton = document.getElementById("totalPrice") as HTMLElement
const listItems = document.getElementById("listItems") as HTMLElement
const productButtons = document.querySelectorAll("button")
const quantityField=document.getElementById("quantity") as HTMLInputElement
const paragraph = document.querySelector('p'); // Select the first <p> tag in the document

if (paragraph) {
    paragraph.style.display = 'none'; // Hide the paragraph
}

productButtons.forEach((but) => {
    but.addEventListener('click', () => {
        const name = but.getAttribute("data-name")
        const price = but.getAttribute("data-price")
        if(quantityField.type==="hidden"){
            quantityField.type="text"
        }
        const n=parseInt(quantityField.value)
        if (name && price && n) { 
            const cartitem = new cartItems(name, parseFloat(price)*n,n)
            cart.addItems(cartitem)
            renderData()
            quantityField.value=""
            quantityField.type="hidden"
        }
    })
})
console.log(cart);

const renderData = () => {
    listItems.innerHTML = "";
    cart.getItems().forEach((item) => {
        listItems.innerHTML += `<li><b>Name:</b> ${item.name} <b>Qty:</b>${item.qty} <b>Price:</b> &#x20b9; ${item.price}</li>`
    })
    priceButton.innerHTML = `&#x20b9;${cart.getTotal()}`
    if (paragraph) {
        paragraph.style.display = "inline-block"; // Display the paragraph
    }    console.log(cart.getTotal());

}




// interface product {
//     name: string,
//     price: number
// }

// class shoppingCart {
//     private items: cartItems[]
//     constructor() {
//         this.items = []
//     }
//     addItems(item: cartItems) {
//         this.items.push(item)
//         console.log(this.items);
//     }
//     getItems() {
//         return this.items
//     }
//     getTotal() {
//         return this.items.reduce((acc, items) => {
//             return acc + items.price
//         }, 0)
//     }


// }
// class cartItems implements product {
//     constructor(public name: string, public price: number) {
//     }

// }
// const cart = new shoppingCart()
// const priceButton = document.getElementById("totalPrice") as HTMLElement
// const listItems = document.getElementById("listItems") as HTMLElement
// const productButtons = document.querySelectorAll("button")
// const quantityField=document.getElementById("quantity") as HTMLInputElement

// productButtons.forEach((but) => {
//     but.addEventListener('click', () => {
//         const name = but.getAttribute("data-name")
//         const price = but.getAttribute("data-price")
//         if (name && price) {
//             const cartitem = new cartItems(name, parseFloat(price))
//             cart.addItems(cartitem)
//             renderData()
//         }

//         // renderData()
//     })
// })


// console.log(cart);

// const renderData = () => {
//     listItems.innerHTML = "";
//     cart.getItems().forEach((item) => {
//         listItems.innerHTML += `<li>${item.name} &#x20b9; ${item.price}</li>`
//     })
//     priceButton.innerHTML = `&#x20b9;${cart.getTotal()}`

//     console.log(cart.getTotal());

// }

