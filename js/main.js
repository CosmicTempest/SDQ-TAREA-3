const FtoC = document.querySelector('#FtoC')
const CtoF = document.querySelector('#CtoF')
const FtoK = document.querySelector('#FtoK')
const KtoF = document.querySelector('#KtoF')
const CtoK = document.querySelector('#CtoK')
const KtoC = document.querySelector('#KtoC')
const avg = document.querySelector('#Average')
const avg1 = document.querySelector('#Average1')
const avg2 = document.querySelector('#Average2')
const avg3 = document.querySelector('#Average3')
const inputData = document.querySelector('[inputData]')

const convertFC = () =>{
    // (32°F − 32) × 5/9 = 0°C
const a = FtoC.value
const b = (a - 32) * (5/9)
    
alert(Math.round(b)+"°C")
}

const convertCF = () =>{
    // (0°C × 9/5) + 32 = 32°F
const a = CtoF.value
const b = (a - 9/5) + 32
    
alert(Math.round(b)+"°F")
}

const convertFK = () =>{
    // (F − 32) × 5 ⁄ 9 + 273.15
const a = FtoK.value
const b = (a - 32) * 5/9 + 273.15
    
alert(Math.round(b)+"°K")
} 

const convertKF = () =>{
    // °F = (K − 273.15) × 9/5 + 32
const a = KtoF.value
const b = (a - 273.15) * 9/5 + 32
    
alert(Math.round(b)+"°F")
}

const convertCK = () =>{
    // (0°C × 9/5) + 32 = 32°F
const a = CtoK.value
const b = a + 273.15
    
alert(Math.round(b)+"°K")
}

const convertKC = () =>{
    // (0°C × 9/5) + 32 = 32°F
const a = KtoC.value
const b = a - 273.15
    
alert(Math.round(b)+"°F")
}

const calcAverage = () =>{
    
const a = avg.value
const b = avg1.value
const c = avg2.value
const d = avg3.value
const arr = [a, b, c, d];
let sum = 0;
    for(const element of arr) {
        sum += element;
    }

let e = sum / arr.length;


    if(a == "" | b == "" | c == "" | d == ""){
        alert("Su promedio es " + Math.round(e))
    }
    else{alert("Por favor introduzca los 4 valores")}

}
// no me funciono esta parte del codigo... 
