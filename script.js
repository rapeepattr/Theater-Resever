const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')

const count = document.getElementById('count')
const total = document.getElementById('total')

const selectedMovie = document.getElementById('movie')

let price = +selectedMovie.value 

container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateSelected()
    }
})

selectedMovie.addEventListener('change', e => {
    price = +e.target.value

    setMovieData(e.target.selectedIndex, e.target.value)
    updateSelected()
})

function updateSelected() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const countSeats = selectedSeats.length
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    count.innerText = countSeats
    total.innerText = countSeats * price
}

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('movieIndex', movieIndex)
    localStorage.setItem('moviePrice', moviePrice)
}