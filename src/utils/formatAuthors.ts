/** Bold Hassan A. Mahmoud name variants in author strings. */
export function formatAuthorsHtml(authors: string): string {
  const patterns = [
    /Hassan A\.\s*Mahmoud/gi,
    /H\.\s*A\.\s*Mahmoud/gi,
    /H\.\s*Mahmoud(?!\s*A\.)/gi,
  ];

  let result = authors;
  for (const pattern of patterns) {
    result = result.replace(pattern, (match) => `<strong>${match}</strong>`);
  }
  return result;
}
