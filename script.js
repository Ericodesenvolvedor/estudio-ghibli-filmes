const url = "https://ghibliapi.vercel.app/films";
const movies = document.querySelector(".list-movies");

async function getMovies() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function movie() {
  const data = await getMovies();

  data.forEach(item => {
    const { image, title, description, original_title, director, release_date } = item;
  
    movies.innerHTML += `
    <li>
       <figure>
         <img src="${image}" alt=${title} />
       </figure>
  
       <div>
         <h2>${title}</h2>
         <p>${description}</p>
         <ul>
           <li><Strong>Original Title: </Strong>${original_title}</li>
           <li><Strong>Director: </Strong>${director}</li>
           <li><Strong>Release Date: </Strong>${release_date}</li>
         </ul>
       </div>
     </li>
   `
  })
}

movie();