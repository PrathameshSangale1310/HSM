import './Courses.css';
import { useNavigate } from 'react-router-dom';

function Courses() {
    const navigate = useNavigate();
    const opendesc = (id) => {
  navigate(`/hsmAcademy/courses/${id}`);
};


    return (
       <div className="course-container">
      <div className="image-sections">
        <img src="/course1.jpeg" alt="Banner" />
      </div>

      <div className="course-brief-container">
        <div className="course-image">
          <img src="https://editorial.pxcrush.net/carsales/general/editorial/ge5712669977503080533.jpg?width=1024&height=682" alt="Automotive Design" onClick={()=>opendesc('c1')} />
        </div>

        <div className="course-text">
          <h4 className="course-title">AUTOMOTIVE DESIGN & RESEARCH</h4>
          <p>
            This program enables a candidate to become skillful in Automotive Design Process,
            Sketching and Automotive Digital Sculpting. Award winning designers have created
            a curriculum for high impact Automotive Design training program. Candidates who aim
            to do higher education in Transportation Design from Universities (India or Abroad)
            can enrol in this course to create a stunning design portfolio.
          </p>
          <p className="learn-more" onClick={() => opendesc('c1')}>
            <span onClick={() => opendesc('c1')} style={{ color: '#0056b3', textDecoration: 'underline', cursor: 'pointer', fontStyle: 'normal' }}>Click here to know more…</span>
          </p>
        </div>
      </div>

      <div className="course-brief-container">
        <div className="course-image">
          <img src="/sm2.jpeg" alt="Automotive Design" onClick={()=>opendesc('c1')}/>
        </div>

        <div className="course-text">
          <h4 className="course-title">DIGITAL DESIGN + CLAY SCULPTING AND PROTOTYPING</h4>
          <p>
            This program enables a candidate to become skillful in Automotive Design Process,
            Sketching and Automotive Digital Sculpting. Award winning designers have created
            a curriculum for high impact Automotive Design training program. Candidates who aim
            to do higher education in Transportation Design from Universities (India or Abroad)
            can enrol in this course to create a stunning design portfolio.
          </p>
          <p className="learn-more">
            <span onClick={() => opendesc('c1')} style={{ color: '#0056b3', textDecoration: 'underline', cursor: 'pointer', fontStyle: 'normal' }}>Click here to know more…</span>
          </p>
        </div>
      </div>

      <div className="course-brief-container">
        <div className="course-image">
          <img src="https://cdn.prod.website-files.com/65a1b21a5fcbab501a6f2d5c/674ee56caafc86e1dceca8bc_66e320cf3c96122cfb4e0179_product%2520design.webp" alt="Automotive Design" onClick={()=>opendesc('c1')}/>
        </div>

        <div className="course-text">
          <h4 className="course-title">PRODUCT DESIGN RESEARCH AND DEVELOPMENT</h4>
          <p>
            This program enables a candidate to become skillful in Automotive Design Process,
            Sketching and Automotive Digital Sculpting. Award winning designers have created
            a curriculum for high impact Automotive Design training program. Candidates who aim
            to do higher education in Transportation Design from Universities (India or Abroad)
            can enrol in this course to create a stunning design portfolio.
          </p>
          <p className="learn-more">
            <span onClick={() => opendesc('c1')} style={{ color: '#0056b3', textDecoration: 'underline', cursor: 'pointer', fontStyle: 'normal' }}>Click here to know more…</span>
          </p>
        </div>
      </div>

      {/*<div className="courses-section">
                <div className="first-section">
                    <h2 className="section-title">Why Choose HSM Design Academy</h2>
                    <div className="description">
                        <ul>
                            <li>
                                Gain practical skills through hands-on training led by seasoned
                                professionals from the automotive industry.
                            </li>
                            <li>
                                Learn the latest techniques and tools used by top designers
                                worldwide.
                            </li>
                            <li>
                                Our close partnerships with companies like Ultraviolette
                                Automotive provide you with exclusive insight, real-world
                                projects, and the opportunity to work on cutting-edge projects.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            

            <div className='course-details'>
                <center><h4>COURSE DETAILS</h4></center>
                <div className='course-detail'>
                    <div className='course-title'>
                        <center><h2>Level 1 -Foundation</h2></center>
                    </div>
                    <div className='course-desc'>
                        <br />
                        <center><h4>Fundamentals of Transportation Design</h4></center>
                        <center><p>Duration: 3 months, 4 hours/day</p>
                            <p>Fee: ₹90,000+GST</p></center>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <div className='course-details'>
                <center><h4>COURSE DETAILS</h4></center>
                <div className='course-detail'>
                    <div className='course-title'>
                        <center><h2>Level 1 -Foundation</h2></center>
                    </div>
                    <div className='course-desc'>
                        <br />
                        <center><h4>Fundamentals of Transportation Design</h4></center>
                        <center><p>Duration: 3 months, 4 hours/day</p>
                            <p>Fee: ₹90,000+GST</p></center>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

    </div>
    );
}

export default Courses;
