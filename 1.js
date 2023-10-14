document.addEventListener('DOMContentLoaded', function() {
    let output = document.getElementById('output');
    let incrementButton = document.getElementById('increment');
    let decrementButton = document.getElementById('decrement');
    let resetButton = document.getElementById('reset');

    incrementButton.addEventListener('click', function()
     {
        let value = parseInt(output.innerText, 10);
        if (value < 20)
         {
            output.innerText = value + 1;
        }
    });

    decrementButton.addEventListener('click', function() 
    {
        let value = parseInt(output.innerText, 10);
        if (value > 0) 
        {
            output.innerText = value - 1;
        }
    });

    resetButton.addEventListener('click', function()
     {
        output.innerText = '0';
    });
});


