**Fitness Tracker**
Purpose: Input details about your workout to track your fitness progress over several days.

**How to Use**
Application can be used here: https://fierce-cove-13177.herokuapp.com/?id=5e98a7acb6f97a001701cdc5

The front page will display details about your last workout with an option to continue(Not visible if you have no previous workout) and to make a new workout. 

When selecting either one, you'll be given a form for the details of the exercises you did during your workout.
Click Add Exercise to add another exercise to your workout. Click Complete to return to the main page.

In the top left corner, you can click Fitness Tracker to return to the main page and Dashboard to review your stats

* Dashboard
Displays your workout stats in four graphs.
* Line graph: Displays the amount of time spent on your workout over several days
* Bar graph: Displays the amount of weight lifted each day
* Pie graph: isplays the percentage of time each exercise took.
* Doughnut graph: Displays the percentage of which exercises involved lifting wight


**File information**
* Models: Contains the database models for the program. Models are built using Mongoose
    * Workout: Tracks the day the workout was created and an array of exercises
    * Exercises: Contains all relavant fields an exercise might have. Some fields may be left blank depending on the exercise
* Routes: Contains the html and API routing files