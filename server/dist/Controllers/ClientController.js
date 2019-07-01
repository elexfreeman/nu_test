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
                /* get clients */


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
        var res;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (this.req.params.id) {
                  _context2.next = 3;
                  break;
                }

                throw 'empty id';

              case 3:
                _context2.next = 5;
                return this.clientDB.get(parseInt(this.req.params.id));

              case 5:
                res = _context2.sent;

                if (!res) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 9;
                return this.clientProvidersDB.get(parseInt(this.req.params.id));

              case 9:
                res['providers'] = _context2.sent;

              case 10:
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 15:
                return _context2.abrupt("return", res);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 12]]);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }()
    /**
     * add new POST-route
     */

  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var res, i;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (this.req.body) {
                  _context3.next = 3;
                  break;
                }

                throw 'empty body';

              case 3:
                if (this.req.body['name']) {
                  _context3.next = 5;
                  break;
                }

                throw 'empty name';

              case 5:
                _context3.next = 7;
                return this.clientDB.add(this.req.body);

              case 7:
                res = _context3.sent;

                if (!this.req.body.providers) {
                  _context3.next = 16;
                  break;
                }

                i = 0;

              case 10:
                if (!(i < this.req.body.providers.length)) {
                  _context3.next = 16;
                  break;
                }

                _context3.next = 13;
                return this.clientProvidersDB.add({
                  client_id: res,
                  provider_id: this.req.body.providers[i].id
                });

              case 13:
                i++;
                _context3.next = 10;
                break;

              case 16:
                _context3.next = 21;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 21:
                return _context3.abrupt("return", res);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 18]]);
      }));

      function add() {
        return _add.apply(this, arguments);
      }

      return add;
    }()
    /**
     * update client PUT-route
     */

  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        var res, clientId, data, i;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                clientId = parseInt(this.req.params.id);
                _context4.prev = 1;

                if (this.req.body) {
                  _context4.next = 4;
                  break;
                }

                throw 'empty body';

              case 4:
                data = this.req.body;
                data['id'] = clientId;
                _context4.next = 8;
                return this.clientDB.update(this.req.body);

              case 8:
                res = _context4.sent;

                if (!this.req.body.providers) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 12;
                return this.clientProvidersDB.removeByClientId(clientId);

              case 12:
                i = 0;

              case 13:
                if (!(i < this.req.body.providers.length)) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 16;
                return this.clientProvidersDB.add({
                  client_id: clientId,
                  provider_id: this.req.body.providers[i].id
                });

              case 16:
                i++;
                _context4.next = 13;
                break;

              case 19:
                _context4.next = 24;
                break;

              case 21:
                _context4.prev = 21;
                _context4.t0 = _context4["catch"](1);
                console.log(_context4.t0);

              case 24:
                return _context4.abrupt("return", res);

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 21]]);
      }));

      function update() {
        return _update.apply(this, arguments);
      }

      return update;
    }()
    /**
    * delete route
    */

  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5() {
        var res, clientId;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                clientId = parseInt(this.req.params.id);
                /* dellete all client providers */

                _context5.next = 4;
                return this.clientProvidersDB.removeByClientId(clientId);

              case 4:
                _context5.next = 6;
                return this.clientDB.remove(clientId);

              case 6:
                res = _context5.sent;
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);

              case 12:
                return _context5.abrupt("return", res);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 9]]);
      }));

      function remove() {
        return _remove.apply(this, arguments);
      }

      return remove;
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
      _regenerator["default"].mark(function _callee6(req) {
        var self;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                self = new ClientControler(req);
                /* important place */

                /* here we can insert some async code */

                return _context6.abrupt("return", self);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
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
  _regenerator["default"].mark(function _callee8(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context8.sent;
            _context8.t0 = res;
            _context8.next = 6;
            return self.list();

          case 6:
            _context8.t1 = _context8.sent;

            _context8.t0.json.call(_context8.t0, _context8.t1);

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
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
  _regenerator["default"].mark(function _callee9(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context9.sent;
            _context9.t0 = res;
            _context9.next = 6;
            return self.list();

          case 6:
            _context9.t1 = _context9.sent;

            _context9.t0.json.call(_context9.t0, _context9.t1);

          case 8:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
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
  _regenerator["default"].mark(function _callee10(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context10.sent;
            _context10.t0 = res;
            _context10.next = 6;
            return self.list();

          case 6:
            _context10.t1 = _context10.sent;

            _context10.t0.json.call(_context10.t0, _context10.t1);

          case 8:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
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
  _regenerator["default"].mark(function _callee11(req, res, next) {
    var self, data;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context11.sent;
            _context11.next = 5;
            return self.get();

          case 5:
            data = _context11.sent;

            if (!data) {
              res.status(404).json({
                "errors": [{
                  "clientNotFound": true
                }]
              });
            } else {
              res.json(data);
            }

          case 7:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function (_x14, _x15, _x16) {
    return _ref5.apply(this, arguments);
  };
}());
/**
 * add new client
 */

router.post('/client',
/*#__PURE__*/
function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee12(req, res, next) {
    var self, data;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context12.sent;
            _context12.next = 5;
            return self.add();

          case 5:
            data = _context12.sent;

            if (!data) {
              res.status(404).json({
                "errors": [{
                  "some wrong": true
                }]
              });
            } else {
              res.json({
                id: data
              });
            }

          case 7:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function (_x17, _x18, _x19) {
    return _ref6.apply(this, arguments);
  };
}());
/**
 * add new client
 */

router.put('/client/:id',
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee13(req, res, next) {
    var self, data;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context13.sent;
            _context13.next = 5;
            return self.update();

          case 5:
            data = _context13.sent;

            if (!data) {
              res.status(404).json({
                done: false,
                "errors": [{
                  "some wrong": true
                }]
              });
            } else {
              res.json({
                done: true
              });
            }

          case 7:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function (_x20, _x21, _x22) {
    return _ref7.apply(this, arguments);
  };
}());
router["delete"]('/client/:id',
/*#__PURE__*/
function () {
  var _ref8 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee14(req, res, next) {
    var self;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return ClientControler.init(req);

          case 2:
            self = _context14.sent;
            _context14.next = 5;
            return self.remove();

          case 5:
            res.json({
              done: true
            });

          case 6:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function (_x23, _x24, _x25) {
    return _ref8.apply(this, arguments);
  };
}());