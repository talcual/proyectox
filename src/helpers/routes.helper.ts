

export function setRoutes(Router:any, Routes:Array<any>) {
    Routes.map((route:any) => {
        console.log(route);
        Router[route.method](route.path, route.controller);
    });

    return Router;
}