var tipsAndTricks;
(function (tipsAndTricks) {
    function bindZoomers() {
        var zoomableElements = document.querySelectorAll('.zoom');
        for (var i = 0; i < zoomableElements.length; i++) {
            var element = zoomableElements.item(i);
            if (isHtmlElement(element)) {
                new tipsAndTricks.Zoomer(element).bindOnClick();
            }
        }
    }
    function bindTSCompilerPlugin() {
        var tsCompilerWrapper = document.querySelectorAll('.typescript-plugin');
        for (var i = 0; i < tsCompilerWrapper.length; i++) {
            var container = tsCompilerWrapper.item(i);
            if (isHtmlElement(container)) {
                new tipsAndTricks.TSCompilerPlugin(container.querySelector('.source'), container.querySelector('.source-options'), container.querySelector('.target'))
                    .bind()
                    .updateTS();
            }
        }
    }
    function isHtmlElement(element) {
        return element.nodeType === Node.ELEMENT_NODE;
    }
    bindTSCompilerPlugin();
    bindZoomers();
})(tipsAndTricks || (tipsAndTricks = {}));
//# sourceMappingURL=launch.js.map