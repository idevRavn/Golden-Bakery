# Golden-Bakery

A simple bakery website with tabbed browsing, built using JavaScript and Webpack.

## Live Website

https://idevravn.github.io/Golden-Bakery/

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Built With](#built-with)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

✔️ Tabbed navigation for **Home, Menu, and Contact** pages  
✔️ Dynamically loads content using JavaScript modules  
✔️ Clean and responsive design  
✔️ Webpack bundling for optimized performance

## Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/idevRavn/Golden-Bakery.git
cd Golden-Bakery
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Locally

```bash
npx webpack serve
```

📌 Open **http://localhost:8080/** in your browser to view the site.

### **4️⃣ Build for Production**

```bash
npx webpack
```

## Built With

- HTML
- CSS
- JavaScript
- Webpack

## Deployment

1. Create a `gh-pages` branch:

   ```bash
   git branch gh-pages
   ```

2. Merge changes and deploy:

   ```bash
   git checkout gh-pages && git merge main --no-edit
   npx webpack
   git add dist -f && git commit -m "Deployment commit"
   git subtree push --prefix dist origin gh-pages
   git checkout main
   ```

3. Set **gh-pages** as the deployment branch in GitHub settings.

## Contributing

Contributions are welcome! If you have ideas for improvement or want to add features, please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE), allowing for collaboration and sharing.
