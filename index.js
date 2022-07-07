console.log('hello word')
const inputField = document.querySelector("input")

const ul = document.querySelector("ul")

const form = document.querySelector("form")

const message = document.querySelector("#message")


addMovie = (evt) => {
    evt.preventDefault()
    const movie = document.createElement("li")
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)
    ul.appendChild(movie)
    inputField.value = ""
}

const deleteMovie = (evt) => {
    evt.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
}

const crossOffMovie = (evt) => {
    evt.target.classList.toggle('checked')
    if(evt.target.classList.contains('checked')){
        message.textContent = "Movie has been checked off"
    } else {
        message.textContent = "Movie has been un-checked"
    }
}
 


form.addEventListener('submit',addMovie)
