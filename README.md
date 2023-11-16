 # Github Repository Search

This is a brief description of your project.

## Setup
To set up the project, you need to create a `credentials.ts` file in the `src` directory with your GitHub access token bound to the BEARER_TOKEN variable.

You can also do this by running the following command in your terminal:

### Unix (Mac/Linux)
```bash
echo 'export const BEARER_TOKEN = "";' > src/credentials.ts
```

### Windows (CMD)
```bash
echo export const BEARER_TOKEN = "" > src\credentials.ts
```
For the next step you need to install all the required node modules by running `npm i` in your terminal.

## Running the application

Run the application by using `npm run start`.

## Using the application
To view a certain profile, all you need to do is to append the github username to the url.
To exemplify this: If you desire to access the github user **KonstantinGarbers** page, you would access the page using `http://localhost:3000/KonstantinGarbers`.

## Future improvements
- Add Github OAuth to avoid having to set bearer token in code and make deployment possible
- Add page that asks for username, so that the user doesn't need to type in the username into the url