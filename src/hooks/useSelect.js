import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { submitJury } from "../apis/selectCard";

export const useValidSelectCard = (people) => {
    const [status, setStatus] = useState("makeJury");
    // const [open, setOpen] = useState(false);
    const [selectNum, setSelectNum] = useState(2);
    const [selectPeople, setSelectPeople] = useState(people);
    const [disabled, setDisabled] = useState(true);
    const nickname = useSelector((state) => {
        return state.user.nickname;
    });
    const roomId = useSelector((state) => {
        return state.roomAndActive.roomId;
    });
    
    const handleSelectChange = (info) => {
        const selectedPeople = selectPeople;
        if (info.selected) {
            setSelectPeople(selectedPeople.filter(select => select !== info.person.name));
        } else if (selectedPeople.length < selectNum) {
            setSelectPeople(selectedPeople.concat(info.person.name));
        } else {
            setSelectPeople([info.person.name]);
        }
    };

    useEffect(() => {
        if (selectPeople.length === selectNum) {
            setDisabled(false);
        } else setDisabled(true);
    }, [selectPeople]);
    
    const handleSubmitJury = () => {
        // const res = submitJury(roomId, nickname, selectPeople);
        // if (res.status === 200) {
        //     return;
        // }
        // setOpen(false);
        setSelectPeople([]);
    }

    const handleStatusChange = (stat, round) => {
        setStatus(stat);
        if (stat === "makeJury" && round === 1) {
            setSelectNum(2);
        } else if (stat === "makeJury" && (round === 2 || round === 4)) {
            setSelectNum(3);
        } else if (stat === "makeJury" && (round === 3 || round === 5)) {
            setSelectNum(4);
        } else if (stat === "winCitizen") {
            setSelectNum(1);
        }
    }

    return {
        // open,
        selectPeople,
        disabled,
        handleSelectChange,
        handleSubmitJury,
        handleStatusChange,
    };
};