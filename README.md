# bevBE
backed of bev

please add your own database.
i have used mlab .
add your database link at line 16 in the server.js file


mongoose.connect(ADD YOUR DATABASE ADDRESS HERE, { 'useMongoClient': true })
    .then(() => console.log("Connected to productsBE..."))
