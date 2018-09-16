import React from 'react'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullCourses = () => (
  <div>
    All Courses go here
    <ul>
    {
        [1,2,3,4,5].map(p => (
        <li key={p}>
            <Link to={`/courses/${p}`}>{p}</Link>
        </li>
        ))
    }
    </ul>
  </div>
)

export default FullCourses