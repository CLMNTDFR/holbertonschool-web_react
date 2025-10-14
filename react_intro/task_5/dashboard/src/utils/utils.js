/**
 * Fonctions utilitaires pour l'application React
 * Contient des helpers pour gérer les dates, le footer et les notifications
 */

/**
 * Retourne l'année courante
 * @returns {number} L'année en cours
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Retourne le texte du footer selon le contexte
 * @param {boolean} isIndex - Indique si on est sur la page d'index
 * @returns {string} Le texte du footer approprié
 */
export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

/**
 * Retourne le HTML de la dernière notification urgente
 * @returns {string} HTML contenant le message de notification urgent
 */
export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
