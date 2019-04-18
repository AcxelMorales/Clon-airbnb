// Hero animado
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero')

    let i = 0
    let tiempo = 0

    const imagenes = ['arriba2.jpg', 'arriba.jpg']

    setInterval(() => {
        hero.style.backgroundPositionY = `-${tiempo}px`

        if (tiempo > 40) {
            tiempo = 0
            hero.style.backgroundImage = `url(img/${imagenes[i]})`

            if (i === imagenes.length - 1) {
                i = 0
            } else {
                i++
            }
            console.log(i)
        }

        tiempo++
    }, 100)
})

// Boton flotante
const flotante = document.getElementById('flotante')
flotante.addEventListener('click', e => {
    e.preventDefault()

    const footer = document.getElementById('footer')
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo')
        flotante.innerHTML = 'Idioma y Moneda'
        flotante.classList.remove('activo')
    } else {
        footer.classList.add('activo')
        flotante.innerHTML = 'X Cerrar'
        flotante.classList.add('activo')
    }
})