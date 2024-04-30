"use strict";
exports.__esModule = true;
var client_1 = require("@apollo/client");
var client = new client_1.ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new client_1.InMemoryCache()
});
exports["default"] = client;
