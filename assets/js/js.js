function clickMe() {
    var demo = document.getElementById('demo');
    demo.innerHTML = "Hi to see you";
    demo.style.color = 'red';
    demo.style.backgroundColor = 'blue';

    var body = document.getElementsByTagName('body')[0]; // Accessing the body element at index 0
    body.style.backgroundColor = "yellow";
}
