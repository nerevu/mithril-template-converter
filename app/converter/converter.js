"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_textfield=require("polythene/textfield/textfield"),_textfield2=_interopRequireDefault(_textfield),_templateBuilder=require("app/converter/template-builder"),_templateBuilder2=_interopRequireDefault(_templateBuilder);window.m=_mithril2.default;var converter={controller:function(){this.source=_mithril2.default.prop(""),this.output=_mithril2.default.prop(""),this.convert=function(){return this.output((0,_templateBuilder2.default)(this.source()))}.bind(this)},view:function view(ctrl){var output=ctrl.output(),rendered=void 0;try{rendered=eval(output)}catch(e){rendered="Could not render Mithril code - please check the output for any errors."}return(0,_mithril2.default)("div",[(0,_mithril2.default)("h2","Paste source HTML"),_mithril2.default.component(_textfield2.default,{class:"source",autofocus:!0,getState:function(e){var t=!(!ctrl.source()&&!e.value);ctrl.source(e.value),""===e.value?ctrl.output(""):t&&ctrl.convert()},multiline:!0,rows:8,value:ctrl.source()}),(0,_mithril2.default)("h2","Copy Mithril code from here"),_mithril2.default.component(_textfield2.default,{class:"result",multiline:!0,rows:8,value:function(){return ctrl.output()}}),(0,_mithril2.default)("h2","Rendered Mithril code"),(0,_mithril2.default)("div",{class:"render"},rendered?rendered:null)])}};exports.default=converter;