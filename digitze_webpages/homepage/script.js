window.addEventListener("load", function() {
    // Get all path elements inside the SVG
    const paths = document.querySelectorAll('svg path');

    // Set animation delay based on the index of the path to make them draw sequentially
    paths.forEach((path, index) => {
        path.style.animationDelay = `${index * 0.3}s`; // Adjust delay time if needed
    });
});
