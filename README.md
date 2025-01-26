# My Body My Place: A first time SwampHacks submission
My Body My Place was developed within 24 hours by Sienna Perez, Kayla Inoa, Adora Lin, and Pranathi Madishetty during the University of Florida's SwampHacks X. This was all of our first times participating in and completing a hackathon and we learned a lot. You can find more on our Devpost!: https://devpost.com/software/my-body-my-place?ref_content=my-projects-tab&ref_feature=my_projects

# Our Product: 
The primary motivation behind the development of this website was to ensure women have access to abortion clinics during these times. We aimed to provide not only a system for locating nearby clinics but also a supportive chatbot and educational map to address questions about abortion and reproductive rights near you.

# How we built it:
We divided the tasks as some of us worked on the front end and UI, while others worked on back end and data fetching. A lot of us collaborated when we ran into errors in our individual "departments" and helped each other problem-solve. We used primarily javascript with React and implemented the Google Maps API, Gemini API, Auth0 API, and react-simple-maps.

# Challenges we ran into: 
The main challenges we faced while building our project involved using generative AI with OpenAI. Our goal was to use these AI systems to increase the complexity of our project and provide a better user experience. While implementing these systems, we received various errors concerning API keys and UI design, but by researching more on the topic and working together, we got through the challenges and created a final working product with Gemini. 

# Accomplishments and what we learned:
We're proud of getting a successful chatbot and getting a working map that is able to relocate its display to a specific zip code and is capable of fetching nearby clinic information. In addition, the website overall is a great accomplishment, and a sign on how we pushed through despite our difficulties. By participating in this hackathon, we learned how to use React.js, JavaScript, and HTML/CSS for UI design, and integrate APIs. Ultimately, we developed the necessary skills to create a website with different properties and polished our frontend abilities. 

# What's next for My Body My Place: 
It would be amazing if we got time to further develop this site, in addition to expanding our site to beyond the united states. Perhaps a less glitchy version of our United States map at the bottom, but it is quite helpful to have direct access to these resources all in one place. We also hope to incorporate insurance information into this page to narrow down nearby clinics available.

# How to run: 
My Body My Place is a React.js web app that deploys on a local host with Node. In order to run everything properly the following packages must be installed...
**Gemini API:** npm install @google/generative-ai
**Google Maps API:** npm install @react-google-maps/api
**Auth0 API:** npm install @auth0/auth0-react
**React-simple-maps:** npm install react-simple-maps **note* simple maps is incompatible with newer react versions, some of us had to downgrade.
Node and React must also be installed. Run the page using "npm start".
