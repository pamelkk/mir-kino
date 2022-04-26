let horrorWrapper = document.querySelector(".main__catalog-category--horror");
let comedyWrapper = document.querySelector(".main__catalog-category--comedy");
let actionWrapper = document.querySelector(".main__catalog-category--action");
let documentaryWrapper = document.querySelector(".main__catalog-category--documentary");
let horrorButton = document.querySelector(".header__nav-button--horror");
let comedyButton = document.querySelector(".header__nav-button--comedy");
let actionButton = document.querySelector(".header__nav-button--action");
let documentaryButton = document.querySelector(".header__nav-button--documentary");
let resetButton = document.querySelector(".main__reset");
let previousButton = document.querySelectorAll(".main__catalog-pages-item--previous");
let nextButton = document.querySelectorAll(".main__catalog-pages-item--next");
let slideInactive = document.querySelector(".choice");



function bebe (array) {
    array.forEach((element) => {
        numCallbackRuns++
    })
}

nextButton.addEventListener('click', function () {
    resetFilterExcept(horrorButton, horrorWrapper);
})

function resetFilterExcept(notResetButton, notResetWrapper) {
    horrorWrapper.classList.remove('main__catalog-category--visible');
    horrorButton.classList.remove('header__nav-button--selected');  
    comedyWrapper.classList.remove('main__catalog-category--visible');
    comedyButton.classList.remove('header__nav-button--selected');
    actionWrapper.classList.remove('main__catalog-category--visible');
    actionButton.classList.remove('header__nav-button--selected');
    documentaryWrapper.classList.remove('main__catalog-category--visible');
    documentaryButton.classList.remove('header__nav-button--selected');
    notResetWrapper.classList.add('main__catalog-category--visible');
    notResetButton.classList.add('header__nav-button--selected');  
}

function resetAllFilters() {
    horrorWrapper.classList.add('main__catalog-category--visible');
    horrorButton.classList.remove('header__nav-button--selected');  
    comedyWrapper.classList.add('main__catalog-category--visible');
    comedyButton.classList.remove('header__nav-button--selected');
    actionWrapper.classList.add('main__catalog-category--visible');
    actionButton.classList.remove('header__nav-button--selected');
    documentaryWrapper.classList.add('main__catalog-category--visible');
    documentaryButton.classList.remove('header__nav-button--selected');
}

horrorButton.addEventListener('click', function () {
    resetFilterExcept(horrorButton, horrorWrapper);
})

comedyButton.addEventListener('click', function () {
    resetFilterExcept(comedyButton, comedyWrapper);
})

actionButton.addEventListener('click', function () {
    resetFilterExcept(actionButton, actionWrapper);
})

documentaryButton.addEventListener('click', function () {
    resetFilterExcept(documentaryButton, documentaryWrapper);
})

resetButton.addEventListener('click', function () {
    resetAllFilters();
})
