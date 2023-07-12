# Admin Dashboard

This is a simple admin dashboard created using React Admin library and Material UI. The dashboard fetches data from JSONPlaceholder API. The project is initialized with Vite React template.

## Features

- Display users, posts, and albums data.
- Perform CRUD operations on users and posts.
- Perform CRUD operations on albums except for create action.

NOTE: Create operation work but not with the current JSONPlaceholder API. It will be created successfully but the element will not exist

## Technologies Used

- React
- React-Admin
- Material UI
- Vite
- JSONPlaceholder API

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/amrfateem/admin-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd admin-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to see the admin dashboard.

## Folder Structure

The folder structure of the project is as follows:

```
├── src/
│   ├── components/
│   │   ├── albums.jsx
│   │   ├── users.jsx
│   │   └── posts.jsx
│   ├── authProvider.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── public/
│   └── ...
├── package.json
└── ...
```

- `src/components`: Contains reusable components used in the dashboard.
- `src/authProvider.js`: Simple auth that allows anyone inside


## License

This project is licensed under the [MIT License](LICENSE).
```