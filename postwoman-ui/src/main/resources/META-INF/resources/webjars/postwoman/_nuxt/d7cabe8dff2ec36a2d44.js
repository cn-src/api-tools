(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{928:function(t,e,n){"use strict";n.r(e);n(42),n(17),n(16),n(8),n(35);var o=n(14),l=(n(11),n(242),n(238));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var r={props:{show:Boolean,editingCollection:Object,editingCollectionIndex:Number},components:{modal:function(){return n.e(0).then(n.bind(null,937))}},data:function(){return{name:void 0}},methods:{syncCollections:function(){null!==l.a.currentUser&&l.a.currentSettings[0].value&&l.a.writeCollections(JSON.parse(JSON.stringify(this.$store.state.postwoman.collections)))},saveCollection:function(){if(this.$data.name){var t=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.$props.editingCollection,{name:this.$data.name});this.$store.commit("postwoman/editCollection",{collection:t,collectionIndex:this.$props.editingCollectionIndex}),this.$emit("hide-modal"),this.syncCollections()}else this.$toast.info(this.$t("invalid_collection_name"))},hideModal:function(){this.$emit("hide-modal")}}},d=n(41),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("modal",{on:{close:t.hideModal}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("ul",[n("li",[n("div",{staticClass:"flex-wrap"},[n("h3",{staticClass:"title"},[t._v(t._s(t.$t("edit_collection")))]),t._v(" "),n("div",[n("button",{staticClass:"icon",on:{click:t.hideModal}},[n("i",{staticClass:"material-icons"},[t._v("close")])])])])])])]),t._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("ul",[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:t.editingCollection.name},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveCollection(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})])])]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("div",{staticClass:"flex-wrap"},[n("span"),t._v(" "),n("span",[n("button",{staticClass:"icon",on:{click:t.hideModal}},[t._v("\n          "+t._s(t.$t("cancel"))+"\n        ")]),t._v(" "),n("button",{staticClass:"icon primary",on:{click:t.saveCollection}},[t._v("\n          "+t._s(t.$t("save"))+"\n        ")])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);