
// Reemplaza esta URL con tu link CSV publicado desde Google Sheets
const sheetUrl = "AQUI_VA_TU_LINK_CSV";

fetch(sheetUrl)
  .then(response => response.text())
  .then(data => {
    const rows = data.split("\n").slice(1);
    const container = document.getElementById("inventario");

    rows.forEach(row => {
      const [marca, modelo, anio, precio, imagen, whatsapp] = row.split(",");

      const card = `
        <div class="car-card">
          <img src="${imagen}" alt="${marca} ${modelo}" />
          <h3>${marca} ${modelo}</h3>
          <p>Año: ${anio}</p>
          <p>Precio: ${precio}</p>
          <a href="${whatsapp}" target="_blank">Contactar por WhatsApp</a>
        </div>
      `;

      container.innerHTML += card;
    });
  });
