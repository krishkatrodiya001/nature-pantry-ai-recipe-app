import Button from './Button'; // Adjust the import path based on your file structure

// ButtonList component
const ButtonList = ({ values, onAddQuickIngredient }) => {
    return (
        <div className='quick-ingredients'>
            {values.map((item, index) => (
                <form key={index} onSubmit={(e) => { e.preventDefault(); onAddQuickIngredient(item.label); }} className="add-quick-ingredient-form">
                    <Button label={item.label} emoji={item.emoji} />
                </form>
            ))}
        </div>
    );
}

export default ButtonList;