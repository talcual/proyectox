import express from 'express';

export function setRoutes(Router:any, Routes:Array<any>) {
    const RouterStore:any = express.Router();
    
    Routes.map((route:any) => {
        if(route.middleware){
            RouterStore[route.method](route.path,route.middleware,route.controller);
        }else{
            RouterStore[route.method](route.path,route.controller);
        }
    });

    return RouterStore;
}

