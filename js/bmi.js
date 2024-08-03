
function calculate(){
   
    

    const weight = document.getElementById("weight").value;
    const wvalue =document.getElementById("weight-val").textContent = weight;

    const height = document.getElementById("height").value;
    const hvalue =document.getElementById("height-val").textContent = height;
    const result = document.getElementById("result");
     const bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    result.textContent = bmi;
    const status= document.getElementById("status");

    if(bmi < 16){
        status .innerHTML= "Severly Underweight";
        status.style.color = "#eb1e1e";
        
    }
    else if(bmi < 18.1){
        status .innerHTML="Underweight";
        status.style.color = "#ffc44d";
    }
    else if( bmi >= 18.1 && bmi <= 24.2 ){
        status .innerHTML= "Normal Weight";
        status.style.color = "#0be881";
    }
    else if( bmi >= 25 && bmi <= 29.5 ){
        status .innerHTML= "Overweight";
        status.style.color = "#e7eb1e";
    }
    
    else if( bmi >= 30 && bmi <= 34.8 ){
        status .innerHTML= "Obesity Class |";
        status.style.color = "#c45e04";
    }
    else{
        status .innerHTML= "Obesity Class ||";
        status.style.color = "#ff5e57";
    }
   
}

