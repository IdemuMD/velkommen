(function () {
  const config = window.siteConfig || {};
  const alias = config.alias || "alias";

  document.title = `Velkommen til ${alias} sitt rike`;

  document.querySelectorAll('[data-field="alias"]').forEach((element) => {
    element.textContent = alias;
  });

  document.querySelectorAll('[data-field="pool"]').forEach((element) => {
    element.textContent = config.pool || "pool";
  });

  document.querySelectorAll('[data-field="vlan"]').forEach((element) => {
    element.textContent = config.vlan || "vlan";
  });

  const tableBody = document.querySelector("#network-table");
  const hosts = Array.isArray(config.hosts) ? config.hosts : [];

  tableBody.innerHTML = hosts
    .map(
      (row) => `
        <tr>
          <td>${escapeHtml(formatValue(row.host))}</td>
          <td>${escapeHtml(formatValue(row.subnet))}</td>
          <td>${escapeHtml(formatValue(row.ip))}</td>
          <td>${escapeHtml(formatValue(row.location))}</td>
        </tr>
      `,
    )
    .join("");

  document.querySelector("#next-year-message").textContent =
    config.nextYearMessage || "";

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatValue(value) {
    return String(value || "")
      .replaceAll("[alias]", alias)
      .replaceAll("[pool]", config.pool || "pool");
  }
})();
