/**
 * Use this file to configure your youbox project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

module.exports = {
  /**
   * Networks define how you connect to your YOUChain client and let you set the
   * defaults youchainjs uses to send transactions. If you don't specify one youbox
   * will spin up a development blockchain for you on port 8545 when you
   * run `develop` or `test`. You can ask a youbox command to use a specific
   * network from the command line, e.g
   *
   * $ youbox test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - youbox uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client ( parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8283,            // Standard YOUChain port (default: none)
      network_id: "*",       // Any network (default: none)
    },

    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 glu (in lu) (default: 100 glu)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websockets: true        // Enable EventEmitter interface for youchainjs (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.4.25",    // Fetch exact version from solc-bin (default: youbox's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  }
      // }
    }
  }
}
