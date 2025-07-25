function getDelimiterIndices(format: string): {
  indices: number[];
} {
  const indices: number[] = [];

  for (let i = 0; i < format.length; i++) {
    if (format[i].toLowerCase() !== "x") {
      indices.push(i);
    }
  }

  return { indices };
}

export default function formatPhoneNumber(
  digits: string,
  format: string = "xx xxx xxx",
): string {
  const { indices } = getDelimiterIndices(format);
  let result = "";
  let digitIndex = 0;

  for (let i = 0; i < format.length && digitIndex < digits.length; i++) {
    if (indices.includes(i)) {
      result += format[i];
    } else {
      result += digits[digitIndex];
      digitIndex++;
    }
  }

  return result;
}

//81091174 becomes 81 091 174
