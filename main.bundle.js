!function(e){function t(t){for(var i,a,s=t[0],c=t[1],u=t[2],f=0,h=[];f<s.length;f++)a=s[f],o[a]&&h.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(l&&l(t);h.length;)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={1:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([431,0]),n()}({431:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.calculateSize=t.game=void 0,n(54);var i=s(n(438)),o=s(n(434)),r=s(n(433)),a=s(n(432));function s(e){return e&&e.__esModule?e:{default:e}}var c={type:e.AUTO,parent:"content",width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,physics:{default:"arcade",arcade:{gravity:{y:1e3},debug:!1}},scene:[o.default,r.default,i.default,a.default]},u=t.game=new e.Game(c),l=t.calculateSize=function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return{width:e=e>1500?1500:e,height:t}};window.onresize=function(){var e=l(),t=e.width,n=e.height;console.log(t+" "+n),u.resize(t,n)}}).call(this,n(54))},432:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(54);var r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:"GameOverScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Scene),i(t,[{key:"init",value:function(e){this.score=e.score}},{key:"create",value:function(){var e=this,t=document.getElementsByTagName("canvas")[0],n=t.width,i=t.height;this.scene.bringToTop(),this.add.image(n/2,i/2,"water").setScale(10,2),this.platforms=this.physics.add.staticGroup(),this.platforms.create(0,i,"ground").setScale(10,.5).refreshBody(),this.scoreText=this.add.text(0,0,"Jimmy ate \n"+this.score+" dicks!",{fontSize:n/7+"px",fill:"#fff"}),this.restartButton=this.add.image(0,0,"play-again").setInteractive(),this.input.on("gameobjectdown",function(t,n){n===e.restartButton&&e.scene.start("GameScene")}),o.Display.Align.In.Center(this.scoreText,this.add.zone(n/2,i/4,n,i)),o.Display.Align.In.BottomCenter(this.restartButton,this.add.zone(n/2,i/4,n,i))}}]),t}();t.default=r},433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(54),r=n(431);var a=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:"TitleScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Scene),i(t,[{key:"create",value:function(){var e=this,t=(0,r.calculateSize)(),n=t.width,i=t.height;this.scene.bringToTop(),this.add.image(n/2,i/2,"water").setScale(10,2),this.platforms=this.physics.add.staticGroup(),this.platforms.create(0,i,"ground").setScale(10,.5).refreshBody(),this.title=this.add.text(n/10,i/10,"Jimmy Eats Dicks",{fontSize:n/10+"px",fill:"#fff"}),this.pressStart=this.add.text(0,0,"TAP TO START",{fontSize:"16px",fill:"#fff"}),o.Display.Align.In.TopCenter(this.title,this.add.zone(n/2,i-i/4,n,i)),o.Display.Align.In.BottomCenter(this.pressStart,this.add.zone(n/2,i/4,n,i)),this.startKey=this.input.keyboard.addKey(o.SPACE),this.start=!1,this.input.on("pointerdown",function(t){e.start=!0})}},{key:"update",value:function(){(this.startKey.isDown||this.start)&&this.scene.start("GameScene")}}]),t}();t.default=a},434:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(54);var r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:"BootScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Scene),i(t,[{key:"preload",value:function(){this.load.image("water","images/water.png"),this.load.image("ground","images/sandy-bottom.png"),this.load.image("dick","images/dick.png"),this.load.image("jimmy","images/jimmy.png"),this.load.image("play-again","images/play_again.png")}},{key:"create",value:function(){this.scene.start("TitleScene")}}]),t}();t.default=r},435:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.missCount=0}},436:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(54);var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.scene,e.x,e.y,e.key));return e.scene.physics.world.enable(n),e.scene.add.existing(n),n.jimmy=n.scene.jimmy,n.store=n.scene.store,n.scene.physics.add.collider(n,n.jimmy,n.getEaten,n.getEaten,n),n.eaten=!1,n.body.velocity.x=-500,n.acceleration=0,n.body.maxVelocity.y=0,n.body.setSize(200,20),n.setScale(.3,.3),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.GameObjects.Sprite),i(t,[{key:"getEaten",value:function(){this.eaten=!0}},{key:"update",value:function(){var e=this.x+this.displayWidth/2;this.eaten&&this.jimmy.eatADick(),e<=0?(this.scene.enemies.remove(this),this.destroy(),this.store.missCount++):this.eaten&&(this.scene.enemies.remove(this),this.destroy())}}]),t}();t.default=r},437:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(54));var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.scene,e.x,e.y,e.key));return e.scene.physics.world.enable(n),e.scene.add.existing(n),n.acceleration=800,n.body.maxVelocity.x=0,n.alive=!0,n.body.setCollideWorldBounds(!0),n.body.setSize(100,175),n.dicksEaten=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.GameObjects.Sprite),i(t,[{key:"update",value:function(e){e?this.jump():this.angle<15&&(this.angle+=.75)}},{key:"jump",value:function(){this.body.setVelocityY(-400),this.angle>-20&&(this.angle=-15)}},{key:"eatADick",value:function(){this.dicksEaten++}}]),t}();t.default=r},438:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(54),r=c(n(437)),a=c(n(436)),s=c(n(435));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{key:"GameScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Scene),i(t,[{key:"create",value:function(){var e=this;this.width=this.sys.game.config.width,this.height=this.sys.game.config.height,this.add.image(this.width/2,this.height/2,"water").setScale(10,2),this.platforms=this.physics.add.staticGroup(),this.platforms.create(0,this.height,"ground").setScale(10,.5).refreshBody(),this.missCount=0,this.score=0,this.scoreText=this.add.text(24,24,"0",{fontSize:"32px",fill:"#fff"}),this.jimmy=new r.default({scene:this,key:"jimmy",x:this.width/8,y:this.height/7}),this.enemies=this.add.group(),this.time.addEvent({delay:1e3,callback:this.addDick,callbackScope:this,loop:!0}),this.store=new s.default,this.isJump=!1,this.input.on("pointerdown",function(t){e.isJump=!0}),this.input.on("pointerup",function(t){e.isJump=!1}),this.spaceJump=this.input.keyboard.addKey(o.SPACE)}},{key:"update",value:function(){this.jimmy.update(this.isJump||this.spaceJump.isDown),this.enemies.children.entries.forEach(function(e){e.update()});var e=3-this.store.missCount;e=e>0?e:0,this.scoreText.setText(this.jimmy.dicksEaten+" "+"X".repeat(e)),this.store.missCount>3&&this.scene.start("GameOverScene",{score:this.jimmy.dicksEaten})}},{key:"enemySpawnYValue",value:function(){var e=.75*this.height,t=.1*this.height;return Math.floor(Math.random()*e)+t}},{key:"addDick",value:function(){this.enemies.add(new a.default({scene:this,key:"dick",x:this.width+this.width/10,y:this.enemySpawnYValue()}))}}]),t}();t.default=u}});