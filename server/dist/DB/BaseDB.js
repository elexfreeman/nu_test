"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _config = _interopRequireDefault(require("../config"));

var coreDBSys = require('knex')(_config["default"].mysql);
/**
 * base DB access class
 */


var BaseDB = function BaseDB() {
  (0, _classCallCheck2["default"])(this, BaseDB);

  /* our DB driver */
  this.db = coreDBSys;
};

exports["default"] = BaseDB;