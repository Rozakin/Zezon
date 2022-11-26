
const toggler = document.getElementById('toggler');
const nav = document.getElementsByTagName('nav')[0]
const menu = document.getElementsByTagName('ul')[0]

window.onscroll = () =>{
    if(document.documentElement.scrollTop > 1){
        nav.classList.add('chude')
    }else{
        nav.classList.remove('chude')
    }
}
toggler.addEventListener('click', ()=>{
    nav.classList.toggle('otwarte')
})

menu.addEventListener('click', ()=>{
    nav.classList.remove('otwarte')
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('wjezdza')
        }
        //  else {
        //     entry.target.classList.remove('wjezdza')
        // }
    })
})

const animowane = document.querySelectorAll('.wjazd')
animowane.forEach(el => observer.observe(el))