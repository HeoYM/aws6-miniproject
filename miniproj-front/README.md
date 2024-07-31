# 디렉토리 구조

```
my-react-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── MainContent.js
│   │   └── GetJsonComp.js
│   │
│   ├── pages/
│   │   ├── HomePage.js
│   │   └── AboutPage.js
│   │
│   ├── services/
│   │   └── apiService.js
│   │
│   ├── App.js
│   ├── index.js
│   └── styles.css
│
├── .gitignore
├── package.json
└── README.md
```

### 리액트 애플리케이션 구조도
```
+------------------+
|   index.html     |   <-- Root HTML file for the app
+------------------+
          |
          v
+------------------+
|   index.js       |   <-- Entry point for React
|   - Renders the  |
|     App component|
+------------------+
          |
          v
+------------------+
|   App.js         |   <-- Root component of the application
|   - Defines      |
|     Routes       |
|   - Contains     |
|     Header, Main |
|     Content,     |
|     and Footer   |
+------------------+
          |
          v
+------------------+
|   Router         |
|   - Manages route| 
|     and page     |   
|     transitions  |
+------------------+
          |
          v
+------------------+        +------------------+
|   HomePage.js    |        |   AboutPage.js   |   <-- Page components
|   - Combines     |        |   - Combines     |   <-- Combines various components
|     Header, Main |        |     Header, Main |
|     Content, and |        |     Content, and |
|     Footer       |        |     Footer       |
+------------------+        +------------------+
          |
          v
+------------------+
|   Header.js      |   <-- Component for Header
+------------------+
|   Footer.js      |   <-- Component for Footer
+------------------+
|   MainContent.js |   <-- Component for Main Content
+------------------+
|   GetJsonComp.js |   <-- Example of a reusable component
+------------------+
          |
          v
+------------------+
|   apiService.js  |   <-- Service for fetching and processing data
+------------------+

```