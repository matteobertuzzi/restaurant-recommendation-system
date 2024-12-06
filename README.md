# Restaurant Recommendation System

The **Restaurant Recommendation System** is an interactive and dynamic web application designed to help users discover new dining spots based on their preferences. It offers a simple and intuitive interface where users can either type the name of a restaurant they enjoy or select one from a predefined list. The app seamlessly integrates with a backend API built with Flask, which processes the input and provides personalized restaurant recommendations.

This project combines the power of React on the frontend with Flask on the backend to deliver a modern and efficient recommendation engine. It’s perfect for food enthusiasts who are looking for new places to dine and try out, based on their restaurant preferences.

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
  - **axios** (for making HTTP requests)
  - **react-responsive** (for responsive design handling)

## Getting Started

Follow these steps to get the project up and running locally on your machine:

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
cd restaurant-recommendation-system
