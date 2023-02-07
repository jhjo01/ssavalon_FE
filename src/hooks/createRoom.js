// import { useEffect } from "react";
import { API_END_POINT } from "../constants";
import axios from "axios";

export const createRoom = (url, roomInfo) => {
    const title = roomInfo.enteredTitle;
    console.log(title);

    console.log(API_END_POINT + url);

    const createUrl = API_END_POINT + url;

    const data = JSON.stringify({
        title: title,
    })

    axios.post(createUrl, {name:title})
        .then((res) => {
            console.log("성공");
        })
        .catch((err) => {
            console.log(err);
        })


    return;
};
