"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var TableComponent_1 = require("./components/tables/TableComponent");
var core_1 = require("@material-ui/core");
var AppWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  width: 100vw;\n  background-color: #cccccc;\n"], ["\n  height: 100vh;\n  width: 100vw;\n  background-color: #cccccc;\n"])));
var AppHeader = styled_components_1["default"].header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0rem 2rem;\n"], ["\n  background-color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0rem 2rem;\n"])));
var HeaderText = styled_components_1["default"].h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: \"Roboto\", sans-serif;\n"], ["\n  font-family: \"Roboto\", sans-serif;\n"])));
var Username = styled_components_1["default"].span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: \"Roboto\", sans-serif;\n"], ["\n  font-family: \"Roboto\", sans-serif;\n"])));
var App = function () {
    var _a = react_1.useState(null), user = _a[0], setUser = _a[1];
    react_1["default"].useEffect(function () {
        fetch("http://localhost:8080/user")
            .then(function (results) { return results.json(); })
            .then(function (data) {
            setUser(data);
        });
    }, []);
    return (react_1["default"].createElement(AppWrapper, null,
        react_1["default"].createElement(AppHeader, null,
            react_1["default"].createElement(HeaderText, null, "Short Url Library"),
            react_1["default"].createElement(Username, null,
                "Welcome, ",
                user ? user.firstName : "Guest",
                "!")),
        react_1["default"].createElement(core_1.Container, null,
            react_1["default"].createElement(TableComponent_1["default"], null))));
};
exports["default"] = App;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
