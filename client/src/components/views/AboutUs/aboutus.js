import React from 'react';
import './aboutus.css';
function call(){
  alert("hello shyamlee");
}
function page(){
    return (
        <div>
             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="styles.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
        <div style={{backgroundColor: "#474e5d"}}><h1  className="typewriter" >ABOUT US</h1></div>
        <p className="para" >Movie App is an online database of information related to films, television series and streaming content online - including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews. The company was launched in March 2022 by Six undergraduate students at the Indian Institute of Information Technology, Lucknow: Gopal, Snehil, Shyamlee, Ashish, Sreehas, Anmol.</p>
        <div className="about-section">
          <h2 style={{textAlign: "center"}}>OUR TEAM</h2><br/>
          <div className="row">
            <div className="column">
              <div className="card">
                <img src="https://kissflow.com/wp-content/uploads/2020/12/employee-onboarding.png" alt="Jane" style={{width: "100%"}}/>
                <div className="container text-dark">
                  <h2>SHYAMLEE</h2>
                  <p className="title">FRONTEND & BACKEND</p>
                  <p>Brilliant and creative IT professional with Bachelor’s Degree in Computer Science and passionate about creating customized solutions daily working on, writing, and reviewing</p>
                  <p>LCS2021043</p>
                  <p><div className="container">
     
            
                    <button onClick={call}type="button" className="btn btn-info btn-lg" dataToggle="modal" dataTarget="#myModal" style={{width: "100%"}}>Contact</button>
                  
                    
                    <div className="modal fade" id="myModal" role="dialog">
                      <div className="modal-dialog">
                      
                       
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title" >Contact Details</h4>
                            <button type="button" className="close" dataDismiss="modal">&times;</button>
                           
                          </div>
                          <div className="modal-body">
                            <p>Phone : 9980763456</p>
                            <p>Email : shyamlee@gmail.com</p>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" dataDismiss="modal">Close</button>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    
                  </div></p>
                </div>
              </div>
            </div>
          
            <div className="column">
              <div className="card">
                <img src="https://blog.darwinbox.com/hubfs/virtual-onboarding.png" alt="Mike" style={{width: "100%"}}/>
                <div className="container text-dark">
                  <h2>ANMOL </h2>
                  <p className="title">FRONTEND</p>
                  <p>Self-motivated IT professional with deep knowledge and proficiency in JavaScript, HTML, CSS, and mobile responsive website development, as well as highly potent skills </p>
                  <p>LCS2021039</p>
                  <p><div className="container">
     
                  
                    <button type="button" className="btn btn-info btn-lg" dataToggle="modal" dataTarget="#myModal" style={{width: "100%"}}>Contact</button>
                  

                    <div className="modal fade" id="myModal" role="dialog">
                      <div className="modal-dialog">
                      
            
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title" >Contact Details</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                           
                          </div>
                          <div className="modal-body">
                            <p>Phone : 9980763456</p>
                            <p>Email : anmol@gmail.com</p>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    
                  </div>
                  </p>
                </div>
              </div>
            </div>
          
            <div className="column">
              <div className="card">
                <img src="https://blog.darwinbox.com/hubfs/virtual-onboarding.png" alt="John" style={{width: "100%"}}/>
                <div className="container text-dark">
                  <h2>GOPAL</h2>
                  <p className="title">BACKEND</p>
                  <p>Hard-working individual with proficiency in HTML, JavaScript, and CSS, as well as strong ability to communicate and work in a team effectively. A trained professional in React, JS etc.</p>
                  <p>LCS2021025</p>
                  <p><div className="container">
     
                
                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style={{width: "100%"}}>Contact</button>
                  
             
                    <div className="modal fade" id="myModal" role="dialog">
                      <div className="modal-dialog">
                      
                
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title" >Contact Details</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                           
                          </div>
                          <div className="modal-body">
                            <p>Phone : 9980763456</p>
                            <p>Email : gopalsingh@gmail.com</p>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    
                  </div></p>
                </div>
              </div>
            </div>
            <div className="column">
                <div className="card">
                  <img src="https://blog.darwinbox.com/hubfs/virtual-onboarding.png" alt="Mike" style={{width: "100%"}}/>
                  <div className="container text-dark">
                    <h2>ASHISH</h2>
                    <p className="title">FRONTEND & BACKEND</p>
                    <p>Highly skilled Information technology professional with strong experience and knowledge creating top quality, predictable and high-performance website applications, passion for building interactive experiences and proactive problem solving
                    </p>
                    <p>LCS2021016</p>
                    <p><div className="container">
     
                   
                        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style={{width: "100%"}}>Contact</button>
                      
                   
                        <div className="modal fade" id="myModal" role="dialog">
                          <div className="modal-dialog">
                          
                 
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title" >Contact Details</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                               
                              </div>
                              <div className="modal-body">
                                <p>Phone : 9980763456</p>
                                <p>Email : ashish@gmail.com</p>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        
                      </div></p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <img src="https://kissflow.com/wp-content/uploads/2020/12/employee-onboarding.png" alt="Mike" style={{width: "100%"}}/>
                  <div className="container text-dark">
                    <h2>SNEHIL</h2>
                    <p className="title">FRONTEND</p>
                    <p> Innovative, creative, and a proven team player with a Tech Degree in Front-end Development and a few years experience of building, developing, and managing websites, applications and programs, and ability in encoding virus-free and efficient code</p>
                    <p>LCS2021019</p>
                    <p><div className="container">
     
             
                        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style={{width: "100%"}}>Contact</button>
             
                        <div className="modal fade" id="myModal" role="dialog">
                          <div className="modal-dialog">
                          
                 
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title" >Contact Details</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                               
                              </div>
                              <div className="modal-body">
                                <p>Phone : 9980763456</p>
                                <p>Email : snehilgupta@gmail.com</p>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        
                      </div></p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <img src="https://blog.darwinbox.com/hubfs/virtual-onboarding.png" alt="Mike" style={{width: "100%"}}/>
                  <div className="container text-dark">
                    <h2>SREEHAS</h2>
                    <p className="title">BACKEND</p>
                    <p> A self-motivated, creative, and ambitious IT professional, and ability in encoding virus-free and efficient code, passion for building interactive experiences and proactive problem solving, adept knowledge of Object-Oriented JavaScript, React, modern JS libraries.</p>
                    <p>LCS2021040</p>
                    <p><div className="container">
     
                   
                        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style={{width: "100%"}}>Contact</button>
                      
              
                        <div className="modal fade" id="myModal" role="dialog">
                          <div className="modal-dialog">
                          
                     
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title" >Contact Details</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                               
                              </div>
                              <div className="modal-body">
                                <p>Phone : 9980763456</p>
                                <p>Email : sreehas@gmail.com</p>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        
                      </div></p>
                  </div>
                </div>
              </div>
          </div>
          </div>
          </div>
    )
}

export default page;