(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0a51"],{4351:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("threads-list",{attrs:{threads:e.threads},on:{"page-changed":e.handlePageChanged}})},s=[],d=a("1ea6"),h={name:"user-threads",components:{ThreadsList:d["a"]},data:function(){return{threads:{}}},methods:{loadThreads:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("threads?user_id=".concat(this.$parent.user.id,"&page=").concat(t)).then(function(t){e.threads=t})},handlePageChanged:function(e){this.loadThreads(e)}},mounted:function(){this.loadThreads()}},r=h,o=a("2877"),c=Object(o["a"])(r,n,s,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0c0a51.bf2bc381.js.map