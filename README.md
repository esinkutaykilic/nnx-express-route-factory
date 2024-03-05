# Instalation

# Quick start

```shell
$ npm install nnx-express-route-factory
```

```javascript
import express from 'express';
// import 'nnx-route-factory' module
import nnxRouteFactory from 'nnx-route-factory';

const app = express();

// create route config
const routeConfig = [
    {
        method: nnxRouteFactory.METHOD.GET,
        path: '*',
        handler: [function(res, req, next){}],
    }
]

// create Express route object
const myRoute = nnxRouteFactory(routeConfig);


// Add route to your Express App
app.use(webRouter);
```
