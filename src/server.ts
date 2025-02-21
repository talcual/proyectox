
import express from 'express';

import { setRoutes } from './helpers/routes.helper';
import { personClass } from './controllers/person.controller';
import { ActivoClass } from './controllers/activos.controller';

import setupdb from './models';

setupdb();

const app = express();
const port = 3000;

// Single routing
const router = express.Router();

let routesPerson = setRoutes(router, [
    {'method': 'get', 'path': '/get', 'controller': personClass.get},
    {'method': 'post', 'path': '/create', 'controller': personClass.post}
]);


let routesActivos = setRoutes(router, [
    {'method': 'get', 'path': '/create', 'controller': ActivoClass.createActivo},
])


app.use('/person',routesPerson);
app.use('/activo',routesActivos);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});