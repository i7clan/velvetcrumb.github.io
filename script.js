/* ==========================================
   VELVET CRUMBS
   Luxury JavaScript
========================================== */

/* ===========================
   NAVBAR SCROLL EFFECT
=========================== */

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.style.background = "rgba(8,8,12,.92)";
            header.style.backdropFilter = "blur(18px)";
            header.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

        } else {

            header.style.background = "rgba(10,10,18,.55)";
            header.style.boxShadow = "none";

        }

    });

}

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ===========================
   SCROLL REVEAL
=========================== */

const reveals = document.querySelectorAll(

".card,.feature,.step,.custom-cakes,.delivery,.about,.hero-content,.order-box"

);

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(70px)";
    item.style.transition = "all .9s ease";

});

function revealElements() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();

/* ===========================
   BUTTON HOVER EFFECT
=========================== */

document.querySelectorAll(".primary-btn,.order-btn,.instagram-btn")
.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});

/* ===========================
   ORDER FORM
=========================== */

function sendOrder(){

const name=document.getElementById("name")?.value.trim();

const phone=document.getElementById("phone")?.value.trim();

const dessert=document.getElementById("dessert")?.value;

const quantity=document.getElementById("quantity")?.value.trim();

const area=document.getElementById("area")?.value.trim();

const date=document.getElementById("date")?.value;

const notes=document.getElementById("notes")?.value.trim();

if(
!name||
!phone||
!quantity||
!area||
!date
){

alert("Please fill in all required fields.");

return;

}

const message=

`🍰 Velvet Crumbs Order 🍰

👤 Name: ${name}

📞 Phone: ${phone}

🍫 Dessert: ${dessert}

📦 Quantity: ${quantity}

📍 Delivery Area: ${area}

📅 Delivery Date: ${date}

📝 Custom Request:

${notes || "None"}

Thank you for choosing Velvet Crumbs! 🖤`;

navigator.clipboard.writeText(message)

.then(() => {

    alert(
        "✅ Order copied successfully!\n\nClick OK to open our Instagram page.\n\nPaste the message into our DMs (Ctrl + V)."
    );

    window.location.href = "https://ig.me/m/velvetcrumbs.01";

})

.catch(()=>{

alert("Couldn't copy your order.");

});

}