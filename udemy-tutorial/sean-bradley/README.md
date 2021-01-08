<br> <hr> <br>
## 01 - Environment Setup & Typescript Intro

Javascript and Typescript are similar, in fact, TS is an extension of JS.  We will be writing files in TS, and using a typescript compiler to turn our TS into browser compatible JS.

<code>
    &nbsp; tsc my-typscript-file.ts &nbsp; 
</code>
     # Outputs a browser compatible javascript file, super simple!

<br> <hr> <br>
## 02 - First Three.js Project

<code>
    &nbsp; npm init &nbsp; 
</code>
     # Select all defaults, initializes NPM and creates a package.json file for us 

<br>
<code>
    &nbsp; npm install three &nbsp; 
</code>
     # Installs Three.js
<br>

Create a folder called dist (where our final files will be available) and a folder called src.

Add 'client' and 'server' folders to both as well as config files.

<code>
    &nbsp; npm install @types/node &nbsp; 
</code>
     # Installs Types for Node
<br>
<code>
    &nbsp; npm install express &nbsp; 
</code>
     # Installs Express which isn't a default module of node
<br>
<code>
    &nbsp; npm install @types/express &nbsp; 
</code>
     # Installs Types for Express
<br>

Something not working? Did you compile? Probably not. 

<br>
<code>
    &nbsp; npm install nodemon --save-dev &nbsp; 
</code>
     # Installs nodemon and adds it to dev dependencies
<br>

<br>
<code>
    &nbsp; npm install concurrently --save-dev &nbsp; 
</code>
     # Installs concurrently
<br>