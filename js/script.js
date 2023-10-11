let x;
let div = document.createElement("div");
let myBox = document.getElementById('my-box');

for(x = 1; x < 101; x++) {
    if (x % 3 === 0 && x % 5 === 0){
        console.log('FizzBuzz')
        myBox.append(div)
    } else if(x % 3 === 0){
        console.log('Fizz')
        myBox.append(div)
    } else if(x % 5 === 0){
        console.log('Buzz')
        myBox.append(div)
    } else {
        console.log(x)
        myBox.append(div)

        div.classList.add('my-small-box')

        // if(x === 'FizzBuzz'){
        //     div.classList.add('my-bg-orange')
        // } else if(x === 'Fizz'){
        //     div.classList.add('my-bg-lightblue')
        // } else if(x === 'Buzz'){
        //     div.classList.add('my-bg-green')
        // } else{
        //     div.classList.add('my-bg-blueish')
        // }
    }

}


