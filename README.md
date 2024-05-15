# Assignment 1 (Movie Module)

## Description
This node.js module allows users to add movies , update movie details , delete movies , search for movies , view details and book tickets for any movies.

## Intructions

To use this module in your Node.js project, follow these steps:

1. Install Node.js if you have not already done so.
2. Download `Lennard_movie.js` file and put it into your file directory.
3. Create a file named `movie.js`.
4. Install the module by typing this in the terminal:
```ruby
npm install Lennard_movie
```
## Usage

In your movie.js, add in `const playlist = require('./Lennard_movie.js');` at the top.

You can paste the codes below:

```js

//Adds a movie
addMovie("Monday","Angry Pigs", "13:00", "15:00", "04/03/2023", "7");
  

//Adds a movie
addMovie("Tuesday", "Nika", "16:00", "17:30", "05/03/2023", "1");
  

//Adds a movie
addMovie("Monday", "WOW!", "10:00", "12:30", "04/03/2023", "5");
  

//Search movie by the show day
const monday = findMoviesByDay('Monday');
logMovies(monday);

//Updates the movie details by the movie name + 
//View all the movie details at once
updateMovieDetails('WOW!', {
    name: 'HEHE!', //Updated the movie name
    start: '15:00', // Updated start time
    end: '17:30',   // Updated end time
    date: '06/03/2023' // Updated date
});

//View all the movie details at once
console.log(viewAllMovies());

//Booking of tickets for the movie and the amount of tickets
bookTickets("Angry Pigs",2);

//Delete the movie by the show day
deleteMovieByDay("Monday");
console.log(viewAllMovies());    


//Delete the movie by the movie name
deleteMovieByName("Nika");
console.log(viewAllMovies());   
```
## Function

- addMovie(day, name, start, end, date, cost): Allows you to add any movie with the details
- deleteMovieByDay(day): Delete the movie by the show day
- deleteMovieByName(name): Delete the movie by their movie name
- findMoviesByDay(day): Search any movie by their show day
- logMovies(movies): Sort movies by the day in the database and display the movie details through findMoviesByDay
- updateMovieDetails(movieName,updatedDetails): Function to update movie details by their movie name
- viewAllMovies(): Display all the movies in the database
- bookTickets(movieName,numTickets): Book any amount of tickets for a movie