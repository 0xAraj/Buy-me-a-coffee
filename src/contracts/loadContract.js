import Coffee from "./Coffee.json";

const loadContract = async (web3) => {
  const abi = Coffee.abi;
  const contract = await new web3.eth.Contract(
    abi,
    "0x996fBe7D232eF735C1bf2fA0715020B6b21e9B8E"
  );

  return contract;
};

export default loadContract;
