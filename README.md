# node-mongo
[Node.js](https://github.com/nodejs/node), [Express.js](https://github.com/expressjs/express) and [MongoDB](https://github.com/mongodb/mongo) Rest API 

[![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT)

# MEAN Backend Example

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 2](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment
* [Express CLI](https://expressjs.com/en/starter/generator.html): project scaffolding

## Prerequisites
Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)

## Quick Start 
 
> The contact example requires the Angular 2 front end application [cli-stomp](https://github.com/markbutton/cli_stomp)

To get started running this app locally (assuming you have installed the Angular front end):

```bash
# Clone the repo
git clone https://github.com/markbutton/node-mongo.git
# cd into it
cd node-mongo
# Install the packages from package.json
npm install
```

When you've done this, you can run the application locally:

## Development server
Run `nodemon` to start and monitor your dev server. Navigate to `http://localhost:3000/`. 
The app will need to be restarted if you change any of the source files.

## Code scaffolding

Run `npm install express-generator -g` to get a seperate ExpressJS package for generating new API's.
You can generate new API's by running `express my-api`. create my-api API with EJS views (instead the default Jade)
`express todo-api -e`

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Layout

```
├── contact-api                                  * Source folder for API
│   ├── bin                                      
│   │   └── WWW                                  
│   │
│   ├── models                                   * API Schemas
│   │   └── Contact.js                           * Contact schema
│   │
│   ├── public                                   * Assets folder
│   │   ├── images                               * Image assets
│   │   ├── javascripts                          * JavaScript assets
│   │   └── stylesheets                          * Stylesheet assets
│   │
│   ├── routes                                   * Routs package
│   │   ├── contact.js                           * Contact API route
│   │   └── index.js                             * Default main route
│   │
│   ├── views                                    * Views package
│   │   ├── error.js                             * Generated error view
│   │   └── index.js                             * Generated index view
│   │
│   ├── app.js                                   * Main application file
│   └──  package.json                            * Package json for API 
│
├── data                                         * Data Store for MongoDB
│
└── package.json                                 * Package info and list of dependencies to install
```

> The outer routes pacakage was excluded from this partial tree for brevity. The `node_modules` 
directory will also be generated for the installed node packages.)
