export function formatName(
  firstName: string,
  lastName: string,
  middleName?: string | null,
): string {
  let output: string;
  if (middleName)
  {
     output = lastName + ', ' + firstName + ' ' + middleName.substring(0,1) + '.';
  }
  else {
     output = lastName + ', ' + firstName;
  }
  return output;
}
