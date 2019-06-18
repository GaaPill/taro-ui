(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"132":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=_interopRequireDefault(a(1)),l=_interopRequireDefault(a(4)),o=_interopRequireDefault(a(131)),s=a(130);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(133);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,l.default.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return n.default.createElement(s.View,{"className":"doc-header"},n.default.createElement(s.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":o.default.string}},"133":function(e,t,a){},"485":function(e,t,a){},"97":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=function get(e,t,a){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,a)}if("value"in r)return r.value;var l=r.get;return void 0!==l?l.call(a):void 0},l=_interopRequireDefault(a(1)),o=_interopRequireDefault(a(4)),s=a(130),c=a(137),i=_interopRequireDefault(a(132));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(485);var u=15,p=function(e){function ProgressPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ProgressPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ProgressPage.__proto__||Object.getPrototypeOf(ProgressPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.reduce=function(){var t=e.state.percent;0!==t&&(t=t-u<0?0:t-u,e.setState({"percent":t}))},e.increase=function(){var t=e.state.percent;100!==t&&(t=t+u>100?100:t+u,e.setState({"percent":t}))},e.state={"percent":0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ProgressPage,o.default.Component),r(ProgressPage,[{"key":"render","value":function render(){var e=this.state.percent;return l.default.createElement(s.View,{"className":"page progress-page"},l.default.createElement(i.default,{"title":"Progress 进度条"}),l.default.createElement(s.View,{"className":"doc-body"},l.default.createElement(s.View,{"className":"panel"},l.default.createElement(s.View,{"className":"panel__title"},"基础进度条"),l.default.createElement(s.View,{"className":"panel__content"},l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(c.AtProgress,{"percent":25})),l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(c.AtProgress,{"percent":50})),l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(c.AtProgress,{"percent":75})))),l.default.createElement(s.View,{"className":"panel"},l.default.createElement(s.View,{"className":"panel__title"},"隐藏进度文案"),l.default.createElement(s.View,{"className":"panel__content"},l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(c.AtProgress,{"percent":25,"isHidePercent":!0})),l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(c.AtProgress,{"percent":75,"isHidePercent":!0})))),l.default.createElement(s.View,{"className":"panel"},l.default.createElement(s.View,{"className":"panel__title"},"自定义进度条线宽"),l.default.createElement(s.View,{"className":"panel__content"},l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(c.AtProgress,{"percent":25,"strokeWidth":6})),l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(c.AtProgress,{"percent":50,"strokeWidth":8})),l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(c.AtProgress,{"percent":75,"strokeWidth":10})))),l.default.createElement(s.View,{"className":"panel"},l.default.createElement(s.View,{"className":"panel__title"},"自定义颜色"),l.default.createElement(s.View,{"className":"panel__content"},l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(c.AtProgress,{"percent":25,"color":"#FF4949"})),l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(c.AtProgress,{"percent":50,"color":"#13CE66"})),l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(c.AtProgress,{"percent":75,"color":"#FFC82C"})))),l.default.createElement(s.View,{"className":"panel"},l.default.createElement(s.View,{"className":"panel__title"},"不同的状态"),l.default.createElement(s.View,{"className":"panel__content"},l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(s.View,{"className":"example-item__desc"},"暂停"),l.default.createElement(c.AtProgress,{"percent":25})),l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(s.View,{"className":"example-item__desc"},"进行中"),l.default.createElement(c.AtProgress,{"percent":50,"status":"progress"})),l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(s.View,{"className":"example-item__desc"},"错误"),l.default.createElement(c.AtProgress,{"percent":75,"status":"error"})),l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(s.View,{"className":"example-item__desc"},"已完成"),l.default.createElement(c.AtProgress,{"percent":100,"status":"success"})))),l.default.createElement(s.View,{"className":"panel"},l.default.createElement(s.View,{"className":"panel__title"},"实际案例"),l.default.createElement(s.View,{"className":"panel__content"},l.default.createElement(s.View,{"className":"example-item"},l.default.createElement(c.AtProgress,{"percent":e}),l.default.createElement(s.View,{"className":"example-item__buttons"},l.default.createElement(s.View,{"className":"btn"},l.default.createElement(c.AtButton,{"size":"small","onClick":this.reduce},l.default.createElement(c.AtIcon,{"value":"subtract","size":12}))),l.default.createElement(s.View,{"className":"btn"},l.default.createElement(c.AtButton,{"size":"small","onClick":this.increase},l.default.createElement(c.AtIcon,{"value":"add","size":12})))))))))}},{"key":"componentDidMount","value":function componentDidMount(){n(ProgressPage.prototype.__proto__||Object.getPrototypeOf(ProgressPage.prototype),"componentDidMount",this)&&n(ProgressPage.prototype.__proto__||Object.getPrototypeOf(ProgressPage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){n(ProgressPage.prototype.__proto__||Object.getPrototypeOf(ProgressPage.prototype),"componentDidShow",this)&&n(ProgressPage.prototype.__proto__||Object.getPrototypeOf(ProgressPage.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){n(ProgressPage.prototype.__proto__||Object.getPrototypeOf(ProgressPage.prototype),"componentDidHide",this)&&n(ProgressPage.prototype.__proto__||Object.getPrototypeOf(ProgressPage.prototype),"componentDidHide",this).call(this)}}]),ProgressPage}();t.default=p}}]);