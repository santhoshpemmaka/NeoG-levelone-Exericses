import React from "react";
import {useCard} from "./CardContext";
import {useTheme} from "./ThemeContext";
import {languageSource} from "./LanguageSource";
import {useLangugage} from "./LanguageContext";
const ProductCard = () => {
	const {itemCount} = useCard();
	const {theme} = useTheme();
	const {language} = useLangugage();
	return (
		<div>
			<h2 style={{color: theme == "light" ? "black" : "white"}}>
				{`${languageSource[language]["content"]}`} {itemCount}
			</h2>
		</div>
	);
};

export default ProductCard;
