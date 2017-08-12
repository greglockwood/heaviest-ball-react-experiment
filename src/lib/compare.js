const identity = x => x;

export default function compare(a, b, valueFn = identity) {
    return valueFn(a) - valueFn(b);
}