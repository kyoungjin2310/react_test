import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/styled/Layout";

const Main = () => {
  return (
    <Layout title="코딩 과제" className="main">
      <>
        <ul>
          <li>
            <Link to="/inputFile">inputFile</Link>
          </li>
          <li>
            <Link to="/accordion">아코디언</Link>
          </li>
          <li>
            <Link to="/timepicker">Timepicker</Link>
          </li>
          <li>
            <Link to="/datepicker">날짜 선택</Link>
          </li>
        </ul>
      </>
    </Layout>
  );
};

export default Main;
