// Elementler
const posterInput = document.getElementById('poster-input');
const posterPreview = document.getElementById('poster-preview');
const uploadArea = document.getElementById('upload-area');
const paletteContainer = document.getElementById('palette-container');
const colorPalette = document.getElementById('color-palette');
const changeImageContainer = document.getElementById('change-image-container');
const changeImageButton = document.getElementById('change-image-button');
const similarFilmsContainer = document.getElementById('similar-films-container');
const similarFilms = document.getElementById('similar-films');

// Film verileri (backend'i yazılıp API'dan çekilebilir)
const filmsData = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        imdbUrl: "https://www.imdb.com/title/tt0111161/",
        posterUrl: "https://image.tmdb.org/t/p/original/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        colorPalette: [[40, 0, 0],
            [220, 160, 80],
            [120, 60, 20],
            [255, 240, 220],
            [120, 120, 120]]
    },
    {
        id: 2,
        title: "The Godfather",
        imdbUrl: "https://www.imdb.com/title/tt0068646/",
        posterUrl: "https://posters.movieposterdb.com/22_12/2006/841107/l_the-godfather-mob-wars-movie-poster_505777b5.jpg",
        colorPalette: [[20, 20, 20],
            [240, 240, 240],
            [80, 80, 80],
            [140, 140, 140],
            [200, 40, 40]]
    },
    {
        id: 3,
        title: "The Dark Knight",
        imdbUrl: "https://www.imdb.com/title/tt0468569/",
        posterUrl: "https://posters.movieposterdb.com/24_06/2008/468569/l_the-dark-knight-movie-poster_96214dbd.jpg",
        colorPalette: [[0, 20, 40],
            [20, 80, 100],
            [100, 140, 160],
            [160, 200, 220],
            [220, 60, 40]]
    },
    {
        id: 4,
        title: "Pulp Fiction",
        imdbUrl: "https://www.imdb.com/title/tt0110912/",
        posterUrl: "https://posters.movieposterdb.com/25_04/1994/110912/l_pulp-fiction-movie-poster_0ee5fd42.png",
        colorPalette: [[20, 20, 20],
            [220, 20, 20],
            [240, 220, 0],
            [80, 80, 80],
            [220, 140, 100]]
    },
    {
        id: 5,
        title: "Fight Club",
        imdbUrl: "https://www.imdb.com/title/tt0137523/",
        posterUrl: "https://posters.movieposterdb.com/13_06/1999/137523/l_137523_1d292ea3.jpg",
        colorPalette: [[20, 20, 20],
            [240, 220, 180],
            [220, 80, 160],
            [80, 80, 20],
            [220, 160, 40]]
    },
    {
        id: 6,
        title: "Inception",
        imdbUrl: "https://www.imdb.com/title/tt1375666/",
        posterUrl: "https://posters.movieposterdb.com/10_06/2010/1375666/l_1375666_07030c72.jpg",
        colorPalette: [[0, 20, 40],
            [40, 80, 100],
            [100, 140, 160],
            [160, 200, 200],
            [220, 40, 40]]
    },
    {
        id: 7,
        title: "The Matrix",
        imdbUrl: "https://www.imdb.com/title/tt0133093/",
        posterUrl: "https://posters.movieposterdb.com/06_01/1999/0133093/l_77607_0133093_ab8bc972.jpg",
        colorPalette: [[20, 20, 20],
            [100, 120, 140],
            [180, 200, 200],
            [100, 60, 140],
            [40, 40, 60]]
    },
    {
        id: 8,
        title: "Goodfellas",
        imdbUrl: "https://www.imdb.com/title/tt0099685/",
        posterUrl: "https://posters.movieposterdb.com/05_09/1990/0099685/l_54529_0099685_307a5bd2.jpg",
        colorPalette: [[20, 20, 20],
            [80, 80, 80],
            [200, 200, 200],
            [180, 120, 100],
            [20, 20, 40]]
    },
    {
        id: 9,
        title: "The Silence of the Lambs",
        imdbUrl: "https://www.imdb.com/title/tt0102926/",
        posterUrl: "https://posters.movieposterdb.com/21_02/1991/102926/l_102926_90bd926b.jpg",
        colorPalette: [[240, 240, 240],
            [20, 20, 20],
            [180, 180, 180],
            [100, 100, 100],
            [255, 60, 40]]
    },
    {
        id: 10,
        title: "Interstellar",
        imdbUrl: "https://www.imdb.com/title/tt0816692/",
        posterUrl: "https://posters.movieposterdb.com/14_09/2014/816692/l_816692_593eaeff.jpg",
        colorPalette: [[200, 220, 220],
            [40, 60, 60],
            [140, 160, 160],
            [140, 100, 100],
            [220, 240, 240]]
    },
    {
        id: 11,
        title: "Parasite",
        imdbUrl: "https://www.imdb.com/title/tt6751668/",
        posterUrl: "https://posters.movieposterdb.com/21_11/2019/6751668/l_6751668_0d0409c5.jpg",
        colorPalette: [[20, 20, 40],
            [60, 140, 80],
            [140, 180, 180],
            [20, 80, 80],
            [240, 240, 240]]
    },
    {
        id: 12,
        title: "Whiplash",
        imdbUrl: "https://www.imdb.com/title/tt2582802/",
        posterUrl: "https://posters.movieposterdb.com/15_04/2014/2582802/l_2582802_e45869e6.jpg",
        colorPalette: [[20, 20, 20],
            [180, 40, 40],
            [60, 100, 120],
            [200, 220, 220],
            [160, 160, 160]]
    },
    {
        id: 13,
        title: "The Green Mile",
        imdbUrl: "https://www.imdb.com/title/tt0120689/",
        posterUrl: "https://posters.movieposterdb.com/05_07/1999/0120689/l_34970_0120689_e3f4a87d.jpg",
        colorPalette: [[20, 20, 20],
            [80, 80, 80],
            [140, 140, 140],
            [240, 180, 80],
            [240, 240, 240]]
    },
    {
        id: 14,
        title: "The Prestige",
        imdbUrl: "https://www.imdb.com/title/tt0482571/",
        posterUrl: "https://posters.movieposterdb.com/06_11/2006/0482571/l_146373_0482571_5b8813d5.jpg",
        colorPalette: [[20, 20, 20],
            [240, 160, 80],
            [180, 100, 40],
            [240, 240, 240],
            [60, 80, 80]]
    },
    {
        id: 15,
        title: "Gladiator",
        imdbUrl: "https://www.imdb.com/title/tt0172495/",
        posterUrl: "https://posters.movieposterdb.com/08_08/2000/172495/l_172495_2cce6a7c.jpg",
        colorPalette: [[20, 20, 20],
            [255, 240, 200],
            [200, 180, 80],
            [80, 80, 60],
            [180, 120, 40]]
    }
];

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

