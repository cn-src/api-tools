(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{333:function(o,t,e){var content=e(891);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(47).default)("2753e8e5",content,!0,{sourceMap:!1})},890:function(o,t,e){"use strict";var r=e(333);e.n(r).a},891:function(o,t,e){(t=e(46)(!1)).push([o.i,"div.realtime-log[data-v-48a6a083]{margin:4px;padding:8px 16px;width:calc(100% - 8px);border-radius:8px;background-color:var(--bg-dark-color);color:var(--fg-color);height:256px;overflow:auto}div.realtime-log[data-v-48a6a083],div.realtime-log span[data-v-48a6a083]{font-size:16px;font-family:Roboto Mono,monospace;font-weight:400}div.realtime-log span[data-v-48a6a083]{display:block;white-space:pre-wrap;word-wrap:break-word;word-break:break-all}",""]),o.exports=t},908:function(o,t,e){"use strict";e.r(t);e(15),e(6),e(28),e(29),e(42);var r={props:["log","title"],methods:{getSourcePrefix:function(source){var o={info:"\tℹ️ [INFO]:\t",client:"\t👽 [SENT]:\t",server:"\t📥 [RECEIVED]:\t"};return Object.keys(o).includes(source)?o[source]:""}},updated:function(){this.$nextTick((function(){this.$refs.log&&this.$refs.log.scrollBy(0,this.$refs.log.scrollHeight+100)}))}},l=(e(890),e(41)),component=Object(l.a)(r,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[e("label",{attrs:{for:"log"}},[o._v(o._s(o.title))]),o._v(" "),e("div",{ref:"log",staticClass:"realtime-log",attrs:{name:"log"}},[o.log?e("span",o._l(o.log,(function(t,r){return e("span",{key:r,style:{color:t.color}},[o._v("@ "+o._s(t.ts)+o._s(o.getSourcePrefix(t.source))+o._s(t.payload))])})),0):e("span",[o._v(o._s(o.$t("waiting_for_connection")))])])])}),[],!1,null,"48a6a083",null);t.default=component.exports}}]);