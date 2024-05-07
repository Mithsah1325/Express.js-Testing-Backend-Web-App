# Express.js Example

This is a simple Express.js web application that demonstrates basic routing and serving static files.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install`.

## Usage

1. Start the server by running `node app.js`.
2. Open your web browser and go to `http://localhost:3000` to see "Hello World!".
3. Visit `http://localhost:3000/twitter` to see "Hello From Twitter".
4. Access `http://localhost:3000/login` to view the login page.

## Routes

- `/`: Returns "Hello World!"
- `/twitter`: Returns "Hello From Twitter"
- `/login`: Serves the login HTML file

## Configuration

This application uses the `dotenv` module to load environment variables from a `.env` file. You can specify the port by setting `PORT` in the `.env` file.

