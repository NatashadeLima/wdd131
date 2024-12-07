
const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString();
document.getElementById("lastModified").textContent += formattedDate;


document.addEventListener('DOMContentLoaded', () => {
    const tips = [
        "Always stay on your toes.",
        "Practice your serves daily.",
        "Communicate with your team on the court.",
        "Call out “Mine!” or “Yours!” to avoid confusion during plays.",
        "Support teammates with encouraging words after every point.",
        "Watch your opponents’ shoulders and body language to anticipate their moves.",
        "Volleyball is a game of momentum; shake off mistakes and focus on the next play.",
        "Focus on a consistent toss and strong follow-through.",
        "Use your fingertips, not palms, and keep your hands soft.",
        "Position your arms straight and angle them towards your target",
    ];

    const famousPlayers = [
        "Karch Kiraly",
        "Gabrielle Reece",
        "Giba (Gilberto Godoy)",
    ];

    const tipButton = document.getElementById('showTip');
    const tipContainer = document.getElementById('tipContainer');
    const playerList = document.getElementById('playerList');

    tipButton?.addEventListener('click', () => {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        tipContainer.innerHTML = `<p>${randomTip}</p>`;
    });

    if (playerList) {
        famousPlayers.forEach(player => {
            const li = document.createElement('li');
            li.textContent = player;
            playerList.appendChild(li);
        });
    }
});
