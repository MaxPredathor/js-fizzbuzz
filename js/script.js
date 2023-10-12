const myBox = document.getElementById('my-box');

for(let x = 1; x < 101; x++) {

    const div = document.createElement("div");
    div.classList.add('my-small-box')
    let text, bg;
    
    if (x % 3 === 0 && x % 5 === 0){
        console.log('FizzBuzz') ;
        bg = 'my-bg-orange';
        text =`FizzBuzz`;
    } else if(x % 3 === 0){
        console.log('Fizz');
        bg = 'my-bg-lightblue';
        text =`Fizz`;
    } else if(x % 5 === 0){
        console.log('Buzz');
        bg = 'my-bg-green';
        text =`Buzz`;
    } else {
        console.log(x);
        bg = 'my-bg-blueish';
        text =(x);
    }
    div.classList.add(bg);
    div.innerText = text;
    myBox.append(div);
}