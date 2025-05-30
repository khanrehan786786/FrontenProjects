function toggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');

    // Ensure elements exist before toggling classes
    if (menu && nav) {
        menu.classList.toggle('active'); // Activate/deactivate menu
        nav.classList.toggle('active'); // Activate/deactivate nav
    } else {
        console.warn('Menu or navigation element not found.');
    }
}

function changeVideo(name) {
    const bgVideoList = document.querySelectorAll('.bg-video');
    const models = document.querySelectorAll('.model');

    if (!name) {
        console.warn('Invalid name provided for changeVideo function.');
        return;
    }

    // Toggle active classes for videos
    bgVideoList.forEach(video => {
        if (video.classList.contains(name)) {
            video.classList.add('active'); // Activate matching video
        } else {
            video.classList.remove('active'); // Deactivate others
        }
    });

    // Toggle active classes for models
    models.forEach(model => {
        if (model.classList.contains(name)) {
            model.classList.add('active'); // Activate matching model
        } else {
            model.classList.remove('active'); // Deactivate others
        }
    });
}
