var NavigationBar,NavigationBarItem,React,div,h1,_ref;React=require("react/addons"),NavigationBarItem=require("./navigationbaritem"),_ref=React.DOM,div=_ref.div,h1=_ref.h1,NavigationBar=React.createClass({propTypes:{onTop:React.PropTypes.bool},render:function(){var a;return a=React.addons.classSet({"topcoat-navigation-bar":!0,"on-top":this.props.onTop}),div({className:a},this.props.children)}}),module.exports=NavigationBar;