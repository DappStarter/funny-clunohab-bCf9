require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stomach renew stick social half arch metal gas'; 
let testAccounts = [
"0x1c04e95ceb3c690e3b5f0bdebd6549c95f558c536d55573a390ce7d27807015f",
"0x1884cb43ef5d556f40110cd1740cc0ef3d9c541428355db624e53fa73f6ea447",
"0x85aa0a3808959f011519c5e527e647f73044912972772ba8d683068f88c610cd",
"0x2e108145d56ff62d29866b4396e83f98de3159b94b9e8af899fb6319a3d41322",
"0x8f78c57d3e7f485da675ef89092c62655bde636d1b9aec6308d8283a1a033cc0",
"0x4fdad17881f2843cc988ca2450bd2b533a55be5be65164482d2d26b20a665231",
"0x47da1530221625781566f10396b31b3003c3ebc453b08a6e449157f06049738b",
"0x625ec702168e441040cb521acc5a15535647692a61074814f41aaf20f7b7fb5d",
"0xb9087974b296af750658f362d141b0fb4d0812a5ee9e40a89bd61568bd0db477",
"0xd3a1a3ce1b0671940c19cd465576ef7d4e2a4cc9a77ca27f39bafc66a366d292"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

