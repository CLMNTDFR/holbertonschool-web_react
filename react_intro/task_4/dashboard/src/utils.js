/**
 * Retourne l'année courante
 * @returns {number} L'année en cours
 */
const getFullYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

/**
 * Retourne le texte du footer selon le contexte
 * @param {boolean} isIndex - Indique si on est sur la page d'index
 * @returns {string} Le texte du footer approprié
 */
const getFooterCopy = (isIndex) => {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
};

/**
 * Retourne le HTML de la dernière notification urgente
 * @returns {string} HTML contenant le message de notification urgent
 */
const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
};

export { getFullYear, getFooterCopy, getLatestNotification };
