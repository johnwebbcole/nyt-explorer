webpackJsonp([1],{324:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0_vue__=__webpack_require__(191);var __WEBPACK_IMPORTED_MODULE_1__App__=__webpack_require__(957);var __WEBPACK_IMPORTED_MODULE_1__App___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);var __WEBPACK_IMPORTED_MODULE_2__router__=__webpack_require__(346);var __WEBPACK_IMPORTED_MODULE_3_vue_material__=__webpack_require__(971);var __WEBPACK_IMPORTED_MODULE_3_vue_material___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_material__);var __WEBPACK_IMPORTED_MODULE_4_vue_material_dist_vue_material_css__=__webpack_require__(592);var __WEBPACK_IMPORTED_MODULE_4_vue_material_dist_vue_material_css___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_material_dist_vue_material_css__);var __WEBPACK_IMPORTED_MODULE_5_axios__=__webpack_require__(193);var __WEBPACK_IMPORTED_MODULE_5_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip=false;__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_material___default.a);__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$http=__WEBPACK_IMPORTED_MODULE_5_axios___default.a;__WEBPACK_IMPORTED_MODULE_0_vue__["default"].material.registerTheme("default",{primary:"blue-grey",accent:"green",warn:"red",background:"white"});new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({el:"#app",router:__WEBPACK_IMPORTED_MODULE_2__router__["a"],template:"<App/>",components:{App:__WEBPACK_IMPORTED_MODULE_1__App___default.a}})},346:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_vue__=__webpack_require__(191);var __WEBPACK_IMPORTED_MODULE_1_vue_router__=__webpack_require__(972);var __WEBPACK_IMPORTED_MODULE_2__components_Home__=__webpack_require__(960);var __WEBPACK_IMPORTED_MODULE_2__components_Home___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Home__);var __WEBPACK_IMPORTED_MODULE_3__components_List__=__webpack_require__(961);var __WEBPACK_IMPORTED_MODULE_3__components_List___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_List__);var __WEBPACK_IMPORTED_MODULE_4__components_Config__=__webpack_require__(958);var __WEBPACK_IMPORTED_MODULE_4__components_Config___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Config__);__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a"]);__webpack_exports__["a"]=new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home/:id?",name:"Home",component:__WEBPACK_IMPORTED_MODULE_2__components_Home___default.a,props:true},{path:"/list",name:"List",component:__WEBPACK_IMPORTED_MODULE_3__components_List___default.a},{path:"/config",name:"Config",component:__WEBPACK_IMPORTED_MODULE_4__components_Config___default.a}]})},347:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__=__webpack_require__(61);var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__=__webpack_require__(134);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__=__webpack_require__(60);var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);var __WEBPACK_IMPORTED_MODULE_3_axios__=__webpack_require__(193);var __WEBPACK_IMPORTED_MODULE_3_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);var __WEBPACK_IMPORTED_MODULE_4__state__=__webpack_require__(75);var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__=__webpack_require__(686);var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);__webpack_exports__["a"]={mostviewed:function mostviewed(){var offset=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;return __WEBPACK_IMPORTED_MODULE_3_axios___default()({method:"get",url:"https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json",params:{"api-key":"11b83c713ccf4496ac47305da7d2295f",offset:offset}})},upsert:function upsert(db,article){var r={id:article.id.toString()};var keys=["url","column","section","byline","title","abstract","published_date","source","des_facet","org_facet","per_facet","geo_facet","media"];keys.forEach(function(key){r[key]=article[key]});return db.articles.upsert(r)},reload:function reload(cb){var _this=this;return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var db,result,numResults,d,numbers,loader;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return __WEBPACK_IMPORTED_MODULE_4__state__["a"]();case 2:db=_context.sent;_context.next=5;return _this.mostviewed();case 5:result=_context.sent;numResults=result.data.num_results;_context.next=9;return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all(result.data.results.map(function(article){return _this.upsert(db,article)}));case 9:d=_context.sent;if(cb)cb(d);numResults=50;numbers=__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default.a.Observable.range(20,numResults).bufferCount(1,20).concatAll();loader=__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default.a.Observable.zip(numbers,__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default.a.Observable.interval(2e3)).map(function(zip){return zip[0]}).switchMap(function(x){return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default.a.Observable.fromPromise(_this.mostviewed(x)).catch(function(error){return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default.a.Observable.of({msg:"http error",error:error,x:x})}).do(function(x){return x.msg&&console.error(x)}).filter(function(x){return x.msg!=="http error"}).map(function(result){return result.data.results}).mergeMap(function(articles){return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default.a.Observable.from(articles)}).switchMap(function(article){return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default.a.Observable.fromPromise(_this.upsert(db,article)).catch(function(error){return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default.a.Observable.of({msg:"upsert error",error:error,article:article})})}).do(function(x){return x.msg&&console.error(x)}).filter(function(x){return x.msg!=="upsert error"})}).merge();_context.next=16;return loader.subscribe();case 16:return _context.abrupt("return",_context.sent);case 17:case"end":return _context.stop()}}},_callee,_this)}))()}}},348:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__=__webpack_require__(61);var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__=__webpack_require__(60);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);var __WEBPACK_IMPORTED_MODULE_2__components_navigation__=__webpack_require__(963);var __WEBPACK_IMPORTED_MODULE_2__components_navigation___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_navigation__);var __WEBPACK_IMPORTED_MODULE_3__services_state__=__webpack_require__(75);__webpack_exports__["default"]={name:"app",components:{navigation:__WEBPACK_IMPORTED_MODULE_2__components_navigation___default.a},mounted:function(){var _ref=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var db,newkey,apikey;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return __WEBPACK_IMPORTED_MODULE_3__services_state__["a"]();case 2:db=_context.sent;_context.next=5;return db.config.upsert({name:"apikey",value:"11b83c713ccf4496ac47305da7d2295f"});case 5:newkey=_context.sent;console.log("newkey",newkey);_context.next=9;return db.config.findOne({name:"apikey"}).exec();case 9:apikey=_context.sent;if(!apikey||!apikey.value){console.warn("no apikey, redirecting to config");this.$router.push("Config")}case 11:case"end":return _context.stop()}}},_callee,this)}));function mounted(){return _ref.apply(this,arguments)}return mounted}(),methods:{toggleLeftSidenav:function toggleLeftSidenav(){this.$refs.leftSidenav.toggle()},open:function open(ref){console.log("Opened: "+ref)},close:function close(ref){console.log("Closed: "+ref)}}}},349:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__=__webpack_require__(61);var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__=__webpack_require__(60);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);var __WEBPACK_IMPORTED_MODULE_2__services_state__=__webpack_require__(75);__webpack_exports__["default"]={name:"hello",data:function data(){return{keys:["apikey"],apikey:undefined}},mounted:function(){var _ref=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(){var _this=this;var db;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return __WEBPACK_IMPORTED_MODULE_2__services_state__["a"]();case 2:db=_context2.sent;this.keys.forEach(function(){var _ref2=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(name){var config;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return db.config.findOne({name:name}).exec();case 2:config=_context.sent;if(config){_this[name]=config.value}case 4:case"end":return _context.stop()}}},_callee,_this)}));return function(_x){return _ref2.apply(this,arguments)}}());case 4:case"end":return _context2.stop()}}},_callee2,this)}));function mounted(){return _ref.apply(this,arguments)}return mounted}(),watch:{apikey:function apikey(val,oldval){console.log("watch apikey",val,oldval);if(val&&val!==oldval)this.save("apikey",val)}},methods:{keyup:function keyup(event,name,value){console.log("keyup",event,name,value)},save:function save(name,value){var _this2=this;return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(){var db;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:console.warn("save",name,value);_context3.next=3;return __WEBPACK_IMPORTED_MODULE_2__services_state__["a"]();case 3:db=_context3.sent;_context3.next=6;return db.config.upsert({name:name,value:value});case 6:return _context3.abrupt("return",_context3.sent);case 7:case"end":return _context3.stop()}}},_callee3,_this2)}))()}}}},350:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__=__webpack_require__(61);var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__=__webpack_require__(60);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);var __WEBPACK_IMPORTED_MODULE_2__services_state__=__webpack_require__(75);__webpack_exports__["default"]={props:["id"],data:function data(){return{data:undefined,image:null}},created:function created(){this.load()},watch:{id:"load"},methods:{load:function load(){var _this=this;return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var db;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(_this.id){_context.next=2;break}return _context.abrupt("return");case 2:_context.next=4;return __WEBPACK_IMPORTED_MODULE_2__services_state__["a"]();case 4:db=_context.sent;_context.next=7;return db.articles.findOne({id:_this.id}).exec();case 7:_this.data=_context.sent;if(_this.data)_this.image=_this.data.media[0]["media-metadata"][0].url;case 9:case"end":return _context.stop()}}},_callee,_this)}))()}}}},351:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__=__webpack_require__(61);var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__=__webpack_require__(60);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);var __WEBPACK_IMPORTED_MODULE_2__services_state__=__webpack_require__(75);var __WEBPACK_IMPORTED_MODULE_3__services_nyt__=__webpack_require__(347);var __WEBPACK_IMPORTED_MODULE_4__components_article__=__webpack_require__(962);var __WEBPACK_IMPORTED_MODULE_4__components_article___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_article__);var __WEBPACK_IMPORTED_MODULE_5__components_Detail__=__webpack_require__(959);var __WEBPACK_IMPORTED_MODULE_5__components_Detail___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Detail__);__webpack_exports__["default"]={props:["id"],name:"home",components:{articleItem:__WEBPACK_IMPORTED_MODULE_4__components_article___default.a,articleDetail:__WEBPACK_IMPORTED_MODULE_5__components_Detail___default.a},data:function data(){return{results:undefined,subs:[],ts:new Date}},watch:{$route:"setId"},mounted:function mounted(){this.load();console.log("home mounted db",this.results,this.id)},methods:{load:function load(){var _this=this;return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var db;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return __WEBPACK_IMPORTED_MODULE_2__services_state__["a"]();case 2:db=_context.sent;_context.next=5;return db.articles.find().limit(20).sort("published_date").exec();case 5:_this.results=_context.sent;case 6:case"end":return _context.stop()}}},_callee,_this)}))()},refresh:function refresh(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_this2.results=undefined;_context3.next=3;return __WEBPACK_IMPORTED_MODULE_3__services_nyt__["a"].reload(function(){var _ref=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(d){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _this2.load();case 2:case"end":return _context2.stop()}}},_callee2,_this2)}));return function(_x){return _ref.apply(this,arguments)}}());case 3:case"end":return _context3.stop()}}},_callee3,_this2)}))()},setId:function setId(){},go:function go(id){this.$router.push({path:"/home/"+id})}}}},352:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__=__webpack_require__(61);var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__=__webpack_require__(60);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);var __WEBPACK_IMPORTED_MODULE_2__services_state__=__webpack_require__(75);__webpack_exports__["default"]={name:"hello",data:function data(){return{results:[],subs:[],ts:new Date}},mounted:function(){var _ref=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var _this=this;var db;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return __WEBPACK_IMPORTED_MODULE_2__services_state__["a"]();case 2:db=_context.sent;console.log("mounted db",db,db.collections);db.articles.find().exec().then(function(article){_this.results=article});case 5:case"end":return _context.stop()}}},_callee,this)}));function mounted(){return _ref.apply(this,arguments)}return mounted}()}},353:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});__webpack_exports__["default"]={name:"article",props:["data"],mounted:function mounted(){}}},354:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});__webpack_exports__["default"]={name:"navigation",data:function data(){return{msg:"Welcome to Your Vue.js App"}},methods:{closeSideNav:function closeSideNav(event){console.log("closeSideNav",this.close);this.$emit("close")}}}},592:function(module,exports){},593:function(module,exports){},594:function(module,exports){},595:function(module,exports){},596:function(module,exports){},597:function(module,exports){},598:function(module,exports){},599:function(module,exports){},626:function(module,exports){module.exports={name:"levelup",description:"Fast & simple storage - a Node.js-style LevelDB wrapper",version:"1.3.3",contributors:["Rod Vagg <r@va.gg> (https://github.com/rvagg)","John Chesley <john@chesl.es> (https://github.com/chesles/)","Jake Verbaten <raynos2@gmail.com> (https://github.com/raynos)","Dominic Tarr <dominic.tarr@gmail.com> (https://github.com/dominictarr)","Max Ogden <max@maxogden.com> (https://github.com/maxogden)","Lars-Magnus Skog <ralphtheninja@riseup.net> (https://github.com/ralphtheninja)","David Björklund <david.bjorklund@gmail.com> (https://github.com/kesla)","Julian Gruber <julian@juliangruber.com> (https://github.com/juliangruber)","Paolo Fragomeni <paolo@async.ly> (https://github.com/0x00a)","Anton Whalley <anton.whalley@nearform.com> (https://github.com/No9)","Matteo Collina <matteo.collina@gmail.com> (https://github.com/mcollina)","Pedro Teixeira <pedro.teixeira@gmail.com> (https://github.com/pgte)","James Halliday <mail@substack.net> (https://github.com/substack)","Jarrett Cruger <jcrugzz@gmail.com> (https://github.com/jcrugzz)"],repository:{type:"git",url:"https://github.com/level/levelup.git"},homepage:"https://github.com/level/levelup",keywords:["leveldb","stream","database","db","store","storage","json"],main:"lib/levelup.js",dependencies:{"deferred-leveldown":"~1.2.1","level-codec":"~6.1.0","level-errors":"~1.0.3","level-iterator-stream":"~1.3.0",prr:"~1.0.1",semver:"~5.1.0",xtend:"~4.0.0"},devDependencies:{async:"~1.5.0",bustermove:"~1.0.0",tap:"~2.3.1",delayed:"~1.0.1",faucet:"~0.0.1",leveldown:"^1.1.0",memdown:"~1.1.0","msgpack-js":"~0.3.0",referee:"~1.2.0",rimraf:"~2.4.3","slow-stream":"0.0.4",tape:"~4.2.1"},browser:{leveldown:false,"leveldown/package":false,semver:false},scripts:{test:"tape test/*-test.js | faucet"},license:"MIT"}},75:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__=__webpack_require__(61);var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__=__webpack_require__(134);var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__=__webpack_require__(60);var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);var __WEBPACK_IMPORTED_MODULE_3_rxdb__=__webpack_require__(682);var __WEBPACK_IMPORTED_MODULE_3_rxdb___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxdb__);__webpack_exports__["a"]=get;__WEBPACK_IMPORTED_MODULE_3_rxdb__["plugin"](__webpack_require__(638));__WEBPACK_IMPORTED_MODULE_3_rxdb__["plugin"](__webpack_require__(645));console.log("state adapters",__WEBPACK_IMPORTED_MODULE_3_rxdb__["PouchDB"].adapters);var collections=[{name:"config",schema:{title:"app config",description:"store application configuration",version:0,type:"object",properties:{name:{type:"string",primary:true},value:"string"}}},{name:"articles",schema:{title:"article schema",description:"articles from nyt api",version:1,type:"object",properties:{id:{type:"string",primary:true},url:"string",column:"string",section:"string",byline:"string",title:"string",abstract:"string",published_date:{type:"string",index:true},source:"string",des_facet:[],org_facet:[],per_facet:[],geo_facet:[],media:[]}},migrationStrategies:{1:function _(a){return a}}}];var dbPromise=null;var _create=function(){var _ref=__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var db,created;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:console.log("DatabaseService: creating database..");_context.next=3;return __WEBPACK_IMPORTED_MODULE_3_rxdb__["create"]({name:"nytdb2",adapter:"memory",multiInstance:true});case 3:db=_context.sent;console.log("DatabaseService: created database",db);window["db"]=db;console.log("DatabaseService: create collections",collections.length);_context.next=9;return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all(collections.map(function(colData){return db.collection(colData)}));case 9:created=_context.sent;console.log("DatabaseService: created collections",created);return _context.abrupt("return",db);case 12:case"end":return _context.stop()}}},_callee,this)}));return function _create(){return _ref.apply(this,arguments)}}();function get(){if(!dbPromise)dbPromise=_create();return dbPromise}},957:function(module,exports,__webpack_require__){__webpack_require__(598);var Component=__webpack_require__(73)(__webpack_require__(348),__webpack_require__(969),null,null);module.exports=Component.exports},958:function(module,exports,__webpack_require__){__webpack_require__(595);var Component=__webpack_require__(73)(__webpack_require__(349),__webpack_require__(966),"data-v-42c3a4ec",null);module.exports=Component.exports},959:function(module,exports,__webpack_require__){__webpack_require__(596);var Component=__webpack_require__(73)(__webpack_require__(350),__webpack_require__(967),null,null);module.exports=Component.exports},960:function(module,exports,__webpack_require__){__webpack_require__(599);var Component=__webpack_require__(73)(__webpack_require__(351),__webpack_require__(970),"data-v-c49446ee",null);module.exports=Component.exports},961:function(module,exports,__webpack_require__){__webpack_require__(593);var Component=__webpack_require__(73)(__webpack_require__(352),__webpack_require__(964),"data-v-0ae5a0c8",null);module.exports=Component.exports},962:function(module,exports,__webpack_require__){__webpack_require__(594);var Component=__webpack_require__(73)(__webpack_require__(353),__webpack_require__(965),"data-v-36bce248",null);module.exports=Component.exports},963:function(module,exports,__webpack_require__){__webpack_require__(597);var Component=__webpack_require__(73)(__webpack_require__(354),__webpack_require__(968),"data-v-6aad4d9e",null);module.exports=Component.exports},964:function(module,exports){module.exports={render:function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_vm._v("\n  List View\n")])},staticRenderFns:[]}},965:function(module,exports){module.exports={render:function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("md-list-item",[_c("md-avatar",{staticClass:"md-avatar-icon text-icon"},[_c("div",{staticClass:"text-icon-letter"},[_vm._v("\n      "+_vm._s(_vm.data.section.substring(0,1))+"\n    ")])]),_vm._v(" "),_c("div",{staticClass:"md-list-text-container"},[_c("span",[_c("b",[_vm._v(_vm._s(_vm.data.section))]),_vm._v(" : "+_vm._s(_vm.data.title))]),_vm._v(" "),_c("span",[_vm._v(_vm._s(_vm.data.byline)+" - Published: "+_vm._s(_vm.data.published_date))]),_vm._v(" "),_c("p",[_vm._v(_vm._s(_vm.data.abstract.substring(0,100)))])])],1)},staticRenderFns:[]}},966:function(module,exports){module.exports={render:function(){var this$1=this;var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"config"},[_c("form",{on:{submit:function($event){$event.stopPropagation();$event.preventDefault();_vm.submit($event)}}},[_c("h1",[_vm._v("Configuration")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c("md-input-container",[_c("md-icon",[_vm._v("\n        vpn_key\n      ")]),_vm._v(" "),_c("label",[_vm._v("API Key")]),_vm._v(" "),_c("md-input",{attrs:{required:"",type:"text"},model:{value:_vm.apikey,callback:function($$v){_vm.apikey=$$v},expression:"apikey"}}),_vm._v(" "),_c("span",{staticClass:"md-error"},[_vm._v("Validation message")])],1),_vm._v(" "),_c("pre",[_vm._v("\n      "+_vm._s(_vm.keys.map(function(name){return name+":"+this$1[name]}).join(","))+"\n    ")])],1)])},staticRenderFns:[function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("p",[_vm._v("\n        Access to The New York Times API requires a key.  You can obtain a key by visiting "),_c("a",{attrs:{href:"https://developer.nytimes.com"}},[_vm._v("developer.nytimes.com")]),_vm._v(".\n      ")])}]}},967:function(module,exports){module.exports={render:function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"detail"},[_vm.data?_c("md-card",[_c("md-card-media-cover",{attrs:{"md-solid":""}},[_c("md-card-media",{attrs:{"md-ratio":"1:1"}},[_c("md-image",{attrs:{"md-src":_vm.image}})],1),_vm._v(" "),_c("md-card-area",[_c("md-card-header",[_c("div",{staticClass:"md-title"},[_vm._v(_vm._s(_vm.data.title))]),_vm._v(" "),_c("div",{staticClass:"md-subhead"},[_vm._v(_vm._s(_vm.data.abstract))])]),_vm._v(" "),_c("md-card-actions",[_c("md-button",{attrs:{href:_vm.data.url}},[_vm._v("Read Article")])],1)],1)],1)],1):_vm.id?_c("span",[_vm._v("Loading...")]):_c("span")],1)},staticRenderFns:[]}},968:function(module,exports){module.exports={render:function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"navigation"},[_c("router-link",{staticClass:"md-button",attrs:{tag:"button",to:"/"},nativeOn:{click:function($event){_vm.closeSideNav($event)}}},[_vm._v("Home")]),_vm._v(" "),_c("router-link",{staticClass:"md-button",attrs:{tag:"button",to:"/config"},nativeOn:{click:function($event){_vm.closeSideNav($event)}}},[_vm._v("Config")])],1)},staticRenderFns:[]}},969:function(module,exports){module.exports={render:function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"phone-viewport",attrs:{id:"app"}},[_c("md-toolbar",[_c("md-button",{staticClass:"md-icon-button",nativeOn:{click:function($event){_vm.toggleLeftSidenav($event)}}},[_c("md-icon",[_vm._v("menu")])],1),_vm._v(" "),_c("h2",{staticClass:"md-title"},[_vm._v("NYT Explorer")])],1),_vm._v(" "),_c("transition",{attrs:{name:"fade"}},[_c("router-view")],1),_vm._v(" "),_c("md-sidenav",{ref:"leftSidenav",staticClass:"md-left side-nav",on:{open:function($event){_vm.open("Left")},close:function($event){_vm.close("Left")}}},[_c("md-toolbar",{staticClass:"md-large side-nav-toolbar"},[_c("div",{staticClass:"md-toolbar-container"},[_c("div",{staticClass:"side-nav-title"},[_c("h3",{staticClass:"md-title"},[_vm._v("The New York Times")]),_vm._v(" "),_c("div",[_vm._v("\n            Explore the most viewed articles via The New York Times API.\n          ")])])])]),_vm._v(" "),_c("navigation",{on:{close:function($event){_vm.toggleLeftSidenav()}}})],1)],1)},staticRenderFns:[]}},970:function(module,exports){module.exports={render:function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"home"},[_c("div",{staticClass:"toolbar"},[_c("md-button",{staticClass:"md-icon-button",nativeOn:{click:function($event){_vm.refresh($event)}}},[_c("md-icon",[_vm._v("refresh")])],1)],1),_vm._v(" "),_c("md-layout",{staticClass:"content",attrs:{"md-gutter":""}},[_c("md-layout",{attrs:{"md-flex":"50"}},[_vm.results!==undefined&&_vm.results.length>0?_c("div",{staticClass:"article-list"},_vm._l(_vm.results,function(article){return _c("md-list",{key:article.id,staticClass:"custom-list md-triple-line"},[_c("article-item",{attrs:{data:article},nativeOn:{click:function($event){_vm.go(article.id)}}})],1)})):_vm.results!==undefined&&_vm.results.length===0?_c("span",[_vm._v("No Articles")]):_c("span",[_vm._v("Loading..")])]),_vm._v(" "),_c("md-layout",[_c("article-detail",{attrs:{id:_vm.id}})],1)],1)],1)},staticRenderFns:[]}},975:function(module,exports){},976:function(module,exports){},977:function(module,exports){},978:function(module,exports){},979:function(module,exports){},980:function(module,exports){},981:function(module,exports){},982:function(module,exports,__webpack_require__){__webpack_require__(325);module.exports=__webpack_require__(324)}},[982]);
//# sourceMappingURL=app.5833294697d8bbcc6204.js.map