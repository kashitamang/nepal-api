# nepal-api 

Use this free api to create, read, update and delete data on nepal's caste system, districts, exports, flowers, and religions.
I recommend this <a href="https://www.postman.com/kashitamang/workspace/nepal-api/overview">Postman</a> workspace to import requests for all non-GET methods.

# API Calls
Introduction
The nepal-api (Application Programming Interface) allows you to access this small database of resource infomation on the country of Nepal. You can use the API to build your own dynamic websites, practice testing api, or applications backed by the same data used on nepal-api.

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
This is a RESTful API, meaning that it uses predictable URLs to access resources.

# Request Structure
To import a curl request, copy the request structure from <a href="https://nepal-api.herokuapp.com/">the live site</a>, on Postman visit <code>import</code> on the left hand sidebar > <code>raw text</code> > <code>continue</code> > <code>import</code> and <code>send</code> the request to receive JSON. The API is accessed through GET requests following this overall pattern:

<div align="center">
  <code>
    curl -H https://nepal-api.herokuapp.com/districts 
  </code>
  
# Response Structure
  <code>[{"id":"1","name":"Gorkha"},{"id":"2","name":"Kathmandu"},{"id":"3","name":"Pokhara"}]
  </code>
</div>

# Endpoints
Please visit the live site for a complete list of curl requests and endpoints.

# Query Parameters
All query parameters such as <code>name</code>, <code>population</code>, <code>revenue_2020</code> are strings including id's.

