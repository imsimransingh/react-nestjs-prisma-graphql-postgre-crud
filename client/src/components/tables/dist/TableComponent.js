"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
// src/components/ShortUrls.tsx
var react_1 = require("react");
var client_1 = require("@apollo/client");
var core_1 = require("@material-ui/core");
var shortUrlFormComponent_1 = require("../forms/shortUrlFormComponent");
require("./TableStyle.css");
var GET_SHORT_URLS = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{ shortUrls { id shortUrl fullUrl createdAt updatedAt} } "], ["{ shortUrls { id shortUrl fullUrl createdAt updatedAt} } "])));
var ShortUrls = function () {
    var _a = react_1.useState([]), urls = _a[0], setUrls = _a[1];
    var addUrl = function (newUrl) {
        setUrls(__spreadArrays(urls, [newUrl]));
    };
    var _b = client_1.useQuery(GET_SHORT_URLS), loading = _b.loading, error = _b.error, data = _b.data;
    if (loading)
        return react_1["default"].createElement("p", null, "Loading...");
    if (error)
        return react_1["default"].createElement("p", null, "Error :(  ");
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(shortUrlFormComponent_1["default"], { addUrl: addUrl }),
        react_1["default"].createElement(core_1.TableContainer, { component: core_1.Paper, className: "tableContainer" },
            react_1["default"].createElement(core_1.Table, { className: "overdueTable", "aria-label": "short url table" },
                react_1["default"].createElement(core_1.TableHead, { className: "tableHeader" },
                    react_1["default"].createElement(core_1.TableRow, null,
                        react_1["default"].createElement(core_1.TableCell, { className: "tableRowHeader" }, "ID"),
                        react_1["default"].createElement(core_1.TableCell, { className: "tableRowHeader" }, "Original URL"),
                        react_1["default"].createElement(core_1.TableCell, { className: "tableRowHeader" }, "Short String "),
                        react_1["default"].createElement(core_1.TableCell, { className: "tableRowHeader" }, "Created On"),
                        react_1["default"].createElement(core_1.TableCell, { className: "tableRowHeader" }, "Updated On"),
                        react_1["default"].createElement(core_1.TableCell, { className: "tableRowHeader" }, "Visit Short Link"))),
                react_1["default"].createElement(core_1.TableBody, { className: "tableBody" }, data.shortUrls.map(function (urls) { return (react_1["default"].createElement(core_1.TableRow, { key: urls.id },
                    react_1["default"].createElement(core_1.TableCell, null, urls.id),
                    react_1["default"].createElement(core_1.TableCell, null, urls.fullUrl),
                    react_1["default"].createElement(core_1.TableCell, null, urls.shortUrl),
                    react_1["default"].createElement(core_1.TableCell, null, urls.createdAt),
                    react_1["default"].createElement(core_1.TableCell, null, urls.updatedAt),
                    react_1["default"].createElement(core_1.TableCell, null,
                        react_1["default"].createElement("a", { href: urls.shortUrl, target: "_blank", rel: "noopener noreferrer" }, "Visit")))); }))))));
};
exports["default"] = ShortUrls;
var templateObject_1;
