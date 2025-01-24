master-application/
│
├── public/
│   ├── index.html             # Main HTML file
│   └── assets/                # Static assets (images, icons, etc.)
│
├── src/
│   ├── api/                   # API interaction layer
│   │   ├── authApi.js         # Login and authentication
│   │   ├── projectApi.js      # Fetch list of projects
│   │   ├── wildlifeApi.js     # Wildlife Explorer APIs
│   │   └── otherApis.js       # Placeholder for future project APIs
│   │
│   ├── components/            # Reusable components
│   │   ├── LoginForm.js       # Login form component
│   │   ├── Sidebar.js         # Sidebar for project navigation
│   │   ├── Navbar.js          # Top navigation bar
│   │   ├── ProjectCard.js     # Card component for project details
│   │   └── Loader.js          # Loading spinner
│   │
│   ├── layouts/               # Layouts for different views
│   │   ├── MainLayout.js      # Layout for sidebar and main content
│   │   └── AuthLayout.js      # Layout for login and authentication views
│   │
│   ├── pages/                 # Application pages
│   │   ├── Login.js           # Login page
│   │   ├── Dashboard.js       # Master dashboard for projects
│   │   ├── WildlifeExplorer/  # Wildlife Explorer project-specific pages
│   │   │   ├── SpeciesManagement.js
│   │   │   ├── BlogManagement.js
│   │   │   ├── ThreatManagement.js
│   │   │   └── GalleryManagement.js
│   │   └── FutureProject/     # Placeholder for future projects
│   │       └── FeaturePage.js # Example feature page
│   │
│   ├── context/               # Global state management
│   │   ├── AuthContext.js     # Authentication state
│   │   └── AppContext.js      # Shared application state
│   │
│   ├── styles/                # Centralized styling
│   │   ├── global.css         # Global styles
│   │   ├── layouts/           # Layout-specific styles
│   │   └── components/        # Component-specific styles
│   │
│   ├── utils/                 # Utility functions
│   │   ├── validation.js      # Input validation
│   │   ├── auth.js            # JWT token management
│   │   └── helpers.js         # General helpers
│   │
│   ├── App.js                 # Main application component
│   ├── index.js               # Entry point for React
│   └── routes.js              # Centralized route management
│
├── .env                       # Environment variables
├── package.json               # Project dependencies and scripts
└── README.md                  # Documentation
