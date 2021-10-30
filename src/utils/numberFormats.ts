export const formatPhoneNumber = (numbers: string) => {
  numbers = numbers.replace(/\D/g, ""); //Remove tudo o que não é dígito
  let numberLength = numbers.length;

  numbers = numbers.replace(/(\d{2})(\d)/, "+$1 $2");
  numbers = numbers.replace(/(\d{2})(\d)/, "($1) $2");
  if (numberLength <= 10) {
    numbers = numbers.replace(/(\d{4})(\d)/, "$1-$2");
  } else {
    numbers = numbers.replace(/(\d{5})(\d)/, "$1-$2");
  }

  return numbers;
};
