# Trip Destination Check List

A simple packing checklist page for a trip to Bora Bora, with a live count of how many items have been checked off.

## Files

- **trip.html** - the page structure: a heading, the destination image, a container for the checklist, and a running tally of checked items.
- **main.js** - builds the checklist from a list of items, adding a checkbox and label for each one, and updates the tally whenever an item is checked or unchecked.
- **styles.css** - page layout and styling.
- **Images/BoraBora.avif** - the destination image shown at the top of the page.

## What it does

1. On page load, the script generates a checkbox and label for each packing item: clothes, ID, phone/watch charger, makeup, toiletries, sunscreen, medications, first aid items, and money.
2. Each checkbox has a change listener that increments or decrements a running tally.
3. The tally is displayed at the bottom of the page as "X items checked off."

## Requirements

- Just a browser, no build step or server needed.

## Usage

Open `trip.html` directly in a browser, or serve the folder locally, for example:

```
python3 -m http.server
```

Then visit `http://localhost:8000/trip.html`.

## Notes

- To change the packing list, edit the `items` array at the top of `main.js`.
- The image is loaded locally from `Images/BoraBora.avif` rather than an external link, so the page doesn't depend on a third-party site staying up or keeping that URL valid.
