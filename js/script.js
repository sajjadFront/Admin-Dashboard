let $ = document;

// hovered
const list_aTag = $.querySelectorAll('li a');

function hovered_aTag() {
    list_aTag.forEach(aTag => {
        aTag.classList.remove('hovered');
        this.classList.add('hovered');
    })
}

list_aTag.forEach(aTag => {
    aTag.addEventListener('mouseover', hovered_aTag);
})

// toggle navigation
const toggleIcon = $.querySelector('.fa-bars');
const navigation = $.querySelector('.navigation');
const main = $.querySelector('.main');

toggleIcon.addEventListener('click', () => {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
});

// searchIcon
const searchIcon = $.querySelector('.nav-right .fa-search');
const searchFormContainer = $.querySelector('.nav-left .search-form-container');

searchIcon.addEventListener('click', () => {
    searchFormContainer.classList.toggle('active');
})

const closeIcon = $.querySelector('.fa-close');

closeIcon.addEventListener('click', ()=>{
    searchFormContainer.classList.remove('active');
})