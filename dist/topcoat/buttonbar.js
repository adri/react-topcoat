var ButtonBar,ButtonBarButton,React,div;React=require("react/addons"),ButtonBarButton=require("./buttonbarbutton"),div=React.DOM.div,ButtonBar=React.createClass({render:function(){var t,r;return div({className:"topcoat-button-bar"},function(){var a,e,o,n;if(Array.isArray(this.props.children)){for(o=this.props.children,n=[],r=a=0,e=o.length;e>a;r=++a)t=o[r],n.push(div({key:r,className:"topcoat-button-bar__item"},t));return n}return div({className:"topcoat-button-bar__item"},t)}.call(this))}}),module.exports=ButtonBar;