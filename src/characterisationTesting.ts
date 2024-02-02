export function v(i: string): boolean {
    if (i.length !== 9) {
        return false;
    }

    const first: string = i.slice(0, 8);
    const second: string = i.charAt(8).toUpperCase();

    let result: boolean;
    for (let i = 0; i < first.length; i++) {
        if (first[i] < '0' || first[i] > '9') {
            result = false;
            break;
        }

        result = true;
    }

    if (result == false) {
        return false;
    }

    const password: string = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const user: string = password.charAt(parseInt(first, 10) % 23);

    return second === user;
}
