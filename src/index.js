'use strict';
const films = [
  {
    title: 'Hustler',
    genre: ['Comedy', 'Crime', 'Drama'],
    year: 2019,
  },
  {
    title: 'Contagion',
    genre: ['Drama', 'Thriller'],
    year: 2011,
  },
  {
    title: 'Hotel Mumbai',
    genre: ['Drama', 'Thriller', 'Historical'],
    year: 2019,
  },
  {
    title: 'Extremely Wicked, Shockingly Evil and Vile',
    genre: ['Crime', 'Thriller'],
    year: 2019,
  },
  {
    title: 'Angel Has Fallen',
    genre: ['Action movie', 'Drama', 'Thriller'],
    year: 2019,
  },
  {
    title: 'Rambo: Last Blood',
    genre: ['Adventures', 'Action movie', 'Thriller'],
    year: 2019,
  },
  {
    title: 'Drama',
    genre: ['Drama', 'Thriller'],
    year: 2016,
  },
  {
    title: 'Jumanji: The Next Level',
    genre: ['Comedy', 'Adventures', 'Action movie', 'Fantasy'],
    year: 2019,
  },
  {
    title: 'Jason Bourne',
    genre: ['Action movie', 'Thriller'],
    year: 2016,
  },
  {
    title: 'The Impossible',
    genre: 'Drama',
    year: 2012,
  },
  {
    title: 'A Prayer Before Dawn',
    genre: ['Action movie', 'Sports', 'Crime', 'Drama'],
    year: 2018,
  },
  {
    title: 'Security',
    genre: 'Action movie',
    year: 2017,
  },
  {
    title: 'Green Book',
    genre: ['Comedy', 'Drama'],
    year: 2018,
  },
  {
    title: 'Night Hunter',
    genre: ['Action movie', 'Thriller'],
    year: 2018,
  },
  {
    title: 'I Feel Pretty',
    genre: 'Comedy',
    year: 2018,
  },
  {
    title: 'Heartbreakers',
    genre: ['Comedy', 'Melodrama'],
    year: 2001,
  },
  {
    title: 'The Wolf\'s Call',
    genre: ['Action movie', 'Drama'],
    year: 2019,
  },
  {
    title: 'Carriers',
    genre: ['Fiction', 'Drama'],
    year: 2019,
  },
  {
    title: 'Arctic',
    genre: ['Adventures', 'Drama'],
    year: 2019,
  },
  {
    title: 'Parasite',
    genre: ['Comedy', 'Drama', 'Thriller'],
    year: 2019,
  },
  {
    title: 'A Simple Favor',
    genre: ['Comedy', 'Detective', 'Crime', 'Drama', 'Thriller'],
    year: 2018,
  },
  {
    title: 'Mortal Engines',
    genre: ['Adventures', 'Action movie', 'Fiction', 'Fantasy', 'Thriller'],
    year: 2018,
  },
  {
    title: 'The Last Witch Hunter',
    genre: ['Action movie', 'Fantasy'],
    year: 2015,
  },
  {
    title: 'Anna',
    genre: ['Action movie', 'Thriller'],
    year: 2019,
  },
  {
    title: 'Hostile',
    genre: ['Drama', 'Horror'],
    year: 2018,
  },
  {
    title: '211',
    genre: ['Action movie', 'Drama', 'Historical'],
    year: 2018,
  },
  {
    title: 'Jumanji: Welcome to the Jungle',
    genre: ['Comedy', 'Adventures', 'Action movie', 'Family', 'Fantasy'],
    year: 2017,
  },
  {
    title: 'World War Z',
    genre: ['Fiction', 'Horror'],
    year: 2013,
  },
];

function FilmsByGenre(filmsArray) {
  this.groupInputFilmList(filmsArray);
}

FilmsByGenre.prototype.groupInputFilmList = function (filmsArray) {
  for (const {title, genre: genres, year} of filmsArray) {
    if (Array.isArray(genres)) {
      for (const genre of genres) {
        if (this.hasOwnProperty(genre)) {
          this[genre].push({title, year});
        } else {
          this[genre] = [{title, year}];
        }
      }
    } else {
      if (this.hasOwnProperty(genres)) {
        this[genres].push({title, year});
      } else {
        this[genres] = [{title, year}];
      }
    }
  }
};

FilmsByGenre.prototype[Symbol.iterator] = function () {
  const filmsList = Object.values(this);

  let genreIndex = 0;
  let filmIndex = 0;

  return {
    next() {
      if (filmIndex === filmsList[genreIndex].length) {
        genreIndex++;
        filmIndex = 0;
      }
      if (genreIndex === filmsList.length)
        return {done: true};
      return {done: false, value: filmsList[genreIndex][filmIndex++]};
    }
  };
};
