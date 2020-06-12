This is step by sep instructions on how I set up this  for React-Redux NodeJS project base Templates.
If I make new projects I can use this base framework to save time and get started quickly. 

I will name basic setup here if I get a new computer and want to do this for practice.

What I am going to do with this template with progress. (TASK AND PROJECT BUILD)

True = task completed
False = task is not complete

True	1. Set up a very basic starting react page (from react website pre-setup). This is a 
	single page react starting position. "npm start" in the project directory using terminal will run the program
	I think this is controlled in the package.json file but I don't have to worry about modding this

True	2. Set up GitHub repository with this so that I can save progress.

True	3. Set up a very basic layout for the visual component of all the abilities that are 
	going to be demonstrated. 
	
	This is visual only (nothing will happen when buttons are clicked etc...Just visual display)
		
  True		Window component 1 (Login page)
		
  True 		Window component 2 (Server interactions)

		a. Send info to server
		b. Receive info from server and display in browser visuals (local host
		also, to see from web it is <computerIP>:<local host number>). 
		This is display of state before and after interaction with server
		c. Receive info from server and display in console
		
  True 		Window component 3 (File interactions (through server))

		d. Place info into file (saving information) on server
		e. Reading info from file and displaying it to browser visuals
		f. Reading info from file and displaying it to console

  True 		Window component 4 (animation (section only))

		g. Set up area to demonstrate animations like slider in Algo-Bots

