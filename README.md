# 🍽️ Recipe Finder

A simple React app styled with Tailwind CSS to help you search and view recipes with detailed instructions and images.

## ✨ Features

- 🔍 **Search Recipes**: Find dishes by name.  
- 📋 **View Instructions**: Get step-by-step cooking instructions.  
- 📸 **Beautiful Images**: See dish images fetched from the API.  
- 📱 **Responsive**: Looks great on any device.

## 🛠️ Tech Stack

- **React**: Frontend framework  
- **Tailwind CSS**: Modern styling  
- **API**: [TheMealDB](https://www.themealdb.com/)

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Sanju2112/Recipe-Finder-react.git
   cd Recipe-Finder-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Tailwind CSS:
   - Run the following command to install Tailwind CSS via npm:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     ```
   - Generate the configuration files:
     ```bash
     npx tailwindcss init
     ```
   - In `tailwind.config.js`, configure the paths to your files:
     ```js
     module.exports = {
       content: [
         "./src/**/*.{html,js,jsx}",
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```
   - Add Tailwind’s directives to your CSS file (e.g., `src/index.css`):
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. Start the app:
   ```bash
   npm start
   ```

## 🔗 API Endpoints

- Search by name:  
  `https://www.themealdb.com/api/json/v1/1/search.php?s=burger`  
- Get random recipe:  
  `https://www.themealdb.com/api/json/v1/1/random.php`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
