(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{938:function(n,t,e){"use strict";e.r(t);e(9);var o=e(241),r={props:{show:Boolean},components:{modal:function(){return e.e(0).then(e.bind(null,944))}},data:function(){return{name:void 0}},methods:{syncEnvironments:function(){null!==o.a.currentUser&&o.a.currentSettings[1].value&&o.a.writeEnvironments(JSON.parse(JSON.stringify(this.$store.state.postwoman.environments)))},addNewEnvironment:function(){if(this.$data.name){var n=[{name:this.$data.name,variables:[]}];this.$store.commit("postwoman/importAddEnvironments",{environments:n,confirmation:"Environment added"}),this.$emit("hide-modal"),this.syncEnvironments()}else this.$toast.info(this.$t("invalid_environment_name"))},hideModal:function(){this.$data.name=void 0,this.$emit("hide-modal")}}},l=e(41),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.show?e("modal",{on:{close:n.hideModal}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("ul",[e("li",[e("div",{staticClass:"flex-wrap"},[e("h3",{staticClass:"title"},[n._v(n._s(n.$t("new_environment")))]),n._v(" "),e("div",[e("button",{staticClass:"icon",on:{click:n.hideModal}},[e("i",{staticClass:"material-icons"},[n._v("close")])])])])])])]),n._v(" "),e("div",{attrs:{slot:"body"},slot:"body"},[e("ul",[e("li",[e("input",{directives:[{name:"model",rawName:"v-model",value:n.name,expression:"name"}],attrs:{type:"text",placeholder:n.$t("my_new_environment")},domProps:{value:n.name},on:{keyup:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter")?null:n.addNewEnvironment(t)},input:function(t){t.target.composing||(n.name=t.target.value)}}})])])]),n._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("div",{staticClass:"flex-wrap"},[e("span"),n._v(" "),e("span",[e("button",{staticClass:"icon",on:{click:n.hideModal}},[n._v("\n          "+n._s(n.$t("cancel"))+"\n        ")]),n._v(" "),e("button",{staticClass:"icon primary",on:{click:n.addNewEnvironment}},[n._v("\n          "+n._s(n.$t("save"))+"\n        ")])])])])]):n._e()}),[],!1,null,null,null);t.default=component.exports}}]);