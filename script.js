
const vehiculos = [
    {
        imagen: "img/toyota-corolla.jpg",
        marca: "Toyota",
        modelo: "Corolla",
        año: 2019,
        precio: "$12,000",
        kilometraje: "45,000 km",
        estado: "Disponible",
        whatsapp: "https://wa.me/584121234567"
    },
    {
        imagen: "img/chevrolet-spark.jpg",
        marca: "Chevrolet",
        modelo: "Spark",
        año: 2017,
        precio: "$8,500",
        kilometraje: "60,000 km",
        estado: "Disponible",
        whatsapp: "https://wa.me/584123456789"
    }
];

const container = document.getElementById("vehiculos-container");

vehiculos.forEach(auto => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="\${auto.imagen}" alt="\${auto.marca} \${auto.modelo}">
        <h2>\${auto.marca} \${auto.modelo}</h2>
        <p><strong>Año:</strong> \${auto.año}</p>
        <p><strong>Precio:</strong> \${auto.precio}</p>
        <p><strong>Kilometraje:</strong> \${auto.kilometraje}</p>
        <p><strong>Estado:</strong> \${auto.estado}</p>
        <a href="\${auto.whatsapp}" target="_blank">Contactar por WhatsApp</a>
    `;
    container.appendChild(card);
});
