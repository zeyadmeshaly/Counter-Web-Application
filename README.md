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


