/*--------------------------->
   Problem-1 Convert radian to degree 
      <--------------------------*/

function radianToDegree(radian) {
    if (typeof radian === 'number') {
        const pi = Math.PI;
        let degree = radian * (180 / pi);
        degree = degree.toFixed(2);
        return parseFloat(degree);
    }
    return 'please enter a valid number';
}


/*--------------------------->
   Problem-2 Check whether the given file name is a Javascript or not
      <--------------------------*/

function isJavaScriptFile(string) {
    if (typeof string === 'string') {
        if (string.endsWith('.js')) {
            return true;
        }
        return false;
    }
    return 'please enter a valid name';
}


/*--------------------------->
   Problem-3 Calculate the total oil price that I have to pay
      <--------------------------*/

function oilPrice(diesel, petrol, octane) {
    if ((typeof diesel === 'number' && diesel >= 0) && (typeof petrol === 'number' && petrol >= 0) && (typeof octane === 'number' && octane >= 0)) {
        const dieselPerLitre = 114;
        const petrolPerLitre = 130;
        const octanePerLitre = 135;

        const totalDieselPrice = diesel * dieselPerLitre;
        const totalPetrolPrice = petrol * petrolPerLitre;
        const totalOctanePrice = octane * octanePerLitre;

        const totalPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
        return totalPrice;
    }
    return 'please enter a valid number';
}


/*--------------------------->
   Problem-4 Find the total publicBusFare
      <--------------------------*/

function publicBusFare(people) {
    if (typeof people === 'number' && people >= 0) {
        const busCapacity = 50;
        const microCapacity = 11;
        const publicFare = 250;

        const peopleAfterBus = people % busCapacity;
        const peopleAfterMicro = peopleAfterBus % microCapacity;
        const totalPublicFare = publicFare * peopleAfterMicro;
        return totalPublicFare;
    }
    return 'please enter a valid number';
}


/*--------------------------->
   Problem-5 Find if they are best friend or Not
      <--------------------------*/

function isBestFriend(friend1, friend2) {
    if (typeof friend1 === 'object' && typeof friend2 === 'object') {
        if ((typeof friend1.name === 'string' && typeof friend1.friend === 'string') && (typeof friend2.name === 'string' && typeof friend2.friend === 'string')) {
            if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
                return true;
            }
            return false;
        }
        return 'please enter valid name';
    }
    return 'please enter valid object';
}