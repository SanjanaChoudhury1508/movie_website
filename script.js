let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

const showSlide = (index) => {
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
};

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

const movies = [
  { title: "It's Kind of a Funny Story", type: "movie", category: "funny", img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Funnystory.png" },
  { title: "Funny People", type: "movie", category: "funny", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQGarAUUY13Se3rDVtK5FJkMj40idRQjmRHiVqfK7FmTkE32RdLJRMM0pDBy9EpaWHAFckCg" },
  { title: "Funny Games", type: "movie", category: "funny", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQet4iE8Y4bf9DRsnJoIhN8-OvsnP6ljs1W-r79hu8kw1SJADU2k2ndu5FiXXafKyVlAGITrw" },
  { title: "Funny Games", type: "movie", category: "funny", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQet4iE8Y4bf9DRsnJoIhN8-OvsnP6ljs1W-r79hu8kw1SJADU2k2ndu5FiXXafKyVlAGITrw" },
  { title: "AFK: The Webseries", type: "series", category: "webseries", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTikAIvOIup6cpH3_NLXAGR8AW5R_wI4N2yA4STYRD6fD-vEK2mI6Su1U4VyzjOR8F6vDWD" },
  { title: "Horror Hotel: The Webseries", type: "series", category: "webseries", img: "https://posters.movieposterdb.com/23_02/2013/3538742/l_horror-hotel-the-webseries-movie-poster_fe4a80e2.jpg" },
  { title: "The Webseries", type: "series", category: "webseries", img: "https://cdn.marvel.com/content/1x/thenewavengers_lob_crd_01.jpg" },
  { title: "Percy Jackson Webseries", type: "series", category: "webseries", img: "https://cdn.marvel.com/content/1x/thenewavengers_lob_crd_01.jpg" },
  { title: "It's Kind of a Funny Story", type: "movie", category: "marvel", img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Funnystory.png" },
  { title: "Funny People", type: "movie", category: "marvel", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQGarAUUY13Se3rDVtK5FJkMj40idRQjmRHiVqfK7FmTkE32RdLJRMM0pDBy9EpaWHAFckCg" },
  { title: "Funny Games", type: "movie", category: "marvel", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQet4iE8Y4bf9DRsnJoIhN8-OvsnP6ljs1W-r79hu8kw1SJADU2k2ndu5FiXXafKyVlAGITrw" },
  { title: "Funny Games", type: "movie", category: "marvel", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQet4iE8Y4bf9DRsnJoIhN8-OvsnP6ljs1W-r79hu8kw1SJADU2k2ndu5FiXXafKyVlAGITrw" },
  { title: "AFK: The Webseries", type: "series", category: "webseries", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTikAIvOIup6cpH3_NLXAGR8AW5R_wI4N2yA4STYRD6fD-vEK2mI6Su1U4VyzjOR8F6vDWD" },
  { title: "Horror Hotel: The Webseries", type: "series", category: "webseries", img: "https://posters.movieposterdb.com/23_02/2013/3538742/l_horror-hotel-the-webseries-movie-poster_fe4a80e2.jpg" },
  { title: "The Webseries", type: "series", category: "webseries", img: "https://cdn.marvel.com/content/1x/thenewavengers_lob_crd_01.jpg" },
  { title: "Percy Jackson Webseries", type: "series", category: "webseries", img: "https://cdn.marvel.com/content/1x/thenewavengers_lob_crd_01.jpg" },
  { title: "It's Kind of a Funny Story", type: "movie", category: "animation", img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Funnystory.png" },
  { title: "Funny People", type: "movie", category: "animation", img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQGarAUUY13Se3rDVtK5FJkMj40idRQjmRHiVqfK7FmTkE32RdLJRMM0pDBy9EpaWHAFckCg" },
  { title: "Funny Games", type: "movie", category: "animation", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQet4iE8Y4bf9DRsnJoIhN8-OvsnP6ljs1W-r79hu8kw1SJADU2k2ndu5FiXXafKyVlAGITrw" },
  { title: "Funny Games", type: "movie", category: "animation", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQet4iE8Y4bf9DRsnJoIhN8-OvsnP6ljs1W-r79hu8kw1SJADU2k2ndu5FiXXafKyVlAGITrw" },
];

function renderMovies(list) {
  const container = document.getElementById('movieContainer');
  container.innerHTML = '';
  list.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
      <p>Type : ${movie.type}</p>
      <div class="heart">❤</div>
    `;
    container.appendChild(card);
  });
}

function filterCategory(category) {
  const filtered = movies.filter(m => m.category === category);
  renderMovies(filtered);
}

function searchMovies() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(query));
  renderMovies(filtered);
}

// Initial render
renderMovies(movies);

let midcurrentIndex = 0;
  const midslides = document.getElementById("midslides");
  const dots = document.querySelectorAll(".dot");

  function updateSlide(index) {
    midslides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function nextSlide() {
    midcurrentIndex = (midcurrentIndex + 1) % 3;
    updateSlide(midcurrentIndex);
  }

  function prevSlide() {
    midcurrentIndex = (midcurrentIndex - 1 + 3) % 3;
    updateSlide(midcurrentIndex);
  }

  function goToSlide(index) {
    midcurrentIndex = index;
    updateSlide(midcurrentIndex);
  }

  // Auto slide
  setInterval(nextSlide, 4000);

  // Initial
  updateSlide(midcurrentIndex);

   const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      // Close all
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove("active");
      });
      // Toggle current
      item.classList.toggle("active");
    });
  });