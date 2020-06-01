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

False	3. Set up a very basic layout for the visual component of all the abilities that are 
	going to be demonstrated. 
	
	This is visual only (nothing will happen when buttons are clicked etc...Just visual display)
		
		Window component 1 (Server interactions)

		a. Send info to server
		b. Receive info from server and display in browser visuals (local host
		also, to see from web it is <computerIP>:<local host number>). 
		This is display of state before and after interaction with server
		c. Receive info from server and display in console
		
		Window component 2 (File interactions (through server))

		d. Place info into file (saving information) on server
		e. Reading info from file and displaying it to browser visuals
		f. Reading info from file and displaying it to console

		Window component 3 (Login and profile demonstrations)

		g. Set up a password login section that would lead to 
		next page once login

		Window component 4 (slide animation)

		h. Set up a animation using state with a slider (as
		was performed in my Algo-Bots app)

False	4. Set up redux (front end logistics) 
	Start, dispatch (send or convey), reducer (does functions), and state

False	5. Set up Node.js server (a,b, and c)

False.	6. Set up file system (d,e, and f)
		
False	7. Set up multipage capabilities with password login (g) Display personal content (secrete unless login)



STEP BY STEP INSTRUCTIONS ON HOW I COMPLETED EACH SECTION OF PROJECT BUILD



(1.) --getting a pre-setup version of react running-- (1.)

1. Download and set up Visual Studio Code (or any IDE “integrated development environment” that works for coding and reading javascript, css, html ,and node.js files.)
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











