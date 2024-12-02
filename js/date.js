export function getDayName(dayIndex) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayIndex];
}

export function updateDateInfo() {
    const now = new Date();
    const dayIndex = now.getDay(); // returns index for the day of the week
    const dayName = getDayName(dayIndex);
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const dateString = `${hours}:${minutes} ${dayName}`;
    document.getElementById('date').textContent = dateString;
}