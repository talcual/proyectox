
import express from 'express';

import { setRoutes } from './helpers/routes.helper';
import { personClass } from './controllers/person.controller';
import { EventoClass } from './controllers/events.controller';

import setupdb from './models';

setupdb();

const app = express();
const port = 3030;

// Single routing
const router = express.Router();

let routesPerson = setRoutes(router, [
    {'method': 'get', 'path': '/get', 'controller': personClass.get},
    {'method': 'post', 'path': '/create', 'controller': personClass.post}
]);


let routesEventos = setRoutes(router, [
    {'method': 'get', 'path': '/:id', 'controller': EventoClass.get},
])


app.use('/person',routesPerson);
app.use('/evento',routesEventos);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});