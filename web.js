const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const product = [
    {
        id: 1,
        title: "AIR FORCE",
        price: 12999,
        colors: [
            {
                code: "black",
                img: "img/air.png",
            },
            {
                code: "darkblue",
                img: "img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "JORDAN",
        price: 16999,
        colors: [
            {
                code: "White",
                img: "img/jordan.png",
            },
            {
                code: "Green",
                img: "img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "BLAZER",
        price: 8999,
        colors: [
            {
                code: "White",
                img: "img/blazer.png",
            },
            {
                code: "Green",
                img: "img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "CARTER",
        price: 9999,
        colors: [
            {
                code: "Black",
                img: "img/crater.png",
            },
            {
                code: "White",
                img: "img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "HIPPIE",
        price: 19999,
        colors: [
            {
                code: "Gray",
                img: "img/hippie.png",
            },
            {
                code: "Black",
                img: "img/hippie2.png",
            },
        ],
    },
]

let choosenProduct = product[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the curent slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = product[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "Rs." + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img
        //assigning new color
        currentProductColors.forEach((color, index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) =>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
        });
        size.style.backgroundColor = "black"
        size.style.color = "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display ="flex"
})

close.addEventListener("click",()=>{
    payment.style.display = "none"
})

const fb = document.querySelector(".fIcon1")

fb.addEventListener("click",function redirect()
    { url = "https://www.facebook.com/nike/"; 
    window.open(url, '_blank');}
)

const ins= document.querySelector(".fIcon3")

ins.addEventListener("click",function redirect()
    { url = "https://www.instagram.com/nike/?hl=en"; 
    window.open(url, '_blank')}
)

const wt = document.querySelector(".fIcon2")

wt.addEventListener("click",function redirect()
    {url = "https://api.whatsapp.com/send?1=pt_BR&phone=551127396464&text=Oi,%20vi%20a%20p%C3%A1gina%20de%20ofertas%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos.";
    window.open(url, '_blank') }
)