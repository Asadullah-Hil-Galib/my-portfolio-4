let preloader = document.querySelector('#loading');
setTimeout(function onloadBody() {
    preloader.style.display = 'none'
},5000)


let navToggleBtn = document.querySelector('#navbar-toggle-btn');
let lefSidebar = document.querySelector('#left-side');
let mainBodyBox = document.querySelector('#main-content');
let toggleCloseBtn = document.querySelector('#toggle-close-btn');
var valu = true;

// navToggleBtn.addEventListener('click', function() {
//         if (valu) {
//             letSidebar.classList.add('show');
//             valu = false
//         } else {
//             letSidebar.classList.remove('hide')
//             valu = !(false)
//         }
// })

navToggleBtn.onclick = () => {
    lefSidebar.classList.add('show')
    mainBodyBox.style.marginLeft = '250px'
    mainBodyBox.style.marginRight = '-250px'
}
toggleCloseBtn.onclick = () => {
    lefSidebar.classList.remove('show')
    mainBodyBox.style.marginLeft = '0px'
    mainBodyBox.style.marginRight = '0px'
}


// Portfolio
const filterConteiner = document.querySelector('.portfolio-button'),
filterBtns = filterConteiner.children;
totalFilterBtn = filterBtns.length,
portfolioItems = document.querySelectorAll('.portfolio-item'),
totalportfolioItem = portfolioItems.length;
 console.log(portfolioItems)

for(let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener('click', function() {
        filterConteiner.querySelector('.active').classList.remove('active')
        this.classList.add('active')
        // console.log(this.innerHTML)



        const filterValue = this.getAttribute('data-filter');
        for(let j = 0; j < totalportfolioItem; j++) {
             if(filterValue === portfolioItems[j].getAttribute('data-category')) {
                 portfolioItems[j].classList.remove('hide')
                 portfolioItems[j].classList.add('show')
             } else {
                 portfolioItems[j].classList.remove('show');
                 portfolioItems[j].classList.add('hide');
             } if (filterValue === 'all') {
                 portfolioItems[j].classList.remove('hide')
                 portfolioItems[j].classList.add('show')
             }
        }
    })
}