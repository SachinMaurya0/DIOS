import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <>
      <div className='sidebar'>
        <ul className='list'>
          <li class="list-items ">
            <a href="" className='anchor'>
              <span class="icon">
                <i class="fa-solid fa-house"></i>
              </span>
              <span class="title">Home</span>
            </a>
          </li>

          <li class="list-items ">
            <a href="">
              <span class="icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </span>
              <span class="title">STUDENTS</span>
            </a>
          </li>

          <li class="list-items ">
            <a href="">
              <span class="icon">
                <i class="fa-solid fa-chalkboard-user"></i>
              </span>
              <span class="title">TEACHERS</span>
            </a>
          </li>

          <li class="list-items ">
            <a href="">
              <span class="icon">
                <i class="fa-solid fa-bullhorn"></i>
              </span>
              <span class="title">ANNOUNCEMENTS</span>
            </a>
          </li>

          <li class="list-items ">
            <a href="">
              <span class="icon logout">
                <i class="fa-solid fa-right-from-bracket"></i>
              </span>
              <span class="title logout">LOGOUT</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
