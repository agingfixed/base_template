This is step by sep instructions on how I set up this  for React-Redux NodeJS project base Templates.
If I make new projects I can use this base framework to save time and get started quickly. 

I will name basic setup here if I get a new computer and want to do this for practice.

What I am going to do with this template with progress. (TASK AND PROJECT BUILD)

True = task completed
False = task is not complete

True	1. Set up a very basic starting react page (from react website pre-setup). This is a 
	single page react starting position.

False	2. Set up GitHub repository with this so that I can save progress. (Incomplete)
	
False	3. Set up redux (front end logistics) 
	
False	4. Set up a very basic layout for the visual component of all the abilities that are 
	going to be demonstrated. 
	
	This is visual only (nothing will happen when buttons are clicked etc...Just visual display)

		a. Send info to server
		b. Receive info from server and display in browser visuals (local host
		also, to see from web it is <computerIP>:<local host number>). 
		This is display of state before and after interaction with server
		c. Receive info from server and display in console
		d. Place info into file (saving information) on server
		e. Reading info from file and displaying it to browser visuals
		f. Reading info from file and displaying it to console
		g. Set up a password login section that would lead to 
		next page once login
		
	
False	5. Set up multipage capabilities with password login (g) Display personal content (secrete unless login)

False	6. Set up Node.js server (a,b, and c)

False.	7. Set up file system (d,e, and f)


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
	c. git init (initialize)
	d. git add . (add everything)
	e. git commit -m "First commit, setup of github for project"
	This creates a local git repository
	f. git remote add origin <url provided by github when "new repository
	at github" was initiated>
		NOTE: I am setting up with HTTPS but in the future may want to do
		SSH
		SEE: "Switching remote URLs from HTTPS to SSH." if I want to make 
		high value repository more secure
	g. git push -u origin master













