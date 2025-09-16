// import CryptoJS from "crypto-js";

// type DecryptResult = any;

// const decrypt = (
//     encryptedData: string,
//     iv: string,
//     key: string
// ): DecryptResult => {
//     const cipherParams = CryptoJS.lib.CipherParams.create({
//         ciphertext: CryptoJS.enc.Hex.parse(encryptedData),
//     });

//     // Perform decryption
//     const decrypted = CryptoJS.AES.decrypt(
//         cipherParams,
//         CryptoJS.enc.Hex.parse(key),
//         {
//             iv: CryptoJS.enc.Hex.parse(iv),
//             mode: CryptoJS.mode.CBC,
//             padding: CryptoJS.pad.Pkcs7,
//         }
//     );

//     const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);

//     return JSON.parse(decryptedString);
// };

// export default decrypt;


import CryptoJS from "crypto-js";

import { Helmet } from "react-helmet";
type DecryptResult = any;

const decrypt = (
  encryptedData: string,
  iv: string,
  key: string
): DecryptResult => {
  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Hex.parse(encryptedData),
  });
  <Helmet>
      <title>ZadSports Blogs – Latest Updates & Tips</title>
      <meta name="description" content="Read the latest sports updates, tips, and stories from ZadSports." />
    </Helmet>
  // Perform decryption
  const decrypted = CryptoJS.AES.decrypt(
    cipherParams,
    CryptoJS.enc.Hex.parse(key),
    {
      iv: CryptoJS.enc.Hex.parse(iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);

  return JSON.parse(decryptedString);
};

export default decrypt;
