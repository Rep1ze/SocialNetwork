const formatPrice = (price) => price.toFixed(2);
const buildReceipt = (price) => `Total: ${formatPrice(price)}`;
const printReceipt = (price) =>  console.log(buildReceipt(price));
// 213
try {
  printReceipt(undefined);
  console.log("Printed");
} catch (error) {
  console.log("Failed");
  console.log(error.stack);
}
function render(){
    format =>{
        return(render)
    }
}