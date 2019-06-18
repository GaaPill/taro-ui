(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"100":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),i=function get(e,t,a){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:get(i,t,a)}if("value"in n)return n.value;var o=n.get;return void 0!==o?o.call(a):void 0},o=_interopRequireDefault(a(1)),r=_interopRequireDefault(a(4)),c=a(130),l=a(137),u=_interopRequireDefault(a(132));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(491);var p=function(e){function ActivityIndicatorPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ActivityIndicatorPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ActivityIndicatorPage.__proto__||Object.getPrototypeOf(ActivityIndicatorPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.atButton="",e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ActivityIndicatorPage,r.default.Component),n(ActivityIndicatorPage,[{"key":"render","value":function render(){return o.default.createElement(c.View,{"className":"page activity-indicator-page"},o.default.createElement(u.default,{"title":"Activity Indicator 活动指示器"}),o.default.createElement(c.View,{"className":"doc-body"},o.default.createElement(c.View,{"className":"panel"},o.default.createElement(c.View,{"className":"panel__title"},"自定义尺寸"),o.default.createElement(c.View,{"className":"panel__content"},o.default.createElement(c.View,{"className":"example-item"},o.default.createElement(c.View,{"className":"subitem"},o.default.createElement(l.AtActivityIndicator,{"size":20})),o.default.createElement(c.View,{"className":"subitem"},o.default.createElement(l.AtActivityIndicator,{"size":24})),o.default.createElement(c.View,{"className":"subitem"},o.default.createElement(l.AtActivityIndicator,{"size":32}))))),o.default.createElement(c.View,{"className":"panel"},o.default.createElement(c.View,{"className":"panel__title"},"自定义颜色"),o.default.createElement(c.View,{"className":"panel__content"},o.default.createElement(c.View,{"className":"example-item"},o.default.createElement(c.View,{"className":"subitem"},o.default.createElement(l.AtActivityIndicator,{"color":"#13CE66"})),o.default.createElement(c.View,{"className":"subitem"},o.default.createElement(l.AtActivityIndicator,{"color":"#FF4949"})),o.default.createElement(c.View,{"className":"subitem"},o.default.createElement(l.AtActivityIndicator,{"color":"#C9C9C9"}))))),o.default.createElement(c.View,{"className":"panel"},o.default.createElement(c.View,{"className":"panel__title"},"自定义文字"),o.default.createElement(c.View,{"className":"panel__content"},o.default.createElement(c.View,{"className":"example-item"},o.default.createElement(l.AtActivityIndicator,{"content":"加载中..."})))),o.default.createElement(c.View,{"className":"panel"},o.default.createElement(c.View,{"className":"panel__title"},"垂直水平居中"),o.default.createElement(c.View,{"className":"panel__content"},o.default.createElement(c.View,{"className":"example-item example-item--center"},o.default.createElement(l.AtActivityIndicator,{"mode":"center"})),o.default.createElement(c.View,{"className":"example-item example-item--center"},o.default.createElement(l.AtActivityIndicator,{"mode":"center","content":"Loading..."}))))))}},{"key":"componentDidMount","value":function componentDidMount(){i(ActivityIndicatorPage.prototype.__proto__||Object.getPrototypeOf(ActivityIndicatorPage.prototype),"componentDidMount",this)&&i(ActivityIndicatorPage.prototype.__proto__||Object.getPrototypeOf(ActivityIndicatorPage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){i(ActivityIndicatorPage.prototype.__proto__||Object.getPrototypeOf(ActivityIndicatorPage.prototype),"componentDidShow",this)&&i(ActivityIndicatorPage.prototype.__proto__||Object.getPrototypeOf(ActivityIndicatorPage.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){i(ActivityIndicatorPage.prototype.__proto__||Object.getPrototypeOf(ActivityIndicatorPage.prototype),"componentDidHide",this)&&i(ActivityIndicatorPage.prototype.__proto__||Object.getPrototypeOf(ActivityIndicatorPage.prototype),"componentDidHide",this).call(this)}}]),ActivityIndicatorPage}();t.default=p},"132":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),i=_interopRequireDefault(a(1)),o=_interopRequireDefault(a(4)),r=_interopRequireDefault(a(131)),c=a(130);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(133);var l=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,o.default.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(c.View,{"className":"doc-header"},i.default.createElement(c.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=l,l.defaultProps={"title":"标题"},l.propTypes={"title":r.default.string}},"133":function(e,t,a){},"491":function(e,t,a){}}]);