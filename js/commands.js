import { clearConsole, commandHelp, println, adjustInputWidth, scrollToInput, printPenguin, commandAbout, commandContact } from './utils.js';
import { commandWeather } from './weather.js';

export function keyHandler(event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        let input = event.target.value;

        println("user@felixfrasch.com:~$ " + input);
        event.target.value = "";

        adjustInputWidth();
        commandHandler(input);
        scrollToInput();

    } else if (event.key === 'Tab') {
        event.preventDefault();
    }
}

function commandHandler(input) {
    if (input === "" || input === null || input === undefined || input.replace(/\s+/g, "") === "") {
        return;
    }

    input = input.toLowerCase();

    const command = input.trim().split(/\s+/)[0] || '';
    const argument = input.trim().split(/\s+/)[1] || '';

    switch (command) {
        case "clear":
            clearConsole();
            break;
        case "help":
            commandHelp();
            break;
        case "weather":
            commandWeather(argument);
            break;
        case "about":
            commandAbout();
            break;
        case "penguin":
            printPenguin();
            break;
        case "contact":
            commandContact();
            break;
        default:
            println(`${command}: command not found`);
    }
}