const router = require('express').Router();
const movieModel = require('../model/movie_model');


// Get All the Movies list  inside  DB

// Postman = http://localhost:5000/movies
router.get('/movies', async (req, res) => {
    const movieList = await movieModel.find();
    console.log(movieList);
    res.send(movieList);
});

//get one  movie data using the movie id

//Postman = http://localhost:5000/movies/id
router.get('/movies/:id', async  (req, res) => {
    const {
        id
    } = req.params;
    const movie = await movieModel.findOne({
        isan: id
    });
    if (!movie) return res.send("movie Not Found");
    res.send(movie);
});




// Post  Insert new Movie records into Database
// Postman = http://localhost:5000/movies
router.post('/movies', async  (req, res) =>  {
    const title = req.body.title;
    const movieCategories = req.body.movieCategories
    const isan = req.body.isan;
    const director = req.body.director;

    const movieExist = await movieModel.findOne({
        isan: isan
    });

    if (movieExist) return res.send('movie already exist');

    var data = await movieModel.create({
        title,
        movieCategories,
        isan,
        director
    });
    data.save();

    res.send("Movie Uploaded Successfully");
});

//Update Movie using id
// put: used to perform update operation.
// Postman = http://localhost:5000/movies/id
router.put('/movies/:id', async  (req, res) => {
    const {id} = req.params;
    const {
        title,
        movieCategories,
        director
    } = req.body;

    const isExist = await movieModel.findOne({
        isan: id
    });
    if (!isExist) return res.send('Movie Does Not Exist');


    const updateField = (val, prev) => !val ? prev : val;

    const updatedMovie = {
        ...isExist,
        title: updateField(title, isExist.title),
        movieCategories: updateField(movieCategories, isExist.movieCategories),
        director: updateField(director, isExist.director)

    };

    await movieModel.updateOne({
        isan: id
    }, {
        $set: {
            title: updatedMovie.title,
            movieCategories: updatedMovie.movieCategories,
            director: updatedMovie.director
        }
    })

    res.status(200).send("Movie Updated Successfully");
});


//  delete movie record by using  movie id.
// Postman = http://localhost:5000/movies/id
router.delete('/movies/:id', async  (req, res) => {
    const {
        id
    } = req.params;

    const isExist = await movieModel.findOne({
        isan: id
    });
    if (!isExist) return res.send('Movie Does Not Exist');

    await movieModel.deleteOne({
        isan: id
    }).then(function () {
        console.log("movie deleted Successfully"); // Success
        res.send("movie Record Deleted Successfully")
    }).catch(function (error) {
        console.log(error); // Failure
    });
});

module.exports = router;