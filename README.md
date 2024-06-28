```markdown
# URL Shortener

A simple URL shortener application built with Node.js, Express, and vanilla JavaScript.

## Features

- Shorten URLs.
- Redirect from shortened URLs to the original URLs.
- Simple and clean UI.

## Prerequisites

- Node.js (https://nodejs.org/)

## Getting Started

### Clone the repository

```sh
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### Install dependencies

```sh
npm install
```

### Run the server

```sh
npm start
```

The server will start on `http://localhost:3000`.

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Enter a URL in the input field and click the "Shorten URL" button.
3. A shortened URL will be displayed. Click on it to be redirected to the original URL.

## Project Structure

```
url-shortener/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── server.js
├── package.json
└── package-lock.json
```

- **public/**: Contains the frontend files (HTML, CSS, JS).
- **server.js**: The main server file that handles URL shortening and redirection.
- **package.json**: Contains project metadata and dependencies.

## Dependencies

- express: Fast, unopinionated, minimalist web framework for Node.js.
- body-parser: Node.js body parsing middleware.
