webpackJsonp([1],{

/***/ 105:
/*!************************!*\
  !*** ./page/page1.vue ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! -!style!css!less!./../~/vue-loader/lib/selector.js?type=style&index=0!./page1.vue */ 106)
	module.exports = __webpack_require__(/*! -!./../~/vue-loader/lib/selector.js?type=script&index=0!./page1.vue */ 110)
	module.exports.template = __webpack_require__(/*! -!html!./../~/vue-loader/lib/selector.js?type=template&index=0!./page1.vue */ 111)


/***/ },

/***/ 106:
/*!**************************************************************************************************************************!*\
  !*** ./~/style-loader!./~/css-loader!./~/less-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./page/page1.vue ***!
  \**************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/less-loader!./../~/vue-loader/lib/selector.js?type=style&index=0!./page1.vue */ 107);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 109)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./page1.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./page1.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 107:
/*!*********************************************************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./page/page1.vue ***!
  \*********************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 108)();
	// imports
	
	
	// module
	exports.push([module.id, "h1 {\n  color: red;\n}\nh2 {\n  color: blue;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 110:
/*!***************************************************************************!*\
  !*** ./~/vue-loader/lib/selector.js?type=script&index=0!./page/page1.vue ***!
  \***************************************************************************/
/***/ function(module, exports) {

	module.exports = {
	        data:function(){
	            return {
	                title:'This is page 1'
	            }
	        }
	    }

/***/ },

/***/ 111:
/*!*********************************************************************************************!*\
  !*** ./~/html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./page/page1.vue ***!
  \*********************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<h2>{{title}}</h2>";

/***/ }

});
//# sourceMappingURL=1.1.js.map