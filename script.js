
const calcResult = document.querySelector(".calc__result")
const userTypeFiz = document.querySelector("#radioFiz")
const userTypeUr = document.querySelector("#radioUr")
const mainForm = document.querySelector('.calc__form')
const inputRange = document.getElementById('range')
const userSquare = document.getElementById('usersquare')


noUiSlider.create(inputRange, {
    start: [0],
    connect: [true,false],
    tooltips: [wNumb({decimals:0,suffix: ' м2' })],
    range: {
        'min': 0,
        'max': 2000
    },
    step:1
});

const getTarifs = () => {
    const input1=document.querySelector("#radioFiz")
    const input2=document.querySelector("#radioUr")
    if (input1 && input1.checked) return (input1.dataset.tarifs)
    if (input2 && input2.checked) return (input2.dataset.tarifs)
    return;
}

const getPricing = (square) => {
    if (square == 0) return "не выбрано"
    const tarif = getTarifs()
    if (tarif){
        return `${tarif*square} ₽`
    }
    return "не выбрано "
}

inputRange.noUiSlider.on('update',function(){
    calcResult.textContent = getPricing(inputRange.noUiSlider.get());
    userSquare.textContent = inputRange.noUiSlider.get();
})

userTypeFiz.addEventListener("click",()=>{
    calcResult.textContent = getPricing(inputRange.noUiSlider.get())
    userSquare.textContent = inputRange.noUiSlider.get();
})
userTypeUr.addEventListener("click",()=>{
    calcResult.textContent = getPricing(inputRange.noUiSlider.get())
    userSquare.textContent = inputRange.noUiSlider.get();
})

mainForm.addEventListener("submit",(e)=> {
    e.preventDefault();
    console.log(e)
})