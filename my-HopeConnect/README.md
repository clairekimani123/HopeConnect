##Project Layout Frontend##

rontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── css/ (tailwindcss been used)
│   ├── components/
│   │   ├── NavBar/ (e.g., Button, InputField, Navbar, Footer)
│   │   ├── auth/ (e.g., GoogleLoginButton)
│   │   ├── donations/ (e.g., DonationForm, DonationCard we can have one in the right and the other one in the left)
│   │   ├── volunteers/ (e.g., VolunteerSignUpForm)
│   │   └── ProjectView/ (e.g., ImpactStoryCard)
│   ├── hooks/
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
