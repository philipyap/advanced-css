const body= document.querySelector('body');
console.log(body);

const card = document.createElement('div');
card.classList.add('add');
card.style.width = '18rem';
console.log(card);

const image = document.createElement('img');
image.src = 'https://www.motortrend.com/uploads/sites/5/2020/01/Lamborghini-Huracan-Evo-RWD-front-three-quarters.jpg';
image.classList.add('card-img-top');
image.alt = 'Lamborghini';

console.log(image);

body.appendChild(card);
card.appendChild(image);

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');

const cardTitle = document.createElement('h5');
cardTitle.classList.add('card-title');
cardTitle.textContent = 'Lambohgini';

const cardParagraph = document.createElement('p');
cardParagraph.classList.add('card-text');
cardParagraph.textContent = 'My Car';

const link =document.createElement('a');
link.classList.add('btn', 'btn-primary');
link.href = 'https:// www.lambohgini.com';
link.textContent = 'go to the site';

cardBody.appendChild(cardTitle);
cardBody.appendChild(cardParagraph);
cardBody.appendChild(link);

card.appendChild(cardBody);



