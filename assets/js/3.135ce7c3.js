(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{314:function(t,e,n){},317:function(t,e,n){"use strict";var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();t.exports=e=r.fetch,e.default=r.fetch.bind(r),e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response},318:function(t,e,n){"use strict";var r=n(314);n.n(r).a},327:function(t,e,n){"use strict";n.r(e);n(29),n(100);var r=n(58),o=n(317),a=n.n(o),s={components:{},data:function(){return{list:null,content:"",title:""}},props:{},created:function(){},computed:{},methods:{getYuQue:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.$themeConfig.yq.token,s={},(o||AUTH_TOKEN)&&(s.headers={"X-Auth-Token":o}),n.prev=3,n.next=6,a()(t,s).then((function(t){return t.ok?t.json():t.json().then((function(t){throw t}))}),(function(t){throw{msg:t.message}}));case 6:return r=n.sent,n.abrupt("return",r);case 10:return n.prev=10,n.t0=n.catch(3),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})))()},getList:function(){var t=this.$site.pages,e=t.filter((function(t,e,n){return console.log("/"!==t.regularPath),"/"!==t.regularPath}));return console.log(t),e}},watch:{},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getYuQue("/api/repos/vvimo/py3f37/docs/znd1zd?rw=1");case 2:n=e.sent,console.log(n),t.title=n.data.title||"",t.content=n.data.body_html||"",t.list=t.getList();case 7:case"end":return e.stop()}}),e)})))()}},i=(n(318),n(3)),u={components:{VmContent:Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"vm-main"},[n("div",[t._v("main")]),t._v(" "),n("BaseListLayout",{attrs:{data:t.list}}),t._v(" "),n("div",{staticClass:"vm-content"},[n("h1",{domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{staticStyle:{"margin-top":"30px"},domProps:{innerHTML:t._s(t.content)}})])],1)}),[],!1,null,null,null).exports},data:function(){return{}},props:{},created:function(){},computed:{},methods:{pagination:function(){return!0}},watch:{},mounted:function(){}},c=Object(i.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-wrapper"},[this.pagination?e("BaseListLayout"):e("Content")],1)}),[],!1,null,null,null);e.default=c.exports}}]);