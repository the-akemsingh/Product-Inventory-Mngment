
const registerMerchant = async (req, res) => {
  try {
    console.log("registerMerchant");
  } catch (error) {
    res.status(400).send(error);
  }
};

const loginMerchant = async (req, res) => {
  try {
    console.log("loginMerchant");
  } catch (error) {
    res.status(400).send(error);
  }
};

export default { registerMerchant, loginMerchant };