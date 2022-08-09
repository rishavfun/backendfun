const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
router.get('/movies', function(req,res){
    let movies = ['kgf', 'don','jllb']
    res.send(movies)
})

router.get('/movies/:indexNumber', function(req,res){
    let requestParams = req.params
    let movieIndex = requestParams.indexNumber
    console.log(movieIndex);
    let movies = ['don','pk', 'omg']
    if(movieIndex>2){
        movies[movieIndex] = "use valid index"

    }
    res.send(movies[movieIndex])

})
router.get('/films',function(req,res){
films = [{    "id": 0,
"name": "don"},
{
    "id" : 1,
    'name': "lal singh chada"
},
{
    'id': 2,
    'name':"omg"
}]
   res.send(films)
})
router.get('/films/:filmId',function(req,res){
    films = [{    "id": 0,
    "name": "don"},
    {
        "id" : 1,
        'name': "lal singh chada"
    },
    {
        'id': 2,
        'name':"omg"
    }]


})



router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})





module.exports = router;