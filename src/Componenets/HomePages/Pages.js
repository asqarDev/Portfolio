import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Pages.css";
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;
export default function Pages() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#0078ff");

  const getTodos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error");
      });
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="page">
      <div className="container my-4">
        <h2 className="text-center">Pagination page</h2>
        <div className="row">
          <div className="col">
            <div className="my-4">
              <table className="table table-striped table-hover">
                <thead>
                  <tr className="tableTr">
                    <th className="tableId">Id</th>
                    <th>Title</th>
                  </tr>
                </thead>
                {loading ? (
                  <div className="py-5 d-flex justify-content-center align-items-center">
                    <div class="spinner-border text-primary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <tbody className="tbody">
                      {todos.map(item=>(
                          <tr>
                              <td>{item.id}</td>
                              <td>{item.title}</td>
                          </tr>
                      ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
