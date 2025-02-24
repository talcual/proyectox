import express from 'express';

export function setRoutes(Router:any, Routes:Array<any>) {
    const RouterStore = express.Router();
    
    Routes.map((route:any) => {
        RouterStore[route.method](route.path, route.controller);
    });

    return RouterStore;
}
