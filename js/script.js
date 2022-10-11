let projectsList = [
    {
        title: "Brand Merchandise E-commerce Store",
        tools: ["ReactJS", "Firebase", "Cloud Functions", "Redux"],
        description: "I have been bringing value to most of the people I know and they always say I am helping them a lot and they wished to support my hustle. Ever since 2021 March I have been wearing my own custom branded t-shirts and hoodies (Nkululekodot io) and people wanted to buy them, I then thought of developing an e- commerce website to sell the custom merchandise I was rocking.",
        responsibilities: [
            "• I conceptualized and designed the website, designed the UI elements, and edited the product images on the site.",
            "• The website was serverless, firebase was used to handle the backend and React js for the client-side.",
            "• Product data is dynamic and served to the client from firebase.",
            "• I used firebase authentication for protected routes.",
            "• I used nodejs in cloud functions to manage the ordering process notification and handling.",
        ],
        codeLink: "https://github.com/NkululekoMbhele/merchstore",
        demoLink: "https://merch.nkululeko.io/"

    },
    // {
    //     title: "Developing A Custom WordPress Theme",
    //     description: "I developed a custom WordPress theme for a client, The client's goal was to get a custom-designed website with the ability to edit the content of the website themselves, so I decided to do a WordPress theme and I developed the theme in about 4 hours since the clients wanted it within a short amount of time.",
    //     responsibilities: [
    //         "• Planning and implementing the correct folder structure.",
    //         "• Developing using FTP for remote access of the SQL server online.",
    //         "• Referencing and using online resources, Googling, and accessing the WordPress developer documentation.",
    //     ],
    //     codeLink: "http://",
    //     demoLink: "http://"
    // },
    // {
    //     title: "Nkululeko Dot IO Donation Page",
    //     description: "I have a passion for business and graphic design. Since 2019 when I learned how to do graphic design I have been designing posters and logos, for friends. I was so happy to help people with design, and I got good at it while I was practicing. I made it a side business and I created a donation page to help to bootstrap the business, I got donations, online.",
    //     responsibilities: [
    //        "• I used react js, for the user interface of the page.",
    //        "• I integrated Payfast (an online payment platform) with HTML form,",
    //        "• I used PHP to create a signature to validate the data using a passphrase set on the platform.",
    //     ],
    //     codeLink: "http://",
    //     demoLink: "http://"
    // },
    {
        title: "Image Classification Using Machine Learning.",
        tools: ["ReactJS", "Firebase", "Cloud Functions", "Redux"],
        description: "Artificial Neural networks is a topic that we don’t normally hear about, but it relates to AI (Artificial Intelligence - as known to be Robots) which most people are familiar with. Artificial Intelligence is where computer systems are developed to perform tasks that require human intelligence.In this project, Artificial Neural Network is used for classifying handwritten digits from the MNIST10 dataset, using python.",
        responsibilities: [
              "• Analysis of Network topologies to find the network that can create a better model.",
              "• Using PyTorch dependency to train a model.",
              "• Reporting of the final work and testing of the model.",
              "• Using a plotting library to plot the Loss and Validation accuracy of the different networks for analysis.",
        ],
        codeLink: "http://",
        demoLink: "http://"
    },
    {
        title: "Improving Filter Functionality For Wesgro Website - Cape Trade Portal.",
        tools: ["Custo,", "Firebase", "Cloud Functions", "Redux"],
        description: "Cape Trade Portal is a trusted virtual marketplace, connecting buyers across the globe to Cape Town and Western Cape sellers, the website is developed by Wegro, the Official Trade, and Investment Agency for the Western Cape, and has a diversity of quality goods and services.The website is built using WordPress.I was helping in finding a solution for allowing the user to filter products using custom fields.We managed to find a solution in 3 days and met the client's deadline.",
        responsibilities: [
                 "• Worked with various WordPress plugins to find a solution.",
                 "• Analyzed more than 50 SQL tables and reported how they are connected and how can knowing how WordPress stores data can help us find the solution.",
                 "• Worked with PHP code and tried implementing a solution programmatically.",
        ],
        codeLink: "",
        demoLink: "https://capetradeportal.com/"
    },
    {
        title: "Volumetric Fracture Detection System",
        tools: ["ReactJS", "Firebase", "Cloud Functions", "Redux"],
        description: "The Volumetric Fracture Detection System is a computer-based program that checks for fractures in each set of image data This system can be used in various industrial processes to detect fractures in machined parts through the analysis of x- ray or computed tomography(CT) images.We worked as a team of 3 to complete the project from planning to implementation.The system was implemented in Java.",
        responsibilities: [
            "• Worked on requirement analysis.",
            "• Created a Gantt chart with the milestones of the project. ",
            "• Worked on the implementation of thresholding, to threshold images to be passed for component detecting. ",
            "• Implemented a connected component class to find the connected component of each image using the Flood Fill algorithm.",
            "• Worked on testing and documenting a user manual.",
        ],
        codeLink: "http://",
        demoLink: "https://github.com/NkululekoMbhele/volumetric-fracture-detection-system"
    },
    
];

