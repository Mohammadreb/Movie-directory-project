# Movie-directory-project with REST APi and node js


In this NodeJS  project, I'm gonna  develop backend RESTAPI for  “Movie directory project”, 
 and I'm gonna use  CRUD operation like Create, Read, Update & Delete data from MongoDB Database.
 

1. config /db.js : to Handles MongoDB connection using mongoose.

2. model / movie_model.js : Will have mongodb mongoose schema

3. routes /api.js :
 Will have all the routes to perform CRUD operation.
It will handle routes such as:

    get: Get all movies list of data from DB.

    post: Insert new movie records into Database.

   put: used to perform update operation.

   delete: delete movie record by using movie id.
