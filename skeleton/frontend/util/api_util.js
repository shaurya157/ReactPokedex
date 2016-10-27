export const fetchAllPokemon = (success) => {
  $.ajax({
    method: "GET",
    url: "api/pokemon/",
    success,
    error: (error) => {console.log(error);}
  });
};

export const fetchOnePokemon = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/pokemon/${id}`,
    success,
    error: (error) => {console.log(error);}
  });
};
