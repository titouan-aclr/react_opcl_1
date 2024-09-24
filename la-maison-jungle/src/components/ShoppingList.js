import { useState } from 'react';
import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import Categories from './Categories.js';
import PlantItem from './PlantItem.js';

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('');

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name);
		if(currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount : currentPlantAdded.amount +1 }
			]);
		} else {
			updateCart([...cart, { name, price, amount: 1 }]);
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
			<ul className='lmj-plant-list'>
				{plantList
					.filter((plant) => activeCategory === '' || plant.category === activeCategory)
					.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							id={id}
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList