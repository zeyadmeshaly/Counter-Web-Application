# Click Counter (HTML, CSS, JavaScript)

A small web page with a big number and three buttons: **increase**, **decrease** and **reset**. Built to practise the basics of the DOM and click events in JavaScript.

## Features
- Increase the counter by 1
- Decrease the counter by 1 (it can go below zero)
- Reset the counter to 0
- Colourful theme: purple page, aqua counter box and blue buttons

## Run

No installation needed. Download the files and open `counter.html` in any web browser. Keep all three files in the same folder.

## Files
| File | Purpose |
|---|---|
| `counter.html` | The page structure: the number and the three buttons |
| `style1.css` | Styling for the page, the counter and the buttons |
| `counter.js` | The logic that updates the number when a button is clicked |

## How it works
1. `counter.js` finds the four elements on the page using `document.getElementById`.
2. A variable `count` starts at 0.
3. Each button has an `onclick` function that changes `count` and then writes it to the page with `counter.textContent = count`.

## What I learned
- Selecting elements with `getElementById`
- Handling button clicks with `onclick`
- Updating the page by changing `textContent`
- Linking a CSS file and a JavaScript file to an HTML page
- Styling elements by `id` (`#counter`, `#btn12`) and by `class` (`.buttons`)

## Known limitations (things I would improve next)
- The counter is stored in a JavaScript variable, so it resets to 0 when the page is reloaded.
- The counter has no minimum or maximum, so it can go negative.
- The number is a `<label>`, which is meant for form fields. A `<span>` or `<p>` would be more appropriate.
- The page has no mobile layout (no viewport meta tag).

## Possible improvements
- Save the count with `localStorage` so it survives a reload
- Add a minimum or maximum value
- Make the layout responsive
