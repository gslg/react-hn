
# react-hn 
git clone https://github.com/FillInjava/react-hn.git

#down modules
npm install

#Start Watchify. This compiles your React (JSX) components into ordinary JavaScript.
watchify -v -o build/js/app.js js/app.js

#Start the HTTP server.
http-server -p 8888



