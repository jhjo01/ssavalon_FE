import React, { useState } from "react";
import ErrModal from "../ui/modal/ErrorModal";
import RoomModal from "../ui/modal/RoomCreateModal";
import ButtonPrimary from "../ui/button/ButtonPrimary";
import RoomCard from "./RoomCard";
import JoinModal from "../ui/modal/RoomJoinModal";

import styles from "./Lobby.module.css";

const Lobby = () => {
    const [modal, setModal] = useState();
    const [roomInfo, setRoomInfo] = useState(null);

    const setModalHandler = (props) => {
        console.log(props);
        if (props.target !== undefined) {
            if (props.target.value === "create") {
                setModal("create");
            } else if (props.target.value === "err") {
                setModal("err");
            }
        }
        if (props.isLock === true) {
            setRoomInfo(props);
            setModal("join");
        } else {
            // 방입장
            return;
        }
    };

    const modalHandler = () => {
        setModal(null);
    };

    //dummy
    const roomList = [
        {
            isLock: false,
            roomNo: 1,
            title: "1번방",
            numOfPeople: 6,
            standby: false,
        },
        {
            isLock: false,
            roomNo: 2,
            title: "rty",
            numOfPeople: 1,
            standby: true,
        },
        {
            isLock: false,
            roomNo: 3,
            title: "jhj",
            numOfPeople: 3,
            standby: true,
        },
        {
            isLock: false,
            roomNo: 4,
            title: "cvb",
            numOfPeople: 4,
            standby: true,
        },
        {
            isLock: true,
            roomNo: 5,
            title: "asd",
            numOfPeople: 6,
            standby: false,
        },
        {
            isLock: true,
            roomNo: 6,
            title: "asd",
            numOfPeople: 3,
            standby: true,
        },
        { isLock: true, roomNo: 7, title: "df", numOfPeople: 1, standby: true },
        {
            isLock: true,
            roomNo: 8,
            title: "dd",
            numOfPeople: 6,
            standby: false,
        },
        {
            isLock: true,
            roomNo: 9,
            title: "qqw",
            numOfPeople: 3,
            standby: true,
        },
        {
            isLock: true,
            roomNo: 10,
            title: "dfg",
            numOfPeople: 6,
            standby: true,
        },
        {
            isLock: true,
            roomNo: 11,
            title: "dfg",
            numOfPeople: 3,
            standby: true,
        },
    ];

    const showRoomList = () => {
        const standby = [];
        const active = [];

        for (let i = 0; i < roomList.length; i++) {
            if (roomList[i].standby === true) {
                standby.push(
                    <RoomCard
                        key={i}
                        value="join"
                        roomInfo={roomList[i]}
                        onRoomClick={setModalHandler}
                    />
                );
            } else {
                active.push(
                    <RoomCard
                        key={i}
                        value="join"
                        roomInfo={roomList[i]}
                        onRoomClick={setModalHandler}
                    />
                );
            }
        }
        const result = [...standby, active];

        return result;
    };

    return (
        <>
            <div className={styles.createButton}>
                <ButtonPrimary value="create" onClick={setModalHandler}>
                    방만들기
                </ButtonPrimary>
            </div>

            <div className={styles.container}>{showRoomList()}</div>
            {modal === "err" && <ErrModal onConfirm={modalHandler} />}
            {modal === "create" && <RoomModal onConfirm={modalHandler} />}
            {modal === "join" && roomInfo !== null && (
                <JoinModal roomInfo={roomInfo} onConfirm={modalHandler} />
            )}
        </>
    );
};

export default Lobby;
