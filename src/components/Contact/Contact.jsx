import { useDispatch, useSelector } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhoneSquare } from "react-icons/fa";
import { deleteContact } from "../../redux/operations";
import { selectIsLoading } from "../../redux/selectors";

export const Contact = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(item.id));

  const loading = useSelector (selectIsLoading)
  return (
    <li className={css.card} id={item.id}>
      <div>
        <div className={css.userWrap}>
          <FaUser className={css.icon} />
          <p>{item.name}</p>
        </div>
        <div className={css.userWrap}>
          <FaPhoneSquare className={css.icon} />
          <p>{item.number}</p>
        </div>
      </div>
      { <button onClick={handleDelete} className={css.dltBtn} disabled={loading}>
        Delete
      </button> }
    </li>
  );
};
