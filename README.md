# ABOUT
This project creates a config depending upon the environment. It uses convit to add schema for general configuration.It also uses dotenv to load environment variables in the node.
# SETUP
Add .env file at the root level with environment variables.
    ```NODE_ENV = development```
Change JSON files inside the server/conf/config as per your need.You can specify different configurations depending upon the environment.All configurations are loaded in sever.js file
