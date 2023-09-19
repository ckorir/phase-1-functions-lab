// Code your solution in this file!
function distanceFromHqInBlocks(block){
    const headquarters = 42;
    const pickupLocation = block;
    
    return Math.abs((headquarters - pickupLocation)); 
};

function distanceFromHqInFeet(block){
    const headquarters = 42;
    const pickupLocation = block;
    const distance = 264;

    return Math.abs((headquarters - pickupLocation) * distance);
}

function  distanceTravelledInFeet(location1, location2){
    const distance = 264;
    const total = Math.abs((location1 - location2));

    return(total * distance);
}

function calculatesFarePrice(start, destination){
    const distance = 264;
    const total = Math.abs((destination - start) * distance);

    if (total < 400){
        return (0);
    } else if (total > 400 && total < 2000){
        return ((total - 400) * 0.02);
    } else if (total > 2000 && total < 2500){
        return (25);
    } else {
        return ("cannot travel that far");
    }

}