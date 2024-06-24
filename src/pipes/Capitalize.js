export default function capitalize(value) {
    if (!value) return '';
    value = value.toString();
    return value.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
    });
}
