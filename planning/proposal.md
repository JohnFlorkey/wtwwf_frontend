# Capstone 2 Proposal
## What To Watch With Friends
### Purpose
My family enjoys watching tv series and movies together, but it can sometimes be difficult to find something everyone wants to watch. What To Watch With Friends (WTWWF) is a website that attempts to solve that problem. Users are invited to create a list of TV shows and movies that they would like to watch. Users can then invite others to create their own lists and to join Friend Groups. The app will make recommendations for the group to watch based on the titles that appear in the individual lists.
### Demographic
Anyone who watches tv series or movies with others is a potential user of WTWWF. Users can create and join multiple friend groups, so their watch list can be combined with a friend group composed of family members, or a friend group composed of school friends, or anyone else they watch media with.
### Data
WTWWF will leverage The Movie Database API (TMDB) for media search and discovery.
WTWWF will also have its own API to manage getting data from the database or TMDB API as necessary.
### Tech Stack
WTWWF will use React and Node with a Postgres database. The project will likely be a bit more front end focused.
### Database Schema
[Database Diagram](https://dbdiagram.io/d/614f6aec825b5b01461315f7)
### Potential API issues
I’m not expecting any issues with the TMDB API, though I have not spent much time using it. There are no rate limits.
### Sensitive Information
WTWWF will require users to authenticate with a password to use the site. The passwords will need to be stored securely. WTWWF will not use or store user’s passwords to streaming media platforms and will not require users to have a TMDB account.
### Functionality
* Create an account
* Manage account settings
* Create a friend group
* Mange friend group membership
* Search for tv or movie title
* Discover movies or tv shows by genre, release year, rating, etc.
* Add tv or movie title to your watch list
* View suggested tv and/or movie titles for friend groups
### User Flows
[User flow diagrams](https://app.flowmapp.com/share/4c94bd2d19e2b27429634b79912fdac6/userflow/163859/)