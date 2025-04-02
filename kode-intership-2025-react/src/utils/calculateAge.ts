function calculateAge(birthday: string): string {
    const today = new Date();
    const birthDate = new Date(birthday);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;
    
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return `${age} лет`;
    }
    
    switch (lastDigit) {
        case 1:
        return `${age} год`;
        case 2:
        case 3:
        case 4:
        return `${age} года`;
        default:
        return `${age} лет`;
    }
}

export default calculateAge;