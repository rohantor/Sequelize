# Documentation
---
## Sequelize training assignment

### **Users:**


***GET*** 
### Get All Users 
- To get users from the database with optional query parameters
as 
    - group 
    - orderBy 
    - order
    - limit
    - offset 

Request URL :http://localhost:3000/user/?group=createdBy&orderBy=id&order=DESC&limit=2&offset=0

Response :
 ```json

[
    {
        "createdBy": 1,
        "count": 3,
        "Role": {
            "name": "user"
        }
    }
]
```


***POST*** 
### Create a new user 
- creates new user in user table

Request URL :http://localhost:3000/user/ 

Request Body :
```json
{
    "username":"c",
    "password":"Test",
    "roleid":1,
    "createdBy" : 1,
    "updatedBy":2
}
```


Response :
 ```json

{
    "msg": "Successfully created a new user"
}
```




***PUT*** 
### Update a user 
- updates whole user all parameters are required

Request URL :http://localhost:3000/user/ 

Request Body :
```json
{
    "username":"T",
    "password":"Test",
    "roleid":1,
    "createdBy" : 2,
    "updatedBy":2
}
```


Response :
 ```json
{
    "msg": "Successfully updated user "
}
```

***GET*** 
### Get a user by id 
- Get a user by user id of user which is unique to every user

Request URL :http://localhost:3000/user/1 

Request Body :
```json
{
    "username":"T",
    "password":"Test",
    "roleid":1,
    "createdBy" : 2,
    "updatedBy":2
}
```


Error Response :
 ```json
{
    "msg": "User not found"
}

```
Success Response :
 ```json
{
    "username": "RR",
    "id": 3,
    "createdBy": 2,
    "updatedBy": 2,
    "createdAt": "2023-03-24T11:12:40.000Z",
    "updatedAt": "2023-03-27T06:09:12.000Z",
    "Role": {
        "role": "user"
    }
}
```



***PATCH*** 
### Update  a user by id 
- update a user all parameters are not required

Request URL :http://localhost:3000/user/1 

Request Body :
```json
{
    "username":"rr",
    "password":"aa"
}
```
 Response :
 ```json
{
    "msg": "Successfully updated role "
}
```


---
---
---
---
### **Role:**


***GET*** 
### Get All Roles 
- TO get all roles in the role table


Request URL :http://localhost:3000/role

Response :
 ```json

[
    {
        "id": 1,
        "name": "user",
        "createdBy": 1,
        "updatedBy": 1,
        "deletedBy": null,
        "deletedAt": null,
        "createdAt": "2023-03-24T10:57:27.000Z",
        "updatedAt": "2023-03-24T10:57:27.000Z"
    }
]
```


***GET*** 
### Get role by id
- gives a role according to id provided in the request params

Request URL :http://localhost:3000/role/1 

Response :
```json
{
    "id": 1,
    "name": "user",
    "createdBy": 1,
    "updatedBy": 1,
    "deletedBy": null,
    "deletedAt": null,
    "createdAt": "2023-03-24T10:57:27.000Z",
    "updatedAt": "2023-03-24T10:57:27.000Z"
}
```



***POST*** 
### Create a new role
- creates new role all body parameters are required


Request URL :http://localhost:3000/role/1 

Request Body :
```json
{
    "name":"super admin",
    
    "createdBy": 1,
    
    "updatedBy": 1
}
```
Response :
```json
{
    "msg": "Successfully created a new role"
}
```

***PUT*** 
### Update a role 
- updates whole role object all parameters are required

Request URL :http://localhost:3000/role/1

Request Body :
```json
{
    "name":"efhshfdv",
    "createdBy": 1,
    "updatedBy": 1
}
```


Response :
 ```json
{
    "msg": "Successfully updated role "
}
```

***PATCH*** 
### Get a role by id 
- Get a role by  id in role table

Request URL :http://localhost:3000/role/1 

Request Body :
```json
{
    "name":"guest",

    "updatedBy": 1
}
```


Error Response :
 ```json
{
    "msg": "Failed to update role",
    "error": "Validation isIn on name failed"
}

```
Success Response :
 ```json
{
    "msg": "Successfully updated role "
}
```