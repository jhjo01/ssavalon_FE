import styles from "./Explanation.module.css";
import CloseIcon from "@mui/icons-material/Close";

const ChatWindow = (props) => {
    const {
        swipe,
        handleChangeSwipe,
    } = props;

    return (
        <>
        <div className={`${styles.explain} ${swipe}`}>
            <div className={styles.explain_top}>
                <h2>룰 설명</h2>
                <CloseIcon onClick={handleChangeSwipe} />
            </div>
            <div className={styles.progress}>
                <p>1. 캐릭터 카드를 랜덤으로 받는다.</p>
                <p>2. 범죄자 세력과 경찰이 정체를 확인하는 시간을 가진다.</p>
                <p>3. 랜덤으로 배심원장이 될 플레이어를 정해진다.</p>
                <p>4. 배심원장이 해당 라운드에 필요한 만큼 배심원들을 선택해 배심원단을 구성한다. 이 때 배심원장은 굳이 포함되지 않아도 상관 없다.</p>
                <p>5. 모든 플레이어는 구성된 배심원단이 재판하는 것에 대해 찬성, 반대를 투표하고 결과를 공개한다.</p>
                <p>5-1. 반대가 절반 이상이라면 배심원장이 시계방향 한칸 옆 플레이어로 넘어가고 투표 토큰이 1칸 이동한다.</p>
                <p>6. 찬성이 과반수라면 배심원들에게 유죄/무죄 카드가 한 장씩 주어진다.</p>
                <p>7. 배심원들은 유죄/무죄 카드를 선택하고 결과를 공개한다. 이때 누가 무슨 투표를 했는지는 보여지지 않는다.</p>
                <p>8. 무죄가 한 장이라도 섞여있다면 해당 재판은 무죄, 모두 유죄이라면 해당 재판은 유죄가 된다.</p>
                <p>9. 배심원장이 시계방향 한칸 옆 플레이어로 넘어가고 다음 라운드가 시작된다.</p>
                <p>10. 범죄자의 승리로 끝났다면 그대로 종료, 시민의 승리로 끝났다면 암살자는 경찰일 것 같은 사람을 선택한다. 그 사람이 경찰이라면 범죄자팀이 역전 승리한다.</p>
            </div>
        </div>
        </>
    );
};

export default ChatWindow;
