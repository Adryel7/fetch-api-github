const screen = {
    userProfile: document.querySelector('.user'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                            <div class = "data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                                <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                                                <p> 👥${user.followers} seguidores | 👥${user.following} seguindo</p>
                                            </div>
                                      </div>`
    },
    
    reposProfile: document.querySelector('.repos'),
    renderRepos(user){
        let repositoriesItens = ''

        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)
        
        if(user.repositories.length > 0){
            this.reposProfile.innerHTML = `<div class="repositories">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens} </ul>
                                           </div>`
        }else{
             this.reposProfile.innerHTML = 'Usuário não possui repositórios.'
        }
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
        this.reposProfile.innerHTML = ""
    },

    eventsProfile: document.querySelector('.events'),
    renderEvents(user){
        let eventsItens = ''

        user.events.forEach(function(events) {
            
            if (events.type === 'PushEvent'){
                eventsItens += `<li><span>${events.repo.name}</span> - ${events.payload.commits[0].message}</li>`
            }if(events.type === 'CreateEvent'){
                eventsItens += `<li><span>${events.repo.name}</span> - Sem mensagem de commit</li>`
            }
        })     
        if(user.events.length > 0){
            this.eventsProfile.innerHTML = `<div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens} </ul>
                                           </div>`
        }else{
             this.eventsProfile.innerHTML = 'Usuário não possui eventos recentes.'
        }
    }
}



export{screen}