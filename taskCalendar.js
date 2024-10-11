function askDay(){
    let day = prompt("Enter the day of a week");
    switch (day) {
        case "Monday":
            alert("You need to Study Hard");
            break;
        case "Tuesday":
            alert("Do your tasks");
            break;
        case "Wednesday":
            alert("Go to beach for stress reliever");
            break;
        case "Thursday":
            alert("Finish the remaining ass.");
            break;
        case "Friday":
            alert("Quiz Day");
            break;   
        case "Saturday":
            alert("Doing housechores");
            break; 
        case "Sunday":
            alert("Family Day");
            break;
            default:
        alert("not a day of the week")
    }
}