## About

This project was developed following the Frontend Engineer - Technical Challenge Requirements.

FOR THE FIRST CHALLENGE, DO THE FOLLOWING :
  - [x] Verify if you have Python already, installed, if not, chekc this source and follow the steps depending on your OS - [Python](#https://www.python.org/downloads/).
  - [x] Download this repository. 
  - [x] Navigate to the repository folder.
  - [x] Execute the following command on your Shell - python string_delete_vowels.py.
  - [x] Type the String you want to test.
  You should see the following outcome
  ![image](https://github.com/user-attachments/assets/fee568ff-2250-4d93-bb6e-727316619f09)


FOR THE SECOND CHALLENGE, CHECK THE FOLLOWING CONTENT
## Menu
- [Features](#features)  
- [How It Works](#how-it-works)  
- [Screenshots](#screenshots)  
- [Decisions, Assumptions and Improvements](#decisions-assumptions-and-improvements)  
- [Pre-requisites](#pre-requisites)  
- [Running the Web Application](#running-the-web-application)

## Features

These are the features for the challenge.
- [ ]  User will be able to search the 10 first movies the OMDB - Api, including :
  - [x] Display basic information per movie.
  - [x] Check a list displaying a Count per release year.

---

## How it works

The Project structure is the following :
	
	public/
	│── img/
	│── index.html
	src/
	│── api/
	│   │── omdb.ts
	│── components/
	│   │── MoviesCounter/
	│   │   │── MoviesCounter.tsx
	│   │── MoviesSearch/
	│   │   │── MoviesSearch.tsx
 	│   │── MoviesViewer/
  	│   │   │── MovieCard/
	│   │   │   │── MovieCard.tsx
 	│   │   │── MoviesViewer.tsx
	│   │── UI/
	│   │   │── Aside/
	│   │   │── Button/
	│   │   │── Image/
	│   │   │── Input/
	│   │   │── Text/
 	│   │   │── Title/
  	│── models/
   	│   │── Movie.ts
      	│── pages/
   	│   │── Home.tsx
	│── services/
	│   │── moviesServices.ts
	│── texts/
	│   │── texts.ts
	│── services/
	│   │── moviesServices.ts
	│── App.css
	│── App.tsx

#### Folder Descriptions
- public/: Contains public files accessible directly, such as index.html and icons.
- src/: The project's main source code.
  - components/: Contains the App components.
    - MoviesCounter/: Contains the movie counters by release age by ascending order.
    - MoviesSearch/: Manages the movie search bar.
    - MoviesViewer/: Contains the movies grid display.
      -  MovieCard/: Manages each movie display.
    - UI/: Reusable UI components such as buttons, containers and texts.
  - models/: Contains the App models
    - Movie/: Represents the movie structure for all the project to use/reference.
  - pages/: Contains the App pages
    - Home/: Contains all the significant components and manages its display.
  - texts/: Contains all the static texts in the App.
  - services/: Manages the logic behind the Movies fetching.
- App.tsx: Root component of the application.
- App.css: Global styles. 

## Screenshots

![image](https://github.com/user-attachments/assets/3be7bbec-192c-41b9-ad4e-d4e7e329f854)
![image](https://github.com/user-attachments/assets/e35434b7-f2fb-4c16-869a-675ce4d82554)
![image](https://github.com/user-attachments/assets/333ea1a0-2a3e-4f6d-9512-4032d8aeaa74)
![image](https://github.com/user-attachments/assets/72e80803-ad07-440d-bcd9-8e1f7bfddd7d)

## Decisions, assumptions and improvements

An early assumption made was to approach differently the third requirement in the test, which was displaying the movies per year and director, since
implementing that would have required 11 API Calls per Search, as the director data was only retrieved when searching per movie ID, so it would require 
one call per movie, including the previous search call per title. Instead of that approach, the count is only limited to the release year.

Another early assumption was to use some Context for the data reception for different components mainly. However, the Home component creation addressed some 
possible prop drilling issues, so instead it was used as the main State container, also dividing it with a custom Hook, so that the both state and view 
layers are separated and the code looks leaner. 

Considering that, the Search component gets the trigger function from the Home component so that the Movie Counter and Movie List update by the time the user 
do the search. In addition, the state managing both counter and movie list are condensed into one, since they both update at the same time. 

The search component is, in few words, a form with a single field, which not only will trigger the search process but will update the route as well.
This route update was done to mimic a real search environment, which interacts not only with the interface but with the browser.

The movie List component is in charge of rendering the first ten movies based on the search process. 
It follows the requested design using a grid display that adjust not only on desktop but on mobile view. Displaying the movie title, release year, Imdb ID and image. 

Finally, a short mention to make, is that the App Component has a Router aggregate in case the project has some improvements such as routes, the project would be already
set for them to implement.

#### Improvements 

Some improvements that could be done, in first place, would be to generate a testing environment and unit tests, in order to check if everything executes as intended 
whenever the project require any modification. 
Other improvements could be to make the user be capable of revising on the full movie information throughout a modal by clicking the movie card.
One last improvement that could be done is to make a paginator, since now it will show the user the first 10 results, this could be straightforward since the API already 
gives the number of results inside the response and it also has the capability of pagination.

## Access

You can visit this App by clicking the following Link : [Fox Ordering Movie Viewer] (https://fox-ordering-tech-task.vercel.app/).

## Pre-requisites

It is required to have the following tools installed on the machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).

## Running the web application

```bash

# Clone this repository
$ git clone git@github.com

# Access the project folder (movie-viewer)

# Install the dependencies 
$ npm install

# Run the application in development mode
$ npm run start

# The application will open on the port: 3000 - go to http://localhost:3000

```
