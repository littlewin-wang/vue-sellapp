webpackJsonp([3,1],[function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var s=n(25),i=a(s),r=n(14),o=a(r),l=n(72),c=a(l),u=n(71),d=a(u),f=n(61),_=a(f),v=n(62),p=a(v);n(55);var m=n(16),h=a(m),T=n(65),b=a(T);o.default.use(c.default),o.default.use(d.default);var E=[{path:"/",component:p.default},{path:"/home",component:p.default},{path:"/time-entries",component:b.default,children:[{path:"log-time",component:function(t){return n.e(0,function(e){var n=[e(63)];t.apply(null,n)}.bind(this))}}]}],y=new c.default({routes:E});new o.default((0,i.default)({el:"#app",router:y,store:h.default},_.default))},,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ADD_TOTAL_TIME="ADD_TOTAL_TIME",e.DEC_TOTAL_TIME="DEC_TOTAL_TIME",e.SAVE_PLAN="SAVE_PLAN",e.DELETE_PLAN="DELETE_PLAN"},,,,,,,,,function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var s=n(6),i=a(s);e.default={addTotalTime:function(t,e){var n=t.commit;n(i.ADD_TOTAL_TIME,e)},decTotalTime:function(t,e){var n=t.commit;n(i.DEC_TOTAL_TIME,e)},savePlan:function(t,e){var n=t.commit;n(i.SAVE_PLAN,e)},deletePlan:function(t,e){var n=t.commit;n(i.DELETE_PLAN,e)}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(14),i=a(s),r=n(74),o=a(r),l=n(17),c=a(l),u=n(15),d=a(u);i.default.use(o.default);var f={totalTime:0,list:[]};e.default=new o.default.Store({state:f,mutations:c.default,actions:d.default})},function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i,r=n(24),o=s(r),l=n(7),c=s(l),u=n(6),d=a(u);e.default=(i={},(0,o.default)(i,d.ADD_TOTAL_TIME,function(t,e){t.totalTime+=e}),(0,o.default)(i,d.DEC_TOTAL_TIME,function(t,e){t.totalTime-=e}),(0,o.default)(i,d.SAVE_PLAN,function(t,e){var n="http://7xpot0.com1.z0.glb.clouddn.com/16-12-20/28956487-file_1482226716996_dc59.jpg";t.list.push((0,c.default)({name:"Littlewin",avatar:n},e))}),(0,o.default)(i,d.DELETE_PLAN,function(t,e){t.list.splice(e,1)}),i)},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(64),i=a(s);e.default={name:"app",components:{sidebar:i.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{time:function(){return this.$store.state.totalTime}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"timeEntries",computed:{plans:function(){return this.$store.state.list}},methods:{deletePlan:function(t){this.$store.dispatch("decTotalTime",this.plans[t].totalTime),this.$store.dispatch("deletePlan",t)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},,function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var a,s;n(59),a=n(18);var i=n(69);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,s;n(58),a=n(19);var i=n(68);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=a},,function(t,e,n){var a,s;n(56),a=n(21);var i=n(66);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,s;n(60),a=n(22);var i=n(70);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),n("div",{staticClass:"panel-body"},[n("h1",{staticClass:"text-center"},[t._v(t._s(t.time)+"小时")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-heading"},[n("h1",{staticClass:"text-center"},[t._v("已有时长")])])}]}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron"},[n("h1",[t._v("任务追踪")]),t._v(" "),n("p",[n("strong",[n("router-link",{attrs:{to:"/time-entries"}},[t._v("创建一个任务")])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("nav",{staticClass:"navbar navbar-default"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("ul",{staticClass:"nav navbar-nav"},[n("li",[n("router-link",{attrs:{to:"/home"}},[t._v("首页")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/time-entries"}},[t._v("计划列表")])],1)])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"col-sm-3"},[n("sidebar")],1),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("router-view")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[n("i",{staticClass:"glyphicon glyphicon-time"}),t._v("\n        计划板\n      ")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["/time-entries/log-time"!==t.$route.path?n("router-link",{staticClass:"btn btn-primary",attrs:{to:"/time-entries/log-time"}},[t._v("\n    创建\n  ")]):t._e(),t._v(" "),"/time-entries/log-time"===t.$route.path?n("div",[n("h3",[t._v("创建")])]):t._e(),t._v(" "),n("hr"),t._v(" "),n("router-view"),t._v(" "),n("div",{staticClass:"time-entries"},[t.plans.length?t._e():n("p",[n("strong",[t._v("还没有任何计划")])]),t._v(" "),n("div",{staticClass:"list-group"},t._l(t.plans,function(e,a){return n("a",{staticClass:"list-group-item"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-2 user-details"},[n("img",{staticClass:"avatar img-circle img-responsive",attrs:{src:e.avatar}}),t._v(" "),n("p",{staticClass:"text-center"},[n("strong",[t._v("\n                "+t._s(e.name)+"\n              ")])])]),t._v(" "),n("div",{staticClass:"col-sm-2 text-center time-block"},[n("h3",{staticClass:"list-group-item-text total-time"},[n("i",{staticClass:"glyphicon glyphicon-time"}),t._v("\n              "+t._s(e.totalTime)+"\n            ")]),t._v(" "),n("p",{staticClass:"label label-primary text-center"},[n("i",{staticClass:"glyphicon glyphicon-calendar"}),t._v("\n              "+t._s(e.date)+"\n            ")])]),t._v(" "),n("div",{staticClass:"col-sm-7 comment-section"},[n("p",[t._v(t._s(e.comment))])]),t._v(" "),n("div",{staticClass:"col-sm-1"},[n("button",{staticClass:"btn btn-xs btn-danger delete-button",on:{click:function(e){t.deletePlan(a)}}},[t._v("X")])])])])}))])],1)},staticRenderFns:[]}}]);