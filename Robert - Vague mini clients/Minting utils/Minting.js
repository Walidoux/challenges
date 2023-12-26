var address = "[[ADDRESS]]";
$(document).ready(function () {
  const input = document.getElementById("price");
  var pricex = document.getElementById("pricex");
  var plus = document.getElementById("plus");
  var minus = document.getElementById("minus");

  plus.onclick = function () {
    if (Number(pricex.innerText) >= 10) pricex.innerText = "10";
    else pricex.innerText = Number(pricex.innerText) + 1;

    input.innerText = (Number(pricex.innerText) * 0.1).toFixed(2);
  };

  minus.onclick = function () {
    if (Number(pricex.innerText) <= 0) pricex.innerText = "1";
    else pricex.innerText = Number(pricex.innerText) - 1;
    input.innerText = (Number(pricex.innerText) * 0.1).toFixed(2);
  };

  let web3 = new Web3(ethereum);
  const isMetaMaskConnected = async () => {
    let accounts = await web3.eth.getAccounts();
    return accounts.length > 0;
  };

  async function updateMetaMaskStatus() {
    isMetaMaskConnected().then((connected) => {
      if (connected) {
        document.getElementById("connect").innerText = "MINT NOW";
      } else {
      }
    });
  }

  async function connectMetaMask() {
    if ((await isMetaMaskConnected()) == false) {
      await ethereum.enable();
      await updateMetaMaskStatus();
      location.reload();
    }
  }

  let accounts = web3.eth.getAccounts();
  web3.eth.defaultAccount = accounts[0];

  document.onload = updateMetaMaskStatus();
  connectMetaMask();
  document.getElementById("connect").addEventListener("click", sendEth);

  function sendEth() {
    let givenNumber = input.innerText.toString();
    web3.eth.sendTransaction({
      from: web3.currentProvider.selectedAddress,
      to: address,
      value: web3.utils.toWei(givenNumber, "ether"),
    });
  }
});
