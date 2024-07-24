const yesButton = () => {
    window.location.href = "yes.html";
};

const moveButton = () => {
    const buttons = document.getElementById("noButton");

    const maxX = (window.innerWidth - buttons.offsetWidth) -95;
    const maxY = (window.innerHeight - buttons.offsetHeight) -45;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    buttons.style.left = `${randomX}px`;
    buttons.style.top = `${randomY}px`;
}