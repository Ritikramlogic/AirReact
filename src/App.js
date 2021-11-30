import "./App.css";
import React from "react";
import { ethers } from "ethers";
import { ContactAddress, ABI } from "./config";
import Facebook from "./Components/Facebook/Facebook";
import Twitter from "./Components/Twitter/Twitter";
import Telegram from "./Components/Telegram/Telegram";
//App class Start here
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      wallet_add: "",
    };
    this.Transfer = this.Transfer.bind(this);
    this.initialize = this.initialize.bind(this);
  }
  componentDidMount() {
    window.ethereum.on("accountsChanged", () => {
      this.initialize();
    });
  }

  //initialize function for
  async initialize() {
    //When metamask is Installed
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is  installed!");

      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );

      const signer = await provider.getSigner();

      //Get Account details from metamask
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      this.setState({
        address: account[0],
      });
      //Create the contract
      window.Contract = new ethers.Contract(ContactAddress, ABI, signer);
      console.log(window.Contract);
    } else {
      alert("MetaMask is not  installed!");
    }
  }

  // Transfer Function for Transfer token
  Transfer() {
    console.log(this.state.address);
    console.log("Telegram: " + window.Telegram);
    console.log("TwitterFollow: " + window.TwitterFollow);
    console.log("FBShare: " + window.FBShare);
    console.log("FBLikes: " + window.FBLikes);
    if (
      window.FBShare &&
      window.FBLikes &&
      window.TwitterFollow &&
      window.Telegram
    ) {
      console.log("Done it");
    } else {
      console.log("Failed");
    }
    window.Contract.Airdrop(this.state.address)
      .then((data) => alert(`This is the Transaction Hash: ${data.hash}`))
      .catch((err) => alert(err.data.message));
    // console.log(`The Transcation fees is : ${airdrop}`);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "100px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "10px" }}>
          <h2>Facebook</h2>
          <Facebook />
        </div>

        <div style={{ marginTop: "10px" }}>
          <h2>Twitter</h2>
          <Twitter />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Telegram />
        </div>

        <div style={{ display: "flex", marginBottom: "2rem" }}>
          <div>Account Address: </div>
          <div> {this.state.address}</div>
        </div>
        <div style={{ display: "flex" }}>
          <button
            style={{
              color: "#000",
              background: "#fff",
              border: "2px solid black",
              borderRadius: "5px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              width: "200px",
              marginRight: "10px",
              justifyContent: "center",
            }}
            onClick={this.initialize}
          >
            Connect to Wallet
          </button>
          <button
            onClick={this.Transfer}
            style={{
              color: "#fff",
              background: "black",
              borde: "none",
              borderRadius: "5px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              width: "200px",
              justifyContent: "center",
            }}
          >
            Transfer
          </button>
        </div>
      </div>
    );
  }
}

export default App;
