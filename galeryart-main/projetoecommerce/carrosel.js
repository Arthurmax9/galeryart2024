document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector(".carousel");
    const carouselTitle = document.querySelector(".carousel-title");

    const images = [
        "imgart/dog.jpg",
        "imgart/galery.jpg",
        "imgart/galery2.jpg",
        "imgart/qvstudio.jpg",
        "imgart/artstreet.jpg",
        "imgart/QVQV.jpg",
        "imgart/MY CINDERELLA AMSTERDAM.jpg",
        "imgart/fly.jpg",
        "imgart/dimension.jpg",
        "imgart/distance Wiew.jpg",
        "imgart/LONDON.jpg",
        "imgart/MODELOTOKIO.jpg",
        "imgart/PLANETESSERIES.jpg",
        "imgart/MODELOTOKIO.jpg",
        "imgart/MODELOTOKIO.jpg",
        "imgart/MODELOPARIS.jpg",
        "imgart/AMSTERDAM.jpg",
        "imgart/Have The EGG You Deserve.jpg",
        "imgart/QVARTURUGUAY.jpg",
        "imgart/puntadelest1.jpg",
        "imgart/puntadelest.jpg",
        "imgart/serieuniverse1.jpg",
        "imgart/galery1.jpg",
        "imgart/galery2.jpg",
        "imgart/galery3.jpg",
        "imgart/galery4.jpg",
        "imgart/galery5.jpg",
        "imgart/galery.jpg",
        "imgart/lambo helmet.jpg",
        

    ];
    let currentIndex = 0;

    function renderImages() {
        const imageContainers = carousel.querySelectorAll(".image-container");

        // Limpa as imagens existentes
        imageContainers.forEach(container => {
            carousel.removeChild(container);
        });

        // Adiciona as novas imagens
        for (let i = 0; i < 3; i++) {
            const newImageContainer = document.createElement("div");
            newImageContainer.classList.add("image-container");

            const newImage = document.createElement("img");
            newImage.classList.add("image");
            newImage.src = images[(currentIndex + i) % images.length];
            newImageContainer.appendChild(newImage);

            const imageInfo = document.createElement("div");
            imageInfo.classList.add("image-info");
            imageInfo.innerHTML = `
                <h3>Título da Imagem</h3>
                <p>Descrição da Imagem</p>
            `;
            newImageContainer.appendChild(imageInfo);

            // Adiciona o evento de clique à imagem
            newImage.addEventListener("click", () => {
                // Abre a página image_viewer.html com o caminho da imagem como parâmetro
                const viewerUrl = `image_viewer.html?src=${encodeURIComponent(newImage.src)}`;
                window.open(viewerUrl, "_blank");
            });

            carousel.appendChild(newImageContainer);
        }

        // Atualiza o título do carrossel
        carouselTitle.textContent = "Título do Carrossel - Imagem " + (currentIndex + 1);
    }

    renderImages();

    document.querySelector("#prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        renderImages();
    });

    document.querySelector("#next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        renderImages();
    });
});