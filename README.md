The live demo is at https://mudita-frontend.vercel.app/

The backend is https://github.com/andrewcbuensalida/mudita-task-organizer-assignment.git

# Task Planner Application

A web application that helps users plan their daily tasks using AI. The application uses OpenAI's GPT model to create an optimal schedule based on task dependencies, time of day appropriateness, and other factors.

## Features

-   Responsive design that works on both web and mobile screens
-   Dynamic task input with add/remove functionality
-   AI-powered task scheduling
-   Beautiful Material-UI interface
-   Real-time loading states and error handling


## Setup

### Frontend Setup

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the development server:
    ```bash
    npm run dev
    ```

The frontend will be available at `http://localhost:5173`

## Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Enter your tasks for the day using the input fields
3. Click "Add Another Task" to add more tasks
4. Click "Plan My Day" to generate an optimized schedule
5. View your AI-generated schedule with explanations for the task ordering

## Technologies Used

-   Frontend:
    -   React
    -   TypeScript
    -   Material-UI
    -   Axios
    -   Vite


## To deploy to vercel
- enter environment variables VITE_API_URL. This comes from after deploying backend to render.com