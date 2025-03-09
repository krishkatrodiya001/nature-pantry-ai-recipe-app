import ButtonList from './ButtonList';
import quickIngredients from '../data/quick-ingredients';

// QuickIngredients component
const QuickIngredients = ({ onAddQuickIngredient }) => {
    
    // Render the quick ingredients section
    return (
        <section aria-labelledby="add-quick-ingredients-section-title">
            <p id="add-quick-ingredients-section-title">Quick Incredients</p>
            <ButtonList values={quickIngredients} onAddQuickIngredient={onAddQuickIngredient} />
        </section>
    );
}

export default QuickIngredients;