window.addEventListener("load", function() {
    // Get all path elements inside the SVG
    const paths = document.querySelectorAll('.svg-art-one');

    // Set animation delay based on the index of the path to make them draw sequentially
    paths.forEach((path, index) => {
        path.style.animationDelay = `${index * 0.3}s`; // Adjust delay time if needed
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Select all matching SVG elements
    const svgElements = document.querySelectorAll('.porsche-with-bikes-svg, .svg-bulletpoints');

    // Create an IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply animation to the specific SVG that is visible
                entry.target.style.strokeDashoffset = '0';
                observer.unobserve(entry.target); // Stop observing after animation triggers
            }
        });
    }, {
        threshold: 0.2  // Trigger when 50% of the element is in view
    });

    // Observe each SVG element
    svgElements.forEach(svg => {
        observer.observe(svg);
    });
});
