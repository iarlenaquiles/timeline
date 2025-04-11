# 🕒 Compact Timeline Visualization

This project is a **React-based timeline component** that visualizes items in a compact, horizontal layout. Items are grouped into lanes based on their start and end dates, minimizing the number of lanes by avoiding overlaps.

---

## 🚀 Features

- 📏 Compact lane assignment algorithm
- 🎯 Clean, minimal layout
- 🔍 Zoom in/out functionality
- 🖱️ Smooth horizontal scrolling
- 🧩 Easy to extend with drag & drop or inline editing

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/iarlenaquiles/timeline.git
cd timeline```

### 2.  Install dependencies

```npm install```


### 3. Run the development server

```npm run start````
Then open http://localhost:1234/ or http://localhost:3000/ in your browser.


🧠 How It Works

Items are sorted by start date.

Each item is placed in the first lane where it does not overlap with the last item in that lane.

The component renders all items in a scrollable horizontal layout.

Zoom controls adjust the pixels-per-day scale.


📁 Project Structure

```
src/
├── components/
│   └── Timeline.js          # Main timeline component
├── utils/
│   └── assignLanes.js       # Lane assignment algorithm
├── data/
│   └── timelineItems.js     # Sample timeline data
├── styles.css               # Timeline styles
├── App.js                   # App entry point
└── index.js                 # React root
```

📄 Example Timeline Item

```
{
  id: 1,
  name: "Design Phase",
  start: "2025-02-05",
  end: "2025-02-20",
  lane: 0
}
```

🪪 License
MIT License — use it freely for personal or commercial projects.