import * as React from "react"
import "./Logo.css"

import { Routes, Route, Link, useParams} from 'react-router-dom'

export default function Logo() {

  return (
    <div className="logo">
        

        <a href="/">
          <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="codepath logo" />
        </a>
    </div>
  )
}




        