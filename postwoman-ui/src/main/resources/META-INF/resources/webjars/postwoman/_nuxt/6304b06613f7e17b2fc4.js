(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{330:function(t,e,l){var content=l(885);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(47).default)("7e2cec48",content,!0,{sourceMap:!1})},884:function(t,e,l){"use strict";var n=l(330);l.n(n).a},885:function(t,e,l){(e=l(46)(!1)).push([t.i,".virtual-list[data-v-f4b2db68]{max-height:calc(100vh - 294px)}ol[data-v-f4b2db68],ul[data-v-f4b2db68]{flex-direction:column}.entry[data-v-f4b2db68]{border-bottom:1px dashed var(--brd-color);padding:0 0 8px}.clamb-3[data-v-f4b2db68]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}",""]),t.exports=e},929:function(t,e,l){"use strict";l.r(e);var n=l(241),r={components:{VirtualList:function(){return l.e(3).then(l.t.bind(null,902,7))}},data:function(){return{fb:n.a}},methods:{deleteFeed:function(t){n.a.deleteFeed(t.id),this.$toast.error(this.$t("deleted"),{icon:"delete"})}}},c=(l(884),l(41)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return 0!==t.fb.currentFeeds.length?l("virtual-list",{staticClass:"virtual-list",class:{filled:t.fb.currentFeeds.length},attrs:{size:180,remain:Math.min(6,t.fb.currentFeeds.length)}},t._l(t.fb.currentFeeds,(function(e){return l("ul",{key:e.id,staticClass:"entry"},[l("div",{staticClass:"show-on-large-screen"},[l("li",{staticClass:"info"},[l("label",[t._v("\n          "+t._s(e.label||t.$t("no_label"))+"\n        ")])]),t._v(" "),l("button",{staticClass:"icon",on:{click:function(l){return t.deleteFeed(e)}}},[l("i",{staticClass:"material-icons"},[t._v("delete")])])]),t._v(" "),l("div",{staticClass:"show-on-large-screen"},[l("li",{staticClass:"info clamb-3"},[l("label",[t._v(t._s(e.message||t.$t("empty")))])])])])})),0):l("ul",[l("li",[l("label",{staticClass:"info"},[t._v(t._s(t.$t("empty")))])])])}),[],!1,null,"f4b2db68",null);e.default=component.exports}}]);