import CryptoJS from 'crypto-js'

function encrypt(data) {
  const cipherText = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.LS_STORE).toString();
  return cipherText
}
function decrypt(data) {
  const bytes = CryptoJS.AES.decrypt(data, process.env.LS_STORE);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

}
export { encrypt, decrypt };
