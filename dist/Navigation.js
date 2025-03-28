"use strict";
// components/Navigation.js
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Navigation = function Navigation(_ref) {
  var navItems = _ref.navItems,
    userPermissions = _ref.userPermissions;
  return /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("ul", null, navItems.filter(function (item) {
    return item.permissions.some(function (permission) {
      return userPermissions.includes(permission);
    });
  }).map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: item.path
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: item.path
    }, item.label));
  })));
};
var _default = exports["default"] = Navigation;