
import express from 'express';
const { createHandler } = require('graphql-http/lib/use/express');
const { buildSchema } = require('graphql');

import { setRoutes } from './helpers/routes.helper';
import { authMiddleware } from './middlewares/auth.middle';

import { authClass } from './controllers/auth.controller';
import { personClass } from './controllers/person.controller';
import { EventoClass } from './controllers/events.controller';

//import mongoose from './database/nosql';
import setupdb from './models';



setupdb();

const app = express();
const port = 3030;

// Single routing
const router = express.Router();

let routesPerson = setRoutes(router, [
    {'method': 'post', 'path': '/login', 'controller': authClass.login, 'middleware': []},
    {'method': 'post', 'path': '/get', 'controller': personClass.get, 'middleware': []},
    {'method': 'post', 'path': '/create', 'controller': personClass.post, 'middleware': [authMiddleware]},
]);


let routesEventos = setRoutes(router, [
    {'method': 'get', 'path': '/:id', 'controller': EventoClass.get},
])


app.use('/person',routesPerson);
app.use('/evento',routesEventos);



const schema = buildSchema(`
  type Query {
    hello: String
    user(id: Int!): User,
    evento(id: Int!): Evento
  }

  type User {
    id: Int
    name: String
    email: String
  }

  type Evento {
    id: Int
    titulo: String
    status: String
    max_guests: String
  }
`);

// Data Examples
const users = [
  { id: 1, name: "Luis", email: "luis@example.com" },
  { id: 2, name: "Ana", email: "ana@example.com" }
];

// Resolver
const root = {
  hello: () => '¡Hola desde GraphQL!',
  user: ({ id }: { id: number }) => users.find(user => user.id === id),
  evento: ({ id }: { id: number }) => EventoClass.getEventoGraph(id)
};


app.use('/apigql', createHandler({
  schema: schema,
  rootValue: root,
  graphiql: true // Activa la UI de GraphiQL para probar
}));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});