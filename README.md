# Restaurant Recommendation System

The Restaurant Recommendation System is a web app that helps users find new restaurants based on their preferences. Users can either type the name of a restaurant they like or choose from a list of popular options. The app works with a backend API built using Flask, which processes the input and gives personalized restaurant suggestions.

This project uses React for the frontend and Flask for the backend to provide a smooth and efficient recommendation system. It’s a great tool for food lovers who want to discover new dining spots based on their restaurant preferences.

## Features

### Restaurant Input Options
- **Manual Input**: Users can type in the name of any restaurant they have in mind.
- **Dropdown Selection**: Users can choose from a list of popular restaurants provided in the dropdown menu, making it easy for those who might not know where to start.

### Personalized Recommendations
- Once the user inputs a restaurant name (either by typing or selecting from the list), the app queries the backend and displays a list of restaurant recommendations based on the input. The recommendations aim to offer similar dining experiences, making it easy to explore new places based on past favorites.

### Error Handling and Validation
- The app validates user input and provides helpful error messages. If the user fails to input a restaurant name or if the input is invalid, an error message will be shown to guide them.
  
### Responsive and User-Friendly Design
- The app is fully responsive, ensuring a seamless experience on both desktop and mobile devices. Whether you're browsing on your laptop or on the go with your phone, the interface adjusts automatically to fit different screen sizes.

### Seamless Integration with Flask Backend
- The frontend and backend are tightly integrated. The Flask API handles requests and generates the recommendations dynamically based on user input. The communication between React and Flask is handled via HTTP requests, making the user experience fast and responsive.

## Technologies Used

This project uses modern technologies and development practices to ensure scalability, maintainability, and a smooth user experience.

- **Frontend**: 
  - **React.js**: A powerful and flexible JavaScript library for building user interfaces. React is used to create interactive components that handle the input and display of recommendations in real-time.
  
- **Backend**: 
  - **Flask**: A lightweight Python web framework that powers the backend. It is used to handle API requests, manage server-side logic, and return personalized recommendations based on the input from the frontend.

- **Styling**: 
  - **CSS**: Custom styles have been added to make the app visually appealing. It uses a vibrant yellow color palette and the Roboto font, contributing to a modern look and feel.

- **State Management**:
  - **React Hooks (useState)**: The app uses React hooks to manage state for the restaurant input, recommendations, and error messages. This ensures a clean and efficient way to handle data in functional components.

- **Other Libraries**:
  - **react-responsive** (for responsive design handling)
 
## Data Source

The restaurant data used in this project is sourced from a Kaggle dataset titled [Restaurant Reviews](https://www.kaggle.com/datasets/joebeachcapital/restaurant-reviews/data). This dataset provides various restaurant reviews and ratings, which are used to generate personalized restaurant recommendations.

You can access the full dataset on Kaggle [here](https://www.kaggle.com/datasets/joebeachcapital/restaurant-reviews/data).

### Prerequisites

Before you begin, ensure you have the following software installed:

- **Node.js (LTS version)**: Required to run the React frontend.
- **npm or yarn**: Dependency management tools used for the frontend.
- **Python 3.x**: For the Flask backend API.

You can download Node.js [here](https://nodejs.org/) and Python [here](https://www.python.org/).

### Clone the Repository

Start by cloning this repository to your local machine:

```bash
git clone https://github.com/matteobertuzzi/restaurant-recommendation-system.git
