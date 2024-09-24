import { plantList } from "../datas/plantList";
import '../styles/Categories.css';

function Categories({ activeCategory, setActiveCategory }) {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );

    return (
        <div className='lmj-categories'>
            <select 
                value={activeCategory} 
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    );
}

export default Categories;