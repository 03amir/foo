export const greet = ()=>{
    const nowHour = new Date().getHours();
    if (nowHour <= 12 && nowHour > 4) {
       return "Morning";
    }
   else if (nowHour > 12 && nowHour < 14) {
        return "Noon"
    }
    else if (nowHour > 14 && nowHour < 20) {
        return "Evening";
    }
    else {
        return "Night"
    }
}