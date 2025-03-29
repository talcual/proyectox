
import express from 'express';

import { setRoutes } from './helpers/routes.helper';
import { authMiddleware } from './middlewares/auth.middle';

import { authClass } from './controllers/auth.controller';
import { personClass } from './controllers/person.controller';
import { EventoClass } from './controllers/events.controller';

import setupdb from './models';

setupdb();

const app = express();
const port = 3000;

// Single routing
const router = express.Router();

let routesPerson = setRoutes(router, [
    {'method': 'post', 'path': '/login', 'controller': authClass.login, 'middleware': []},
    {'method': 'get', 'path': '/get', 'controller': personClass.get, 'middleware': []},
    {'method': 'post', 'path': '/create', 'controller': personClass.post, 'middleware': [authMiddleware]},
]);


let routesEventos = setRoutes(router, [
    {'method': 'get', 'path': '/:id', 'controller': EventoClass.get},
])


app.use('/person',routesPerson);
app.use('/evento',routesEventos);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});