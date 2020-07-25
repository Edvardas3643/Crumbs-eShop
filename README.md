# Crumbs-eShop
A Single page web aplication, for small bakery buisneses to display and sell theyr products.

Rest eShop WebApp:
Using React for shop-ui. SPA(Single page aplication).

Using Spring Boot Rest with postgres and docker for shop-api 

For installing and running the program, you need to have on your computer the following software:
JRE (Java Runtime Environment)
Node.js

Starting the project

eShop_api

1. package the project:

in the project directory use command:

mvn package

2.lounch the api from a jar file:

java -jar -Dspring.profiles.active=h2 [jar file here]

Go to the folder shop-ui, to start run the following commands:

1.Istall the missing modules

npm install

2.Deploy the Developmental server

npm start

To wisit the web app go to the http link:
http://localhost:3000/
