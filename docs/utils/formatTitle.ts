export default function formatTitle(input: string) {
  let result = "";
  result = input?.[0] || "";
  for (let i = 1; i < input?.length; i++) {
    const char = input[i];
    result += char >= "A" && char <= "Z" ? ` ${char.toLowerCase()}` : char;
  }
  return result;
}
