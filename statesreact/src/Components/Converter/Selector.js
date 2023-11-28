export const Selector = (props) => {
    console.log(props);
    return (
        <option value={props.country}>{props.rate}</option>
    )
}