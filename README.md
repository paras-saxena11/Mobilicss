# Mobilicss
Introduction : 
I began by importing the data into MongoDB Atlas, after which I created a Node.js application and linked to the database using Mongoose. In my project, I used regex to filter and choose particular data from the MongoDB database, and aggregation is used to group the data from the database. ExpressJS is used to generate the API. Finally, using React-Bootstrap and ReactJS, the data is shown client-side using tables.

Explanation:

For Server.js 
Server that uses port 5000 for listening. For requests from Client-side, the server enables Cross-Origin Resource Sharing using the cors middleware. The sampleRoutes module, which includes the application's API endpoints, is imported and used by the server. The "connection" module, which creates the connection between the server and the MongoDB database, is also necessary and executed by the server. The app uses the middleware packages "express.urlencoded" and "express.json" to parse incoming request data in JSON and URL-encoded formats, respectively.

For User Model:
A schema for the "User" collection is defined in my code example. Every document in the collection is expected to contain the fields and data types that are specified in the schema. A particular data type, such Number, String, or Date, is connected to each field.

For Api:
It handles HTTP requests and routes using the Express.js framework. Additionally, it connects to the MongoDB database and interacts with data using Mongoose, an ODM for MongoDB. The code provides five distinct API endpoints that filter data according to specified requirements using different MongoDB aggregation methods. Some of the queries use regular expressions to match particular patterns. 
At last for getting TopCities : The users are first grouped by city using the $group function, and the user count in each city is then determined using the $sum function. Additionally, it computes each city's total user income using the $sum and $toDouble functions. Then, using the $addFields function, a new field called average_income is added, and using the $division and $round functions, the average income of users in each city is determined. The results are then limited to 10 and sorted by user count in descending order using $sort and $limit, respectively.

For React component:
Component that uses Axios to retrieve data from an API and show it in tables. To store data retrieved from the API, the component has four states users: maleUsers, mUsers, carUsers, and cities. Once the component is mounted, the data is fetched from the API using the useEffect hook. Four tables are displayed by the component, each of which shows data from a separate API endpoint.
