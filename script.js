// Wartet, bis der 3D-Viewer geladen ist, und färbt das Modell ein (falls gewünscht)
const modelViewer = document.querySelector('#stadt-modell');

modelViewer.addEventListener('load', () => {
    if (modelViewer.model && modelViewer.model.materials.length > 0) {
        const material = modelViewer.model.materials[0];
        material.pbrMetallicRoughness.setBaseColorFactor([0.0, 0.0, 0.0, 0.0]);
    }
});

// Elemente für die zentrale Bio-Box
const bioCard = document.getElementById('bio-card');
const bioTitle = document.getElementById('bio-title');
const bioText = document.getElementById('bio-text');


/**
 * Öffnet die Info-Box für BELIEBIG viele Personen.
 * Übergabe: Titel, gefolgt von beliebig vielen Paaren aus (Name, Text).
 */function openBio(title, ...args) {
    bioTitle.textContent = title;
    let htmlContent = '';
    
    // Falls nur 1 Argument übergeben wurde (nur der reine Text)
    if (args.length === 1) {
        htmlContent = `
            <div class="person-block">
                <p>${args[0]}</p>
            </div>
        `;
    } else {
        // Ansonsten wie gewohnt in 2er-Schritten (Name + Text) durchgehen
        for (let i = 0; i < args.length; i += 2) {
            let name = args[i];
            let text = args[i + 1] || ''; // Falls ein Text fehlt, bleibt es leer statt "undefined"
            
            if (i > 0) {
                htmlContent += `<hr class="bio-divider">`;
            }
            
            htmlContent += `
                <div class="person-block">
                    ${name ? `<h4>${name}</h4>` : ''}
                    <p>${text}</p>
                </div>
            `;
        }
    }
    
    bioText.innerHTML = htmlContent;
    bioCard.style.display = 'block';
}

/**
 * Schließt die Biografie-Box.
 */
function closeBio() {
    const bioCard = document.getElementById('bio-card');
    if (bioCard) {
        bioCard.style.display = 'none';
    }
}