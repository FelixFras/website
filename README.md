# Terminal Homepage

### Description:

This is a terminal emulator written in plain JavaScript so it can be hosted by any static website hosting service.
The design was hugely inspired by the [mylinuxforwork](https://github.com/mylinuxforwork/dotfiles/wiki) Hyprland configuration. The wallpaper is also from that repository.
The weather data is provided by [OpenWeatherMap](https://open-meteo.com/) and all icons are from [freepik](https://www.freepik.com/).
This project taught me how to interact with apis and improved my JavaScript, CSS and HTML knowledge. I will probably make this project a secret page on my future homepage.

The project structure is as shown:

```
├── index.html
├── README.md
├── style.css
├── js
│   ├── commands.js
│   ├── date.js
│   ├── script.js
│   ├── utils.js
│   └── weather.js
└── assets
    ├── ai.svg
    ├── background.webp
    ├── diagram.svg
    ├── favicon.png
    ├── files.svg
    ├── firefox.svg
    ├── settings.svg
    ├── shutdown.svg
    ├── stack.svg
    └── UbuntuCursor.cur
```

#### GUI:

The GUI was designed with plain css. It consists out of a navbar on top. And a terminal window. The terminal window has a textbox for the input which is always focused. This textbox is made invisible and is being resized to fit the text so that the curser always stays right behind the text. The clock on the right top is by the way working.

#### weather command:

The weather command uses the geocoding API provided by open-meteo to convert the provided city name into the latitude and longitude values  
by this request: "https://geocoding-api.open-meteo.com/v1/search?name={cityName}&count=1&language=en&format=json"
which are needed for the weather API. The weather API then is called
using this request: "https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&hourly=temperature_2m&timeformat=unixtime" to provide the hourly weather.
The program now takes the current temperature out of the dataset and displays it to the user.

### JavaScript files:

I chose to outsource my JavaScript file into multiple files to make finding function easier and improve the readability of the files. Thats why there are so many files.

> script.js  
> The script.js is the main JavaScript file. It contains event listeners for 'keydown' which calls the keyHandler in commands.js and 'input' which calls the adjustInputWidth function in the utils.js file for the inputElement.  
> A event listener for 'DOMContentLoaded' which calls the functions: printWelcome and adjustInputWidth from the utils.js file, updateDateInfo from the date.js file and inputElement.focus(), a event listener for 'click' which calls inputElement.focus and a setInterval function call to update the clock every 10 seconds are also in the file.

> commands.js  
> The commands.js file includes the functions keypressHandler and commandHandler.  
> The keypressHandler is a export function. It prevents the default action on a tab press and handles the keypress of the enter key, where the written command is printed over the input line and the commandHandler is being called.
> The commandHandler checks if the input is valid. If so it calls through a switch case statement the right function from the utils.js file to execute the command.

> utils.js  
> The utils.js file contains all functions which are quite helpful to other functions and the command functions (excluding the weather function). These include the following functions:
>
> - println(text)
> - adjustInputWidth()
> - scrollToInput()
> - printWelcome()
> - clearConsole()
> - printPenguin()
> - commandAbout()
> - commandContact()
> - commandHelp()

> date.js  
> The date.js file is responsible for displaying the current time and day of the week in the top right corner.
> It uses a Date object to get the hours, minutes and the day of the week which is being converted from and index to an actual day.

> weather.js  
> The weather.js file is responsible for handling the weather command. It consists of two functions. The getCoordinates function which as the name might say get the coordinates. It does so, by calling a api which gives back the latitude and longitude.  
> These values are then being passed further to the commandWeather function which calls the weather api, sorts out the current weather from the data set and displays it.
> If an error occurs or the command is being executed without an argument the fitting error is displayed in the terminal.

### Other files:

> index.html  
> The index.html file is responsible for the structure of the website. The structure is as shown:
>
> ```
> └── body
>     ├── header
>     │   ├── left
>     │   ├── screenMenu
>     │   └── right
>     └── content
>         ├── console
>         ├── inputLabel
>         ├── input
>         └── cursor
> ```

> style.css  
> The style.css file is as typical responsible for the styling of the website.
> I fixed the header on top, made the content a big box which fills out almost all of the left over space, set the background image for the whole body, hid the textbox and made it overall "good looking".
