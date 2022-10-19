# Cryptography  
  
**Flowchart** is here:- [Cryptography](https://drive.google.com/file/d/1s_iowVJ9mK4C1RfpwlRxQWUYMNd_LT2H/view?usp=sharing)  
  
*Cryptography* is technique of securing information and communications through use of codes so that only those person for whom the information is intended can understand it and process it. Thus preventing unauthorized access to information. The prefix “crypt” means “hidden” and suffix graphy means “writing”.  
  
In Cryptography the techniques which are use to protect information are obtained from mathematical concepts and a set of rule based calculations known as algorithms to convert messages in ways that make it hard to decode it. These algorithms are used for   cryptographic key generation, digital signing, verification to protect data privacy, web browsing on internet and to protect confidential transactions such as credit card and debit card transactions.  
  
## How various Cryptographic Algorithms Works?  
Let’s start with the Symmetric key encryption  
  
### Symmetric Key Cryptography  
An encryption system in which the sender and receiver of a message share a single, common key that is used to encrypt and decrypt the message. The most popular symmetric–key system is the Data Encryption Standard (DES)  
  
### Transposition Ciphers  
In Cryptography, a transposition cipher is a method of encryption by which the positions held by units of plaintext (which are commonly characters or groups of characters) are shifted according to a regular system, so that the ciphertext constitutes a permutation of the plaintext.  
That is, the order of the units is changed (the plaintext is reordered). Mathematically, a bijective function is used on the characters’ positions to encrypt and an inverse function to decrypt.  
  
### Substitution Cipher  
Method of encryption by which units of plaintext are replaced with ciphertext, according to a fixed system; the “units” may be single letters (the most common), pairs of letters, triplets of letters, mixtures of the above, and so forth.  

### Stream Cipher  
Symmetric or secret-key encryption algorithm that encrypts a single bit at a time. With a Stream Cipher, the same plaintext bit or byte will encrypt to a different bit or byte every time it is encrypted.  
  
### Block Cipher  
An encryption method that applies a deterministic algorithm along with a symmetric key to encrypt a block of text, rather than encrypting one bit at a time as in stream ciphers  

**Example**: A common block cipher, AES, encrypts 128-bit blocks with a key of predetermined length: 128, 192, or 256 bits. Block ciphers are pseudorandom permutation (PRP) families that operate on the fixed size block of bits. PRPs are functions that cannot be differentiated from completely random permutations and thus, are considered reliable until proven unreliable.  

### Asymmetric Key Encryption (or Public Key Cryptography)  
The encryption process where different keys are used for encrypting and decrypting the information. Keys are different but are mathematically related, such that retrieving the plain text by decrypting ciphertext is feasible.   
  

**RSA** is the most widely used form of public key encryption, 

## RSA Algorithm
**RSA algorithm** is asymmetric cryptography algorithm. Asymmetric actually means that it works on two different keys i.e. Public Key and Private Key. As the name describes that the Public Key is given to everyone and Private key is kept private.  
  
An example of asymmetric cryptography :  
  
A client (for example browser) sends its public key to the server and requests for some data.  
The server encrypts the data using client’s public key and sends the encrypted data.
Client receives this data and decrypts it.
Since this is asymmetric, nobody else except browser can decrypt the data even if a third party has public key of browser.  
  
The idea! The idea of RSA is based on the fact that it is difficult to factorize a large integer. The public key consists of two numbers where one number is multiplication of two large prime numbers. And private key is also derived from the same two prime numbers. So if somebody can factorize the large number, the private key is compromised. Therefore encryption strength totally lies on the key size and if we double or triple the key size, the strength of encryption increases exponentially. RSA keys can be typically 1024 or 2048 bits long, but experts believe that 1024 bit keys could be broken in the near future. But till now it seems to be an infeasible task.  
