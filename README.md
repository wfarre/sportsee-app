# Sportsee - Dashboard

This is a new page for the application of the company Sportsee. The goal of this page is to allow the user to check the number of sessions and the amount of burnt calories.

## Prerequistes

node v14.16.0

The technologies used are :

- React
- Sass
- Recharts for the graphics

## Install your environment

### Install the backend

First, you need to install the backend API. Please find the link below:
[https://github.com/wfarre/P9-front-end-dashboard.git]

Launching the API:

- Fork the repository
- Clone it on your computer.
- The yarn command or npm command will allow you to install the dependencies.

```bash
npm i
```

```bash
yarn
```

- The yarn dev command will allow you to run the micro API.

```
yarn dev
```

The API will run on http://localhost:5000 .

For more information, please check the git repository of the API.

### Set up the frontend environment

Go to the link below:
[https://github.com/wfarre/sportsee-app.git]
(However, if you are reading those lines, it means that you are technically already here...)

- Fork the repository
- Clone it on your computer
- Install all the dependencies with npm

```bash
npm i
```

- Lauch the app with npm start

```bash
npm start
```

- Open [http://localhost:3000] on your browser, then add the desired route to it:
  "/user/:id" (eg:http://localhost:3000/user/12)

## Endpoints

As a developper, you might want to check extra datas:

- "/user/:id/activity" : if the developper wants to see the user's burnt calories and weight.
- "/user/:id/activities": if the developper wants to see the user's activities depending on the different activities (i.e.: data for the radar chart).
- "/user/:id/average-sessions": if the developper wants to see the user's average length of the sessions.
- "/user/:id/today-score" : if the developper wants to see the user's completion of the day.
- "/user/:id/key-data": if the developper wants to see the information about the calories, the proteins, the lipids and the carbohydrates.
