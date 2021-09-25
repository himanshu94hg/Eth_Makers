let mnemonic =
	"notice dolphin tourist ice various pelican section squirrel town furnace setup satoshi";

module.exports = {
	networks: {
		mainnet: {
			privateKey: process.env.PRIVATE_KEY_MAINNET,
			userFeePercentage: 100,
			feeLimit: 1e9,
			fullHost: "https://api.trongrid.io",
			network_id: "1",
		},
		shasta: {
			privateKey:
				"3534c11b75c5b5d44d148085b9d913c79ac05802653d085c71c7c41a304d7836",
			userFeePercentage: 50,
			feeLimit: 1e9,
			fullHost: "https://api.shasta.trongrid.io",
			network_id: "2",
		},
		development: {
			privateKey:
				"3534c11b75c5b5d44d148085b9d913c79ac05802653d085c71c7c41a304d7836",
			userFeePercentage: 0,
			feeLimit: 1e9,
			fullHost: "http://127.0.0.1:9090",
			network_id: "9",
		},
		compilers: {
			solc: {
				version: "0.5.10",
			},
		},
	},
};
