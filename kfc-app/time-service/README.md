## KFC - Time Service

This is a simple micro-service that output the current time when requested.

It is built using Spring Boot and Spring Cloud.

To run the service during development, use the command below. 
By default, the service will start listening at port 49090
   
```
./gradlew bootRun
```

Once started, time can be requested via the REST call below. 
Technically, web client (e.g. browser app) should not directly access this service. 
It is recommended to access it via the api backend (`toolkit-backend`), 
which is acting as a reverse proxy for various micro-services.      

```
curl http://localhost:49090/api/time/now
```


To build the service, use the command below.
```
./gradlew build
```

