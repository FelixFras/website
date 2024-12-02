import { keyHandler } from './commands.js';
import { adjustInputWidth, printWelcome } from './utils.js';
import { updateDateInfo } from './date.js';

const inputElement = document.getElementById('input');

inputElement.addEventListener('keydown', keyHandler);
inputElement.addEventListener('input', adjustInputWidth);

document.addEventListener('click', inputElement.focus);
document.addEventListener('DOMContentLoaded', () => {
    printWelcome();
    inputElement.focus();
    adjustInputWidth();
    updateDateInfo();
});

setInterval(updateDateInfo, 10000);