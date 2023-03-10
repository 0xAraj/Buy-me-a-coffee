import Coffee from "./Coffee.json";

const loadContract = async () => {
  const abi = Coffee.abi;
  const contract = await new web3.eth.Contract(
    abi,
    "0xd89c50aaA3B4102015eE201717e14327820c2b16"
  );

  return contract;
};

export default loadContract;
