import React from "react";
import User from "../assets/UI-Containers-User.png";

export default function Messengers({ badges }) {
  return (
    <div className="messengers">
      <div className="messenger__info">
        <img src={User} alt="user" className="messenger__user__img" />
        <div className="status__badges live"></div>
        <div className="messenger__name">Francesca Metts</div>
      </div>
      {badges ? <div className="messages__badge">{badges}</div> : null}
    </div>
  );
}
