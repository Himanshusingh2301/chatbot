import schemes from '../data/schemes.json';

export const matchQuery = (userInput) => {
  const input = userInput.toLowerCase();
  let bestMatch = null;

  // Iterate through all schemes
  for (let scheme of schemes) {
    // Check if any of the tags match the user input
    for (let tag of scheme.tags) {
      if (input.includes(tag.toLowerCase())) {
        bestMatch = scheme; // If a match is found, use the scheme
        break; // Exit the loop once a match is found
      }
    }
    if (bestMatch) break; // Exit outer loop if a match is found
  }

  // If no match is found, return a default message
  return bestMatch
    ? `Scheme: ${bestMatch.title}\nDescription: ${bestMatch.description}`
    : "Sorry, I couldn't find any matching scheme.";
};
