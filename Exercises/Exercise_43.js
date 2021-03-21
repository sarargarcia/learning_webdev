function returnDay(num){
    const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if(parseInt(num) >= 1 && parseInt(num) <= 7){
    return day[num-1];
    }
    return null;
}