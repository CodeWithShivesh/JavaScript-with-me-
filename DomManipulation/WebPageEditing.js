//Add Day
function AddDay(DayName) {
    const newDay = document.createElement('li');
    newDay.appendChild(document.createTextNode(DayName));
    const DayList = document.querySelector('.Day');
    DayList.appendChild(newDay)

}

//Edit Day
const EditDay = (DayName) => {

    const day = document.querySelector("li:nth-child(1)");
    day.innerHTML = `${DayName}`;
}

//Replace with Someone
const ReplaceDay = (DayName) => {
    const day = document.querySelector("li:nth-child(1)");
    const newDay = document.createElement('li');
    newDay.textContent = `${DayName}`;
    day.replaceWith(DayName);
}


EditDay("Monday");
AddDay("Tuesday");
AddDay("Wednesday");
AddDay("Thursday");
AddDay("Friday");
AddDay("Saturday");
AddDay("Sunday");

//Remove Day
const RemoveDay = () => {
    const Day = document.querySelector('li:last-child');
    Day.remove();
}

RemoveDay();
ReplaceDay("DayName");