import React from 'react'

export const Nav = () => {
  return (
    <>
    <div className="navabar">
        <div className="navlogo">
            <h2>ThisAI</h2>
            <h4>spoken English</h4>
        </div>
        <div className="navlist">
            <ul>
                <li>Home</li>
                <li>Components</li>
                <li>Chat</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="navbutton">
            <button><a href="">Sign In</a></button>
        </div>
    </div>
    </>
  )
}
