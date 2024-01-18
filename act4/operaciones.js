export const suma = (x, y) => x + y;
export const resta = (x, y) => x - y;
export const multi = (x, y) => x * y;
export const divi = (x, y) => {
    if (y <= 0) {
        return "error";
    } else {
        return x / y;
    }
};
