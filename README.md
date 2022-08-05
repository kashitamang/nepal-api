# nepal-api Support Documentation

Use this free api to create, read, update and delete data on nepal's caste system, districts, exports, flowers, and religions.
We recommend our <a href="https://www.postman.com/kashitamang/workspace/nepal-api/overview">Postman</a> workspace to submit cURL requests 

| Resources        | Routes                                   |
| -----------------| -----------------------------------------|
| /castes          | GET all, GET by id, POST, PATCH, DELETE  |
| /flowers         | GET all, GET by id, POST, PATCH, DELETE  |
| /religions       | GET all, GET by id, POST, PATCH, DELETE  |
| /exports         | GET all, GET by id, POST, PATCH, DELETE  |
| /districts       | GET all, GET by id, POST, PATCH, DELETE  |

# API Calls
Introduction
The nepal-api (Application Programming Interface) allows you to access our small database of resource infomation on the country of Nepal. You can use the API to build your own dynamic websites, practice testing api, or applications backed by the same data used on nepal-api.

# Capabilities
With the nepal-api, you can:
<br>
<br>
-Search for and display datapoints
<br>
-Create new datapoits
<br>
-Update or Delete exsiting datapoints
<br>
-You can, for example, display a list of caste names, see more info on them based on id, and add a new caste to the database.

# Using the API
This is a RESTful API, meaning that it uses predictable URLs to access resources and, in case of an error, returns meaningful HTTP response codes.

# Request Structure
The API is accessed through GET requests following this overall pattern:

<div align="center">
curl -H https://nepal-api.herokuapp.com/districts
Response Structure
[

{"id":"1","name":"Gorkha"},

{"id":"2","name":"Kathmandu"},

{"id":"3","name":"Pokhara"}

]
</div>

# Endpoints
Please visit the live site for a complete list of curl requests and endpoints.

# Query Parameters
All query parameters such as name, population, revenue_2020 are strings including id's.

