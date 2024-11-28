const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString();
document.getElementById("lastModified").textContent += formattedDate;