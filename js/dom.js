document.getElementById('btn-cupon').addEventListener('keyup',function(event){
    const text = event.target.value;
    const domButton = document.getElementById('get-price');
    if (text ==='dom'){
    domButton.removeAttribute('disabled');
    }
    else{
    domButton.setAttribute('disabled',true);
    }
    })
    
        