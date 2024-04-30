"use strict";
exports.__esModule = true;
require("./index.css");
var App_1 = require("./App");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var client_1 = require("@apollo/client");
var apollo_client_1 = require("./apollo-client");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(client_1.ApolloProvider, { client: apollo_client_1["default"] },
        react_1["default"].createElement(App_1["default"], null))), document.getElementById('root'));
