let horrorButton = document.querySelector(".header__nav-button--horror");
let comedyButton = document.querySelector(".header__nav-button--comedy");
let actionButton = document.querySelector(".header__nav-button--action");
let documentaryButton = document.querySelector(".header__nav-button--documentary");
let resetButton = document.querySelector(".main__reset");
let pagesButtons = document.querySelector(".main__catalog-pages");
let slidesContainer = document.getElementById("slidesContainer");
let slideFirst = document.querySelector(".slide--first");
let slideSecond = document.querySelector(".slide--second");
let menu = document.querySelector(".header__nav");
let buttonMenuClose = document.querySelector(".header__nav-tab--close");
let buttonMenuOpen = document.querySelector(".header__nav-tab--open");
const ESC_KEYCODE = 27
let textCategoryReset = resetButton.textContent;
let genre = document.querySelectorAll('.choice__genre');
let year = document.querySelectorAll('.choice__year');
let country = document.querySelectorAll('.choice__country');
let filterList = document.querySelector('.header__nav-filters');
let genreList = filterList.querySelector('.header__nav-filters-item--genre');
let yearList = filterList.querySelector('.header__nav-filters-item--year');
let countryList = filterList.querySelector('.header__nav-filters-item--country');
let genreListFilter = genreList.querySelector('ul');
let yearListFilter = yearList.querySelector('ul');
let countryListFilter = countryList.querySelector('ul');
let genreButtonFilter = filterList.querySelector('.header__nav-filters-button--genre');
let yearButtonFilter = filterList.querySelector('.header__nav-filters-button--year');
let countryButtonFilter = filterList.querySelector('.header__nav-filters-button--country');
let buttonsFilters = filterList.querySelectorAll('button');
let filtersValue = filterList.querySelectorAll('.header__nav-filters-item');
let smile = document.querySelector('.footer__copyright-smile');
let beta = "is_beta";
let choice = document.querySelectorAll('.choice');
localStorage.setItem('classChangeWrapper', 'main__catalog-category--visible');
localStorage.setItem('classChangeButton', 'header__nav-button--selected');
let wrapper = localStorage.getItem('classChangeWrapper');
let button = localStorage.getItem('classChangeButton');


const array = [];
choice.forEach((elementChoice) => {
    array.push(elementChoice);
});


window.addEventListener('click', function (e) {
    for (const item of filtersValue) {
        if (e.target === item && item.classList.contains('header__nav-filters-item--visible')) {
            closeFilters(yearList, genreList, countryList);
        }
    }
})

function getUniqueResult(elements) {
    let result = [];
    for (let element of elements) {
        if (!result.includes(element)) {
            result.push(element);
        }
    }
    return result;
}

function getFiltersItems(items) {
    const resultFiltersList = [];
    for (const item of items) {
        resultFiltersList.push(item.textContent);
        resultFiltersList.sort();
    }
    return resultFiltersList;
};

function getFilterGenre(items) {
    for (const item of items) {
        const filterElement = document.createElement(`li`);
        filterElement.textContent = item;
        genreListFilter.appendChild(filterElement)

        filterElement.addEventListener('click', function () {
            for (let element of array) {
                element.classList.add('choice--invisible');
                let elementChoiceCountry = element.querySelector('.choice__genre');
                if (elementChoiceCountry.textContent == filterElement.textContent) {
                    element.classList.add('choice--visible');
                    element.classList.remove('choice--invisible');
                    let elementWithClass = document.querySelector('.choice--visible');
                    console.log(elementWithClass)
                }
            }
        })
    }
};

function getFilterYear(items) {
    for (const item of items) {
        const filterElement = document.createElement(`li`);
        filterElement.textContent = item;
        yearListFilter.appendChild(filterElement)

        filterElement.addEventListener('click', function () {
            for (let element of array) {
                element.classList.add('choice--invisible');
                let elementChoiceCountry = element.querySelector('.choice__year');
                if (elementChoiceCountry.textContent == filterElement.textContent) {
                    element.classList.add('choice--visible');
                    element.classList.remove('choice--invisible');
                    let elementWithClass = document.querySelector('.choice--visible');
                    console.log(elementWithClass)
                }
            }
        })
    }
};

