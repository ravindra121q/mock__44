import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
import axios from "axios";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://mock-4-nx73r8gdl-ravindra121q.vercel.app/posts`, {
        params: { _sort: "number", _order: "desc" },
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>Dashboard</h1>
      <div>
        <h1>Top Scorer</h1>
        <div>
          {user.length >= 0 &&
            user.map((e) => {
              return <h3>{e.name}</h3>;
            })}
        </div>
      </div>
    </div>
  );
};
