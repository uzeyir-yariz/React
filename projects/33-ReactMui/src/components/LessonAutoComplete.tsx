import { Autocomplete, TextField } from "@mui/material";

const LessonAutoComplete = () => {

  const favoriteMovies = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Dark Knight",
    "Fight Club",
    "Forrest Gump",
    "Pulp Fiction",
    "The Shawshank Redemption",
    "The Lord of the Rings: The Return of the King",
    "The Godfather"
  ];

  return (
    <div>
      <Autocomplete 
      options={favoriteMovies}
      renderInput={(params) => <TextField {...params} label="favori filmlerim" /> }/>
    </div>
  )
}

export default LessonAutoComplete
