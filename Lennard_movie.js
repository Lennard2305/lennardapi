
//Define a database to store the movies
let database = [];

// Function to add any movie you want , to include the details
function addMovie(day, name, start, end, date, cost) {
    
    if (typeof name !== 'string'|| name.trim() === "") {
        console.log("Invalid movie name. Movie name must be a string.");
        return;
    }
    // Check if a movie with the same name already exists
    const existingMovie = database.find(movie => movie.name === name);
    if (existingMovie) {
        console.log(`Movie '${name}' already exists in the database.`);
        return; 
    }

    database.push({
        day: day,
        name: name,
        start: start,
        end: end,
        date: date,
        cost: cost
    });
    console.log(`Movie '${name}' added successfully!`);
}

// Function to delete movies by day from the database
function deleteMovieByDay(day) {
    database = database.filter(movie => movie.day !== day);
    console.log(`Movies on '${day}' deleted successfully!`);
}

// Function to delete movies by name from the database
function deleteMovieByName(name) {
    database = database.filter(movie => movie.name !== name);
    console.log(`Movie '${name}' deleted successfully!`);
}
// Function to view all the movies available in the database
function viewAllMovies() {
    console.log("Movies playing right now:");
    database.forEach(movie => {
        console.log(`Name: ${movie.name}, Day: ${movie.day}, Start Time: ${movie.start}, End Time: ${movie.end}, Date: ${movie.date}, Cost: ${movie.cost}`);
    });
}
// Function to search for movies by their show day
function findMoviesByDay(day) {
    const matchingMovies = database.filter(movie => movie.day === day);
    return matchingMovies;
}
// Function to sort movies by the day in the database and display the movie details through findMoviesByDay
function logMovies(movies) {
    console.log(`Movies on ${movies[0].day} are:`);
    movies.forEach(movie => {
        console.log(`Name: ${movie.name}, Start Time: ${movie.start}, End Time: ${movie.end}, Date: ${movie.date}`);
    });
}
// Function to update movie details
function updateMovieDetails(movieName, updatedDetails) {
   
    const index = database.findIndex(movie => movie.name === movieName);
    
  
    if (index === 0) {
        console.log(`Movie '${movieName}' not found in the database.`);
        return;
    }

    if (updatedDetails.name && updatedDetails.name !== movieName) {

        if (database.some(movie => movie.name === updatedDetails.name)) {
            console.log(`Movie '${updatedDetails.name}' already exists in the database. Cannot update.`);
            return;
        }
    }

    // This line merges database[index] and updatedDetails
    const updatedMovie = { ...database[index], ...updatedDetails };
    // The selected movie will be overriden by the updatedDetails
    database[index] = updatedMovie;
    
    console.log(`Movie '${movieName}' details updated successfully!`);
}
// Function to book tickets + display total cost
function bookTickets(movieName, numTickets) {

    const movie = database.find(movie => movie.name === movieName);
    if (!movie) {
        console.log(`Movie '${movieName}' not found.`);
        return;
    }

    const ticketCost = movie.cost;
    const totalCost = ticketCost * numTickets;

   console.log(`You have purchased `+numTickets+` of tickets for `+movieName)
   console.log(`The total amount would be $${totalCost}`);
}




addMovie("Monday","Angry Pigs", "13:00", "15:00", "04/03/2023", "7");
   
    
addMovie("Tuesday", "Nika", "16:00", "17:30", "05/03/2023", "1");
    

addMovie("Monday", "WOW!", "10:00", "12:30", "04/03/2023", "5");


const monday = findMoviesByDay('Monday');
logMovies(monday);

updateMovieDetails('WOW!', {
    name: 'HEHE!', //Updated the movie name
    start: '15:00', // Updated start time
    end: '17:30',   // Updated end time
    date: '06/03/2023' // Updated date
});
console.log(viewAllMovies());

bookTickets("Angry Pigs",2);

deleteMovieByDay("Monday");
console.log(viewAllMovies());    

deleteMovieByName("Nika");
console.log(viewAllMovies());    



module.exports =   
addMovie,
deleteMovieByDay,
deleteMovieByName,
viewAllMovies,
findMoviesByDay,
updateMovieDetails,
bookTickets;
