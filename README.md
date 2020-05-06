# first-node-rest-mongo
First program for trying hands on nodejs. :) 

Application makes use of mongoDB running on docker.
Pre-requisite: NPM

To Run the application,
1. Download, Install and Run Docker Desktop
2. Download, Install and Run Kitematic
3. Search "Mongo" on Kitematic and click "Create"
4. When Mongo container changes status to "Running", click "Settings" on Right side
5. Click "Hostname/Ports" to find "Published IP:Port" section (This will be used as connection string to connect this application to mongo)
6. Update the "url" attribute in "database.config.js" file of this application under "config" folder with the IP and Port extracted in the above step.
7. Go to project path, run command "node app.js" in your terminal
