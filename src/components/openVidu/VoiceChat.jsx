import { OpenVidu } from 'openvidu-browser';
import axios from 'axios';
import React, { Component } from 'react';
import UserVideoComponent from './UserVideoComponent';
import { OPENVIDU_SERVER_URL, OPENVIDU_SERVER_SECRET } from "../../constants/index"
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';


class VoiceChat extends Component {
    constructor(props) {
        super(props);
        // console.log(props.roomId);
        this.state = {
            // mySessionId: props.info.sessionId,
            mySessionId: props.roomId,
            // myUserName: props.info.userName,
            myUserName: 'Participant' + Math.floor(Math.random() * 100),
            session: undefined,
            mainStreamManager: undefined,
            publisher: undefined,
            subscribers: [],
            isMike: true,
            isTalking: false,
        };

        this.joinSession = this.joinSession.bind(this);
        this.leaveSession = this.leaveSession.bind(this);
        this.onbeforeunload = this.onbeforeunload.bind(this);
        this.handleMicOnOff = this.handleMicOnOff.bind(this);
    }

    componentDidMount() {
        this.joinSession();
        window.addEventListener('beforeunload', this.onbeforeunload);
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.onbeforeunload);
    }

    onbeforeunload(event) {
        this.leaveSession();
    }

    handleMicOnOff() {
        this.setState({ isMike: !this.state.isMike }, () => {
            this.state.publisher.publishAudio(this.state.isMike);
        });
    };

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

                mySession.on('publisherStartSpeaking', () => {
                    this.setState({ isTalking: true });
                });
                
                mySession.on('publisherStopSpeaking', () => {
                    this.setState({ isTalking: false });
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
                                isTalking: false,
                            });
                        })
                        .catch((error) => {
                            console.log('There was an error connecting to the session:', error, error.message);
                        });
                });
            },
        );
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
            mySessionId: 'SessionA',
            myUserName: 'Participant' + Math.floor(Math.random() * 100),
            mainStreamManager: undefined,
            publisher: undefined
        });
    }

    render() {
        return (
            <div className="container">
                {this.state.session !== undefined ? (
                    <div id="session">
                        <div id="session-header">
                            <input
                                className="btn btn-large btn-danger"
                                type="button"
                                id="buttonLeaveSession"
                                onClick={this.leaveSession}
                                value="Leave session"
                            />
                            <input
                                type="button"
                                id="buttonLeaveSession"
                                onClick={this.handleMicOnOff}
                            >
                                {this.state.isMike? <MicIcon /> : <MicOffIcon />}
                            </input>
                        </div>
                        
                        <div id="video-container" className="col-md-6">
                            {this.state.publisher !== undefined ? (
                                <div className="stream-container col-md-6 col-xs-6">
                                    <UserVideoComponent
                                        streamManager={this.state.publisher}
                                        isTalking={this.state.isTalking}
                                    />
                                </div>
                            ) : null}
                            {this.state.subscribers.map((sub, i) => (
                                <div key={i} className="stream-container col-md-6 col-xs-6">
                                    <UserVideoComponent
                                        streamManager={sub}
                                        isTalking={this.state.isTalking}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }

    async getToken() {
        const sessionId = await this.createSession(this.state.mySessionId);
        return await this.createToken(sessionId);
    }

    createSession(sessionId) {
        return new Promise((resolve, reject) => {
            let data = JSON.stringify({ customSessionId: sessionId });
        
            axios
                .post(OPENVIDU_SERVER_URL + "/api/sessions", data, {
                    headers: {
                        Authorization: `Basic ${btoa(
                            `OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`
                        )}`,
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((res) => {
                    let error = Object.assign({}, res);
            
                    if (error?.response?.status === 409) {
                        resolve(sessionId);
                    } else if (
                        window.confirm(
                        'No connection to OpenVidu Server. This may be a certificate error at "' +
                            OPENVIDU_SERVER_URL +
                            '"\n\nClick OK to navigate and accept it. If no certifica' +
                            "te warning is shown, then check that your OpenVidu Server is up and running at" +
                            ' "' +
                            OPENVIDU_SERVER_URL +
                            '"'
                        )
                    ) {
                        window.location.assign(OPENVIDU_SERVER_URL + "/accept-certificate");
                    }
                });
        });
    }
    
    createToken(sessionId) {
        return new Promise((resolve, reject) => {
            let data = {};

            axios
                .post(
                    `${OPENVIDU_SERVER_URL}/api/sessions/${sessionId}/connections`,
                    data,
                    {
                    headers: {
                        Authorization: `Basic ${btoa(
                            `OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`
                        )}`,
                        "Content-Type": "application/json",
                    },
                    }
                )
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error)
                });
        });
    }
}

export default VoiceChat;
