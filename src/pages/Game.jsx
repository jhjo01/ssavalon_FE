import React, { Component } from "react";
import { OpenVidu } from "openvidu-browser";
import axios from "axios";
import styles from "./Game.module.css";
import UserVideoComponent from "../components/openVidu/UserVideoComponent";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import MicOffIcon from "@mui/icons-material/MicOff";
import BackgroundImage from "../assets/images/image-background.png";
import GameBoard from "../components/ui/gameboard/GameBoard";
import LogCard from "../components/ui/logCard/LogCard";
import Role from "./../components/ui/roleDesc/Role";
import ButtonDanger from "../components/ui/button/ButtonDanger";

const OPENVIDU_SERVER_URL = "http://localhost:5000/";
// const OPENVIDU_SERVER_SECRET = "MY_SECRET";

// const Game = () => {
//   return (
//     <div
//       className={styles.layout}
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${BackgroundImage})`,
//       }}
//     >
//       <GameBoard />
//       <Role />
//       <LogCard />
//     </div>
//   );
// };

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // mySessionId: 'SessionA',
      // myUserName: 'Participant' + Math.floor(Math.random() * 100),
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],
      isMike: true,
    };

    this.joinSession = this.joinSession.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.handleMainVideoStream = this.handleMainVideoStream.bind(this);
    this.onbeforeunload = this.onbeforeunload.bind(this);
    this.handleMicOnOff = this.handleMicOnOff.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onbeforeunload);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onbeforeunload);
  }

  onbeforeunload(e) {
    this.leaveSession();
  }

  handleMainVideoStream(stream) {
    if (this.state.mainStreamManager !== stream) {
      this.setState({
        mainStreamManager: stream
      });
    }
  }
  
  handleMicOnOff() {
    this.setState({ isMike: !this.state.isMike }, () => {
      this.state.publisher.publishAudio(this.state.isMike);
    });
  }

  joinSession() {
    this.OV = new OpenVidu();

    this.setState(
      {
        session: this.OV.initSession(),
      },
      () => {
        var mySession = this.state.session;

        mySession.on('streamCreated', (event) => {
          var subscriber = mySession.subscribe(event.stream, undefined);
          var subscribers = this.state.subscribers;
          subscribers.push(subscriber);
          this.setState({
              subscribers: subscribers,
          });
        });

        mySession.on('streamDestroyed', (event) => {
          this.deleteSubscriber(event.stream.streamManager);
        });

        mySession.on('exception', (exception) => {
          console.warn(exception);
        });

        this.getToken().then((token) => {
          mySession.connect(token, { clientData: this.state.myUserName })
            .then(async () => {
              let publisher = await this.OV.initPublisherAsync(undefined, {
                audioSource: undefined,
                videoSource: null,
                publishAudio: true,
                publishVideo: null,
              });

              mySession.publish(publisher);

              this.setState({
                mainStreamManager: publisher,
                publisher: publisher,
                isMike: true,
              });
            })
            .catch((error) => {
              console.log('There was an error connecting to the session:', error.code, error.message);
            });
        });
      },
    );
  }
  
  // getToken() {
  //   return this.createSession(this.state.mySessionId).then((sessionId) =>
  //     this.createToken(sessionId)
  //   );
  // }

  // createSession(sessionId) {
  //   return new Promise((resolve, reject) => {
  //     let data = JSON.stringify({ customSessionId: sessionId });

  //     axios
  //       .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions", data, {
  //         headers: {
  //           Authorization: `Basic ${btoa(
  //             `OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`
  //           )}`,
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       .then((res) => {
  //         resolve(res.data.id);
  //       })
  //       .catch((res) => {
  //         let error = Object.assign({}, res);

  //         if (error?.response?.status === 409) {
  //           resolve(sessionId);
  //         } else if (
  //           window.confirm(
  //             'No connection to OpenVidu Server. This may be a certificate error at "' +
  //               OPENVIDU_SERVER_URL +
  //               '"\n\nClick OK to navigate and accept it. If no certifica' +
  //               "te warning is shown, then check that your OpenVidu Server is up and running at" +
  //               ' "' +
  //               OPENVIDU_SERVER_URL +
  //               '"'
  //           )
  //         ) {
  //           window.location.assign(OPENVIDU_SERVER_URL + "/accept-certificate");
  //         }
  //       });
  //   });
  // }

  // createToken(sessionId) {
  //   return new Promise((resolve, reject) => {
  //     let data = {};

  //     axios
  //       .post(
  //         `${OPENVIDU_SERVER_URL}/openvidu/api/sessions/${sessionId}/connection`,
  //         data,
  //         {
  //           headers: {
  //             Authorization: `Basic ${btoa(
  //               `OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`
  //             )}`,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         resolve(res.data.token);
  //       })
  //       .catch((error) => reject(error));
  //   });
  // }

  async getToken() {
    const sessionId = await this.createSession(this.state.mySessionId);
    return await this.createToken(sessionId);
  }

  async createSession(sessionId) {
    const response = await axios.post(OPENVIDU_SERVER_URL + 'api/sessions', { customSessionId: sessionId }, {
      headers: { 'Content-Type': 'application/json', },
    });
    return response.data; // The sessionId
  }

  async createToken(sessionId) {
    const response = await axios.post(OPENVIDU_SERVER_URL + 'api/sessions/' + sessionId + '/connections', {}, {
      headers: { 'Content-Type': 'application/json', },
    });
    return response.data; // The token
  }
  

  leaveSession() {
    const mySession = this.state.session;

    if (mySession) {
      mySession.disconnect();
    }

    this.OV = null;
    this.setState({
      session: undefined,
      subscribers: [],
      mySessionId: undefined,
      myUserName: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
    });
  }

  deleteSubscriber(streamManager) {
    let subscribers = this.state.subscribers;
    let index = subscribers.indexOf(streamManager, 0);
    if (index > -1) {
      subscribers.splice(index, 1);
      this.setState({
        subscribers: subscribers,
      });
    }
  }

  render() {
    return (
      <div
        className={styles.layout}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${BackgroundImage})`,
        }}
      >
        <GameBoard />
        <Role />
        <LogCard />
        <input
          type={ButtonDanger}
          onClick={this.leaveSession}
          value="Leave session"
        />
        <input
          type={ButtonDanger}
          onClick={this.handleMicOnOff}
          value="Mic"
        >
          {this.state.isMike ? <MicOutlinedIcon /> : <MicOffIcon />}
        </input>
        <UserVideoComponent streamManager={this.state.publisher} />
        {this.state.subscribers.map((sub, i) => (
          <div key={i} className="stream-container col-md-6 col-xs-6">
            <UserVideoComponent streamManager={sub} />
          </div>
        ))}
      </div>
    )
  }
}

export default Game;
