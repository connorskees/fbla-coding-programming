# 2019 FBLA Coding and Programming Competitive Event

## Considerations

### GUI Framework

I thought a lot about which GUI framework to use (namely, between QT using C++, Electron, Kivy, and JavaFx). I ultimately decided on Electron combined with Reactjs as the tooling present is incredibly robust, it has best-in-class accessibility and unicode support, and the code would be easy to transfer to a web app or mobile (through React Native). I would have loved to use a Rust GUI framework; however, the community is not yet mature enough to use Rust for a production application.

### UI/UX

I was not able to perform A/B testing like one would normally do for a production application. I designed the initial interface in Adobe XD, and transferred it over using Reactjs and a CSS preprocessor called SASS.

### Version Control

`git` was used extensively throughout the development phase. As I was the only person working on the project, I did not make as heavy use of `git branch` and `git rebase` for different features as one normally would.

### Security

In Electron, one has to be much more cognizant of security. A regular XSS exploit has the potential to lead to RCE. Knowing this, I made sure that all inputs are sanitized against both XSS and SQLi.

### Database and Data Serialization

I initially started with a PostgreSQL database; however, I ended up switching to SQLite3 as I felt Postgres was too hefty of a dependency to realistically rely on, and I prefer having the database as a static file such that there is no web server.

### Tools Used

* Visual Studio Code
* Adobe XD

### Major Dependencies

* [Reactjs](https://reactjs.org/)
* [Electron](https://electronjs.org/)
* [SQLite3](https://www.sqlite.org/index.html)
* [Sass / SCSS](https://sass-lang.com/)

## Process

When developing libraries, I like to design the API first. To this end, I started by opening Adobe XD and designing the frontend of the program. After I had created something I was happy with, I started building the front end of the project using Reactjs for the logic and a mix of CSS in JS and SCSS to create styles.
