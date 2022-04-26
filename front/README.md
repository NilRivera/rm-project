# Rm-project

### App descripction

Project allows you to fetch Ricky and Morty characters from  [R&Rapi](https://rickandmortyapi.com/) and see the detail of each character. You can also have a Favorite list by marking each one as favorite and if its already in fav list, you can remove it too.

I did a Login with a user already created. So you have to introduce the correct data in order to access the app.

### First steps

#### In order to run the Front:

node version: 14.17.0
yarn version: 1.22.17

#### Project setup:

cd front

yarn

yarn start


### Technologies - libraries used

Technology (source) Main reason

[Toolkit](https://redux-toolkit.js.org/)  Avoid excessive boilerplate and makes the flux easier to read than redux. Also, it is the first time using it so this makes the prove that it is well designed to be reachable in a short time.

[Axios](https://axios-http.com/) Library well known for all the developers that brings you all you need to make http request to the server/api

[Lodash](https://lodash.com/) It offers interesting functionalities with different logic, for exemple: Debounce or isEmpty

[React-toastify](https://www.npmjs.com/package/react-toastify) Had no time to implement the "feedback modal" and this library has all I needed.

[Styled-components](https://styled-components.com/) Let you style the web and also include some stats that come from the component.


### Project structure

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


#### Next steps

- Implement test with jest and testing library
- Refactor the detail component to be easier to read
- Add token interceptor (it depends on the back)
- Implement a register page

##### Conclusions

As I am working in a full time job already and I also have things to do in my life, this experience has been a bit hard in terms of time, there are thing that can be improved by time... but it is still a good experience because I have learn a lot during the process and this is my main reason to be a developer.