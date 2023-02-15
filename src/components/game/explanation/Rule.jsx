import styles from "./Explanation.module.css";

const Rule = (props) => {
    const { ruleImg, rule } = props;

    return (
        <div className={styles.rule}>
            <div className={styles.rule_image}>
                <img src={ruleImg} alt="" />
            </div>
            <div className={styles.rule_text}>
                {rule}
            </div>
        </div>
    );
};

export default Rule;