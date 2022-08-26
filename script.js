const totalBill = document.querySelector('.total-bill');
const chooseTipPercentage = document.querySelectorAll('.btn')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const persons = document.querySelector('.text-label')
const perPerson = document.querySelector('#billperperson')
const perPersonBill = document.querySelector(".perpersonbill");
const calculateBill = document.querySelector('.calculatebill')
let ourValue;

function readUserBill(){
    const totalBillValue = document.querySelector('#billtotal').value;
    return totalBillValue;
    
}



// choose tip percentage
function chooseTip(){
    chooseTipPercentage.forEach(tipvalue => {
        tipvalue.addEventListener('click', () => {
            //console.log(parseInt(tipvalue.innerText))
            // if(tipvalue.clicked == true){
            tipvalue.disabled = true;
            
            tipvalue.style.backgroundColor = 'salmon'
            //console.log(parseInt(tipvalue.innerText))
            ourValue = parseInt(tipvalue.innerText);
            //}
           
        }) 
    })
}

//adding totalmembers
plus.addEventListener('click',(e) => {
    let value = parseInt(persons.innerText)
    //persons.innerText += 1;
    value += 1;
    persons.innerText = value.toString()
})

//subtracting totalmembers
minus.addEventListener('click',(e) => {

    let value = parseInt(persons.innerText)
    //persons.innerText += 1;
    if(value === 0) return
    value -= 1;
    persons.innerText = value.toString()
})


// total bill form
function totalBillAmount(){
    totalBill.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('please click on calculate after filling all details')
    })
}

function render(){
    readUserBill()
    totalBillAmount()
    chooseTip() 
}

render()

calculateBill.addEventListener('click', () => {
    let perPeron;
    //chooseTip()
    let userTotalBill = readUserBill();
    let tipPercentage = ourValue;
    let totalPersons = parseInt(persons.innerText);

    if(totalPersons == 0){
        alert("0 persons is not accepted, please change the value")
        
    } 
    else{
    let totalTip = (parseInt(userTotalBill) * (tipPercentage/100));
    console.log(totalTip)
    let billPerPerson = (parseInt(userTotalBill) + parseInt(totalTip))/totalPersons;

    
    perPerson.value = `${billPerPerson} $`;
    }

})