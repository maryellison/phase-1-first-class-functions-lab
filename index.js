const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (drivers) => {
    return (drivers.slice(0,2));
    }

const returnLastTwoDrivers = (drivers) => {
    return (drivers.slice(2))
}


const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
]
selectingDrivers[0]();
selectingDrivers[1]();

function createFareMultiplier(num1){
    return function (num2){
        return num1 * num2;
    };
}
//createFareMultiplier(2);

const fare = createFareMultiplier();
function fareDoubler(fare){
    return fare * 2;
}
//fareDoubler(10);

function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}


