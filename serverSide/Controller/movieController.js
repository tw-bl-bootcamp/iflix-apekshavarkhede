const movieServices = require('../Services/movieServices')

exports.movieListController = (request, response) => {
    let Data = {
        'title': request.body.title,
        'language': request.body.language,
        'reviews': request.body.reviews,
        'ratings': request.body.ratings,
        'category': request.body.category
    }
    movieServices.movieList(Data, (error, data) => {
        if (error) {
            let result = {
                'status': 404,
                'message': 'error while showing movielist',
                'data': error
            }
            response.send(result)
        }

        let result = {
            'status': 200,
            'message': 'sucessfully showing movielist',
            'data': data
        }
        response.send(result)

    })
}



