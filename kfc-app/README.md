## KFC Toolkit - Starter

Here is a multi-module starter for development of the KFC Toolkit. 
It contains the base setup to explore and build various analytics 
and visualization components.

The list of modules are as follow:

| Name            | Description                                                                             |
| --------------- | --------------------------------------------------------------------------------------- |
| toolkit-web     | Web frontend built using JS ES6, React, and Redux. Contains various UI Components       |
| toolkit-backend | API backend to serve the web frontend. Serve as reverse proxy to various micro-services |
| time-service    | Sample Spring Boot based micro-service that return current time when called             |


During development, to start the apps, run the command below at the root project directory.
Once started, the app can be accessed via [http://localhost:3000](http://localhost:3000)

```
# start the api backend first
./gradlew :toolkit-backend:bootRun

# start various micro-services (if they are used), eg. time service
./gradlew :time-service:bootRun

# start web frontend
cd toolkit-web
yarn start
``` 

For production build, run the command below at the root project directory.
Note that static code analysis and linting will be checked during the build. 
Build will fail if any non-compliance is found. 
```
./gradlew build
```

### Web Frontend (toolkit-web)

Built using React and Redux, various analytics and visualization components should be a React component
or Redux reducers (for state management or UI logic processing).

As the base is generated using Create React App, it largely follows the same folder structure as a plain create-react-app.

Note that the eslint rules are different. It mainly follow airbnb style guide with minor tweaks. 
Code **must** comply with eslint rules defined. 

With the exception of D3 v4 and React, Use of JS libraries that manipulate DOM (e.g. jQuery) should be minimized.  

React components should be placed in the following folder structure under `src` folder.

```
/src
  /actions        - contain all Redux actions
  /components     - contains all React components
    /layout       - page layout elements
    /xxx          - various related React components
    /view         - higher-order / parent React component that represent a single page / view 
  /reducers       - contains all Redux reducers
  /routes         - contains various React Router routes
  /util           - utilities
```

### API Backend (toolkit-backend)

This is mainly a reverse proxy that is built using Spring Boot and Spring Cloud.

The reverse proxy is actually Zuul (from Netflix).  

Technically, core business logic should not resides in this module but self-contained in various micro-services.
During runtime, web client will access the API backend that in turn, redirect the calls to various micro-services.  

### Sample Micro-service (time-service)

This acts as a sample for a simple micro-service. 

Backend business logic should be contained in various micro-services with each service only do one thing, and do one thing well.

Example of a micro-service could be a "message" service that manage the messages from the in-app Instant Messaging feature.
It could be using technologies such as Redis or MongoDB to store the actual messages and any processing of "messages" is via this service.   

While the sample is built using Spring Boot and Spring Cloud, other framework such as Akka or RxJava can be used instead for building services. 
However, it is recommended to use Spring Boot/Cloud for the ease of use.

The sample is also developed using Kotlin. **Both Kotlin and Java can be used/mixed** in developing the services.

**The use of other languages (esp. non JVM languages) would require further discussion.** 

NOTE: In the development of the services, the solutioning **should not use** any cloud services (e.g. Google BigQuery)
