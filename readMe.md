# Rm-project

### App descripction

Project allows you to fetch Ricky and Morty characters from  [R&Rapi](https://rickandmortyapi.com/) and see the detail of each character. You can also have a Favorite list by marking each one as favorite and if its already in fav list, you can remove it too.

I did a Login with a user already created. So you have to introduce the correct data in order to access the app.

### First steps

node version: 14.17.0
yarn version: 1.22.17

#### In order to run the Front:

#### Project setup:

cd front

yarn

yarn start

#### In order to run the Front:

#### Project setup:

cd back

yarn

yarn start


### Technologies - libraries used in Front

Technology (source) Main reason

[Toolkit](https://redux-toolkit.js.org/)  Avoid excessive boilerplate and makes the flux easier to read than redux. Also, it is the first time using it so this makes the prove that it is well designed to be reachable in a short time.

[Axios](https://axios-http.com/) Library well known for all the developers that brings you all you need to make http request to the server/api

[Lodash](https://lodash.com/) It offers interesting functionalities with different logic, for exemple: Debounce or isEmpty

[React-toastify](https://www.npmjs.com/package/react-toastify) Had no time to implement the "feedback modal" and this library has all I needed.

[Styled-components](https://styled-components.com/) Let you style the web and also include some stats that come from the component.

### Technologies - libraries used in back

Technology (source)

[chalk](https://www.npmjs.com/package/chalk)

[cors](https://www.npmjs.com/package/cors)

[passport-local](https://www.passportjs.org/packages/passport-local/)

[debug](https://www.npmjs.com/package/debug)

[express](https://expressjs.com/es/starter/installing.html)

[jsonwebtoken](https://jwt.io/)

[mongoose](https://mongoosejs.com/)

[morgan](https://www.npmjs.com/package/morgan)

[node-fetch](https://www.npmjs.com/package/node-fetch)

[nodemon](https://www.npmjs.com/package/nodemon)

[passport](https://www.passportjs.org/)

[passport-jwt](http://www.passportjs.org)

### Project structure front

```ts
-front
    -public
    -src
        -assets // Media for the app
        -components
        -global // Hooks, constants, and literals
        -hoc // Logic that applies all the app
        -pages // Views of detail and character list
        -routes // Routes of the app
        -services // Api configuration and endpoints
        -store // Modules for each entity and its configuration
        -styles // Global style and theme
        -utils // Functionalities that are used in the app
```

### Project structure back

```ts
-front
    -public
    -src
        -config // mongoose - passport  config
        -controller // Logic for each route function
        -models // Models of the entities
        -routes // Routes for the client
        -utils // Extra functionalities used in the app
```


#### Next steps

- Implement test with jest and testing library
- Refactor the detail component to be easier to read
- Add token interceptor (it depends on the back)
- Implement a register page
- Finish JWT in the back

##### Conclusions

As I am working in a full time job already, this experience has been a bit hard in terms of time, there are thing that can be improved by time and also knowledge but it has been a good experience because I have learn a lot during the process and this is my main reason to be a developer.