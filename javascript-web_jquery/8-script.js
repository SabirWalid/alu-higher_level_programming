$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
  $.each(data.results, function (index, film) {
    $('<li>').text(film.title).appendTo('UL#list_movies');
  });
});