True	4. Set up redux (front end logistics)
	Start, dispatch (send or convey), reducer (does functions), and state
  
  True		a. Very basic setup (working redux)

  True		b. Managed state prior to submissions (state is finished to reflect
		input data prior to submission

  True	 	c. Setup slide animation in animation window (and any other
		animations (mostly finished front end)

True	5. Set up Node.js server system

  True		a. Basic setup demonstrated

  True		b. Set up text box on server window to send and receive processes
		text from server process

  True  	c. Asynchronous demonstrations with simple API call that sends
		to front end visuals

True	6. Set up file system 

  True		a. Save to file from text box

  True		b. Receive from file and display text box saved data

False	7. Set up login dependencies

  False		a. User accounts file system
			1. New user account process
			2. Existing user account process
			3. Modify user account process (if easy,
			otherwise just make a skeleton of it for 
			place holding)
		
  False		b. Password login

  True		c. multipage capabilities connected to existing account login

  False		d. Specific user data (secrete unless login) that is saved to file

		

STEP BY STEP INSTRUCTIONS ON HOW I COMPLETED EACH SECTION OF PROJECT BUILD


(1.) --getting a pre-setup version of react running-- (1.)

1. Download and set up Visual Studio Code (or any IDE “integrated development environment” that works for 
coding and reading javascript, css, html ,and node.js files.)
2. Open terminal and navigate to directory that you want to put  this project directory in. 
3. mkdir <directory_name>
4. Install node.js to your system using the internet 
	a. This gives you npm automatically (node package manager)
	b. Should be able to set this up with command line
5. npm init (to create package.json file)
	a. Use npm install <pkg> (to install package and save it as a dependency in package.json file)
6. Create React App (from https://reactjs.org/docs/create-a-new-react-app.html)
	a. In terminal:    npx create-react-app my-app
	b. In terminal:    cd my-app
	c. In terminal:    npm start (in the future we will use -npm run dev-)
	d. Congratulations! A very simple version of react is running! It will be on localhost: 3000 in 
	default browser


(2.) -- now to set up GitHub repository so I can save progress -- (2.)


1. Go to and login to your github account
2. Click "new repository" (set name)
3. Remove any git associated material
	a. Navigate to project directory with terminal
	b. rd .git /S/Q (remove associated git material)
4. Initialize, commit, and push
	a. git init (initialize)
	b. git add . (add everything)
	c. git commit -m "First commit, setup of github for project"
	(This creates a local git repository)

	d. git remote add origin <url provided by github when "new repository
	at github" was initiated>

		NOTE: I am setting up with HTTPS but in the future may want to do
		SSH
		SEE: "Switching remote URLs from HTTPS to SSH." if I want to make 
		high value repository more secure

	e. git push -u origin master

	f. To do additions in the future
		1. Git add . (Adds all to staging for commit)
		2. git status (shows new additions)
		3. git commit -m "message for changes" 
		(commits all staging file changes)
		make sure to leave a message or it will open weird 
		text editor
		4. git push (adds to external repository)


(3.) -- Set up visual layout of functionalities to be demonstrated by base template app -- (3.)

1. Create a folder: server

2. In src folder add "actions, components, and reducers" folders

3. Work on hierarchy of files. The index files are the top and components go deeper
Each component has it's associated css files for its local setup while the index css file
Arranges the components in their relative positions.
In essence, work on this component is structured in a hierarchy display and reference
So the programmer can find and work on any component in a logical way later

4. CSS references div components by className, {Component is a built in part of react and
Is used to interact with state, contain functions that I make, and 
render(){return(html div)} The html part is where css defines properties
	a. Position static is default and is just normal workflow for div positions
	b. Position absolute is relative to containing element and applies changes in 
	respect to parent element
	c. Relative is applies changes to where the element would have been in normal workflow
	if it was at a static position
	It seems to me that most positioning will be based on absolute

5. Did a bunch of sizing stuff in css. @media used for sizing (if window is less than amount stuff in effect
	type of stuff. @ media = Sets the style rules for different media types/devices/sizes (built into css)
6. .Classname is used for item selection but stuff like body or header or div (without . ) is used for
Specifications in a broader context

-- Login Page --

7.   Instructions: https://scotch.io/tutorials/validating-a-login-form-with-react
     Started work on login page using Formik package from npm which will handle:
	
	a. Getting values in and out of form state
	b. Validation and error messages
	c. Handling form submissions

	In Terminal : npm install formik --save. https://jaredpalmer.com/formik/docs/overview
	
	email-validator from npm                 https://www.npmjs.com/package/email-validator
	In Terminal : npm install email-validator

	use package called yup from npm.         https://www.npmjs.com/package/yup
	In Terminal : npm install -S yup
	
	I did the walkthrough setup and now onSubmit is ready to be handled by a background process 
	that needs login criteria

8. Focus on visuals. To actually get secure login the server needs to be set up. 

(4.) -- State with Redux and React, Front end logistics -- (4.)

1.	https://redux.js.org/introduction/installation
	In terminal: 
	npm install redux, 
	npm install react-redux, 
	npm install --save-dev redux-devtools

2. 	https://www.npmjs.com/package/redux-logger (tool for developers to manage state
	transitions)
	In terminal: 
	npm i --save redux-logger
	https://www.npmjs.com/package/redux-thunk (action creators can return functions
	instead of actions and also async dispatch)
	In Terminal:
	npm install --save redux-thunk

3. Taking much of the redux stuff from Algo-Bots
	a. Reducers ->reducers combine:these handle computations to state
	b. Specific actions receive a payload and attach a specific signal to be picked up 
	by reducer. The action specifies the type and the reducer uses type to figure out
	what to do with it
	c. These imports added to top of hierarchy
	import allReducers from './reducers/reducers_combine.js'
	import {Provider} from 'react-redux';
	import {applyMiddleware,createStore} from 'redux';
	import logger from "redux-logger";
	import thunk from "redux-thunk";

4. Connected the framework based on previous work

5. Connected text boxes to redux state

6. Now to focus on slider animations
	a. Hooked up sliders to redux state
	b. Slider Shutters completed 

(5.) -- Set up Node.js server system -- (5.)

1. Express is a web application framework for Node.js that allows you to spin up robust APIs 
and web servers in a much easier and cleaner way. It is a lightweight package that does not 
obscure the core Node.js features.

2. Method "Post" used mostly but "Get" is another method app.post... or app.get...
	a. You can control validity of information in html using pattern value (validity and valid)
	It is a built in function of html to do a reg ex inside of submission value if desired
	b. NOTES: No server stuff is on the front end code other than the post request (no imports
	no requirements etc) This suggests that it is a normal activity to do posts to the internet
	from browser front end software and react. Also When I installed the server last time with
	Algo-Bots I have to change startup from npm start to npm run dev which starts the server and
	starts react. So the server is listening for the react application just like it would on the
	internet. 
3. Put index.js into server folder

4. In Terminal: npm install express --save 

5. To handle HTTP POST request in Express.js version 4 and above, you need to install
middleware module called body-parser. Body-parser extract the entire body portion of an
incoming request stream and exposes it on req.body.

6. In Terminal: npm install body-parser --save

7. Logger helps recreate events that lead to an error and allow you to figure out what causes issues
	a. npm i express-pino-logger --save

8. Fs seems to be part of node already

9. I wanted to see if package.json would allow me to do this quickly:
	a. Copy and paste this into devDependencies and did an npm install
		"body-parser": "^1.19.0",
    		"express": "^4.17.1",
    		"express-pino-logger": "^4.0.0",
    		"node-env-run": "^3.0.2",
    		"nodemon": "^1.19.4",
    		"npm-run-all": "^4.1.5",
    		"pino-colada": "^1.5.1"

	b. Added "proxy": "http://localhost:3001",
	
	c. Copy and past this into scripts and another npm install
		"server": "node-env-run server --exec nodemon | pino-colada",
   		"dev": "run-p server start"

	d. Did not work (Reason figured out...I did not have .env file!)
	
	e. now: npm install express concurrently

	f. npm i nodemon --save-dev

	g. got server to run by cd to server and in terminal: node index.js
	This is the server file and node starts it (now can navigate to 
	local host specified and see data)

	h. Things get tough so I search web. https://www.twilio.com/blog/react-app-with-node-js-server-proxy
		1. npm install express body-parser --save-dev
		2. npm install node-env-run nodemon npm-run-all express-pino-logger pino-colada --save-dev
	i. Placed env file in right location --> worked!

(Basic setup NodeJS completed)

10. API setup

	a. Coinbase docs explainer https://github.com/coinbase/coinbase-pro-node

	b. npm install coinbase-pro

	c. Only setting put public client for now 
	const CoinbasePro = require('coinbase-pro');
	const publicClient = new CoinbasePro.PublicClient();
	goes in docs

	d. Worked out async issues so this worked properly (state influenced by incoming data)


(6.) -- Set up file system (6.)

	a. First set up router system (download react router dom)
	https://www.npmjs.com/package/react-router-dom
	npm install --save react-router-dom

	b. Had significant css problems when trying to import new pages as components
	solved it by using putting an id on all elements in the new page and className
	was taken so that is why I used id

	c. Router finished (was easy except for css stuff)

	d. Now for authenticating routs
		shit got hard, mistakes where made
		video that helped: https://www.youtube.com/watch?v=Y0-qdp-XBJg&list=PL
		gSnLuf9KjW7_mTH9S4k6GFkxAg15YIFd&index=5&t=0s








