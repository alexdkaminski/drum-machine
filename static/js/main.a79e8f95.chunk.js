(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=13},,function(e,t,n){e.exports=n.p+"static/media/clap-808.39f9581a.wav"},function(e,t,n){e.exports=n.p+"static/media/cowbell-808.470b5edb.wav"},function(e,t,n){e.exports=n.p+"static/media/crash-808.de6f53e5.wav"},function(e,t,n){e.exports=n.p+"static/media/hihat-808.46ba2a48.wav"},function(e,t,n){e.exports=n.p+"static/media/kick-808.550be808.wav"},function(e,t,n){e.exports=n.p+"static/media/openhat-808.056a627a.wav"},function(e,t,n){e.exports=n.p+"static/media/perc-808.2a6bb6f5.wav"},function(e,t,n){e.exports=n.p+"static/media/snare-808.80c4129b.wav"},function(e,t,n){e.exports=n.p+"static/media/tom-808.446e78dd.wav"},,,,,function(e,t,n){e.exports=n(41)},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),i=n.n(r),c=(n(34),n(7)),d=n(2),u=n(3),s=n(6),m=n(4),l=n(5),p=n(1),f=n(15),h=n.n(f),y=n(16),g=n.n(y),b=n(17),w=n.n(b),k=n(18),v=n.n(k),C=n(19),_=n.n(C),O=n(20),j=n.n(O),E=n(21),L=n.n(E),x=n(22),S=n.n(x),D=n(23),N=n.n(D),I=(n(35),p.a.div.withConfig({displayName:"App__DrumPadGrid",componentId:"sc-1af0nuc-0"})(["",""],{paddingTop:"1.5rem",paddingBottom:"1.5rem",width:"auto",height:"auto"})),B=p.a.div.withConfig({displayName:"App__DrumPadRow",componentId:"sc-1af0nuc-1"})(["",""],{display:"flex",marginBottom:"2.5rem",height:"auto"}),A=p.a.div.withConfig({displayName:"App__DrumPadColumn",componentId:"sc-1af0nuc-2"})(["",""],{width:"33.333333%",backgroundColor:"#cbd5e0",height:"auto",marginLeft:"1.25rem",marginRight:"1.25rem"}),P=p.a.button.withConfig({displayName:"App__Button",componentId:"sc-1af0nuc-3"})(["",""],{backgroundColor:"#63b3ed",":hover":{backgroundColor:"#2b6cb0"},color:"#fff",fontWeight:"700",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"1rem",paddingRight:"1rem",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',borderStyle:"none",height:"12rem",width:"100%",fontSize:"1.875rem"}),R=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){n.audio.current.currentTime=0,n.audio.current.play(),n.props.handler(n.props.name)},n.handleKeyDown=function(e){e.key===n.props.keyLetter&&(n.audio.current.currentTime=0,n.audio.current.play(),n.props.handler(n.props.name))},n.audio=o.a.createRef(),n.playButton=o.a.createRef(),n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return o.a.createElement(A,null,o.a.createElement("div",{className:"drum-pad",id:this.props.name},o.a.createElement("audio",{ref:this.audio,className:"clip",id:this.props.keyLetter.toUpperCase(),src:this.props.file,type:"audio/wav"}),o.a.createElement(P,{onClick:this.handleClick,ref:this.playButton,tabIndex:"0"},this.props.keyLetter.toUpperCase())))}}]),t}(a.Component),T=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).createDrumPad=function(){for(var e=[],t=0,a=[{name:"Clap",file:h.a,keyLetter:"q"},{name:"Cowbell",file:g.a,keyLetter:"w"},{name:"Crash",file:w.a,keyLetter:"e"},{name:"Hi-hat",file:v.a,keyLetter:"a"},{name:"Kick",file:_.a,keyLetter:"s"},{name:"Open-hat",file:j.a,keyLetter:"d"},{name:"Perc",file:L.a,keyLetter:"z"},{name:"Snare",file:S.a,keyLetter:"x"},{name:"Tom",file:N.a,keyLetter:"c"}],r=0;r<3;r++){for(var i=[],c=0;c<3;c++)i.push(n.renderDrumPad(a[t].file,a[t].name,a[t].keyLetter,t)),t+=1;e.push(o.a.createElement(B,{key:r},i))}return e},n.state={display:String.fromCharCode(160)},n.handler=n.handler.bind(Object(c.a)(n)),n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"handler",value:function(e){this.setState({display:e}),console.log(e)}},{key:"renderDrumPad",value:function(e,t,n,a){return o.a.createElement(R,{id:t,key:a,file:e,name:t,keyLetter:n,handler:this.handler})}},{key:"render",value:function(){return o.a.createElement("div",{id:"drum-machine"},o.a.createElement(H,{text:this.state.display}),this.createDrumPad())}}]),t}(a.Component),U=p.a.div.withConfig({displayName:"App___StyledDiv",componentId:"sc-1af0nuc-4"})(["",""],function(e){return e._css}),z=p.a.h4.withConfig({displayName:"App___StyledH",componentId:"sc-1af0nuc-5"})(["",""],function(e){return e._css2}),H=function(e){function t(){return Object(d.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(U,{id:"display",_css:{backgroundColor:"#718096",marginBottom:"auto",marginTop:"auto",marginLeft:"auto",marginRight:"auto"}},o.a.createElement(z,{_css2:{fontSize:"2.25rem",color:"#fff"}},this.props.text))}}]),t}(a.Component),K=p.a.div.withConfig({displayName:"App___StyledDiv2",componentId:"sc-1af0nuc-6"})(["",""],function(e){return e._css3}),M=p.a.h1.withConfig({displayName:"App___StyledH2",componentId:"sc-1af0nuc-7"})(["",""],function(e){return e._css4}),W=function(e){function t(){return Object(d.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(K,{_css3:{textAlign:"center",backgroundColor:"#2d3748",paddingBottom:"2rem",fontSize:"1.25rem",width:"100%",marginLeft:"auto",marginRight:"auto"}},o.a.createElement(M,{_css4:{color:"#90cdf4",margin:"0",paddingTop:"1rem",paddingBottom:"1rem"}},"Drum Machine"),o.a.createElement(I,null,o.a.createElement(T,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[28,1,2]]]);
//# sourceMappingURL=main.a79e8f95.chunk.js.map