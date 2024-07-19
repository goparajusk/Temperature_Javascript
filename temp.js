const number_field = document.getElementById("number-field");
    const F_C=document.getElementById("farenhite-to-celsius");
    const C_F=document.getElementById("celsius-to-farenhite");
const ans = document.getElementById("ans");
let temp;
function convertion(){
    
    if(F_C.checked){
        temp= Number(number_field.value);
        temp= (5/9)*(temp-32);
        ans.textContent= temp.toFixed(1)+"°C";
    }
    else if(C_F.checked){
        temp= Number(number_field.value);
        temp=(9/5*temp+32);
        ans.textContent= temp.toFixed(1)+"°F";
    }
    else{
        ans.textContent="Select a Value";
    }

    }

