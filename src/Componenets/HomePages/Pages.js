import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Pages.css";
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";
import { Link } from "react-router-dom";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;
export default function Pages() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#0078ff");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

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

  const lastIndaxOf = page * perPage;
  const firstIndexOf = lastIndaxOf - perPage;
  const postData = todos.slice(firstIndexOf, lastIndaxOf);

  const numbers = [];
  for (let i = 1; i <= todos.length / perPage; i++) {
    numbers.push(i);
  }

  const pageClick = (number) => {
    setPage(number);
  };

  const nextClick = () => {
    setPage(page + 1);
  };
  const prevClick = () => {
    setPage(page - 1);
  };
  return (
    <div className="page">
      <div className="container my-4">
        <h6>
          <Link to='/'>Bosh sahifa</Link>
        </h6>
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
                    {postData.map((item) => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
              <div className="my-3">
                <div className="my-5">
                  <ul className="pagination w-100 d-flex justify-content-center">
                    <li
                      className={
                        numbers[0] === page ? "page-item disabled" : "page-item"
                      }
                    >
                      <a className="page-link" href="#3" onClick={prevClick}>
                        prev
                      </a>
                    </li>
                    {numbers.map((number) => (
                      <li
                        className={
                          page === number ? "page-item active" : "page-item"
                        }
                      >
                        <a
                          className="page-link "
                          href="#2"
                          onClick={() => pageClick(number)}
                        >
                          {number}
                        </a>
                      </li>
                    ))}
                    <li
                      className={
                        numbers[numbers.length - 1] === page
                          ? "page-item disabled"
                          : "page-item "
                      }
                    >
                      <a className="page-link" href="#3" onClick={nextClick}>
                        next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
