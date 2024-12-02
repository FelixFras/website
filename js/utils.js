const inputElement = document.getElementById('input');
const consoleElement = document.getElementById('console');
const contentElement = document.getElementById('content');

export function println(text) {
    consoleElement.innerHTML += text + '<br>';
}

export function clearConsole() {
    consoleElement.innerText = "";
}

export function commandHelp() {
    println("Available commands:");
    println("about - Show information about this site");
    println("clear - Clear the console");
    println("contact - Show contact information");
    println("help - Display this help message");
    println("penguin - Print a penguin");
    println("weather [city] - Displays the current weather for a city");
}

export function adjustInputWidth() {
    inputElement.style.width = inputElement.value.length + 'ch';
}

export function scrollToInput() {
    inputElement.scrollIntoView({ behavior: "instant", block: "center" });
    contentElement.scrollLeft = content.width;
}

export function printWelcome() {
    println("Welcome to my website!");
    println("Type 'help' to get a list of available commands.");
    printPenguin();
}

export function printPenguin() {
    const art = `          .---.
         /     \\
         \\.@-@./
         /´\\_/´\\
        //  _  \\\\
       | \\     )|_
      /´\\_´>  <_/ \\
      \\__/'---'\\__/    `;

    println(art);
}

export function commandAbout() {
    println("This is a simple terminal emulator written in plain JavaScript.");
    println("It is part of a portfolio project by Felix Frasch.");
    println(`The design was hugely inspired by the <a href="https://github.com/mylinuxforwork/dotfiles/wiki" target="_blank">mylinuxforwork</a> Hyprland configuration. The wallpaper is also from that repository.`);
    println(`The weather data is provided by <a href="https://open-meteo.com/"  target="_blank">OpenWeatherMap</a> and all icons are from <a href="https://www.freepik.com/" target="_blank">freepik</a>.`);
}

export function commandContact() {
    println("You can contact me via email at <a href='mailto:contact@felixfrasch.com?subject=Website contact'>contact@felixfrasch.com</a>.");
}