import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import moment from 'moment';
import { deleteAllNotifies, isReadNotify, NOTIFY_TYPES } from '../redux/actions/notifyAction';

const NotifyModal = () => {
    const { auth, notify } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleIsRead = (msg) => {
      dispatch(isReadNotify({msg, auth}));
    };

    const handleDeleteAll = () => {
      const newArr = notify.data.filter(item => item.isRead === false)
      if(newArr.length === 0) return dispatch(deleteAllNotifies(auth.token))

      if(window.confirm(`You have ${newArr.length} unread notifications.Do you want to delete all notifications?`)){
        return dispatch(deleteAllNotifies(auth.token))
      }
    };

    const handleSound = () => {
      dispatch({type: NOTIFY_TYPES.UPDATE_SOUND, payload: !notify.sound });
    };

    return (
      <div className="mt-1" style={{ minWidth: "300px" }}>
        <div className="d-flex justify-content-between align-items-center px-3 mb-2">
          <h6 style={{ margin: 0, fontWeight: 600, color: "var(--text-main)", fontSize: "0.95rem" }}>Notifications</h6>
          {notify.sound ? (
            <i
              className="fas fa-bell text-danger"
              style={{ fontSize: "1rem", cursor: "pointer" }}
              onClick={handleSound}
            />
          ) : (
            <i
              className="fas fa-bell-slash text-danger"
              style={{ fontSize: "1rem", cursor: "pointer" }}
              onClick={handleSound}
            />
          )}
        </div>
        <hr className="mt-1 mb-2" style={{ borderColor: "var(--border-color)" }} />
        {notify.data.length === 0 && (
          <span className="text-muted w-100 text-center" style={{ display: "block", padding: "12px", fontSize: "0.85rem" }}>
            No Notifications
          </span>
        )}
        <div style={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}>
          {notify.data.map((msg, index) => (
            <div className="px-2 mb-3" key={index}>
              <Link
                to={`${msg.url}`}
                style={{ textDecoration: "none" }}
                className="d-flex text-dark align-items-center"
                onClick={() => handleIsRead(msg)}
              >
                <Avatar src={msg.user.avatar} size="big-avatar" />

                <div className="flex-fill mx-1">
                  <div style={{ fontSize: "0.9rem" }}>
                    <strong className="mr-1">{msg.user.username}</strong>
                    <span>{msg.text}</span>
                  </div>
                  {msg.content && <small style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{msg.content.slice(0, 20)}...</small>}
                </div>
                <div style={{ width: "30px" }}>
                  {msg.image && <Avatar src={msg.image} size="medium-avatar" />}
                </div>
              </Link>
              <small className="text-muted d-flex justify-content-between px-2" style={{ fontSize: "0.75rem" }}>
                {moment(msg.createdAt).fromNow()}
                {!msg.isRead && <i className="fas fa-circle color-c1" />}
              </small>
            </div>
          ))}
        </div>
        <hr className="my-1" />
        <div
          className="text-end my-auto me-2 text-danger"
          style={{ cursor: "pointer", fontSize: "0.85rem", padding: "4px 8px" }}
          onClick={handleDeleteAll}
        >
          Delete All
        </div>
      </div>
    );
}

export default NotifyModal
