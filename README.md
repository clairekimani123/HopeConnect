# Hope Connect Frontend

## It takes a village - be part of it.

Hope Connect is a web application designed to bridge the gap between those who want to help and those who need it most. This Platform provides an intuitive and user-friendly interface for donors to contribute, volunteers to offer their time, and for the public to stay informed about ongoing initiatives and impact.




## Features

* **User Authentication:** 
    *Secure registration and login for donors and volunteers.
* **Donation Management:**
    * Initiate various types of donations (money via M-Pesa Integration, clothes, food, other items).
    * Track donation status.
    * View donation history.
* **Volunteer Management:**
    * Sign up to become a volunteer.
    * [Potentially: View upcoming volunteer opportunities]
* **Projectview:** 
    *Browse ongoing projects, campaigns, and impact stories showcasing how contributions are making a difference.
* **User Profiles:**
    * Manage personal information.
* **Responsive Design:** Optimized for various devices (desktop, tablet, mobile).


---

## Tech Stack

* **Frontend Framework:** React.js (with Create React App)
* **Styling:** [ implementation of Tailwind CSS]
* **Backend:** Flask + Flask SQLALchemy
* **Auth: **Firebase(Google login) + JWT(Flask-JWT extended)
* **DOCS:** Swagger
* **Version Control:** GitHub Actions for frontend and backend
* **Deployment:** GitHub Actions, Vercel(frontend), or Render(backend)
* **Project Board:** task tracking.
* **Repos:** for both frontend and backend.

---

## Installation

Follow these steps to get the frontend up and running on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [your-frontend-repo-url]
    cd [your-frontend-repo-name]
    ```
 
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install

    
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `frontend/` root directory.
    ```bash
    touch .env
    ```
    
    **`.env` example:**
    ```
    REACT_APP_API_BASE_URL=http://localhost:5000/api
    # Add other environment variables as needed, e.g., for Firebase, Google Auth any other SECRET KEY
    # REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
    ```
    **Important:** Do NOT commit your `.env` file to version control. It's already in `.gitignore`.

---

## Running the Application

To run the frontend in development mode:

```bash
npm start

```


##Project Structure##

Frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── css/ (tailwindcss been used)
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Footer.jsx
│   │   ├── 
│   │   ├── 
│   │   └──
│   ├── 
│   │   ├── useAuth.js
│   │   └── useFormValidation.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── AboutPage.js
│   │   ├── DonationsPage.js
│   │   ├── VolunteerPage.js
│   │   ├── ProjectViewPage.js
│   │   ├── ContactPage.js
│   │   ├── AuthCallbackPage.js (for handling Google login redirect)
│   │   └── NotFoundPage.js(to handle error messages)
│   ├── services/
│   │   ├── authService.js (for Firebase/Google login logic)
│   │   ├── apiService.js (for interactions with your Flask backend, e.g., axios/fetch configurations)
│   │   └── donationService.js
│   ├── contexts/ (for global state management, if needed)
│   │   └── AuthContext.js
│   ├── App.js (Main application component, routing)
│   ├── index.js 
├── package.json
├── package-lock.json (or yarn.lock)
└── .env (for environment variables like API base URL, Firebase config)
