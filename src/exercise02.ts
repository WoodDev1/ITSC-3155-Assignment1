export class InvalidNucleotideError extends Error {
  constructor(character: string) {
    super(`Invalid DNA nucleotide: ${character}`); // this line was ai, had to look up what super was 
  }
}

export function transcribeDNA(dna: string): string {
   let rna: string = '';

  for (let i = 0; i < dna.length; i++) {
    const letter = dna[i];

    if (letter === 'A') {
      rna = rna + 'U';
    } else if (letter === 'T') {
      rna = rna + 'A';
    } else if (letter === 'C') {
      rna = rna + 'G';
    } else if (letter === 'G') {
      rna = rna + 'C';
    } else {
      throw new InvalidNucleotideError(letter);
    }
  }
  return rna;
}
