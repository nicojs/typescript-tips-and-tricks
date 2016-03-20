namespace tipsAndTricks {


    function bindZoomers() {
        let zoomableElements = document.querySelectorAll('.zoom');
        for (let i = 0; i < zoomableElements.length; i++) {
            let element = zoomableElements.item(i);
            if (isHtmlElement(element)) {
                new Zoomer(element).bindOnClick();
            }
        }
    }

    function bindTSCompilerPlugin() {
        let tsCompilerWrapper = document.querySelectorAll('.typescript-plugin');
        for (let i = 0; i < tsCompilerWrapper.length; i++) {
            let container = tsCompilerWrapper.item(i);
            if (isHtmlElement(container)) {
                new TSCompilerPlugin(
                    <HTMLTextAreaElement>container.querySelector('.source'),
                    <HTMLTextAreaElement>container.querySelector('.source-options'), 
                    <HTMLElement>container.querySelector('.target'))
                    .bind()
                    .updateTS();
            }
        }
    }

    function isHtmlElement(element: Element): element is HTMLElement {
        return element.nodeType === Node.ELEMENT_NODE;
    }

    bindTSCompilerPlugin();
    bindZoomers();
}
