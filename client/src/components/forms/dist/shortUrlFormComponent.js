"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var client_1 = require("@apollo/client");
var ShortUrlForm = function (_a) {
    var addUrl = _a.addUrl;
    var CREATE_SHORT_URL = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation createShortUrl($input: CreateShortUrlInput!) {\n      createShortUrl(createShortUrlInput: $input) {\n        id\n        shortUrl\n        fullUrl\n      }\n    }\n  "], ["\n    mutation createShortUrl($input: CreateShortUrlInput!) {\n      createShortUrl(createShortUrlInput: $input) {\n        id\n        shortUrl\n        fullUrl\n      }\n    }\n  "])));
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var _c = react_1.useState(""), fullUrl = _c[0], setOriginalUrl = _c[1];
    var _d = client_1.useMutation(CREATE_SHORT_URL, {
        onCompleted: function (data) {
            console.log("Short URL created:", data.createShortUrl);
            handleClose();
            setOriginalUrl("");
        },
        onError: function (error) {
            console.error("Error creating short URL:", error);
        }
    }), createShortUrl = _d[0], _e = _d[1], loading = _e.loading, error = _e.error, data = _e.data;
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    var handleSave = function () {
        console.log(fullUrl);
        if (fullUrl) {
            createShortUrl({
                variables: {
                    input: { fullUrl: fullUrl }
                }
            });
            handleClose();
            setOriginalUrl(""); // Reset input field
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(material_1.Button, { variant: "outlined", onClick: handleClickOpen }, "Add New URL"),
        react_1["default"].createElement(material_1.Dialog, { open: open, onClose: handleClose },
            react_1["default"].createElement(material_1.DialogTitle, null, "Add New URL"),
            react_1["default"].createElement(material_1.DialogContent, null,
                react_1["default"].createElement(material_1.TextField, { autoFocus: true, margin: "dense", id: "fullUrl", label: "Full URL", type: "url", fullWidth: true, variant: "standard", value: fullUrl, onChange: function (e) { return setOriginalUrl(e.target.value); } })),
            react_1["default"].createElement(material_1.DialogActions, null,
                react_1["default"].createElement(material_1.Button, { onClick: handleClose }, "Cancel"),
                react_1["default"].createElement(material_1.Button, { onClick: handleSave }, "Save")))));
};
exports["default"] = ShortUrlForm;
var templateObject_1;
