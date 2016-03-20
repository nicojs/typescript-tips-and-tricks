/// <reference path="../node_modules/typescript/lib/typescript.d.ts" />
var tipsAndTricks;
(function (tipsAndTricks) {
    var TSCompilerPlugin = (function () {
        function TSCompilerPlugin(source, optionsSource, jsTarget) {
            this.source = source;
            this.optionsSource = optionsSource;
            this.jsTarget = jsTarget;
        }
        TSCompilerPlugin.prototype.bind = function () {
            var _this = this;
            this.source.addEventListener('input', function (ev) { return _this.updateTS(); });
            this.optionsSource.addEventListener('input', function (ev) { return _this.updateTS(); });
            return this;
        };
        TSCompilerPlugin.prototype.updateTS = function () {
            var _this = this;
            window.clearTimeout(this.timeoutRef);
            var result = ts.transpile(this.source.innerText, this.readOptions());
            this.jsTarget.innerHTML = result;
            // this.tsTarget.innerHTML = this.source.value;
            hljs.highlightBlock(this.jsTarget);
            this.timeoutRef = window.setTimeout(function () {
                hljs.highlightBlock(_this.source);
                hljs.highlightBlock(_this.optionsSource);
            }, 2000); // only highlight after 2 seconds so that the user's caret isn't reset while typing
            Reveal.layout();
        };
        TSCompilerPlugin.prototype.readOptions = function () {
            var options = JSON.parse(this.optionsSource.innerText);
            var moduleName = options['module'];
            if (moduleName) {
                moduleName = moduleName.toUpperCase();
                if (moduleName === 'SYSTEM') {
                    moduleName = 'System';
                }
                if (moduleName === 'COMMONJS') {
                    moduleName = 'CommonJS';
                }
            }
            var targetName = options['target'];
            if (targetName) {
                targetName = targetName.toUpperCase();
                if (targetName === 'LATEST') {
                    targetName = 'Latest';
                }
            }
            options['module'] = ts.ModuleKind[moduleName];
            options['target'] = ts.ScriptTarget[targetName];
            return options;
        };
        return TSCompilerPlugin;
    }());
    tipsAndTricks.TSCompilerPlugin = TSCompilerPlugin;
})(tipsAndTricks || (tipsAndTricks = {}));
//# sourceMappingURL=ts-compiler-plugin.js.map