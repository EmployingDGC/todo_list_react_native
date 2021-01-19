const appendZero = (number) => {
    if (number <= 9) {
        return `0${number}`;
    }

    return number;
}

const formatDate = (date = new Date()) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${appendZero(day)}/${appendZero(month)}/${year}`
}

export {
    formatDate,
}
