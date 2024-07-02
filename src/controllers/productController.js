const getAllProducts = () => {
  try {
    return "Get all products";
  } catch (error) {
    console.log(error);
  }
};

const getProductbyId = () => {
  try {
    return "Get product by id";
  } catch (error) {
    console.log(error);
  }
};

const addnewProduct = () => {
  try {
    return "Add new product";
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = () => {
  try {
    return "Update product";
  } catch (error) {
    console.log(error);
  }
};

const deleteProducts = () => {
  try {
    return "Delete product";
  } catch (error) {
    console.log(error);
  }
};

// export default {
//   getAllProducts,
//   getProductbyId,
//   addnewProduct,
//   updateProduct,
//   deleteProducts,
// };

module.exports = {
  getAllProducts,
  getProductbyId,
  addnewProduct,
  updateProduct,
  deleteProducts,
};