'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _goods = require('components/goods/goods');

var _goods2 = _interopRequireDefault(_goods);

var _ratings = require('components/ratings/ratings');

var _ratings2 = _interopRequireDefault(_ratings);

var _seller = require('components/seller/seller');

var _seller2 = _interopRequireDefault(_seller);

require('common/stylus/index.styl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vueResource2.default);

var app = _vue2.default.extend(_App2.default);

var router = new _vueRouter2.default({
  linkActiveClass: 'active'
});

router.map({
  '/goods': {
    component: _goods2.default
  },
  '/ratings': {
    component: _ratings2.default
  },
  '/seller': {
    component: _seller2.default
  }
});

router.start(app, '#app');

router.go('./goods');

//# sourceMappingURL=main-compiled.js.map