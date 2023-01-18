import '../styles/userDasboard.css'
const UserDashboard = () => {
    return ( 
        <div className="userDashboard">

                          <div className="userhome">
            <div className="userdashbord">
                <div className="dashbord_heading">
                    <h1>Welcome to Library</h1>
                    <p>As gateways to knowledge and culture, libraries play a fundamental role in society.
                        The resources and services they offer create opportunities for learning, support
                        literacy and education, and help shape the new ideas and perspectives that are
                        central to a creative and innovative society.
                    </p>
                </div>
            </div>
            <div className="dashboardContent">
                <h1> Learning Lab </h1>
                <p>The mission of the Library’s Learning Lab is to create an environment in which  Library
                    staff and patrons can empower themselves with a practical understanding of current
                    technology
                </p>
            </div>
            <div className="linkedIn">
                <div className="linkedimage">
                    <img src="https://shr.ucsc.edu/images/ucsc-linkedin-learning.jpg" alt="" />
                </div>
                <div className="linkedCnt">
                    <h1>LinkedIn Learning</h1>
                    <p>LinkedIn Learning is an online educational site that features thousands of courses
                        and video tutorials where you can discover, complete, and track courses related to
                        your industry or interests.</p>
                </div>
            </div>

            <div className="newdiv">
            <div className="newpaper">
                <h1>Questions About the Digital Library?</h1>
                <p>Our Digital Library quick guides or video tutorials will help you access eBooks,
                    audiobooks, videos, music, and magazines from any device.</p>
            </div>

            </div>
        </div>;
        </div>
     );
}
 
export default UserDashboard;