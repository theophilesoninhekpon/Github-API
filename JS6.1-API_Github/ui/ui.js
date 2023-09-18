import { dateDiffInDays, deleteCardIf } from '../utilities/utilities.js';

function showUser(user) {

        // Eléments de la vue à modifier
        let userName = document.getElementById('username');
        let name = document.getElementById('name');
        let numberOfRepos = document.getElementById('repos');
        let avatarUrl = document.getElementById('avatar');
        let dateInfos = document.getElementById('date');
        let profileUrl = document.getElementById('link');

        // Traitement des données
        let date = user.created_at;
        let dateFormatted = date.slice(0, date.indexOf('T')).replace(/-/g,'/');
        let diffOfDays = dateDiffInDays(date);
       
        // Insertion des données dans le DOM
        userName.textContent = user.login;
        name.textContent = user.name;
        dateInfos.textContent = `Utilisateur créé le ${dateFormatted}, ${diffOfDays}`;
        numberOfRepos.textContent = `Nombre de repos publics: ${user.public_repos}`;
        avatarUrl.src = user.avatar_url;
        profileUrl.href=user.url
      
}

export default showUser;
