var a = true
document.querySelector('#add').addEventListener('click', function (e) {
    e.preventDefault()
    const input = document.querySelector('#input')
    const mybtns = document.querySelector('#mybtns')
    if (input.value != '') {
        const btn = document.createElement('button')
        const wipe = document.createElement('button')
        wipe.id = 'wipe'
        wipe.textContent='X'
        btn.classList.add('btn')
        mybtns.append(btn)
        btn.textContent = input.value
        btn.append(wipe)
        wipe.style.display = 'none'
        btn.addEventListener('mouseover', function () {
            btn.style.height = '45px'
            wipe.style.display = 'block'
        })
        btn.addEventListener('mouseout', function () {
            wipe.style.display = 'none'
        })
        if (a) {
            btn.addEventListener('click', function () {
                div2.innerHTML = ''
                e.preventDefault()
                add = btn.textContent
                console.log(add)
                showInfo()
            })
        }
        wipe.addEventListener('click', function (e) {
            e.preventDefault()
            mybtns.removeChild(btn)

            a = false

        })
    }
    input.value = ''
})
let button = document.querySelectorAll('.btn')
const div2 = document.querySelector('#div2')
console.log(button)
button.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log('clicked button')
        div2.innerHTML = ''
        e.preventDefault()
        add = button.textContent
        console.log(add)
        showInfo()
    })
})
function showInfo() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=ZlyCZcncxPHx415I0GHt6WNVi5V4ESAy&q=${add}&limit=25&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips

    `)
        .then(function (result) {
            return result.json()
        }).then(function (result) {

            if (a) {
                for (let i = 0; i < 25; i++) {
                    const p = document.createElement('p');
                    const img = document.createElement('img');
                    const imgContainer = document.createElement('div');

                    p.innerHTML = `Rating:${result.data[i].rating}`;
                    img.src = `https://media1.giphy.com/media/${result.data[i].id}/giphy_s.gif`
                    img.addEventListener('click',function(e){
                        e.preventDefault()
                        if(img.src==`https://media1.giphy.com/media/${result.data[i].id}/giphy_s.gif`){
                            img.src = `https://media1.giphy.com/media/${result.data[i].id}/giphy.gif`
                            console.log('alma')
                        }else{
                            img.src = `https://media1.giphy.com/media/${result.data[i].id}/giphy_s.gif`
                        }
                    })
                    imgContainer.classList.add('img-container');
                    imgContainer.append(p, img);
                    div2.append(imgContainer);
                    
                }

            }
            a = true

            console.log(result)
        })
}