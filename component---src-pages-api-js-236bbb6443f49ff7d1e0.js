(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"apiQuery",function(){return o});var i=n(0),s=n.n(i),r=n(201),a=n(204);t.default=function(e){var t=e.data,n=e.location;return s.a.createElement(r.a,null,s.a.createElement(a.a,{activeList:n.state,data:t.apiList}))};var o="1091016285"},202:function(e,t,n){"use strict";n(203)("link",function(e){return function(t){return e(this,"a","href",t)}})},203:function(e,t,n){var i=n(1),s=n(7),r=n(29),a=/"/g,o=function(e,t,n,i){var s=String(r(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+s+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(o),i(i.P+i.F*s(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},204:function(e,t,n){"use strict";n(202);var i=n(0),s=n.n(i),r=n(200),a=n(209),o=n.n(a),l=n(205),u=n.n(l);t.a=function(e){var t=Object(i.useState)(function(){if(void 0===e.activeList||null===e.activeList){for(var t=e.data.nodes.length,n=[],i=0;i<t;i++)n.push(!1);return n}return e.activeList}),n=t[0],a=t[1],l=e.data.nodes.map(function(e,t){var i;if(void 0===e.items)i=s.a.createElement("article",{className:o.a.docsSection},s.a.createElement("h2",{className:o.a.activeLink},e.title));else{var l={color:"#0096F4"};i=s.a.createElement("article",{className:o.a.docsSection},s.a.createElement(u.a,{open:n[t],trigger:s.a.createElement("h2",{className:o.a.sidebarParentItem,onClick:function(){return function(e){var t=n;t[e]=!t[e],a(t)}(t)}},e.title)},s.a.createElement("section",{className:o.a.nestedDocsSection},e.items.map(function(e){return s.a.createElement("p",{className:o.a.sidebarItem},s.a.createElement(r.a,{activeStyle:l,state:n,className:o.a.sidebarLink,to:e.link},e.title))}))))}return i});return s.a.createElement("aside",{id:"sidebar",className:o.a.sidebar},l)}},205:function(e,t,n){"use strict";n(132),n(67),n(133),n(92),n(91),Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),r=o(s),a=o(n(49));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.timeout=void 0,n.handleTriggerClick=n.handleTriggerClick.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.continueOpenCollapsible=n.continueOpenCollapsible.bind(n),n.setInnerRef=n.setInnerRef.bind(n),e.open?n.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:n.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),i(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&!0===this.state.shouldSwitchAutoOnNextCycle&&(window.clearTimeout(this.timeout),this.timeout=window.setTimeout(function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})},50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.scrollHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.scrollHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){this.props.triggerDisabled||(e.preventDefault(),this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):!0===this.state.isClosed?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?r.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling?r.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(){this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen())}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",i=this.props.triggerDisabled?"is-disabled":"",s=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,a=this.props.contentContainerTagName,o=this.props.triggerTagName,l=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,u=this.props.classParentString+"__trigger "+n+" "+i+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),p=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),c=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,h=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return r.default.createElement(a,{className:p.trim()},r.default.createElement(o,{className:u.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;" "!==n&&"Enter"!==n||e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},s),this.renderNonClickableTriggerElement(),r.default.createElement("div",{className:c.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef},r.default.createElement("div",{className:h.trim()},l)))}}]),t}();l.propTypes={transitionTime:a.default.number,transitionCloseTime:a.default.number,triggerTagName:a.default.string,easing:a.default.string,open:a.default.bool,classParentString:a.default.string,openedClassName:a.default.string,triggerStyle:a.default.object,triggerClassName:a.default.string,triggerOpenedClassName:a.default.string,contentOuterClassName:a.default.string,contentInnerClassName:a.default.string,accordionPosition:a.default.oneOfType([a.default.string,a.default.number]),handleTriggerClick:a.default.func,onOpen:a.default.func,onClose:a.default.func,onOpening:a.default.func,onClosing:a.default.func,trigger:a.default.oneOfType([a.default.string,a.default.element]),triggerWhenOpen:a.default.oneOfType([a.default.string,a.default.element]),triggerDisabled:a.default.bool,lazyRender:a.default.bool,overflowWhenOpen:a.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),triggerSibling:a.default.oneOfType([a.default.element,a.default.func]),tabIndex:a.default.number,contentContainerTagName:a.default.string},l.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},tabIndex:null,contentContainerTagName:"div"},t.default=l}}]);
//# sourceMappingURL=component---src-pages-api-js-236bbb6443f49ff7d1e0.js.map