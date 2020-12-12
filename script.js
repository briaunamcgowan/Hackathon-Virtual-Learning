var form = document.getElementById("searchForm")

form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").value

    var userName = search.split(' ').join('')

    document.getElementById("result").innerHTML = ""

    fetch("https://api.github.com/users/"+userName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        document.getElementById("result").innerHTML = `
        <a target="_blank" href="https://www.github.com/${userName}"> <img src = "${data.avatar_url}"/>
        </a>`
        
    })
})