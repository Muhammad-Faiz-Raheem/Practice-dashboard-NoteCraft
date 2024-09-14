export function formatNumberWithCommas(number) {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }
  return number.toLocaleString();
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export function isFloat(num) {
  return !Number.isInteger(num);
}

export const getRandomAvatar = (gender) => {
  const randomNum = Math.floor(Math.random() * 100); // Random number between 0 and 99
  return `https://randomuser.me/api/portraits/${gender}/${randomNum}.jpg`;
};

export const getRandomTime = () => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
};
