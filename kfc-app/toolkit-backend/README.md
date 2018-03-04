## KFC - Toolkit Backend

This is the API backend for Kfc Toolkit. 
It is mainly functioning as a reverse proxy to various micro-services. 
As a reverse proxy, it naturally resolves the need for CORS (Cross-Origin Resource Sharing) 
or the need to sending cross-origin HTTP requests.  

This module is built using Spring Boot and Spring Cloud.

To run the service during development, use the command below. 
By default, the service will start listening at port 9090. 
    
```
./gradlew :toolkit-backend:bootRun
```

Once started, various REST calls from the `toolkit-web` should be working.
User should be using the server started via `yarn start` for `toolkit-web` instead.       

```
curl http://localhost:3000
```

For production build, use the command below. 
```
./gradlew :toolkit-backend:build
```

This will also cause `toolkit-web` to be build as a jar dependency, 
resulting in a single fatJar that contains the entire kfc toolkit web application. 
In this case, once started using the command below, the application will be accessible at port 9090 instead of 3000.

```
java -jar toolkit-backend.jar
```