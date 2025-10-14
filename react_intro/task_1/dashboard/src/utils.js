/**
 * Retourne l'année courante
 * @returns {number} L'année en cours
 */
const getFullYear = () => {
	let current_year = new Date().getFullYear();
	return current_year;
}

/**
 * Retourne le texte du footer selon le contexte
 * @param {boolean} isIndex - Indique si on est sur la page d'index
 * @returns {string} Le texte du footer approprié
 */
const getFooterCopy = (isIndex) => {
	if (isIndex === true) {
		return "Holberton School";
	} else {
		return "Holberton School main dashboard";
	}
}

module.exports = {
	getFooterCopy,
	getFullYear,
};
