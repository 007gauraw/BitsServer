# Bits
Created By Gaurav Joshi

# Live Demo 
https://bitsandsongs.herokuapp.com/

# Git Hub Repo
https://github.com/007gauraw/BitsServer

# Setting up for development 

clone the repo

```
$ git clone https://github.com/007gauraw/BitsServer.git
```
go to Bits server app

```
$ cd BitsServer/
```

```
npm install
```

once the installation is done we need to install packages for React.

```
$ cd BitsClient/
```
```
npm install

```

Then we need to go back to our BitsServer

I have created multiple commands to run the project following are the uses 

### Run the server only
```
npm run server

```
### Run the client only 

```
npm run client 

```
### Build the client 

```
npm run build

```

### start both clients as well as the server (This will start the server with inspecting mode on )

```
npm run dev 

```

### start the server in inspect mode 

```
npm run inspect

```

# Starting the project for testing on local (Nondevelopment)

clone the repo

```
$ git clone https://github.com/007gauraw/BitsServer.git

```
go to Bits server app

```
$ cd BitsServer/

```

```
npm install

```

```
npm start

```
once above command run go to 

```
http://localhost:3001/

```

# Project insight

## Front end

The project uses React for frontend 

I have built this page considering a component base approach 

The following diagram shows the component structure 

```
APP
│   search artist API
│   get release API
│
└───Table
│   Release Data
│   search bar
│   
└───Pagination
         Pagination data from Release API
         

```

## Back End

BitsServer uses Node JS as backend and Express JS as a framework

I am also using the disconnect lib from Discogs to get make API call 

I have developed only one route i.e getArtist which used when user search in the table 

To get release same we need to add /releases to get artist so the final route will be getArtist/releses


### following is the REST API


#### This will get the releses data for an artist with ID 1  

```
http://localhost:3001/getArtist/releses?id=1&page=1&per_page=30

```

#### This will get the releases data for artist moderat   

```
http://localhost:3001/getArtist/?search=moderat

```

### Project uses 

React: I have created React app base setup with create-react-app CLI 

Node JS: I used Express application generator to quickly generate a base template for the backend express  project 

Rest all the BE and FE integration is done by me 

This project uses continuous integration and deployment to the Heroku platform 

