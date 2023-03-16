export const getMachineReadableDate = (date: Date) => `${[date.getMonth() + 1, date.getDate(), date.getFullYear()].join('/')} ${[date.getHours(), date.getMinutes(), date.getSeconds()].join(':')}`;

export const getHumanReadableDate = (date: Date) => date.toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
