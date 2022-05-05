import React from 'react'
import './Global.css'
import meImg from './../../img/img.jpg'
import { Maps } from './Maps'
export default function About({ name, profile, email, phone }) {
  return (
    <div className='about pb-5' id='about'>
      <div className='about_top'></div>
      <h1 className='text-center mt-5'>About Me</h1>
      <div className='container my-5'>
        <div className='row p-3'>
          <div className='col-lg-6 col-md-6 my-2 aboutImg'>
            <div class=" mb-3" style={{ border: "none" }}>
              <div class="row g-0 justify-content-center align-items-center">
                <div class="col-md-4 col-lg-4">
                  <img src={meImg} class="img-fluid rounded-start" alt="rasim yo'q hozircha " />
                </div>
                <div class="col-lg-8 col-md-8">
                  <div class="card-body aboutProfile">

                    <p><b>Name: </b> {name}</p>
                    <p><b>Profile: </b> {profile}</p>
                    <p><b>Email: </b> {email}</p>
                    <p><b>Phone: </b> {phone}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='' style={{ border: "none" }}>
              <h6>Skill</h6>
              <p className='mb-0 mt-3'>HTML 90%</p>
              <div className="progress">
                <div style={{ width: "90%" }} className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className='mb-0 mt-3'>CSS3 85%</p>
              <div className="progress">
                <div style={{ width: "85%" }} className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className='mb-0 mt-3'>JAVASCRIPT 75%</p>
              <div className="progress">
                <div style={{ width: "75%" }} className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className='mb-0 mt-3'>JAVASCRIPT FREMWOR REACT 80%</p>
              <div className="progress">
                <div style={{ width: "80%" }} className="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 my-5'>
            <div className=' aboutme' style={{ border: "none" }}>
              <h1>About me</h1>
              <div className='linechiziq'></div>
              <div className='mt-4'>
                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.</p>
                <p>Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}







