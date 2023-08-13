# How to Run the Program

Follow these steps to successfully run the program on your local machine.

## Prerequisites

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your computer.

## Clone the Repository

1. **Clone the Repository:**

   Clone the project's Git repository using the following command:
   
   ```bash
   git clone https://github.com/PaneruVipin/jarviot-challenge-full-stack-backend.git
   ```
   
Navigate into the cloned repository:
   

## Installation

1. **Install Dependencies:**

   Open your terminal and navigate to the project directory. Run the following command to install the required dependencies:
   
   ```bash
   npm install
   ```

2. **Environment Configuration:**

   - Create a `.env` file in the root directory of the project.
   - Reference the provided `.env.example` file for necessary configuration values.

## Google and Google Drive Setup

1. **Google Cloud Console:**

   - Go to [console.cloud.google.com](https://console.cloud.google.com/).
   - Navigate to the API & Services section.

2. **OAuth Consent Page:**

   - Go to API & Services > OAuth consent screen.
   - Create and publish an OAuth consent screen.

3. **Create OAuth Client:**

   - In the API & Services section, go to Credentials.
   - Create a new Web Client.
   - Add the redirect URI as `http://localhost:4000/google/callback`.
   - Copy the generated Google Client ID and Client Secret to your `.env` file.

4. **Enable Drive API:**

   - In the API & Services section, go to Library.
   - Enable the Google Drive API.

## Firebase Setup

1. **Firebase Console:**

   - Go to [console.firebase.google.com](https://console.firebase.google.com/).
   - Create a new service.

2. **Firestore Database:**

   - In Firebase, navigate to Firestore.
   - Create a new database.

3. **App Credentials:**

   - In Firebase, go to Project settings.
   - Click on the web icon to create a new app.
   - Copy the provided credentials and paste them into your `.env` file.

## Run the Program

Finally, you are all set to run the program:

```bash
npm start
```

Now you can access the program by opening your web browser and navigating to the local URL: http://localhost:4000

If you encounter any issues or have questions, feel free to reach out for assistance.


Replace `[repository_url]` and `[repository_directory]` with the actual repository URL and directory name respectively. This version now includes the instructions to clone the repository before proceeding with the setup steps.
