import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Sil
      </button>
    </li>
  );
};

export default Contact;