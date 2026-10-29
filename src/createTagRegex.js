export default function createTagRegex(tag) {
    return new RegExp(`(?<=<\\/{0,1})${tag}(?= |>)`, "gm");
}
