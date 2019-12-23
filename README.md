## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

JWT auth With React on client side
Technologies Used:
### 1. React (16.12.0)
### 2.npm packages (JWTWebToken, ReactTable)
### 3 HTML, CSS, Javascript
Set up and initial start commands:
### 1. Download the source code from the git link:: https://github.com/rahulsinhabarwala/jwt_auth_with_react_redux.git
### 2. Run npm install command
### 3. Run npm start command 

Project overview
I have created a basic signup and login page with a homepage on which Rest countries Api is integrated with the help of axios reactTable lib.
#### 1 First you have to signUp http://localhost:3000/Signup 
   	Then a list of users is stored in localstorage.
#### 2 when you login with the same credentials at http://localhost:3000/Login 
#### a JWT token is generated and based on the expire time you will be able to log-in and redirect to Homepage
#### 3 Routes are protected and basics validations are performed on forms too
#### 4 React table is integrated on homepage so there is next, previous buttons there and with direct goto pages and column options also given
