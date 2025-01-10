const userWantedArea = prompt("Enter your what area you want to learn", "");

switch (userWantedArea) {
    case "frontend":
        console.log("You need to learn html, css, javascript, react, redux");
        break;
    case "backend":
        console.log("You need to learn c#/java/python/go/php, databases, servers, network, terminal");
        break;
    case "devops":
        console.log("You need to learn cloud, bash, terraform, CI\\CD");
        break;
    case "ux/ui":
        console.log("You need to learn figma, sketch, photoshop, illustrator");
        break;
    case "qa engineer":
        console.log("You need to learn Jira, Trello, Bugzilla, SQL, GitHub");
        break;
    default: 
        console.log("You not entered wanted area");
}



