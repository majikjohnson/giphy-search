# Giphy Search

## Introduction
This Giphy Search React app uses the Giphy API to retrieve animated GIFs based on the provided search term and display the preview image and title in a grid.

```create-react-app``` was used as the foundation and it was built using React functional components throughout.  State is being managed by the useState and useContext hooks.

## Local Installation
```
$ git clone https://github.com/majikjohnson/giphy-search.git
$ npm install
```
### Giphy API Key
Once the repo has been cloned, and the npm dependencies installed, you will need to add an ```.env.local``` file to the project root that contains an environment variable containing your Giphy API key.  It should look like this:
```
REACT_APP_GIPHY_API_KEY=XXXXXXXXXXXXXXXXXXXXXX
```
You can get your API key from the [Giphy Developer site](https://developers.giphy.com).  You will need to register and create a new app.  You will then recieve the API key which you can use to set ```REACT_APP_GIPHY_API_KEY```.
### CI/CD Pipeline using Travis CI and Heroku
Tutorial coming soon!