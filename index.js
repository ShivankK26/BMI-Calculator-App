const form = document.querySelector('form');//Taking a constant form


//If an event is triggered the function will perform the following task.
form.addEventListener('submit', function(event){
    event.preventDefault();
    

    //ParseInt parses a string and returns an integer.
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    
    //NaN means not a number so isNaN means to check if the given number is actually a number or not. 
    if((height === '') || (height < 0) || (isNaN(height))){
        
        results.innerHTML = "Kindly provide a valid height!";
        
    } 
    

    else if(weight === '' || weight < 0 || isNaN(weight)){

        results.innerHTML = "Kindly provide a valid weight!";

    } 
    
    
    else{
    
        const BMI = (weight / ((height*height)/10000)).toFixed(2); //toFixed rounds off the output number to (given) decimal places.
        
        results.innerHTML = `<span>${BMI}</span>`//Used for printing the output. 

    }
    
    
});