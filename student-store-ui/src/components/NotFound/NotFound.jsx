import * as React from "react";
import "./NotFound.css";

import { Routes, Route, Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Not Found!</h1>
    </div>
  );
}
