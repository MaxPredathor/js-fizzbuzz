let myBox = document.getElementById('my-box');

for(let x = 1; x < 101; x++) {

    let div = document.createElement("div");


    if (x % 3 === 0 && x % 5 === 0){
        console.log('FizzBuzz') 
        div.classList.add('my-small-box')
        div.classList.add('my-bg-orange')
        myBox.append(div)
    } else if(x % 3 === 0){
        console.log('Fizz')
        div.classList.add('my-small-box')
        div.classList.add('my-bg-lightblue')
        myBox.append(div)

    } else if(x % 5 === 0){
        console.log('Buzz')
        div.classList.add('my-small-box')
        div.classList.add('my-bg-green')
        myBox.append(div)
    } else {
        console.log(x)
        div.classList.add('my-small-box')
        div.classList.add('my-bg-blueish')
        myBox.append(div)
    }

}

