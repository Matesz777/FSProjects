export const Cell = ({ value, Onchange }) => {
    return (
        <input 
            type="text"
            className="cell"
            value={value}
            onChange={Onchange}
            maxLength={1}
        />
    );
};