document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            loadContent(page);
        });
    });

    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                contentDiv.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    }

    // Load home page by default
    loadContent('home.html');
});

// Add this function to handle blog post loading
function loadBlogPost(postFile) {
    fetch(postFile)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading blog post:', error);
        });
}