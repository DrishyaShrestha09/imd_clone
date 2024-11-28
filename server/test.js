const genreOptions = [
    "Action",
    "Romance",
    "Fantasy",
    "Drama",
    "Crime",
    "Adventure",
    "Thriller",
    "Sci-fi",
    "Music",
    "Family",
  ];

  const genre = "Action, Fantasy, Adventure";

  genre === "All"
    ? (console.log([...genreOptions]))
    : (console.log(genre.split(",")));