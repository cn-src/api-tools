(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{252:function(e,t,o){var content=o(305);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(47).default)("55830e99",content,!0,{sourceMap:!1})},304:function(e,t,o){"use strict";var l=o(252);o.n(l).a},305:function(e,t,o){(t=o(46)(!1)).push([e.i,"fieldset.no-colored-frames legend[data-v-105dc64c]{color:var(--fg-color)}",""]),e.exports=t},365:function(e,t,o){"use strict";o.r(t);o(29),o(42),o(61);var l={computed:{frameColorsEnabled:function(){return this.$store.state.postwoman.settings.FRAME_COLORS_ENABLED||!1},sectionString:function(){return"".concat(this.$route.path.replace(/\/+$/,""),"/").concat(this.label)}},props:{label:{type:String,default:"Section"},collapsed:{type:Boolean}},methods:{collapse:function(e){e.target.parentNode.parentNode.querySelector(".collapsible").classList.toggle("hidden"),this.$store.commit("setCollapsedSection",this.sectionString)},isCollapsed:function(label){return this.$store.state.theme.collapsedSections.includes(this.sectionString)||!1}}},n=(o(304),o(41)),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("fieldset",{class:{"no-colored-frames":!e.frameColorsEnabled},attrs:{id:e.label.toLowerCase()}},[o("legend",{on:{click:function(t){return t.preventDefault(),e.collapse(t)}}},[o("span",[e._v(e._s(e.label))]),e._v(" "),o("i",{staticClass:"material-icons"},[e._v("\n      "+e._s(e.isCollapsed(e.label)?"expand_more":"expand_less")+"\n    ")])]),e._v(" "),o("div",{staticClass:"collapsible",class:{hidden:e.isCollapsed(e.label.toLowerCase())}},[e._t("default")],2)])}),[],!1,null,"105dc64c",null);t.default=component.exports}}]);