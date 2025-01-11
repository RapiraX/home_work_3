const userWantedArea = prompt("Enter your what area you want to learn", "");

if (userWantedArea === "frontend") {
    console.log("You need to learn html, css, javascript, react, redux");
}
else if (userWantedArea === "backend") {
    console.log(
        "You need to learn c#/java/python/go/php, databases, servers, network, terminal"
    );
}
else if (userWantedArea === "devops") {
    console.log("You need to learn cloud, bash, terraform, CI\\CD");
}
else if (userWantedArea === "ux/ui") {
    console.log("You need to learn figma, sketch, photoshop, illustrator");
}
else if (userWantedArea === "qa engineer") {
    console.log("You need to learn Jira, Trello, Bugzilla, SQL, GitHub");
}
else {
    console.log("You not entered wanted area");
}
