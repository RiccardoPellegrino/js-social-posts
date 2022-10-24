const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// BONUS
//  1. Formattare le date in formato italiano (gg/mm/aaaa)

let container = document.getElementById('container');
const likeButton = document.getElementsByClassName("js-like-button")
const likeCounter = document.getElementsByClassName("js-likes-counter")
const likeArray = [];

posts.forEach(value => {
    let primaLetteraNC = value.author.name.split(' ').map(word => word[0]).join('');

    let immagineProfilo =(value.author.image==null)?`<div class="profile-pic-default"><span>${primaLetteraNC}</span></div>` : `<img class="profile-pic" src="${value.author.image}" alt="${value.name}">`;
    
    let post = document.createElement('div');

    post.innerHTML = `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                ${immagineProfilo}          
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">"${value.author.name}"</div>
                <div class="post-meta__time">dd/mm/yyyy</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">"${value.content}"
    </div>
    <div class="post__image">
        <img src="${value.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
            <a class="like-button js-like-button" href="#" data-postid="${value.id}">
                    <i class="like-button__icon fas fa-thumbs-up " aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
                
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${value.id}" class="js-likes-counter">${value.likes}</b> persone
            </div>
        </div> 
    </div>            
</div>
    `;
    container.append(post);

});



for (let i = 0; i < likeButton.length; i++) {
    let likemax = parseInt(likeCounter[i].textContent) + 1;
    console.log(likemax);
    likeButton[i].addEventListener('click', function (event) {
        event.preventDefault();
        if (parseInt(likeCounter[i].textContent) == likemax) {
            likeButton[i].classList.remove('like-button--liked');
            likeCounter[i].innerText = parseInt(likeCounter[i].innerText) - 1;
            const index = likeArray.indexOf(posts[i].id);
            likeArray.splice(index,1)
            console.log("splice "+likeArray);
        } else {
            likeButton[i].classList.add('like-button--liked');
            likeCounter[i].innerText = parseInt(likeCounter[i].innerText) + 1;
            console.log('sono qui ' + likemax);
            likeArray.push(posts[i].id);
            console.log("push "+likeArray);
        }
    });
}