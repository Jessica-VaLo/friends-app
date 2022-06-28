export function base58_decode(snipcode) {
  let alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
  let num = snipcode.length;
  let decoded = 0;
  let multi = 1;
  for (let i = num - 1; i >= 0; i--) {
    decoded = decoded + multi * alphabet.indexOf(snipcode[i]);
    multi = multi * alphabet.length;
  }
  return decoded;
}
