let myBox = document.getElementById('my-box');

for(let x = 1; x < 101; x++) {

    let div = document.createElement("div");


    if (x % 3 === 0 && x % 5 === 0){
        console.log('FizzBuzz') 
        div.classList.add('my-small-box')
        div.classList.add('my-bg-orange')
        div.innerText =`FizzBuzz`
        myBox.append(div)
    } else if(x % 3 === 0){
        console.log('Fizz')
        div.classList.add('my-small-box')
        div.classList.add('my-bg-lightblue')
        div.innerText =`Fizz`
        myBox.append(div)

    } else if(x % 5 === 0){
        console.log('Buzz')
        div.classList.add('my-small-box')
        div.classList.add('my-bg-green')
        div.innerText =`Buzz`
        myBox.append(div)
    } else {
        console.log(x)
        div.classList.add('my-small-box')
        div.classList.add('my-bg-blueish')
        div.innerText =(x)
        myBox.append(div)
    }

}