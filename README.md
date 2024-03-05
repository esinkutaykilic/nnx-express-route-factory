This is a router factory implementation for [Express](https://www.npmjs.com/package/express). If you using Express, you can use this module for creating routers (and end-points).

# Quick start

You can install with [`npm instal` command](https://docs.npmjs.com/downloading-and-installing-packages-locally)

```console
$ npm install nnx-express-route-factory
```

and implement like this (to an Express base project);

```javascript
import express from 'express';
// import 'nnx-route-factory' module
import nnxExpressRouterFactory from 'nnx-express-router-factory';

const app = express();

// create router config
const routerConfig = [
    {
        method: nnxExpressRouterFactory.METHOD.GET,
        path: 'my/path',
        handler: [middlewareFunctiom, myHandlerFunction],
    },
    {
        method: nnxExpressRouterFactory.METHOD.GET,
        path: 'my/other-path',
        handler: myOtherHandlerFunction,
    }
]

// create Express route object
const myRoute = nnxExpressRouterFactory(routerConfig);


// Add route to your Express App
app.use(myRoute);
```

# Reference

## Functions

<dl>
<dt><a href="#nnxExpressRouterFactory">nnxExpressRouterFactory(routerConfig)</a> ⇒ <code>express.Router</code></dt>
<dd><p>Generates express route object.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#EndPointConfig">EndPointConfig</a> : <code>Object</code></dt>
<dd><p>Router end-point config data.</p>
</dd>
</dl>

<a name="nnxExpressRouterFactory"></a>

## nnxExpressRouterFactory(routerConfig) ⇒ <code>express.Router</code>
Generates express route object.

**Kind**: global function

| Param | Type |
| --- | --- |
| routerConfig | [<code>Array.&lt;EndPointConfig&gt;</code>](#EndPointConfig) |

<a name="nnxExpressRouterFactory.METHOD"></a>

### nnxExpressRouterFactory.METHOD : <code>enum</code>
**Kind**: static enum of [<code>nnxExpressRouterFactory</code>](#nnxExpressRouterFactory)
**Read only**: true
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| ALL | <code>string</code> | <code>&quot;all&quot;</code> |
| GET | <code>string</code> | <code>&quot;get&quot;</code> |
| HEAD | <code>string</code> | <code>&quot;head&quot;</code> |
| POST | <code>string</code> | <code>&quot;post&quot;</code> |
| PUT | <code>string</code> | <code>&quot;put&quot;</code> |
| DELETE | <code>string</code> | <code>&quot;delete&quot;</code> |
| CONNECT | <code>string</code> | <code>&quot;connect&quot;</code> |
| OPTION | <code>string</code> | <code>&quot;option&quot;</code> |
| TRACE | <code>string</code> | <code>&quot;trace&quot;</code> |
| PATCH | <code>string</code> | <code>&quot;patch&quot;</code> |

<a name="EndPointConfig"></a>

## EndPointConfig : <code>Object</code>
Router end-point config data.

**Kind**: global typedef
**Properties**

| Name | Type |
| --- | --- |
| method | [<code>METHOD</code>](#nnxExpressRouterFactory.METHOD) |
| path | <code>String</code> |
| handler | <code>function</code> \| <code>Array.&lt;function()&gt;</code> |
