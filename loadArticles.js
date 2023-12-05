document.addEventListener('DOMContentLoaded', function() {
    fetch('articlesData.json')
        .then(response => response.json())
        .then(articles => {
            const infoSection = document.getElementById('infoSection');

            articles.forEach(article => {
                const card = document.createElement('div');
                card.className = 'info-card';

                card.innerHTML = `
                    <img class="info-image" src="${article.imageUrl}" alt="${article.title}">
                    <div class="info-content">
                        <h4 class="info-card-title">${article.title}</h4>
                        <p class="info-card-text">${article.text}</p>
                        <a href="${article.readMoreLink}">Read More</a>
                    </div>
                `;
                infoSection.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading articles:', error));
});
