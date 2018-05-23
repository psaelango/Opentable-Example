#### 1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
> I’ve spent around 2 hours for developing and testing application. The application can be improved with the following ideas
* Filters values using search box
* Get users location (latitude and longitude) and add find the relative distance between the user’s location and the restaurant. 
* Sorting values based on name, nearest, delivery price, etc.
* Show the restaurant in map-based user interface
* Country based api calls
* Crawl the reservation website and provide cuisine type and operating hours
* Proper login-based dashboard. By which we can provide recommendation systems on their subsequent visits.
* More fun stuffs………

#### 2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
* Arrow functions
    * JavaScript is asynchronous language which has both pros (functions run independently) and cons (nested callbacks)
    * Promises helps to avoid nested callbacks (callback hell) and at the same time it manages the asynchronous property
    *       I've used the arrow function inside imports/app.js inside callAPI() method to use "this" keyword referece to class state inside the context
* Promises
    * Helps to bind ‘this’ to the self-context
    * Thereby makes code simpler and cleaner
    *       I've used the promises inside server/main.js to make http request
* Let and Const
    * Unlike var (function scope), let and const are block scope (if,else,while,for)
    *       I've used the let inside imports/app.js inside renderPagination() method as the block scope

#### 3.	How would you track down a performance issue in production? Have you ever had to do this?
> The performance of the deployed web application usually can be improved in the following ways
 * Database indexing – This might not have much impact on application running on the local machine. But it has a bigger impact when things moved to production environment.
 * Load balancing – Data gets accumulated when things moved to production. Balancing the requests and data on the production server improves the performance.
 * Third party packages -With modern web applications you will be using lot of third party modules (libraries, frameworks) and over time there is a change of those modules being deprecated or updated. Keeping eye on the third-party performance might improves the overall application performance as well.
 * Memory leaks – Poor logical code structure might cause unwanted usage of memory. Following software design patterns and architecture patterns are more important as they are tough to correct as time increases.
 * Network traffic – In request rich applications, monitoring the network request is important in improving performance.
 
 #### 4.	How would you improve the API that you just used?
> The API can be improved in the following ways
* The api can accept latitude and longiude and provide restaurant results closer to the area.
* The api can provide more information about restaurants such as cuisine type, rating, opening hours, etc.
* The api can take cuisine as parameter and provide restaurants based on that.

#### 5.	Please describe yourself using JSON.

```
{
“name”: “Prasanna Elangovan”,
“resume”: https://www.slideshare.net/slideshow/embed_code/key/cGKsR5fQ7wvseJ,
“linkedin”: https://www.linkedin.com/in/prasanna-elangovan-132b3087/,
"interests" [
    "Full stack web development",
    "Architecting software components",
    "Machine learning",
    "Internet of Things"
]
}
```
