"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ClientDB = _interopRequireDefault(require("../DB/ClientDB"));

var _ClientProvidersDB = _interopRequireDefault(require("../DB/ClientProvidersDB"));

var express = require('express');

var router = express.Router();
exports.router = router;

var ClientControler =
/*#__PURE__*/
function () {
  function ClientControler(req) {
    (0, _classCallCheck2["default"])(this, ClientControler);
    this.req = req;
    this.clientDB = new _ClientDB["default"]();
    this.clientProvidersDB = new _ClientProvidersDB["default"]();
    this.list = this.list.bind(this);
    this.get = this.get.bind(this);
  }

  (0, _createClass2["default"])(ClientControler, [{
    key: "list",

    /**
     * list route
     */
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var res, offset, limit, search, i;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = [];
                offset = 0;
                limit = 20;
                search = '';
                _context.prev = 4;

                /* check params */
                if (this.req.params.offset) {
                  offset = parseInt(this.req.params.offset);
                }

                if (this.req.params.limit) {
                  limit = parseInt(this.req.params.limit);
                }

                if (limit > 1000) {
                  limit = 20;
                }

                if (this.req.params.search) {
                  search = this.req.params.search;
                }

                _context.next = 11;
                return this.clientDB.list(offset, limit, search);

              case 11:
                res = _context.sent;
                i = 0;

              case 13:
                if (!(i < res.length)) {
                  _context.next = 20;
                  break;
                }

                _context.next = 16;
                return this.clientProvidersDB.get(res[i].id);

              case 16:
                res[i]['providers'] = _context.sent;

              case 17:
                i++;
                _context.next = 13;
                break;

              case 20:
                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](4);
                console.log(_context.t0);

              case 25:
                return _context.abrupt("return", res);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 22]]);
      }));

      function list() {
        return _list.apply(this, arguments);
      }

      return list;
    }()
    /**
     * get route
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var res, id;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = 0;
                _context2.prev = 1;

                if (this.req.params.id) {
                  _context2.next = 4;
                  break;
                }

                throw 'empty id';

              case 4:
                _context2.next = 6;
                return this.clientDB.get(parseInt(this.req.params.id));

              case 6:
                res = _context2.sent;

                if (!res) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 10;
                return this.clientProvidersDB.get(parseInt(this.req.params.id));

              case 10:
                res['providers'] = _context2.sent;

              case 11:
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 16:
                return _context2.abrupt("return", res);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 13]]);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }], [{
    key: "init",

    /**
     * async constructor
     * @param {*} req  - express reques fnc
     */
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req) {
        var self;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = new ClientControler(req);
                /* important place */

                /* here we can insert some async code */

                return _context3.abrupt("return", self);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);
  return ClientControler;
}();
/**
 * list clients
 */


router.get('/client/list',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context4.sent;
            _context4.t0 = res;
            _context4.next = 6;
            return self.list();

          case 6:
            _context4.t1 = _context4.sent;

            _context4.t0.json.call(_context4.t0, _context4.t1);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
/**
 * list clients
 */

router.get('/client/list/:offset',
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context5.sent;
            _context5.t0 = res;
            _context5.next = 6;
            return self.list();

          case 6:
            _context5.t1 = _context5.sent;

            _context5.t0.json.call(_context5.t0, _context5.t1);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}());
/**
 * list clients
 */

router.get('/client/list/:offset/:limit',
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context6.sent;
            _context6.t0 = res;
            _context6.next = 6;
            return self.list();

          case 6:
            _context6.t1 = _context6.sent;

            _context6.t0.json.call(_context6.t0, _context6.t1);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x8, _x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}());
/**
 * list clients
 */

router.get('/client/list/:offset/:limit/:search',
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context7.sent;
            _context7.t0 = res;
            _context7.next = 6;
            return self.list();

          case 6:
            _context7.t1 = _context7.sent;

            _context7.t0.json.call(_context7.t0, _context7.t1);

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x11, _x12, _x13) {
    return _ref4.apply(this, arguments);
  };
}());
/**
 * get client by id
 */

router.get('/client/:id',
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(req, res, next) {
    var self, data;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context8.sent;
            _context8.next = 5;
            return self.get();

          case 5:
            data = _context8.sent;

            if (!data) {
              res.status(404).json({
                "errors": [{
                  "userNotFound": true
                }]
              });
            } else {
              res.json(data);
            }

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x14, _x15, _x16) {
    return _ref5.apply(this, arguments);
  };
}());