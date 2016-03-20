
namespace tipsAndTricks {

    export class Zoomer {
        constructor(private target: HTMLElement) {
        }

        public bindOnClick() {
            this.target.addEventListener('click', ev => {
                if (!this.target.classList.contains('zoom-in')) {
                    this.target.style.transformOrigin = `${ev.offsetX}px ${ev.offsetY}px`;
                }
                this.target.classList.toggle('zoom-in');
            });
        }
    }
}
