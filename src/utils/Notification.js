export const showNotification = (message, type) => {
  const alertDiv = document.createElement("div");
  alertDiv.textContent = message;
  alertDiv.className = `
      fixed top-10 right-10 p-4 rounded shadow-lg text-white font-semibold z-50
      ${type === "success" ? "bg-green-500" : "bg-red-500"}
      transform transition-all duration-300 opacity-0
    `;
  document.body.appendChild(alertDiv);
  setTimeout(() => alertDiv.classList.add("opacity-100"), 100); // Fade-in
  setTimeout(() => {
    alertDiv.classList.remove("opacity-100");
    setTimeout(() => document.body.removeChild(alertDiv), 300); // Fade-out
  }, 3000);
};