function getFilterCountry(items) {
    for (const item of items) {
        const filterElement = document.createElement(`li`);
        filterElement.textContent = item;
        countryListFilter.appendChild(filterElement)

        /*filterElement.addEventListener('click', function () {
            for (let element of array) {
                element.classList.remove('choice--visible');
                element.classList.add('choice--invisible');
                let elementChoiceCountry = element.querySelector('.choice__country');
                if (elementChoiceCountry.textContent == filterElement.textContent) {
                    element.classList.add('choice--visible');
                    element.classList.remove('choice--invisible');
                    let elementsWithClass = document.querySelectorAll('.choice--visible');
                    
                    const newArray = [];
                    elementsWithClass.forEach((elementNewArray) => {
                        newArray.push(elementNewArray);
                    });

                    for (let el of newArray) {
                        if (el.parentElement == slideSecond) {
                            console.log("Во втором")
                        } 
                        if (el.parentElement == slideFirst) {
                            console.log("В первом")
                        }
                    }
                }
            }
        })*/
    }
};


let resultListGenre = getFiltersItems(genre);
let resultUniqueGenre = getUniqueResult(resultListGenre);
let resultGenreElements = getFilterGenre(resultUniqueGenre);

let resultListYear = getFiltersItems(year);
let resultUniqueYear = getUniqueResult(resultListYear);
let resultYearElements = getFilterYear(resultUniqueYear);

let resultListCountry = getFiltersItems(country);
let resultUniqueCountry = getUniqueResult(resultListCountry);
let resultCountryElements = getFilterCountry(resultUniqueCountry);



function resetFilterExcept(notResetButton, notResetWrapper) {
    horrorWrapper.classList.remove('main__catalog-category--visible');
    horrorButton.classList.remove('header__nav-button--selected');
    comedyWrapper.classList.remove('main__catalog-category--visible');
    comedyButton.classList.remove('header__nav-button--selected');
    actionWrapper.classList.remove('main__catalog-category--visible');
    actionButton.classList.remove('header__nav-button--selected');
    documentaryWrapper.classList.remove('main__catalog-category--visible');
    documentaryButton.classList.remove('header__nav-button--selected');
    pagesButtons.classList.add('pages--invisible');
    menu.classList.remove('header__nav--opened');
    resetButton.textContent = notResetButton.textContent;
    notResetWrapper.classList.add(wrapper);
    notResetButton.classList.add(button);
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
    resetButton.textContent = textCategoryReset;
}

horrorButton.addEventListener('click', function () {
    resetFilterExcept(horrorButton, horrorWrapper);
    slideSecond.style.display = "none";
    slideFirst.style.display = "block";
    slidesContainer.style.marginLeft = "0";
})

comedyButton.addEventListener('click', function () {
    resetFilterExcept(comedyButton, comedyWrapper);
    slideSecond.style.display = "none";
    slideFirst.style.display = "block";
    slidesContainer.style.marginLeft = "0";
})

actionButton.addEventListener('click', function () {
    resetFilterExcept(actionButton, actionWrapper);
    slideFirst.style.display = "none";
    slideSecond.style.display = "block";
})

documentaryButton.addEventListener('click', function () {
    resetFilterExcept(documentaryButton, documentaryWrapper);
    slideFirst.style.display = "none";
    slideSecond.style.display = "block";
})

resetButton.addEventListener('click', function () {
    resetAllFilters();
    pagesButtons.classList.remove('pages--invisible');
    slideFirst.style.display = "block";
    slideSecond.style.display = "block";
})

buttonMenuClose.addEventListener('click', function () {
    menu.classList.remove('header__nav--opened');
})

buttonMenuOpen.addEventListener('click', function () {
    menu.classList.add('header__nav--opened');
})

window.addEventListener('click', function (e) {
    if (e.target === menu) {
        menu.classList.remove('header__nav--opened');
    }
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode === ESC_KEYCODE && menu.classList.contains('header__nav--opened')) {
        menu.classList.remove('header__nav--opened');
    }
})

function openFilter(itemFilter, firstNotThatFilter, secondNotThatFilter) {
    itemFilter.classList.add('header__nav-filters-item--visible');
    firstNotThatFilter.classList.remove('header__nav-filters-item--visible');
    secondNotThatFilter.classList.remove('header__nav-filters-item--visible');
}

function closeFilters(firstNotThatFilter, secondNotThatFilter, thirdNotThatFilter) {
    firstNotThatFilter.classList.remove('header__nav-filters-item--visible');
    secondNotThatFilter.classList.remove('header__nav-filters-item--visible');
    thirdNotThatFilter.classList.remove('header__nav-filters-item--visible');
}

genreButtonFilter.addEventListener('click', function () {
    openFilter(genreList, yearList, countryList);
})

yearButtonFilter.addEventListener('click', function () {
    openFilter(yearList, genreList, countryList);
})

countryButtonFilter.addEventListener('click', function () {
    openFilter(countryList, genreList, yearList);
})

if (beta == "1") {
    smile.classList.add('footer__copyright-smile--visible');
} else {
    smile.classList.remove('footer__copyright-smile--visible');
}