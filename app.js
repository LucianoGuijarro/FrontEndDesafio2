let valorCheck = document.querySelectorAll('input[name="radio"]');

const validationSubmit = () => {
    if(!document.querySelector('input[name="radio"]:checked')){
        event.preventDefault()
        document.querySelector('.textoEscondido').style.display = 'block'
    }
}

valorCheck.forEach((checkBox) => {
    checkBox.addEventListener('change', (event) => {
        if(event.target.checked) {
            document.querySelector('.textoEscondido').style.display = 'none'
            localStorage.setItem('radio', event.target.value)
        }
    })
})

let radio = localStorage.getItem('radio');

document.getElementById('radioValor').innerHTML = `You selected ${radio} of 5`;

function volverHomre(){
    localStorage.clear()
    window.location.href = './index.html'
}
