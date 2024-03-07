/**
 * Copyright (c) 2024
 *
 * This file is part of nnx-express-route-factory
 *
 * nnx-express-route-factory is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * nnx-express-route-factory is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Foobar.  If not, see <https://www.gnu.org/licenses/>.
 *
 * esinkutaykilic@gmail.com
 */

// v1.0.0

'use strict';

// dependency: project
// ...

// dependency: node.js
// ...

// dependency: 3th-party
import express from 'express';


/**
 * Router end-point config data.
 * @typedef     {Object} EndPointConfig
 * @property    {nnxExpressRouterFactory.METHOD} method
 * @property    {String} path
 * @property    {Function|Function[]} handler
 */

/**
 * Generates express route object.
 * @param {EndPointConfig[]} routerConfig
 * @return {express.Router}
 */
function nnxExpressRouterFactory(routerConfig) {
    // eslint-disable-next-line new-cap
    const router = express.Router();

    for (const endPointConfig of routerConfig) {
        // eslint-disable-next-line max-len
        const handler = Array.isArray(endPointConfig.handler) ? endPointConfig.handler : [endPointConfig.handler];
        router[endPointConfig.method](endPointConfig.path, ...handler);
    }

    return router;
}

/**
 * @readonly
 * @enum {string}
 */
nnxExpressRouterFactory.METHOD = {
    ALL: 'all',
    GET: 'get',
    HEAD: 'head',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    CONNECT: 'connect',
    OPTION: 'option',
    TRACE: 'trace',
    PATCH: 'patch',
};

export default nnxExpressRouterFactory;
