(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"128":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=_interopRequireDefault(a(1)),r=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(155)),o=_interopRequireDefault(a(156)),i=_interopRequireDefault(a(4)),c=a(130),u=_interopRequireDefault(a(151));a(550);var s=_interopRequireDefault(a(132)),d=_interopRequireDefault(a(205));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var f=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro日历组件展示"},e.state={"now":Date.now(),"minDate":"2018/06/11","maxDate":"2020/12/12","multiCurentDate":{"start":Date.now()},"mark":[{"value":"2018/11/11"}],"validDates":[{"value":"2019/04/17"},{"value":"2019/04/21"},{"value":"2019/05/04"},{"value":"2019/05/28"}]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,i.default.Component),n(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"handleClick","value":function handleClick(e,t){this.setState(function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{"value":a,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=a,e}({},e,t))}},{"key":"handleDayClick","value":function handleDayClick(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log("handleDayClick",t)}},{"key":"handleDayLongClick","value":function handleDayLongClick(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log("handleDayLongClick",t)}},{"key":"handleDateChange","value":function handleDateChange(e){console.log("handleDateChange",e)}},{"key":"handleMonthChange","value":function handleMonthChange(e){console.log("handleMonthChange",e)}},{"key":"render","value":function render(){var e=this.state,t=e.now,a=e.minDate,n=e.maxDate,r=e.mark,o=e.multiCurentDate,i=e.validDates;return l.default.createElement(c.View,{"className":"page calendar-page"},l.default.createElement(s.default,{"title":"Calendar 日历"}),l.default.createElement(c.View,{"className":"doc-body"},l.default.createElement(c.View,{"className":"panel"},l.default.createElement(c.View,{"className":"panel__title"},"一般案例"),l.default.createElement(c.View,{"className":"panel__content"},l.default.createElement(d.default,{"onMonthChange":this.handleMonthChange}))),l.default.createElement(c.View,{"className":"panel"},l.default.createElement(c.View,{"className":"panel__title"},"跳转到指定日期"),l.default.createElement(c.View,{"className":"panel__content"},l.default.createElement(d.default,{"currentDate":t}),l.default.createElement(c.View,{"className":"body_controllers"},l.default.createElement(u.default,{"size":"small","onClick":this.handleClick.bind(this,"now","2018/01/01")},"跳转到 2018/01/01"),l.default.createElement(u.default,{"size":"small","onClick":this.handleClick.bind(this,"now","2018/06/18")},"跳转到 2018/6/18")))),l.default.createElement(c.View,{"className":"panel"},l.default.createElement(c.View,{"className":"panel__title"},"指定最小日期和最大日期"),l.default.createElement(c.View,{"className":"panel__content"},l.default.createElement(d.default,{"minDate":a,"maxDate":n}),l.default.createElement(c.View,{"className":"body_controllers"},l.default.createElement(u.default,{"size":"small","onClick":this.handleClick.bind(this,"minDate","2018/01/01")},"设置最小值 2018/1/1"),l.default.createElement(u.default,{"size":"small","onClick":this.handleClick.bind(this,"maxDate","2019/12/31")},"设置最大值 2019/12/31")))),l.default.createElement(c.View,{"className":"panel"},l.default.createElement(c.View,{"className":"panel__title"},"标记时间"),l.default.createElement(c.View,{"className":"panel__content"},l.default.createElement(d.default,{"marks":r}),l.default.createElement(c.View,{"className":"body_controllers"},l.default.createElement(u.default,{"size":"small","className":"button","onClick":this.handleClick.bind(this,"mark",[{"value":Date.now()}])},"标记当前时间")))),l.default.createElement(c.View,{"className":"panel"},l.default.createElement(c.View,{"className":"panel__title"},"禁止滑动"),l.default.createElement(c.View,{"className":"panel__content"},l.default.createElement(d.default,{"isSwiper":!1}))),l.default.createElement(c.View,{"className":"panel"},l.default.createElement(c.View,{"className":"panel__title"},"垂直滑动"),l.default.createElement(c.View,{"className":"panel__content"},l.default.createElement(d.default,{"isVertical":!0,"onSelectDate":this.handleDateChange}))),l.default.createElement(c.View,{"className":"panel"},l.default.createElement(c.View,{"className":"panel__title"},"范围选择"),l.default.createElement(c.View,{"className":"panel__content"},l.default.createElement(d.default,{"onSelectDate":this.handleDateChange,"isMultiSelect":!0,"currentDate":o}),l.default.createElement(c.View,{"className":"body_controllers"},l.default.createElement(u.default,{"size":"small","className":"button","onClick":this.handleClick.bind(this,"multiCurentDate",{"start":"2018/10/28","end":"2018/11/11"})},"设置选择区间为 2018/10/28 - 2018/11/11")))),l.default.createElement(c.View,{"className":"panel"},l.default.createElement(c.View,{"className":"panel__title"},"有效时间组"),l.default.createElement(c.View,{"className":"panel__content"},l.default.createElement(d.default,{"validDates":i})))))}}]),Index}();t.default=f,r.__decorate([o.default],f.prototype,"handleClick",null),r.__decorate([o.default],f.prototype,"handleDayClick",null),r.__decorate([o.default],f.prototype,"handleDayLongClick",null),r.__decorate([o.default],f.prototype,"handleDateChange",null),r.__decorate([o.default],f.prototype,"handleMonthChange",null)},"132":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=_interopRequireDefault(a(1)),r=_interopRequireDefault(a(4)),o=_interopRequireDefault(a(131)),i=a(130);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(133);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.default.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return l.default.createElement(i.View,{"className":"doc-header"},l.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":o.default.string}},"133":function(e,t,a){},"550":function(e,t,a){}}]);