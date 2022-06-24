import * as React from "react";
import "./Logo.css";

import { Routes, Route, Link, useParams } from "react-router-dom";
import "./Logo.css";
import { HashLink } from "react-router-hash-link";

export default function Logo() {
  return (
    <div className="logo">
      <HashLink smooth to={"/#home"}>
        <img
          id="logo"
          src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
          alt="codepath logo"
        />
      </HashLink>
    </div>
  );
}
