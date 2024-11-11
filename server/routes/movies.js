//adding api for pagination, search results and filtering

const router = require("express").Router();
const Movie = require("../models/Movie");

router.get("/movies", async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    let sort = req.query.sort || "rating";
    let genre = req.query.genre || "All";

    const genreOptions = [
      "Acton",
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

    genre === "All"
      ? (genre = [...genreOptions])
      : (genre = req.query.genre.split(","));
    req.query.sort ? (sort = req.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }

    const movies = await Movie.find({name: {$regex: search, $options: "i"}})
    .where("genere")
    .in([...genre])
    .sort(sortBy)
    .skip(page * limit)

    const total = await Movie.countDocuments({
        genre: {$in:[...genre]},
        name: {$regex: search, $options: "i"},
    });

    const response = {
        error: false,
        total,
        page:page + 1,
        limit,
        genres:genreOptions,
        movies,
    };

    res.status(200).json(response);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});

module.exports = router;
