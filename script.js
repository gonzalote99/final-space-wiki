const ctn = document.getElementById('cnt');

fetch('https://finalspaceapi.com/api/v0/character/')
.then(res => res.json())
.then(d => {
  for(let i = 0; i < d.length; i++) {
    const card = document.createElement('div');
    const bottom = document.createElement('div');
    card.classList.add('card');
    bottom.classList.add('bottom');
    ctn.appendChild(card);
    

    const img = document.createElement('img');
    const name = document.createElement('h3');
    const gender = document.createElement('p');
    const origin = document.createElement('p');
    const spstatus = document.createElement('p');
    const abilities = document.createElement('p');

    img.src = d[i].img_url;
    name.innerHTML = d[i].name;
    gender.innerHTML = 'gender: ' + d[i].gender; 
    origin.innerHTML = 'origin: ' + d[i].origin; 
    spstatus.innerHTML = 'Species/Status: ' + d[i].species + ' . ' + d[i].status;
    if(d[i].abilities.length > 0) abilities.innerHTML = 'abilities: ' + d[i].abilities[0];
    if(d[i].abilities.length > 1) abilities.innerHTML += `, and + ${d[i].abilities.length - 1} more` ;

    card.appendChild(img);
    card.appendChild(bottom);
    bottom.append(name, gender, origin, spstatus, abilities)
  }
});