function calculateColorDistance(rgb1, rgb2) {
    const rDiff = rgb1[0] - rgb2[0];
    const gDiff = rgb1[1] - rgb2[1];
    const bDiff = rgb1[2] - rgb2[2];
    return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
}

function findSimilarFilms(inputPalette, films) {
    return films.map(film => {
        let totalDistance = 0;
        inputPalette.forEach(inputColor => {
            let minDistance = Infinity;
            film.colorPalette.forEach(filmColor => {
                const distance = calculateColorDistance(inputColor, filmColor);
                if (distance < minDistance) minDistance = distance;
            });
            totalDistance += minDistance;
        });
        return { ...film, distance: totalDistance };
    }).sort((a, b) => a.distance - b.distance);
}

function displaySimilarFilms(similarFilmsList) {
    similarFilms.innerHTML = '';

    similarFilmsList.slice(0, 3).forEach(film => {
        const filmCard = document.createElement('div');
        filmCard.className = 'bg-gray-700 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer';

        // IMDB linkini ekliyoruz
        filmCard.innerHTML = `
            <a href="${film.imdbUrl}" target="_blank" rel="noopener noreferrer" class="block">
                <img src="${film.posterUrl}" alt="${film.title}" 
                     class="w-full h-64 object-cover"
                     onerror="this.onerror=null;this.src='https://via.placeholder.com/300x450?text=Poster+Bulunamadı'">
                <div class="p-4">
                    <h3 class="text-md font-semibold">${film.title}</h3>
                </div>
            </a>
        `;

        similarFilms.appendChild(filmCard);
    });

    similarFilmsContainer.classList.remove('hidden');
}

function displayColors(palette) {
    colorPalette.innerHTML = '';

    palette.forEach((rgb, index) => {
        const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-item w-full h-24 rounded-lg relative cursor-pointer group';
        colorDiv.style.backgroundColor = hex;
        colorDiv.innerHTML = `
      <span class="opacity-0 group-hover:opacity-100 text-xs font-medium bg-black bg-opacity-50 text-white rounded-md p-1 absolute bottom-2 left-1/2 -translate-x-1/2 transition-opacity">${hex}</span>
      <span class="copy-message hidden absolute top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs rounded px-2 py-1">Copied!</span>
    `;

        colorDiv.addEventListener('click', () => {
            navigator.clipboard.writeText(hex).then(() => {
                const copyMessage = colorDiv.querySelector('.copy-message');
                copyMessage.classList.remove('hidden');
                setTimeout(() => copyMessage.classList.add('hidden'), 1000);
            });
        });

        colorPalette.appendChild(colorDiv);
    });

    paletteContainer.classList.remove('hidden');
    const similarFilmsList = findSimilarFilms(palette, filmsData);
    displaySimilarFilms(similarFilmsList);
}


function analyzeImage() {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = posterPreview.src;

    img.onload = () => {
        try {
            const colorThief = new ColorThief();
            const palette = colorThief.getPalette(img, 5);
            displayColors(palette);
        } catch (error) {
            console.error("Renk analizi hatası:", error);
            alert("Renk paleti çıkarılamadı. Lütfen farklı bir görsel deneyin.");
        }
    };

    img.onerror = () => {
        alert("Görsel yüklenirken hata oluştu.");
    };
}


posterInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            posterPreview.src = event.target.result;
            posterPreview.classList.remove('hidden');
            uploadArea.classList.add('hidden');
            changeImageContainer.classList.remove('hidden');

            posterPreview.onload = () => {
                setTimeout(analyzeImage, 100);
            };
        };
        reader.readAsDataURL(file);
    }
});


changeImageButton.addEventListener('click', () => {
    posterInput.value = '';
    posterInput.click();
});


uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('border-indigo-400', 'bg-gray-700');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('border-indigo-400', 'bg-gray-700');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('border-indigo-400', 'bg-gray-700');

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        posterInput.files = e.dataTransfer.files;
        posterInput.dispatchEvent(new Event('change'));
    }
});


uploadArea.addEventListener('click', () => {
    posterInput.click();
});