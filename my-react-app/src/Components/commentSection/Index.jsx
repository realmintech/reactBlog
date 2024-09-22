import React from "react";
import "./Index.css";
import moment from "moment";
import { useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Comment(props) {
  const { item } = props;
    const users = useSelector((state) => state.userLogin.userInfo.token.user);
  return (
    <>
      <div className="col-lg-10 col-md-10 col-sm-10">
        <h6 className="writer">
          Author:
          {users && users._id === item.author ? users.username : ''}
        </h6>
        <p className="admin">{item.content}</p>
        <span>{moment(item.createdAt).format('llll')}</span>
        <span>
          <FaTrash />
        </span>
        <span>
          <FaEdit />
        </span>
      </div>
    </>
  );
}