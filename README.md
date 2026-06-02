# Expense Tracker

A simple browser-based expense tracker that stores expenses locally, calculates totals, and visualizes spending by category with Chart.js.

[Live Demo](https://gagankumar44.github.io/expense-tracker/) · [Repository](https://github.com/Gagankumar44/expense-tracker)

## Features

- Add expense amount, category, and description.
- Store expense data in `localStorage`.
- Delete individual expenses.
- Calculate the total expense amount.
- Render category totals in a responsive bar chart.
- Clean single-page structure with HTML, CSS, and JavaScript.

## Tech Stack

| Area | Tools |
| --- | --- |
| Structure | HTML |
| Styling | CSS |
| Logic | JavaScript |
| Charts | Chart.js |
| Hosting | GitHub Pages |

## How It Works

The app keeps an `expenses` array in browser storage. When a user adds or deletes an item, the UI refreshes the expense list, total amount, and category chart.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/Gagankumar44/expense-tracker.git
cd expense-tracker
```

Open `index.html` in a browser.

No build step is required.

## Project Structure

```text
expense-tracker/
├── index.html
├── script.js
└── style.css
```

## Future Improvements

- Add date filtering.
- Add income and budget goals.
- Add edit support for existing expenses.
- Add export/import for expense data.
- Improve responsive layout for small screens.
