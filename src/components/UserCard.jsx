import React from "react";

const UserCard = ({user}) => {
  return (
    <article>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <hr />
      <ul>
        <li>
          {" "}
          <span>Email: </span>
          {user.email}
        </li>
        <li>
          {" "}
          <span>Birthday</span> <i className="bx bx-gift"></i>
          {user.birthday}
        </li>
      </ul>
      <hr />
      <footer>
        <button>
          <i className="bx bx-trash"></i>
        </button>
        <button>
          <i className="bx bx-pencil"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
