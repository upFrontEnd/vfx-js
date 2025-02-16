import { VFX } from "https://esm.sh/@vfx-js/core";
const vfx = new VFX();

const shaderOptionsMap = {
    'demo-1': { shader: 'slitScanTransition' },
    'demo-2': { shader: 'glitch', overflow: 100 },
    'demo-3': { shader: 'pixelate' },
    'demo-4': { shader: 'rgbShift', overflow: 100 },
    'demo-5': { shader: 'warpTransition' },
    // Ajoutez d'autres correspondances si nécessaire
};


// Fonction pour appliquer les effets aux éléments correspondants
function applyVFX() {
    const items = document.querySelectorAll('[data-demo]');
    items.forEach(item => {
        const demoType = item.getAttribute('data-demo');
        const shaderOptions = shaderOptionsMap[demoType];
        if (shaderOptions) {
            vfx.add(item, shaderOptions);
        }
    });
}

applyVFX();

function reloadAnimations() {
    const items = document.querySelectorAll('[data-demo]');
    items.forEach(item => {
        vfx.remove(item); // Supprime l'effet actuel
        const demoType = item.getAttribute('data-demo');
        const shaderOptions = shaderOptionsMap[demoType];
        if (shaderOptions) {
            vfx.add(item, shaderOptions); // Réapplique l'effet
        }
    });
}

const reloadButton = document.getElementById('reloadButton');
reloadButton.addEventListener('click', reloadAnimations);