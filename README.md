# 2019 FBLA Coding and Programming Competitive Event

## Considerations

### GUI Framework

I thought a lot about which GUI framework to use (namely, between QT using C++, Electron, Kivy, and JavaFx). I ultimately decided on Electron combined with Reactjs as the tooling present is incredibly robust, it has best-in-class accessibility and unicode support, and the code would be easy to transfer to a web app or mobile (through React Native). I would have loved to use a Rust GUI framework; however, the community is not yet mature enough to use Rust for a production application.

### UI/UX

I was not able to perform A/B testing like one would normally do for a production application. I designed the initial interface in Adobe XD, and transferred it over using Reactjs and a CSS preprocessor called SASS. I chose a sans-serif font in the form of Montserrat to give the UI a clean feeling while remaining readable and familiar.

### Version Control

`git` was used extensively throughout the development phase. In total, there were over 100 commits; the commit history can be found [here](https://github.com/ConnorSkees/fbla-coding-programming). As I was the only person working on the project, I did not make as heavy use of `git branch` and `git rebase` for different features as one normally would.

### Security

In Electron, one has to be much more cognizant of security. A regular XSS exploit has the potential to lead to RCE. Knowing this, I made sure that all inputs were sanitized against both XSS and SQLi. Of course, the program *never* recieves untrusted input from the internet, so this is not currently a concern, but if in the future a requirement were to be to have it upload the information to a remote server, the current restrictions help.

### Database and Data Serialization

I initially started with a PostgreSQL database; however, I ended up switching to SQLite3 as I felt Postgres was too hefty of a dependency to realistically rely on, and I prefer having the database serialized as a single static file such that there is no web server.

### Report Generation

I decided that printing would be something best left to the user to do externally. To make up for the lack of native printing, I gave the user the choice between several common serialization formats so that if they wanted to pipe the data into a [data visualization framework](https://d3js.org/) or a 3rd party [report generator](https://carbone.io/) and *then* print it, it would be very easy. Additionally, the serialization formats allow for a REST API to be set-up if the user desired. Luckily, the guidelines for the event state that I must either `generate or print` a report.

### Major Tools Used

* Visual Studio Code
* Adobe XD

### Major Dependencies

* [Reactjs](https://reactjs.org/)
* [Electron](https://electronjs.org/)
* [SQLite3](https://www.sqlite.org/index.html)
* [Sass / SCSS](https://sass-lang.com/)
