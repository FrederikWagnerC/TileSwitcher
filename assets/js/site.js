// write cool JS hwere!!
const mainImage = document.getElementById('mainImage')
const smallImageOne = document.getElementById('smallImageOne')
const smallImageTwo = document.getElementById('smallImageTwo')
const smallImageThree = document.getElementById('smallImageThree')
const smallImageFour = document.getElementById('smallImageFour')
console.log(smallImageOne);
function imageSwitcher() {
    let mainImageSrc = mainImage.src
    let eventImageSrc = event.target.src

    mainImage.src = eventImageSrc
    event.target.src = mainImageSrc
    console.log('asd')
}


smallImageOne.addEventListener('click', imageSwitcher)
smallImageTwo.addEventListener('click', imageSwitcher)
smallImageThree.addEventListener('click', imageSwitcher)
smallImageFour.addEventListener('click', imageSwitcher)