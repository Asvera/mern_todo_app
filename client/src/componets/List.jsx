/* eslint-disable react/prop-types */
import axios from "axios";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { baseUrl } from "../utils/constant";

function List({ id, task, setUpdateUI, updateMode }) {

  const handleDelete = () => {
    // console.log(`Deleting task with id ${id}`);

    axios.delete(`${baseUrl}/delete/${id}`).then((res) => {
      // console.log(res);
      setUpdateUI((prevState) => !prevState);
    })
  };

  return (
    <li>
      {task}
      <div className="icon-holder">
        <BiEditAlt className="icon update-icon" onClick={() => updateMode(id, task)} />
        <BsTrash className="icon delete-icon" onClick={handleDelete} />
      </div>
    </li>
  );
}

export default List;
