# 📸 Photo Gallery Web App

A responsive **React + Vite Photo Gallery application** that fetches images from a public API, displays them in a responsive grid, allows real-time search by author name, and lets users mark photos as favourites with persistent storage.

This project was built as part of a **Frontend React Internship Pre-Screening Assignment**.

---

# 🚀 Live Demo

🌐 **Live Website**

```
https://celebrare-assignment-g5xe.vercel.app/
```

💻 **GitHub Repository**

```
https://github.com/shatakshi-1404/Celebrare-assignment
```

---

# 🛠 Tech Stack

* **React (Functional Components + Hooks)**
* **Vite**
* **Tailwind CSS**
* **JavaScript (ES6)**
* **LocalStorage**
* **Vercel Deployment**

---

# ✨ Features

## 📷 Fetch Photos from API

* Fetches **30 photos** from the Picsum Photos API.
* Shows **loading state** while fetching.
* Displays **error message** if the API request fails.

API used:

```
https://picsum.photos/v2/list?limit=30
```

---

## 📱 Responsive Grid Layout

Images are displayed in a fully responsive grid.

| Device  | Columns |
| ------- | ------- |
| Mobile  | 1       |
| Tablet  | 2       |
| Desktop | 4       |

Built using **Tailwind CSS grid utilities**.

---

## 🔎 Real-Time Search Filter

Users can search photos by **author name**.

Features:

* Filters results **in real time**
* **No extra API calls**
* Works instantly on already fetched data

---

## ❤️ Favourite Photos

Users can mark photos as favourites using a **heart icon**.

Features:

* Toggle favourite photos
* Favourite state persists after page refresh
* Implemented using **React useReducer**

---

## 💾 LocalStorage Persistence

Favourite photo IDs are stored in **localStorage** so that favourites remain saved even after refreshing the page.

---

# 🧠 React Concepts Used

This project demonstrates several important **React Hooks**.

### useReducer

Used to manage the **favourites state** and handle toggle actions.

### useCallback

Optimizes the **search handler function** to prevent unnecessary re-renders.

### useMemo

Efficiently computes the **filtered photo list** only when dependencies change.

### Custom Hook

A custom hook called:

```
useFetchPhotos
```

handles:

* API data fetching
* loading state
* error handling

This separates **data logic from UI components**.

---

# 📂 Project Structure

```
src
│
├── components
│   ├── Gallery.jsx
│   └── PhotoCard.jsx
│
├── hooks
│   └── useFetchPhotos.js
│
├── reducer
│   └── favouriteReducer.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/shatakshi-1404/photo-gallery.git
```

Navigate to the project folder:

```bash
cd photo-gallery
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

# 🌐 Deployment

The project is deployed using **Vercel**.

Live Link:

```
https://github.com/shatakshi-1404/Celebrare-assignment
```

---

# 🎥 Assignment Submission

This project was submitted along with a **5-minute screen recording** explaining:

* Application functionality
* Custom hook implementation
* useReducer logic
* useCallback & useMemo usage
* Challenges faced while building the application

---

# 👩‍💻 Author

**Shatakshi Prasad**

Frontend Developer | React Enthusiast

GitHub:

```
https://github.com/shatakshi-1404
```

---

# ⭐ Acknowledgements

Thanks to **Lorem Picsum API** for providing free placeholder images used in this project.

---

✅ After pasting this README, run:

```bash
git add README.md
git commit -m "Added project README"
git push
```

---

