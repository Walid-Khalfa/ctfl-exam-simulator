import type { Locale } from "./locale";

// UI-only strings. Exam questions, options, explanations and user-authored text
// are deliberately never run through this dictionary.
export const uiEnglish: Record<string, string> = {
  Erreur: "Error",
  "Une erreur est survenue.": "An error occurred.",
  "Page introuvable": "Page not found",
  "La page que vous cherchez n'existe pas ou a été déplacée.":
    "The page you are looking for does not exist or has moved.",
  "Retour à l'accueil": "Back to home",
  "Cette page ne s'est pas chargée": "This page could not be loaded",
  "Une erreur est survenue. Vous pouvez actualiser ou revenir à l'accueil.":
    "An error occurred. You can try again or return to the home page.",
  Réessayer: "Try again",
  Accueil: "Home",
  Calculatrice: "Calculator",
  "Aucun calcul": "No calculations",
  Historique: "History",
  "Effacer l'historique": "Clear history",
  Fermer: "Close",
  Retour: "Back",
  "Bloc-notes": "Notepad",
  "Notes copiées dans le presse-papiers !": "Notes copied to clipboard!",
  "Échec de la copie.": "Copy failed.",
  "Le bloc-notes est vide !": "The notepad is empty!",
  "Notes téléchargées !": "Notes downloaded!",
  "Notes effacées !": "Notes cleared!",
  "Voulez-vous vraiment effacer toutes vos notes ?": "Clear all your notes?",
  "Enregistrement...": "Saving…",
  "Enregistré localement": "Saved locally",
  "Saisissez vos notes, calculs intermédiaires ou remarques ici... Elles sont enregistrées automatiquement.":
    "Enter notes, calculations or comments here… They are saved automatically.",
  "Effacer tout": "Clear all",
  "Copier les notes": "Copy notes",
  Copié: "Copied",
  Copier: "Copy",
  "Télécharger en fichier .txt": "Download as a .txt file",
  Télécharger: "Download",
  "Activer le thème clair": "Switch to light theme",
  "Activer le thème sombre": "Switch to dark theme",
  "Erreur de téléversement": "Upload failed",
  "Échec de l'extraction": "Extraction failed",
  "Échec de la réinitialisation": "Reset failed",
  "Question enregistrée": "Question saved",
  "Question supprimée": "Question deleted",
  "Examen dupliqué": "Exam duplicated",
  "Examen dépublié": "Exam unpublished",
  "Examen publié": "Exam published",
  "Examen supprimé": "Exam deleted",
  "% réussite": "% passed",
  "validées) ·": "validated) ·",
  "Échec de la soumission. Réessayez.": "Submission failed. Please try again.",
  "Attention : Vous n'avez pas répondu à toutes les questions !":
    "Warning: you have not answered every question!",
  "Il vous reste": "You have",
  "question(s) sans réponse :": "unanswered question(s):",
  "Impossible de démarrer l'examen.": "Unable to start the exam.",
  "Examen indisponible": "Exam unavailable",
  "Nombre maximum de tentatives atteint": "Maximum number of attempts reached",
  "Tentative introuvable": "Attempt not found",
  "Examen non soumis": "Exam not submitted",
  "La correction est indisponible avant la soumission": "Answers are unavailable before submission",
  "Énoncé manquant": "Missing question text",
  "Options de réponse insuffisantes": "Not enough answer options",
  "Aucune bonne réponse définie": "No correct answer defined",
  "Contient un tableau/schéma : une image doit peut-être être ajoutée":
    "Contains a table/diagram: an image may need to be added",
  "En attente de validation par l'instructeur": "Awaiting instructor validation",
  "Langue de l’examen": "Exam language",
  "Toutes les langues": "All languages",
  "Aucun examen dans cette langue.": "No exams are available in this language.",
  "Le choix FR/EN traduit l’interface, les questions, les réponses et les corrigés. Chaque examen est disponible intégralement en français et en anglais.":
    "FR/EN switches the interface, the questions, the answers and the explanations. Every exam is fully available in French and in English.",
  "Choisissez la langue réelle du contenu importé. Changer ce champ ne traduit pas les questions.":
    "Select the actual language of the imported content. Changing this field does not translate the questions.",
};
export function translateText(text: string, locale: Locale): string {
  return locale === "en" ? (uiEnglish[text] ?? text) : text;
}
