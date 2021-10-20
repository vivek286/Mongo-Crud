<p align="center">
  <a href="" rel="noopener" target="_blank"><img width="756" src="" alt="mongo-crud logo"></a></p>
</p>

<div align="center">

[**Mongo-Crud**]() is a CRUD operation library library which makes it extremely easy to use multiple crud operation on your web apps. It is highly customizable and enables you to stack multiple quries on top of one another.
</br>



</div>






Table of Contents
--
- [How to use](#how-to-use)
- [Documentation](#)
- [React / Nextjs support](#react-and-nextjs-support)


## Getting Started
Use your preferred package manager:
```
npm install mongo-cruds
yarn add mongo-cruds
```


### How to use

**1:** import `mongo_crud` from `mongo-cruds` .
<br />

```jsx
var {mongo_crud} = require("mongo-cruds");

```


**2:** Provide Configuraions to connect to db/cluster in an object.

```javascript
var {mongo_crud} = require("mongo-cruds");

var config={
        URL:"",         //mongo cluster URL
        db:"",          // Database name if any else give empty string
        collection:"",  //Collection name in database
    };
```

**3:** Provide object of quries as second parameter.

```javascript
//  Final way to use mongo-cruds
var {mongo_crud} = require("mongo-cruds");

var config={
        URL:"",         //mongo cluster URL
        db:"",          // Database name if any else give empty string
        collection:"",  //Collection name in database
    };
    
    let results=await mongo_crud(config,{find:"",findOne:{}});
   console.log(results);
```
Response will be in form of array containing response from each query executed on mongo-crud.



### React and Nextjs support:
Mongo-Cruds is compatable with every version of node js and with all frameworks.

### Contribution
Open an issue and your problem will be solved.


### Author - Contact
Vivek Solanki


<a href="https://www.linkedin.com/in/vivek-solanki-7779641b1/"><img src="https://github.com/iamhosseindhv/Rentaly/blob/master/Gifs/linkedin.png" alt="Vivek Solanki Linkedin profile" align="right" width="32" height="32"/></a>
<a href="mailto:solankivivek4140@gmail.com"><img src="https://github.com/iamhosseindhv/Rentaly/blob/master/Gifs/contact.png" alt="Vivek Solanki email address" align="right" width="32" height="32"/></a>
