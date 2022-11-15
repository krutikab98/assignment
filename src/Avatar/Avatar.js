import React, { useState, useEffect } from "react";
import AvatarGroups from "./AvatarGroup";
import "./Avatar.css";
import axios from "axios";

function Avatar() {
  let [loading, setLoading] = useState(true);
  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setTimeout(() => {
        setUsers(response.data);
        setLoading(false);
      }, 3000);
    });
  }, []);

  if (loading) {
    return <div className="loading"></div>;
  }
  const data = [
    users.map((d, i) => ({
      email: d.email,
      key: d.email,
      name: d.name,
      phone: d.phone,
      username: d.username,
      website: "https//" + d.website,
      href: "#",
      src:
        "https://avatars.dicebear.com/v2/avataaars/" +
        d.username +
        ".svg?options[mood][]=happy",
    })),
  ];
  return (
    <div className="App">
      <AvatarGroups data={data[0]} />
    </div>
  );
}

export default Avatar;
