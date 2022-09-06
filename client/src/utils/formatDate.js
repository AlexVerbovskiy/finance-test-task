export const formatDate = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDay() + 1;
    const hour = newDate.getHours() + 1;
    const minute = newDate.getMinutes() + 1;
    return `${day}.${month}.${year} ${hour}:${minute}`;
}