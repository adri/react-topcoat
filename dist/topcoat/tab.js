var React,Tab,button,input,label,_ref;React=require("react/addons"),_ref=React.DOM,label=_ref.label,input=_ref.input,button=_ref.button,Tab=React.createClass({render:function(){return label({className:"topcoat-tab-bar__item"},this.transferPropsTo(input({type:"radio",name:"tab-bar"})),button({className:"topcoat-tab-bar__button"},this.props.children))}}),module.exports=Tab;