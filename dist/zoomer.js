var tipsAndTricks;
(function (tipsAndTricks) {
    var Zoomer = (function () {
        function Zoomer(target) {
            this.target = target;
        }
        Zoomer.prototype.bindOnClick = function () {
            var _this = this;
            this.target.addEventListener('click', function (ev) {
                if (!_this.target.classList.contains('zoom-in')) {
                    _this.target.style.transformOrigin = ev.offsetX + "px " + ev.offsetY + "px";
                }
                _this.target.classList.toggle('zoom-in');
            });
        };
        return Zoomer;
    }());
    tipsAndTricks.Zoomer = Zoomer;
})(tipsAndTricks || (tipsAndTricks = {}));
//# sourceMappingURL=zoomer.js.map