export default function BoilingVerdict({ celsius = 0 }) {
    if (celsius >= 100) {
        return <p>Water Would Boil</p>;
    }
    return <p>Water Would not Boil</p>;
}
