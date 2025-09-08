
document.addEventListener("DOMContentLoaded",()=>{
    document.addEventListener("scroll", animarScroll)
    document.addEventListener("scroll", esconderMenuBurger)
    // document.addEventListener("scroll", animarScroll)
})


const btnBurger = document.getElementById("btnBurger")
const menu = document.querySelector("#nav-burger ul")
btnBurger.addEventListener("click", e => {
    console.log("object")
    menu.classList.toggle("h-0");
    menu.classList.toggle("h-screen");
})

const esconderMenuBurger = e => {
    menu.classList.add("h-0");
    menu.classList.remove("h-screen");
}
document.querySelectorAll("#nav-burger ul li").forEach(li => {
    li.addEventListener("click", esconderMenuBurger)
})

const animarScroll = e => {
    const posicion = document.documentElement.scrollTop
    const altura = document.documentElement.scrollHeight
    const porcentaje = posicion/altura


    const header = document.querySelector("header")
    if (porcentaje>0.03) {
        header.classList.add("bg-[#c69842]/70", "py-0", "shadow-lg", "shadow-[#c69842]/50", "backdrop-blur-xs")

        header.classList.remove("py-2")
    } else {
        header.classList.remove("bg-[#c69842]/70", "py-0", "shadow-lg", "shadow-[#c69842]/50", "backdrop-blur-xs")
        
        header.classList.add("py-2")
        
    }
}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");

            entry.target.classList.add("opacity-100", "translate-y-0");
            // observer.unobserve(entry.target); // para que solo se anime una vez
        }else{
            entry.target.classList.remove("opacity-100", "translate-y-0");

            entry.target.classList.add("opacity-0", "translate-y-6");
        }
    });
    }, { threshold: 0.2 });

const cards = document.querySelectorAll('.card-fadein');
cards.forEach(card => observer.observe(card));




const observerLat = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "-translate-x-32");
            
            entry.target.classList.add("opacity-100", "translate-x-0");
            observer.unobserve(entry.target); // para que solo se anime una vez
        }
        // else{
        //     entry.target.classList.remove("opacity-100", "translate-x-0");
            
        //     entry.target.classList.add("opacity-0", "-translate-x-32");
        // }
    });
    }, { threshold: 0.2 });

const imgs = document.querySelectorAll('.img-fadein');
imgs.forEach(img => observerLat.observe(img));


