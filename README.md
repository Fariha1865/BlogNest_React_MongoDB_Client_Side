# BlogNest || Where stories unite, ideas ignite

# Site-Link: https://blognestweb.netlify.app/

This is a Blog Website, made using React JS, CSS3 (Flowbite and Tailwind),Firebase Authentication, JWT authentication, MongoDB and javascript

### Libraries Used:

- Flowbite UI component library (All over website)
- Framer Motion (For animation in recent blogs and Newsletter sections in Home page)
- React-Intersection-Observer (Combined with framer motion to give animation effect when an element is in viewpoint of the user in home page)
- react-loading-skeleton (All over the routes)
- react-table-library (For the data table in Featured List page)

### Used  tenstack query and axiosSecure for data fetching

### Website pages:

- Home page 
- Add Blogs page
- Edit Blogs page
- All Blogs page
- Featured Blogs page
- Wishlist page
- Blogdetails page
- Error page to handle page not found error

## Features:

- In home page, user can see 6 latest posted or updated blogs
- User can add any blog to their wishlist
- User can visit the blog details page and comment 
- A user cannot comment in his or her own blogs, but can update them. While others cannot update them but can write comments
- In newsletter section user can subscribe by entering email and toast is shown
- In Top blog writers sections, top 5 writers info and their contribution percentage is shown based on how many blogs they have written
- In blog writing tips section, user can see video, visit documentation, or can contact us by clicking the Contact button
- Clicking the contact us button opens up contact form drawer
- In all blogs page, user can see all the blogs written by all writers and can search them by title or by choosing category
- In featured blogs section, user can see 10 blogs information which have the longest description 
- In wishlist page, user can see all the blogs they have wishlisted and also can delete them from wishlist if needed
- User can toggle between sign in and register pages
- While logging in, if credentials are not valid, error toast is shown and on valid credetials, success toast is shown
- While registering, if invalid email or password is entered, error toast is given. Password requirs minimum 6 characters and at least one capital and small letter, one digit and one special character
- After user is successfully signed in or registered, users photo and username is shown in navbar and logout button appears
- When logout is clicked, user loggs out successfully and photo and username gets hidden and login/register button re-appears
- When a private route is reloaded, it keeps user in that page and doesn't navigate again to login page until user logs out
- When invalid url is types, user navigates to customized error page
- Website is made responsive for Tab and mobile devices

## Required:
- Tech Stack: Vite, CSS3 (Tailwind and DaisyUI)
- Programming Language: React,JavaScript
- User Authentication: Firebase, JWT token
- Database: MongoDB
- Code Editor: Visual Studio Code (VSCode)
- Terminal: Git Bash
