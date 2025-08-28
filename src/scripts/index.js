import { getUser } from "./services/user.js"
import { getRepos } from "./services/repositories.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

async function getUserData(userName){
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepos(userName)

    if (userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    user.setInfo(userResponse)
    user.setRepos(repositoriesResponse)

    screen.renderUser(user)
    screen.renderRepos(user)
}

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com Nome do usuario do GitHub')
        return true
    }
}

document.getElementById('btn-search').addEventListener('click', () =>{
    const userName = document.getElementById('input-search').value

    if(validateEmptyInput(userName)) return

    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode

    if (key === 13){
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})