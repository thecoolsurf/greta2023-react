export const Infos = () => {
    return (
        <div className="infos">
        <div className="group">
            <div className="legend">Name:</div>
            <div className="info">{item.name}</div>
            <div className="legend">Alternetes name:</div>
            <div className="info">{item.alternate_names.map((el, i) => item.alternate_names[i])}</div>
            <div className="legend">Wand core:</div>
            <div className="info">{item.wand.core}</div>
            <div className="legend">Wand length:</div>
            <div className="info">{item.wand.length}</div>
            <div className="legend">Wand wood:</div>
            <div className="info">{item.wand.wood}</div>
            <div className="legend">Patronus:</div>
            <div className="info">{item.patronus}</div>
            <div className="legend">Ancestry:</div>
            <div className="info">{item.ancestry}</div>
            <div className="legend">House:</div>
            <div className="info">{item.house}</div>
            <div className="legend">Species:</div>
            <div className="info">{item.species}</div>
        </div>
        <div className="group">
            <h2></h2>
            <div className="legend">Date of birth:</div>
            <div className="info">{item.dateOfBirth}</div>
            <div className="legend">Gender:</div>
            <div className="info">{item.gender}</div>
            <div className="legend">Eye color:</div>
            <div className="info">{item.eyeColour}</div>
            <div className="legend">Hair color:</div>
            <div className="info">{item.hairColour}</div>
        </div>
    </div>
)
}