# 2019 FBLA Coding and Programming Competitive Event

## Considerations

### GUI Framework

I thought a lot about which GUI framework to use (namely, between QT, Electron, Kivy, and JavaFx). I ultimately decided on Electron as the tooling present is incredibly robust, it has great resources for accessibility, and the code would be easy to transfer to a webapp or mobile (through React Native). I would have loved to use a Rust GUI framework; however, the community is not yet mature enough to use it for a production application.

### UI/UX

I was not able to perform A/B testing like one would normally do for a production application. I designed the initial interface in Adobe XD, and transferred it over using Reactjs and a CSS preprocessor called SASS.

### Version Control

`git` was used extensively throughout the development phase. As I was the only person working on the project, I did not make as heavy use of `git branch` and `git rebase` for different features as one normally would.

### Security

In Electron, one has to be much more cognizant of security. A regular XSS exploit has the potential to lead to RCE.

### Tools Used

* Visual Studio Code
* Adobe XD

### Major Dependencies

* Reactjs
* Electron
* SQLite3
* SASS

## Process

When developing libraries, I like to design the API first. To this end, I started by opening Adobe XD and designing the frontend of the program. 
