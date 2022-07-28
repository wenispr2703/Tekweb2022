# API POINTS



## Users


### Menampilkan data semua pengguna
```
GET: /users

response:
[
{
    "id": "",
    "name": "",
    "motto": "",
    "desc": "",
    "ig_url": "",
    "github_url": "",
    "avatar_url": ""
},
{
  ...
}
]
```
### Menampilkan data pengguna dengan ```id``` tertentu 
```
GET: /users/[id]

response:
{
    "id": "",
    "name": "",
    "motto": "",
    "desc": "",
    "ig_url": "",
    "github_url": "",
    "avatar_url": ""
}
```
### Menambahkan data users
```
POST: /users

data:
{
    "name": "",
    "motto": "",
    "desc": "",
    "ig_url": "",
    "github_url": "",
    "avatar_url": ""
}

response:
true    //if true
false   //if false
```
### Mengubah data user
```
PUT: /about

data:
{
    "id":"",
    "name": "",
    "motto": "",
    "desc": "",
    "ig_url": "",
    "github_url": "",
    "avatar_url": ""
}
response:
true    //if true
false   //if false
```
### Menghapus data user
```
DELETE: /users/[id]

response:
true    //if true
false   //if false
```
## ARTICLES
### Menampilkan seluruh artikel
```
GET: /articles

response:
[
{
    "id": "",
    "title": "",
    "description": "",
    "author": "",
    "thumbnail_url": "",
    "content": ""
},
{
    ...
}
]
```
### Menampilkan articles berdasarkan ```id```
```
GET: /articles/[id]

response:
{
    "id": "",
    "title": "",
    "description": "",
    "author": "",
    "thumbnail_url": "",
    "content": ""
}
```
### Menambahkan articles
```
POST: /articles

data:
{
    "title": "",
    "description": "",
    "author": "",
    "thumbnail_url": "",
    "content": ""
}

response:
true    //if true
false   //if false
```
### Mengubah articles
```
PUT: /articles

data:
{
    "id":"",
    "title": "",
    "description": "",
    "author": "",
    "thumbnail_url": "",
    "content": ""
}

response:
true    //if true
false   //if false
```
### Menghapus articles
```
DELETE: /articles

response:
true    //if true
false   //if false
```

# DATABASE DESIGN
![Design Database](https://raw.githubusercontent.com/wenispr2703/tekweb2022/main/images/Desain%20DB.png)
