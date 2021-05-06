require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen foot educate razor situate horn hunt knife bottom sketch'; 
let testAccounts = [
"0x4e9b358764db6eb99e1d1581126f681261dc35bce907d967e857daa219542e28",
"0x6c2066ce721543bb9818b238bd495d4d0843d4b96e3271483e5b299457f29daa",
"0x0950d278c90d8ebefece0364c6945480936dce91b28df65c15b76b5839659a9b",
"0x6a6bf02d4642a3d73fdad17faa8aecb473d657051823640c3389c11a0fb06d8e",
"0x6cda0919cb88afe8a5fc8446fed82aca9642b789944f28034c32f2b1841e8023",
"0xcefcf4838d5abc225053649d8f88f6adbb6e7dfcce9c948d8b1be601e6f43663",
"0xad8a9dc24ac44343ba66afa675f92acb768fecd8fee0e0d91e2abdba9e568678",
"0xad1e3a9c4b4fcacc138d0881faed80bef1d888fc2190f423b1c0f97e904dd5b7",
"0x245795b853b4c3b56190a4974dfb2c1b1be026c31e4e10bc813302fb407e378c",
"0xaeea80e29efe2501cde668aa31d2fa7f32150290e259672b77716cd016600931"
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

