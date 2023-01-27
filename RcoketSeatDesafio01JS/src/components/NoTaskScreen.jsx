import { FaClipboardList } from "react-icons/fa";

import styles from "./NoTaskScreen.module.css";

export function NoTaskScreen() {
    return(
        <div className={styles.mainContainer}>
            <FaClipboardList size={50}/>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}