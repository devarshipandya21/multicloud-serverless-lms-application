import React, { Component } from "react";
import axios from "axios";
import "../.././stylesheets/DataProcessing.css";
import "../.././stylesheets/OnlineSupport.css";
import ReactWordcloud from "react-wordcloud";

class OnlineSupport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lexruntime: {},
      lexUserId: "",
      sessionAttributes: {},
      //   wisdom: {},
    };
  }

  componentDidMount() {
    this.loadProperties();

    console.log("Came to component mount");
    document.getElementById("wisdom").focus();
  }

  updateValues = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  openForm = (e) => {
    document.getElementById("LexChatBot").style.display = "block";
    document.getElementById("ChatBoxPopUp").style.display = "none";
    document.getElementById("wisdom").focus();
  };

  closeForm = (e) => {
    document.getElementById("LexChatBot").style.display = "none";
    document.getElementById("ChatBoxPopUp").style.display = "block";
  };

  showResponse = (lexResponse) => {
    console.log("lex response", lexResponse);
    var conversationDiv = document.getElementById("conversation");
    var responsePara = document.createElement("P");
    responsePara.className = "lexResponse";
    if (lexResponse.message) {
      responsePara.appendChild(document.createTextNode(lexResponse.message));
      responsePara.appendChild(document.createElement("br"));
    }
    if (lexResponse.dialogState === "ReadyForFulfillment") {
      responsePara.appendChild(
        document.createTextNode("Ready for fulfillment")
      );
      // TODO:  show slot values
    }
    conversationDiv.appendChild(responsePara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
  };

  showError = (daText) => {
    var conversationDiv = document.getElementById("conversation");
    var errorPara = document.createElement("P");
    errorPara.className = "lexError";
    errorPara.appendChild(document.createTextNode(daText));
    conversationDiv.appendChild(errorPara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
  };

  showRequest = (daText) => {
    var conversationDiv = document.getElementById("conversation");
    var requestPara = document.createElement("P");
    requestPara.className = "userRequest";
    requestPara.appendChild(document.createTextNode(daText));
    conversationDiv.appendChild(requestPara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
  };

  loadProperties = (e) => {
    var AWS = require("aws-sdk/dist/aws-sdk-react-native");
    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = "us-east-1"; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      // Provide your Pool Id here
      IdentityPoolId: "us-east-1:2e27e950-26b2-4504-972d-b853e9e395ee",
    });

    let lex_run_time = new AWS.LexRuntime();
    let lex_user_id = "chatbot-demo" + Date.now();
    let session_attributes = {};
    console.log(lex_run_time);
    try {
      this.setState(
        {
          lexruntime: lex_run_time,
          lexUserId: lex_user_id,
          sessionAttributes: {},
        },
        () => {
          console.log("New State", this.state);
        }
      );
    } catch (err) {
      console.log("Error", err);
    }
  };

  pushChat = (e) => {
    e.preventDefault();
    console.log("came to pushchat");
    // if there is text to be sent...
    var wisdomText = document.getElementById("wisdom");
    if (wisdomText && wisdomText.value && wisdomText.value.trim().length > 0) {
      // disable input to show we're sending it
      var wisdom = wisdomText.value.trim();
      wisdomText.value = "...";
      wisdomText.locked = true;

      // send it to the Lex runtime
      var params = {
        botAlias: "$LATEST",
        botName: "DalServerlessLMS",
        inputText: wisdom,
        userId: this.state.lexUserId,
        sessionAttributes: this.state.sessionAttributes,
      };
      this.showRequest(wisdom);

      console.log("lexruntime value: ", this.state.lexruntime);

      if (this.state.lexruntime) {
        var runtime_lex = this.state.lexruntime;
        runtime_lex.postText(
          params,
          function (err, data) {
            if (err) {
              console.log(err, err.stack);
              this.showError(
                "Error:  " + err.message + " (see console for details)"
              );
            }
            if (data) {
              // capture the sessionAttributes for the next cycle
              this.setState({
                sessionAttributes: data.sessionAttributes,
              });

              // show response and/or error/dialog status
              this.showResponse(data);
            }
            // re-enable input
            wisdomText.value = "";
            wisdomText.locked = false;
          }.bind(this)
        );
      }
    }
    // we always cancel form submission
    return false;
  };

  // part of the code in this file is taken from https://aws.amazon.com/blogs/machine-learning/greetings-visitor-engage-your-web-users-with-amazon-lex/
  render() {
    return (
      <div className="DataProcessing">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button
          type="submit"
          className="open-button"
          id="ChatBoxPopUp"
          onClick={this.openForm}
        >
          Chat
        </button>

        <div
          className="chat-popup"
          style={{ background: "#f1f1f1" }}
          id="LexChatBot"
        >
          <h2
            style={{
              textAlign: "center",
              backgroundColor: "#555",
              color: "white",
            }}
          >
            Chat
            <button
              type="button"
              class="close"
              aria-label="Close"
              onClick={this.closeForm}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </h2>

          <div
            id="conversation"
            className="form-container"
            style={{
              width: "300px",
              height: "300px",
              background: "#f1f1f1",
              overflow: "scroll",
            }}
          ></div>
          <form id="chatform" onSubmit={this.pushChat}>
            <input
              type="text"
              style={{ width: "250px", float: "bottom", marginLeft: "25px" }}
              id="wisdom"
              placeholder="Enter your query..."
              onChange={(e) => this.updateValues(e)}
            />
          </form>
          <br />
        </div>
      </div>
    );
  }
}

export default OnlineSupport;
