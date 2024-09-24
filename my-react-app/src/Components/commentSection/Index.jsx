import React from "react";
import "./Index.css";
import moment from "moment";
import { useSelector } from "react-redux";

export default function Comment(props) {
  const { item } = props;
    const users = useSelector((state) => state.userLogin.userInfo.token.user);
  return (
    <>
      <div className="col-lg-10 col-md-10 col-sm-10">
        <h5 className="writer">
          {users && users._id === item.author ? users.username : ''}
        </h5>
        <p className="admin">{item.content}</p>
        <span>{moment(item.createdAt).format('llll')}</span>
      </div>
    </>
  );
}