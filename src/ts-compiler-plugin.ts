/// <reference path="../node_modules/typescript/lib/typescript.d.ts" />

namespace tipsAndTricks {

    export class TSCompilerPlugin {

        private timeoutRef: number;

        constructor(private source: HTMLElement, private optionsSource: HTMLElement, private jsTarget: HTMLElement) {
        }

        public bind() {
            this.source.addEventListener('input', ev => this.updateTS());
            this.optionsSource.addEventListener('input', ev => this.updateTS());
            return this;
        }

        public updateTS() {
            window.clearTimeout(this.timeoutRef);
            let result = ts.transpile(this.source.innerText, this.readOptions());
            this.jsTarget.innerHTML = result;
            // this.tsTarget.innerHTML = this.source.value;
            hljs.highlightBlock(this.jsTarget);
            this.timeoutRef = window.setTimeout(() => {
                hljs.highlightBlock(this.source);
                hljs.highlightBlock(this.optionsSource)
            }, 2000); // only highlight after 2 seconds so that the user's caret isn't reset while typing
            Reveal.layout();
        }

        public readOptions() {
            let options = JSON.parse(this.optionsSource.innerText);
            let moduleName = options['module'];
            if (moduleName) {
                moduleName = moduleName.toUpperCase();
                if (moduleName === 'SYSTEM') {
                    moduleName = 'System';
                }
                if (moduleName === 'COMMONJS') {
                    moduleName = 'CommonJS';
                }
            }

            options['module'] = ts.ModuleKind[moduleName];
            return options;
        }

    }
}
