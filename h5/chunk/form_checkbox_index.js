(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"115":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0},i=_interopRequireDefault(n(1)),r=_interopRequireDefault(n(4)),l=n(130),c=n(137),s=_interopRequireDefault(n(132));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(523);var u=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"checkedList1":["list1"],"checkedList2":["list1"],"checkedList3":["list1","list4"],"checkboxOption1":[{"value":"list1","label":"iPhone X"},{"value":"list2","label":"HUAWEI P20"},{"value":"list3","label":"OPPO Find X"}],"checkboxOption2":[{"value":"list1","label":"iPhone X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"},{"value":"list2","label":"HUAWEI P20","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"},{"value":"list3","label":"OPPO Find X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"}],"checkboxOption3":[{"value":"list1","label":"iPhone X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"},{"value":"list2","label":"HUAWEI P20"},{"value":"list3","label":"OPPO Find X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。","disabled":!0},{"value":"list4","label":"vivo NEX","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。","disabled":!0}]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,r.default.Component),o(Index,[{"key":"handleChange","value":function handleChange(e){this.setState({"checkedList1":e})}},{"key":"handleChangeSnd","value":function handleChangeSnd(e){this.setState({"checkedList2":e})}},{"key":"handleChangeThd","value":function handleChangeThd(e){this.setState({"checkedList3":e})}},{"key":"render","value":function render(){return i.default.createElement(l.View,{"className":"page"},i.default.createElement(s.default,{"title":"Checkbox 复选框"}),i.default.createElement(l.View,{"className":"doc-body"},i.default.createElement(l.View,{"className":"panel"},i.default.createElement(l.View,{"className":"panel__title"},"基础用法"),i.default.createElement(l.View,{"className":"panel__content no-padding"},i.default.createElement(l.View,{"className":"example-item"},i.default.createElement(l.View,{"className":"checkbox-container"},i.default.createElement(c.AtCheckbox,{"options":this.state.checkboxOption1,"selectedList":this.state.checkedList1,"onChange":this.handleChange.bind(this)}))))),i.default.createElement(l.View,{"className":"panel"},i.default.createElement(l.View,{"className":"panel__title"},"含描述信息"),i.default.createElement(l.View,{"className":"panel__content no-padding"},i.default.createElement(l.View,{"className":"example-item"},i.default.createElement(l.View,{"className":"checkbox-container"},i.default.createElement(c.AtCheckbox,{"options":this.state.checkboxOption2,"selectedList":this.state.checkedList2,"onChange":this.handleChangeSnd.bind(this)}))))),i.default.createElement(l.View,{"className":"panel"},i.default.createElement(l.View,{"className":"panel__title"},"选项禁用"),i.default.createElement(l.View,{"className":"panel__content no-padding"},i.default.createElement(l.View,{"className":"example-item"},i.default.createElement(l.View,{"className":"checkbox-container"},i.default.createElement(c.AtCheckbox,{"options":this.state.checkboxOption3,"selectedList":this.state.checkedList3,"onChange":this.handleChangeThd.bind(this)})))))))}},{"key":"componentDidMount","value":function componentDidMount(){a(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this)&&a(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){a(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&a(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){a(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&a(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}();t.default=u},"132":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),i=_interopRequireDefault(n(4)),r=_interopRequireDefault(n(131)),l=n(130);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(133);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,i.default.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(l.View,{"className":"doc-header"},a.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":r.default.string}},"133":function(e,t,n){},"523":function(e,t,n){}}]);