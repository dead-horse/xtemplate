define(function(require,exports,module){
/*compiled by xtemplate#3.7.1*/
var tpl = require("./b");
var XTemplateRuntime = require("xtemplate/runtime");
var instance = new XTemplateRuntime(tpl);
module.exports = function(){
return instance.render.apply(instance,arguments);
};
});