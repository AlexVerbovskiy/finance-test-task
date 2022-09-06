export const formatDate = (date) => {
    const newDate = new Date(date).getTime();
    const updatedTIme = new Date(newDate + 2 * 60 * 60 * 1000);
    const year = updatedTIme.getFullYear();
    const month = updatedTIme.getMonth() + 1;
    const day = updatedTIme.getDay() + 1;
    const hour = updatedTIme.getHours() + 1;
    const minute = updatedTIme.getMinutes() + 1;
    return `${day}.${month}.${year} ${hour}:${minute}`;
}