
import cafe from "../assets/cafe.jpg";
import movie from "../assets/movie.jpg";
import shelter from "../assets/shelter.jpg";
import cafePersona from "../assets/coffeeBiscuits/persona.png";
import cafeWireFrame from "../assets/coffeeBiscuits/wireframe.png";
import cafeLowProto from "../assets/coffeeBiscuits/lofi-prototype.png";
import cafeHiProto from "../assets/coffeeBiscuits/hifi-prototype.png";
import cafeMockup1 from "../assets/coffeeBiscuits/mockup1.png";
import cafeMockup2 from "../assets/coffeeBiscuits/mockup2.png";

export const portfolioData = {
    "Coffee&Biscuits":{
        title: "Coffee&Biscuits",
        titleImg : cafe,
        problemStatement: "With their wide variety of hot beverages and pastries cafes are becoming increasingly popular.People from all respects of life visit cafes on a regular basis.One such cafe is \'Coffee&Biscuits\'. Coffee&Biscuits are a multi branch cafe spread out throughout the state and offer high quality service to the customers. Due to popular demand, customers usually have a long waiting time before they are served or get a seat. This causes the cafe to lose business as well as causes customer dissatisfaction. Coffee&Biscuits would like to solve this problem by opting for a digital solution that optimizes its serving capacity to its fullest.",
        projectDuration: "September 2021 to October 2021",
        role: "UX designer & researcher",
        responsibilities: "Competitive audit, Paper & Digital wireframes, usability testing, low-fi &hi-fi prototyping, Gathering feedback, Iterating on designs, accessibility testing",
        goalStatement: "Design an app for \'Coffee&biscuits\' to allow users to book their seats at the time they need.\'Coffee&Biscuits\' is a mobile app that allows users to reserve seats based on time slots available. Users can book their seats,time,branch and avoid waiting time in any of the cafe\'s branches",
        researchSummary: "Initial interviews were conducted with a diverse background of users to understand the difficulties faced by cafe users/consumers. The interviews suggested that majority of the users did not like to wait long for a table or get frustrated that they have to leave when they could not find a table. The cafe was also not satisfied with losing potential regular customers.",
        painPoints: [ "Users do not have facility to book specific time slots that they need",
                      "Users are frustrated having to wait for a long time to get a seat",
                      "Busy users, working adults do not have the time to wait as they have limited amount of break time"
                    ],
        personaStatement: "Jack is a busy delivery executive and a coffee lover, who needs snacks and coffee without having to wait due to his limited break timing",
        personaImg : cafePersona,
        wireFraming: [{ title: "The time reservation screen(pic 1)",
                        process:["The time reservation screens were designed based on user research and findings",
                                "Dropdowns were provided for the user to select the place and date",
                                "A list of available time slots were displayed from which the user can select the required slot",
                                "A confirmation page was provided to review the details before the user booked"
                                ]
                    },
                    { title: "The confirmation screen(pic 2)",
                      process: ["Displaying the details the user selected on the previous sections",
                                "A button to finalize the booking process"]
                    }],
        wireFrameImg : cafeWireFrame,
        lowfi: "A low-fi prototype was created to simulate the user flow from homepage to booking confirmation.",
        lowfiImg: cafeLowProto,
        testing: ["The user was not able to find the right button",
                 "The user wanted more pleasing colors",
                 "Wanted to see a calendar popup",
                 "The time duration screen can be avoided",
                 "The list of time slots displayed need to be simplified",
                 "The user was unable to find the location of the store they booked their seats"
                ],
        mockups: ["The time reservation screen was modified to include the calendar popup and removed the time slots display at the bottom of the page. This allowed to simplify the design",
                  "A map of the location of the cafe branch that the user booked their seat was added to enable them to find the location easily"],
        mockupsImg: [cafeMockup1, cafeMockup2],
        hifiImg : cafeHiProto,
        impact: "The app is very useful for booking time slots anytime for customers of the cafe at their nearest branch. The app is designed in a way to help the user to book a slot as easier and fast as possible",
        quote: "I\'m really excited and waiting to use this app. I think I have found my new favorite cafe",
        learning: "Working on the designs made me realize that users would rather prefer the design and the process to be simple rather than being fancy. The final designs have been made after taking that into account. This being my first project I learned how the design process works end to end."
    },
    "Moviez":{
        title: "Moviez",
        titleImg : {movie},
        problemStatement: "Moviez is a local high-end theater which showcases new movies in high quality. It is well known in the city and has a wide user base. The users of this theater have a common complaint that they are unaware of any currently showing or upcoming movies. This causes some frustration and loss of interest for the users. The management of Moviez would like to solve this problem and attract more movie lovers",
        projectDuration: "October 2021 to November 2021",
        role: "UX designer & researcher",
        responsibilities: "Competitive audit, Paper & Digital wireframes, usability testing, low-fi &hi-fi prototyping, Gathering feedback, Iterating on designs, accessibility testing",
        goalStatement: "Design a digital solution for a preview experience for the movie theater - Moviez.The solution will showcase current and upcoming movies along with the relevant information like trailer, cast, etc. The design will be responsive(mobile and desktop) so the users can access the platform on their preferred platform",
        researchSummary: "Initial interviews were conducted with a diverse background of users to understand the requirements for movie goers. The interviews revealed a common theme that majority of the users would like to have previews and all other information related to movies in an easy accessible way and in a single consolidated place.",
        painPoints: [ "Users do not have facility to know about current or upcoming movies in the theatre",
                    "Users need information related to a movie consolidated in one place",
                    "Users are frustrated when they watch a movie that is not as good as they have been led to think"
                    ],
        problemStatement: "Jane is a busy corporate analyst and a movie goer who needs information related to movies without having to go directly to the theater",
        wireFraming: [{ title: "The home screen (pic 1)",
                        process:["A hero image carousel to showcase featured movies placed above the fold.",
                                 "A header section which contains navigation links and profile link",
                                 "List of movie thumbnails which redirect to corresponding detailed page"
                                ]
                    },
                    { title: "The preview screen (pic 2)",
                      process: ["Different sections which showcase information about cast, related videos and reviews",
                      "List of recommended movies at the bottom which redirect to the corresponding detailed page"]
                    }],
        responsive:{
            title:"Responsive Homepage",
            changes: ["Responsive screens were designed to fit mobile devices",
            "A burger menu was added to contain navigation links",
            "All images were resized and provided a horizontal scroll to accommodate screen width"]
        },
        lowfi: "A low-fi prototype was created to simulate the user flow for the core functionality of the platform.",
        testing: ["The user was not able to filter movies when searching",
                "The user was confused not to see a rating system provided",
                "The user wanted to see contact information for the theater",
                "The user was frustrated having to navigate many times in the search"
                ],
        mockups: ["The footer was included with contact information for the theater along with their social media links",
                 "In the search page pagination was added to help navigation easier and faster. Filters and sorting functionality was also added to enhance the search"],
        impact: "Creating a responsive digital solution for users to gain access to movie previews and other information greatly enhanced the movie watching experience. It is expected to attract more movie goers and help them in choosing movies that they would enjoy",
        quote: "",
        learning: "Working on a responsive design requirement helped me learn how to make use of differing device screen sizes and best practices for doing so. I learned that it\'s a challenging task to keep a consistent look across devices while making sure the important functionalities are also included"
    },
    "Shelter":{
        title: "Shelter",
        titleImg: {shelter},
        problemStatement: "A roof over one\'s head is a basic necessity for every human being. But in reality there are countless homeless people struggling to find a proper place to stay. It gets more difficult for them during harsh weather conditions. Many Non-profit Organizations strive to help the homeless, but there is no coordinated effort among the current active organizations.",
        projectDuration: "November 2021 to December 2021",
        role: "UX designer & researcher",
        responsibilities: "Competitive audit, Paper & Digital wireframes, usability testing, low-fi &hi-fi prototyping, Gathering feedback, Iterating on designs, accessibility testing",
        goalStatement: "Design a digital solution to coordinate efforts of NGOs and volunteers to pool their efforts to help the homeless and bring together a better society. The solution will be responsive(mobile,tablet,desktop) so that it is accessible to everyone across different screen sizes",
        researchSummary: "Initial interviews were conducted with a diverse background of users to understand the requirements for movie goers.The interviews revealed that although there are a number of NGOs helping the homeless they find it difficult for data collection, recruiting volunteers and coordinating efforts",
        painPoints: [ "Users cannot easily recruit volunteers",
                    "Users cannot coordinate efforts easily",
                    "It\'s difficult to identify and reach out to many homeless quickly and in an organized manner"
                    ],
        problemStatement: "Larry is a caring social work and founder of an NGO who needs a place to recruit volunteers for his efforts to help the homeless through his NGO",
        wireFraming: [{ title: "The home screen (pic 1)",
                        process:[
                                "A burger menu to encapsulate navigation links of the application",
                                "A call to action button at the front and center to emphasis it\'s importance"
                                ]
                    },
                    { title: "Find a shelter screen(pic 2)",
                      process: ["A search functionality to locate a help center or NGO in the preferred area",
                      "A zip search input to make the search more accurate"]
                    }],
        responsive:{
            title:"Responsive Homepage",
            changes: ["",
            "",
            ""]
        },
        lowfi: "A low-fi prototype was created to simulate the user flow for the core functionality of the platform",
        testing: ["The users wanted a recurring payment option",
                    "The users were frustrated not to find a confirmation page before payment",
                    "The users wanted a more accurate search feature",
                    "The users were confused with the card payment selection"
                ],
        mockups: ["Clear images and confirmation screens were added to enhance usability",
                "A confirmation screen was added to review the details before payment"
                ],
        impact: "The research participants felt that this is a very useful app that will help them reach out to the community and do good to the society by helping those in need. It will also help coordinate efforts to maximize the benefit to the homeless community",
        quote: "",
        learning: "Working on a responsive design requirement that focused on social good helped me learn responsibility and taught me how to give back to the community in a useful way. I learned that design for social good can be a really fulfilling and challenging task. The designs for such a task require clear inputs from a large user group dedicated to serve the community.Creating designs for 3 different screen sizes helped me learn how to apply different skills required"
    },
}