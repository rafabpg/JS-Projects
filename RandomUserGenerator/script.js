const url = 'https://random-data-api.com/api/v2/users';
const image = document.querySelector(".avatar_image");
const description = document.querySelector(".avatar_description");
const body = document.querySelector('body');
function getRandomUser(){    
    fetch(url)
    .then(response=>response.json())
    .then(data => {
        console.log(data);
        image.innerHTML = `<img src="${data.avatar}">`
        description.innerHTML = `
            <h1>${data.first_name} ${data.last_name}</h1>
            <h2>${data.employment.title}</h2>
            <h4>${data.gender}</h4>
            <h4>${data.address.city}</h4>
        `
    })
    .catch(error => console.log(error) )
}
window.addEventListener('load',getRandomUser);