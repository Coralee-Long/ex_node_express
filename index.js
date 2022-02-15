const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
app.use(
  express.urlencoded({
    extended: false,
  })
);

const movies = [
  { id: 1, name: "Don't look up" },
  { id: 2, name: "Joker" },
  { id: 3, name: "Parasite" },
  { id: 4, name: "Old Boy" },
];

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === parseInt(id));
  res.send(movie);
});

app.post("/movies", (req, res) => {
  const movieArray = movies[movies.length - 1];
  const movie = {
    id: movies.id + 1,
    name: req.body.name,
  };
  movies.push(movie);
  res.send(movie);
});

app.put("/movies/:id", (req, res) => {
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
  movie.name = req.body.name;
  res.send(movie);
});

app.delete("/movies/:name", (req, res) => {
  const movie = movies.find((movie) => movie.id === parseInt(req.params.name));
  const index = movies.indexOf(movie);
  movies.splice(index, 1);
  res.send(movie);
});

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
