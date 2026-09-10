const preloader = document.getElementById("preloader");
const progressBar = document.getElementById("progress-bar");
const progressPercent = document.getElementById("progress-percent");

const duration = 2000; // 2 secondes
const start = performance.now();

function loading(currentTime) {

    const elapsed = currentTime - start;

    // Calcul du pourcentage
    let progress = elapsed / duration;

    if (progress > 1) {
        progress = 1;
    }
 const percentage = Math.floor(progress * 100);

    // Barre
    progressBar.style.width = percentage + "%";

    // Pourcentage
    progressPercent.textContent = percentage + "%";
if (progress < 1) {

        requestAnimationFrame(loading);

    } else {

        // Quand on arrive à 100%
        setTimeout(() => {

            preloader.classList.add("loaded");

            // On place automatiquement le visiteur
            // au début de la page
            window.scrollTo({
                top: 0,
                behavior: "instant"
            });
 }, 500);
    }
}

requestAnimationFrame(loading);
