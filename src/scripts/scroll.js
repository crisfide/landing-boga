
document.addEventListener("DOMContentLoaded",()=>{
    document.addEventListener("scroll", animarScroll)
    // document.addEventListener("scroll", animarScroll)
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