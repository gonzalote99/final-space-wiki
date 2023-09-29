const ctn = document.getElementById('cnt');

fetch('https://finalspaceapi.com/api/v0/episode/')
.then(res => res.json())
.then(d => {
  for(let i = 0; i < d.length; i++) {
    const card = document.createElement('div');
    const bottom = document.createElement('div');
    card.classList.add('card');
    bottom.classList.add('bottom');
    ctn.appendChild(card);
    

    const img = document.createElement('img');
    img.src = d[i].img_url;
    const chaper = document.createElement('h3');
    const airdate = document.createElement('p');
    const directorwr = document.createElement('h4');


    chaper.innerHTML = d[i].name;
    airdate.innerHTML = 'air date: ' + d[i].air_date;
    directorwr.innerHTML = 'director & writer' + d[i].directorwr + '&' + d[i].writer;

    card.appendChild(img)
    card.appendChild(bottom)
    bottom.append(chaper, airdate, directorwr)
  }
});