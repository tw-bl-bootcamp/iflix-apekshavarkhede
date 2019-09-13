const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    "Title": {
        type: String,
        required: [true, 'Movie name is requireds']
    },
    "Language": {
        type: String,
        required: [true, 'Language must be specified']
    },
    "Reviews": {
        type: String,
        required: [true, 'Reviews should be present']
    },
    "Ratings": {
        type: String,
        required: [true, 'Ratings should be present']
    },
    "Category": {
        type: String,
        required: [true, 'Category must be specified']
    }
})

const movie = mongoose.model('movies', movieSchema)
class MovieModel {
    constructor() {}

    showMovieList(data, callback) {
        movie.find((error, result) => {
            if (error) {
                return callback(err)
            }
            if (result.length != 0) {
                return callback(null, result)
            }
        })
    }

}

var movies = new MovieModel();
module.exports = movies;




