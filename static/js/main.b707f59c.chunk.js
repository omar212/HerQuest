(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),o=a.n(s),i=(a(84),a(21)),c=a(22),l=a(26),u=a(23),h=a(27),m=a(13),d=a(24),f=a(10),p=a.n(f),w=a(11),b=a.n(w),g=a(75),y=a.n(g),C=a(72),S=a.n(C),A=a(28),E=a.n(A),B=a(73),v=a.n(B),j=a(70),k=a.n(j),O=a(69),x=a(37),N=a.n(x),Q=a(74),D=a.n(Q),W=(a(47),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={Question1Answer:"",Question2Answer:"",Question3Answer:""},a.onSubmit=a.onSubmit.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleStyleButtons",value:function(){return{backgroundColor:"#8cd4e4"}}},{key:"handleSelection",value:function(e){this.setState({})}},{key:"onSubmit",value:function(){this.props.nextPage({view:"End"})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:"Start"},r.a.createElement(k.a,{position:"static"},r.a.createElement(S.a,null,r.a.createElement(v.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(D.a,null)),r.a.createElement(p.a,{color:"inherit"},"Login"),r.a.createElement(p.a,{color:"inherit"},"Learn More"),r.a.createElement(p.a,{color:"inherit"},"About Us"),r.a.createElement(p.a,{color:"inherit"},"Rewards"))),r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement("img",{src:N.a,alt:"Header",className:t.logo})),O.map(function(a,n){return r.a.createElement(b.a,{container:!0,direction:"column",justify:"center",alignItems:"center",key:n},r.a.createElement(y.a,{id:n,className:t.card},r.a.createElement(b.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(E.a,{className:t.questionStyle},a.Question),r.a.createElement(b.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(p.a,{className:t.styleButton,style:e.handleStyleButtons(),onClick:function(){return e.handleSelection(n)}},r.a.createElement(E.a,{className:t.answers},a.A)),r.a.createElement(p.a,{className:t.styleButton,style:e.handleStyleButtons(),onClick:function(){return e.handleSelection(n)}},r.a.createElement(E.a,{className:t.answers},a.B))),r.a.createElement(b.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(p.a,{className:t.styleButton,style:e.handleStyleButtons(),onClick:function(){return e.handleSelection(n)}},r.a.createElement(E.a,{className:t.answers},a.C)),r.a.createElement(p.a,{className:t.styleButton,style:e.handleStyleButtons(),onClick:function(){return e.handleSelection(n)}},r.a.createElement(E.a,{className:t.answers},a.D))))))}),r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(p.a,{className:t.submitButton,onClick:this.onSubmit},"Submit")))}}]),t}(n.Component)),I=Object(d.withStyles)(function(){return{logo:{width:"30%",height:"30%"},card:{border:"3px solid black",borderRadius:"5px",width:"80%",marginBottom:"5%"},styleButton:{width:"20%",height:"10%",color:"white",textTransform:"none",fontSize:"150%",margin:"5%"},submitButton:{backgroundColor:"#8cd4e4",width:"10%",height:"10%",color:"white",textTransform:"none",fontSize:"150%",marginBottom:"4%"},questionStyle:{color:"#7f47dd",fontSize:"200%",textAlign:"center"},answers:{color:"white",textTransform:"none",fontSize:"100%",padding:"4px"}}})(W),P=a(76),T=a.n(P),M=a(77),F=a.n(M),z=a(78),q=a.n(z),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleStyleButtons",value:function(){return{backgroundColor:"#8cd4e4"}}},{key:"handleSelection",value:function(e){this.setState({})}},{key:"onSubmit",value:function(){}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:N.a,alt:"Header",className:e.logo}),r.a.createElement(b.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center"},r.a.createElement("img",{src:T.a,alt:"SnapCodeAr",className:e.snapCode}),r.a.createElement("img",{src:F.a,alt:"SnapCodeCs",className:e.snapCode}),r.a.createElement("img",{src:q.a,alt:"SnapCodeME",className:e.snapCode})))}}]),t}(n.Component),L=Object(d.withStyles)(function(){return{logo:{width:"25%",height:"25%"},snapCode:{}}})(G),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={view:"Start"},a.updateState=a.updateState.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"updateState",value:function(e){this.setState(e)}},{key:"render",value:function(){return"Start"===this.state.view?r.a.createElement(I,{nextPage:this.updateState,currentView:this.state.view}):r.a.createElement(L,null)}}]),t}(n.Component),J=Object(d.withStyles)(function(){return{}})(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(186);o.a.render(r.a.createElement(R.a,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,a){e.exports=a.p+"static/media/hq_logo-01.ac1eaeec.png"},47:function(e,t,a){},69:function(e){e.exports=[{Question:"What type of animal is a seahorse?",A:"Crustacean",B:"Arachnid",C:"Fish",D:"Shell",CorrectAnswer:"A"},{Question:"What is the biggest animal that has ever lived?",A:"Blue whale",B:"African elephant",C:"Apatosaurus (aka brontosaurus)",D:"Spinosaurus",CorrectAnswer:"A"},{Question:"What is the fastest water animal?",A:"Porpoise",B:"Sailfish",C:"Flying fish",D:"Tuna",CorrectAnswer:"B"},{Question:"Who is usually referred to as the 'Father of Computers' ?",A:"Blaise Pascal",B:"Marie Curie",C:"Charles Babbage",D:"Bill Gates",CorrectAnswer:"C"},{Question:"What is the word 'pixel' short for?",A:"Picture element",B:"Pixelated point",C:"Pixel (it is not short for anything)",D:"Edward  Pixelli",CorrectAnswer:"A"},{Question:"Which of the following is not a database program?",A:"Oracle",B:"MS-Access",C:"MS-Word",D:"FileMaker Pro",CorrectAnswer:"C"},{Question:"In which of these cases are landing buttons ignored by an elevator?",A:"Independent service",B:"Fire service",C:"The elevator is switched off",D:"All of these",CorrectAnswer:"A"},{Question:"What is the basic purpose of superheaters in a boiler?",A:"To increase the steam pressure",B:"Increase saturation temperature of the steam.",C:"Preheat feed water.",D:"To increase the temperature of the steam",CorrectAnswer:"D"},{Question:"A place where things are manufactured. What is the general name for one of these industrial buildings?",A:"Terminal",B:"Factory",C:"Warehouse",D:"Arsenal",CorrectAnswer:"B"},{Question:"These were some of the earliest large structures built by mankind. What are they called?",A:"Mastabas",B:"Granaries",C:"Obelisks",D:"Pyramids",CorrectAnswer:"D"},{Question:"This famous structure is found in Athens, Greece on top of a hill called the Acropolis. Called the Parthenon, what purpose did it serve?",A:"Its purpose is unknown",B:"Library",C:"Temple",D:"Observatory",CorrectAnswer:"C"}]},76:function(e,t,a){e.exports=a.p+"static/media/snapcodeAr.c907466e.png"},77:function(e,t,a){e.exports=a.p+"static/media/snapcodeCS.8f3628d2.png"},78:function(e,t,a){e.exports=a.p+"static/media/snapcodeME.2f706f7a.png"},79:function(e,t,a){e.exports=a(184)},84:function(e,t,a){}},[[79,2,1]]]);
//# sourceMappingURL=main.b707f59c.chunk.js.map