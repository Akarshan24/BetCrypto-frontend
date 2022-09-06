export const determineSlot = (matchDateTime) => {
    const present = new Date();
    const matchDate = new Date(matchDateTime);
    if ((matchDate - present) > 7200000)//2 hrs
        return 1;
    else if ((matchDate - present) > 0)
        return 2;
    else if (present - matchDate > 2700000)
        return 3;
    return -1;
}
