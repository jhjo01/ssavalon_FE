import { useState, useEffect } from "react";

export const useValidSelectCard = (people) => {
    const [status, setStatus] = useState("makeJury");
    const [selectNum, setSelectNum] = useState(2);
    const [selectPeople, setSelectPeople] = useState(people);
    const [disabled, setDisabled] = useState(true);
    
    const handleSelectChange = (info) => {
        const selectedPeople = selectPeople;
        if (info.selected) {
            setSelectPeople(selectedPeople.filter(select => select.id !== info.person.id));
        } else if (selectedPeople.length < selectNum) {
            setSelectPeople(selectedPeople.concat({ ...info.person }));
        } else {
            setSelectPeople([info.person]);
        }
    };

    useEffect(() => {
        if (selectPeople.length === selectNum) {
            setDisabled(false);
        } else setDisabled(true);
    }, [selectPeople]);
    
    const handleSubmitJury = () => {
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
        selectPeople,
        disabled,
        handleSelectChange,
        handleSubmitJury,
        handleStatusChange,
    };
};