function greeting() {
    console.log('こんにちは');
}
b = document.querySelector('button#print');
b.addEventListener('click', greeting);