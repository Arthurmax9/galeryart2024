document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector(".galery");
    const products = [
        { id: 1, name: "Product 1", description: "Description for Product 1", value: 19.99, image: "imgart/modelo15.jpg" },
        { id: 2, name: "tela", description: "tela de arte", value: 50.00, image: "imgart/universegalaxy.jpg" },
        { id: 3, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/blueSkyYY.jpg" },
        { id: 4, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/serieuniverse.jpg" },
        { id: 5, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/redSkyZZ.jpg" },
        { id: 6, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/universe2.jpg" },
        { id: 7, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/light colors.jpg" },
        { id: 8, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/MODELO7.jpg" },
        { id: 9, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/MODELO6.jpg" },
        { id: 10, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/THE BRIDGE.jpg" },
        { id: 11, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/modelo9.jpg" },
        { id: 12, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/modelo5.jpg" },
        { id: 13, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/modelo4.jpg" },
        { id: 14, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/UNIVERSE DARKDOT.jpg" },
        { id: 15, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/the maternal Control.jpg" },
        { id: 16, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/father's control.jpg" },
        { id: 17, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/modelo10.jpg" },
        { id: 18, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/LCVE 152.jpg" },
        { id: 19, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/LUZS.jpg" },
        { id: 20, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/GWH1511.jpg" },
        { id: 21, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/modelo2.jpg" },
        { id: 22, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/MODELO8.jpg" },
        { id: 23, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/goldendot.jpg" },
        { id: 24, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/ORIONMATRX2.jpg" },
        { id: 25, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/ORIANMATRIX.jpg" },
        { id: 26, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/SERIEPIRAMEDES1.jpg" },
        { id: 27, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/seriepiramedes.jpg" },
        { id: 28, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/modelopiramedes.jpg" },
        { id: 29, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/impire of state 51.jpg" },
        { id: 30, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/gammar power.jpg" },
        { id: 31, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/modelo'.jpg" },
        { id: 32, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/modelo10.jpg" },
        { id: 33, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/eyes1.jpg" },
        { id: 34, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/eyes2.jpg" },
        { id: 35, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/eyes3.jpg" },
        { id: 36, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/eyes4.jpg" },
        { id: 37, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/eyes.jpg" },
        { id: 38, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/serieaqua2.jpg" },
        { id: 39, name: "tela", description: "obra de arte", value: 50.00, image: "imgart/serieaqua2.jpg" },





        // Adicione mais produtos conforme necessário
    ];
    products.forEach((product, index) => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const image = document.createElement("img");
        image.classList.add("image");
        image.src = product.image;
        image.alt = `${product.name} - ${product.description}`;
        imageContainer.appendChild(image);

        const imageInfo = document.createElement("div");
        imageInfo.classList.add("image-info");
        imageInfo.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Valor: $${product.value.toFixed(2)}</p>
        `;
        imageContainer.appendChild(imageInfo);

        gallery.appendChild(imageContainer);

        imageContainer.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.3)";
            imageInfo.style.opacity = 1;
        });

        imageContainer.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
            imageInfo.style.opacity = 0;
        });

        imageContainer.addEventListener("click", () => {
            alert(`Você clicou no produto ${product.name} (ID: ${product.id})`);
            // Personalize esta ação conforme necessário
        });
    });
});