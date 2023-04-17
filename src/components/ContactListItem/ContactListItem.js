import css from "./ContactListItem.module.css"
const ContactListItem = ({name, number, deleteButton }) => {
  
return (<li>{name} {number} <button className={css.delete} type="submit" onClick={deleteButton} name={name}>Delete</button></li>)
}
 
export default ContactListItem;