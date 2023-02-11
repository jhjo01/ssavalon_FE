import { useState, useEffect } from "react";

export const useValidSelectCard = (people) => {
    const [status, setStatus] = useState("makeJury");
    const [selectNum, setSelectNum] = useState(2);
    const [selectPeople, setSelectPeople] = useState(people);
    const [disabled, setDisabled] = useState(true);
    const handleSelectChange = (info) => {
        const selectedPeople = selectPeople;
        if (info.selected) {
            setSelectPeople({
                selectedPeople: selectedPeople.filter(select => select.id !== info.person.id)
            });
        } else if (selectedPeople.length < selectNum) {
            setSelectPeople({
                selectedPeople: selectedPeople.concat({ ...info.person })
            });
        } else {
            setSelectPeople([info.person]);
            console.log(selectPeople);
        }
    };

    const handleSubmitJury = () => {

    }

    return {
        disabled,
        handleSelectChange,
        handleSubmitJury,
    };
};