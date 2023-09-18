async function getUser(username) {
	// Jeton d'accès à l'API
    const accessToken = "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";
    const apiUrl = `https://api.github.com/users/${username}`;

    // Créer un objet d'en-têtes avec le jeton d'accès
    const headers = {
        'Authorization' : `Bearer ${accessToken}`
    };

    let response = await fetch(apiUrl, headers);
    
    let data = await response.json();

    console.log(data);
    return data;
}

export default getUser;
