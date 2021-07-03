import React from 'react'
import './HtmlSampleNav.css'
import * as BiIcon from 'react-icons/bi'
import * as AiIcon from 'react-icons/ai'
import * as IoIcon from 'react-icons/io5'
import * as BsIcon from 'react-icons/bs'


function HtmlSampleNav() {
    return (
        <div className="content">
            <div className='sidenav'>
                <div className="company-logo"><img src="Images/logo.JPG" />
                    <div className="icons">
                        <div className="student-icon">
                            <AiIcon.AiOutlineUser fontSize="25px" />
                            <p>Students</p>
                        </div>

                        <div className="book-icon">
                            <BiIcon.BiBook fontSize="25px" />
                            <p className="lesson">Lesson Plan</p>
                        </div>

                        <div className="settings">
                            <IoIcon.IoSettingsOutline fontSize="25px" />
                            <p>Settings</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-details">
                <div className="video-icon">  <BsIcon.BsFillCaretLeftFill /> </div>
                  <div className="videos"> <h4>Videos</h4> </div>
                     <input className="input" type="url" placeholder="Insert URL here" />
                         <h4>or</h4>
                            <div className="pic">Upload</div>
                      </div>
                  </div>
               )
           }

export default HtmlSampleNav
