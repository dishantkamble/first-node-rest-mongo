# first-node-rest-mongo
First program for trying hands on nodejs. :)

Application makes use of mongoDB running on docker.
Pre-requisite: NPM

To Run the application,
1. Download, Install and Run Docker Desktop
2. Download, Install and Run Kitematic
3. Search "Mongo" on Kitematic and click "Create"
4. When Mongo container changes status to "Running", create a new database with name "firstdb" and add a collection "base" (Adding a collection is mandatory as per the comment you will find while creating a new database)
5. Click "Settings" on Right side on Kitematic
5. Click "Hostname/Ports" to find "Published IP:Port" section (This will be used as connection string to connect this application to mongo)
6. Update the "url" attribute in "database.config.js" file of this application under "config" folder with the IP and Port extracted in the above step.
7. Go to project path, run command "node app.js" in your terminal
