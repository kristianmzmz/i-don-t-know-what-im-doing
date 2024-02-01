export function v(i: string): boolean {
    const string = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;

    if (!string.test(i)) {
        return false;
    }

    const password = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const user = parseInt(i.substring(0, 8), 10);
    const single = i.substring(i.length - 1).toUpperCase();
    let calculation = user % 23;

    if (single !== password.charAt(calculation)) {
        return false;
    }

    return true;
}