let skills = [
    "Python",
    "JavaScript",
    "C#",
    "Java",
    "Typescripts",
    "Reactjs",
    "Flask",
    "Database Systems and Administration",
    "SQL",
    "Firebase",
    "Google Cloud Platform",
    "Restful APIs",
    "GraphQl",
    "Linux",
    "UI/UX Design",
    "Git, Version Contro",
    "Communication",
];


// Project Container
let ul = document.querySelector("#projects");
let skillList = document.querySelector("#skills");




// Projects 
for (let projectItem of projectsList) {

    let project = document.createElement("div");
    project.setAttribute("class", "flex flex-col text-start gap-5 my-12 bg-white md:py-12 md:px-16 py-4 px-4 w-full md:w-7/12 mx-2 rounded-md shadow-md")
    let projectTitle = document.createElement("div");
    let title = document.createElement("h3");
    title.appendChild(document.createTextNode(projectItem.title));
    title.setAttribute("class", "text-2xl ");
    projectTitle.appendChild(title)

    // Tools and technologies
    let toolsContainer = document.createElement("div")
    toolsContainer.setAttribute("class", "flex items-center gap-2")
    let toolsTitle = document.createElement("h5");
    toolsTitle.appendChild(document.createTextNode("Tools:"))
    toolsTitle.setAttribute("class", "text-sm font-semibold py-2");
    let tools = document.createElement("ul");
    tools.setAttribute("class", "flex gap-2")


    for (let item of projectItem.tools) {
        let resp = document.createElement("li");
        resp.appendChild(document.createTextNode(item))
        resp.setAttribute("class", "text-xs py-1 px-4 border border-background rounded-lg ")
        tools.appendChild(resp);
    }
    toolsContainer.appendChild(toolsTitle)
    toolsContainer.appendChild(tools)

    let projectDescription = document.createElement("div");
    projectDescription.setAttribute("class", "flex md:flex-row flex-col gap-2.5 w-full")
    let projectThumb = document.createElement("div")
    projectThumb.setAttribute("class", "border w-48 md:h-auto h-48")
    let description = document.createElement("p")
    description.setAttribute("class", "md:w-4/6")
    description.appendChild(document.createTextNode(projectItem.description));
    projectDescription.appendChild(projectThumb)
    projectDescription.appendChild(description)

    let responsibilities = document.createElement("div")
    let respTitle = document.createElement("h5");
    respTitle.setAttribute("class", "text-xl py-2");
    respTitle.appendChild(document.createTextNode("Responsibilities"))
    let respList = document.createElement("ul");

    for (let item of projectItem.responsibilities) {
        let resp = document.createElement("li");
        resp.appendChild(document.createTextNode(item))
        respList.appendChild(resp);
    }

    responsibilities.appendChild(respTitle)
    responsibilities.appendChild(respList)

    let links = document.createElement("div")
    links.setAttribute("class", "links py-8");
    let codeLink = document.createElement("a")
    codeLink.setAttribute("class", "code border rounded px-4 py-2 mr-2");
    codeLink.setAttribute("href", projectItem.codeLink);
    codeLink.appendChild(document.createTextNode("View Code"))

    let demoLink = document.createElement("a");
    demoLink.setAttribute("href", projectItem.demoLink);
    demoLink.setAttribute("class", "view-site border border-yellow rounded px-4 py-2 mr-2");
    demoLink.appendChild(document.createTextNode("Live Demo"))

    links.appendChild(codeLink)
    if (projectItem.demoLink.length > 0) {
        links.appendChild(demoLink)
    }

    project.appendChild(projectTitle)
    project.appendChild(toolsContainer)
    project.appendChild(projectDescription)
    project.appendChild(responsibilities)
    project.appendChild(links)
    ul.appendChild(project)
}
