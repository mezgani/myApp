import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Blink from  "react-blink-text";
import Footer from './Footer';


const About = () => {
return(
<div>
    <UserInfo name="Mezgani Ali" mail="ali.mezgani@icloud.com" mobile="00212644179451" image="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" 
    object="alamatoka" message="alamatoka">
    </UserInfo>
    <Footer />
</div>
);
};



function UserInfo(props) {

    return (
        <><Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/">TheFork</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/costumers">Costumers</Nav.Link>
              <Nav.Link href="/about"><b>About</b></Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>

              {/*
<NavDropdown title="User actions" id="basic-nav-dropdown">
<NavDropdown.Item href="#action/3.1">Append a restaurent</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">
Edit a restaurent
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Update a restaurent</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
Delete
</NavDropdown.Item>
</NavDropdown>
*/}

            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="/user">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
      </Navbar><div className="vw-100 vh-50 primary-color d-flex align-items-center justify-content-center" align="Justify">
          <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
              <h1 className="display-9 top-buffer">About Recipes</h1>
              <p className="lead1">
                A curated list of recipes and restaurents for the best homemade meal and delicacies.
              </p>
              <br></br><hr></hr>
              <div className="py-5m">
                <main className="containerm">
                  After the STS-51-G mission, Lucid was assigned to Capsule Communicator (CAPCOM) duty. She served as the CAPCOM for the STS-51-J mission in October 1985,[42] the STS-61-A mission in November 1985,[43] STS-61-B mission in November and December 1985,[44] and the STS-61-C mission in January 1986.[45] The January 1986 Space Shuttle Challenger disaster later that month halted Space Shuttle operations for 32 months while NASA conducted investigations and remediation. Flight crews were stood down. One consequence of the disaster was the Galileo project, an unmanned probe to Jupiter, which lost both its launch window and its ride due to the cancelation of the Shuttle-Centaur project.[46]

                  On November 30, 1988, NASA announced that Galileo would be deployed by the Space Shuttle Atlantis on the STS-34 mission, which was scheduled for October 12, 1989. The mission was commanded by Donald E. Williams, with pilot Michael J. McCulley and Lucid, Ellen S. Baker and Franklin Chang-Diaz as mission specialists.[47] The launch was delayed for five days due to a faulty Space Shuttle main engine controller, and then for an additional day due to bad weather. Atlantis lifted off from KSC on October 18.[48]

                  As the lead mission specialist, Lucid was primarily responsible for the Galileo spacecraft,[49] and initiated its deployment by pressing a button to separate Galileo from Atlantis.[50] Galileo was successfully deployed six and a half hours into the flight using the Inertial Upper Stage (IUS). As this was much less powerful than the Shuttle-Centaur upper stage, Galileo had to employ a gravity assist from Venus and two from Earth, and it took six years instead of two for the Galileo to reach Jupiter.[49][48] "Both Ellen and I sighed a great sigh of relief, because we figured Galileo was not our concern at that point, because we'd gotten rid of it," Lucid reported. "Happiness was an empty payload bay and we got happier and happier as the IUS and Galileo went further away from us."[51]

                  The mission also conducted a five-day Shuttle Solar Backscatter Ultraviolet (SSBUV) experiment carried in the cargo bay, and experiments related to growth hormone crystal distribution (GHCD) and polymer morphology (PM), a sensor technology experiment (STEX), a mesoscale lightning experiment (MLE), a Shuttle Student Involvement Program (SSIP) experiment that investigated ice crystal formation in zero gravity, and a ground-based Air Force Maui Optical Station (AMOS) experiment. Lucid and Chang-Diaz operated the PM experiment, which used a laptop computer to collect two gigabytes of data from an infrared spectrometer to study the effects of microgravity on minerals. The crew filmed their activities with an IMAX camera. The mission completed 79 orbits of the Earth, traveling 3.2 million kilometers (2 million miles) in 119 hours and 39 minutes before landing at Edwards Air Force Base on October 23.[48][52]

                </main><br></br>
                <main className="containerm">
                  After the STS-51-G mission, Lucid was assigned to Capsule Communicator (CAPCOM) duty. She served as the CAPCOM for the STS-51-J mission in October 1985,[42] the STS-61-A mission in November 1985,[43] STS-61-B mission in November and December 1985,[44] and the STS-61-C mission in January 1986.[45] The January 1986 Space Shuttle Challenger disaster later that month halted Space Shuttle operations for 32 months while NASA conducted investigations and remediation. Flight crews were stood down. One consequence of the disaster was the Galileo project, an unmanned probe to Jupiter, which lost both its launch window and its ride due to the cancelation of the Shuttle-Centaur project.[46]

                  On November 30, 1988, NASA announced that Galileo would be deployed by the Space Shuttle Atlantis on the STS-34 mission, which was scheduled for October 12, 1989. The mission was commanded by Donald E. Williams, with pilot Michael J. McCulley and Lucid, Ellen S. Baker and Franklin Chang-Diaz as mission specialists.[47] The launch was delayed for five days due to a faulty Space Shuttle main engine controller, and then for an additional day due to bad weather. Atlantis lifted off from KSC on October 18.[48]

                  As the lead mission specialist, Lucid was primarily responsible for the Galileo spacecraft,[49] and initiated its deployment by pressing a button to separate Galileo from Atlantis.[50] Galileo was successfully deployed six and a half hours into the flight using the Inertial Upper Stage (IUS). As this was much less powerful than the Shuttle-Centaur upper stage, Galileo had to employ a gravity assist from Venus and two from Earth, and it took six years instead of two for the Galileo to reach Jupiter.[49][48] "Both Ellen and I sighed a great sigh of relief, because we figured Galileo was not our concern at that point, because we'd gotten rid of it," Lucid reported. "Happiness was an empty payload bay and we got happier and happier as the IUS and Galileo went further away from us."[51]

                  The mission also conducted a five-day Shuttle Solar Backscatter Ultraviolet (SSBUV) experiment carried in the cargo bay, and experiments related to growth hormone crystal distribution (GHCD) and polymer morphology (PM), a sensor technology experiment (STEX), a mesoscale lightning experiment (MLE), a Shuttle Student Involvement Program (SSIP) experiment that investigated ice crystal formation in zero gravity, and a ground-based Air Force Maui Optical Station (AMOS) experiment. Lucid and Chang-Diaz operated the PM experiment, which used a laptop computer to collect two gigabytes of data from an infrared spectrometer to study the effects of microgravity on minerals. The crew filmed their activities with an IMAX camera. The mission completed 79 orbits of the Earth, traveling 3.2 million kilometers (2 million miles) in 119 hours and 39 minutes before landing at Edwards Air Force Base on October 23.[48][52]

                </main><br></br>
                <p>
                  After the STS-51-G mission, Lucid was assigned to Capsule Communicator (CAPCOM) duty. She served as the CAPCOM for the STS-51-J mission in October 1985,[42] the STS-61-A mission in November 1985,[43] STS-61-B mission in November and December 1985,[44] and the STS-61-C mission in January 1986.[45] The January 1986 Space Shuttle Challenger disaster later that month halted Space Shuttle operations for 32 months while NASA conducted investigations and remediation. Flight crews were stood down. One consequence of the disaster was the Galileo project, an unmanned probe to Jupiter, which lost both its launch window and its ride due to the cancelation of the Shuttle-Centaur project.[46]

                  On November 30, 1988, NASA announced that Galileo would be deployed by the Space Shuttle Atlantis on the STS-34 mission, which was scheduled for October 12, 1989. The mission was commanded by Donald E. Williams, with pilot Michael J. McCulley and Lucid, Ellen S. Baker and Franklin Chang-Diaz as mission specialists.[47] The launch was delayed for five days due to a faulty Space Shuttle main engine controller, and then for an additional day due to bad weather. Atlantis lifted off from KSC on October 18.[48]

                  As the lead mission specialist, Lucid was primarily responsible for the Galileo spacecraft,[49] and initiated its deployment by pressing a button to separate Galileo from Atlantis.[50] Galileo was successfully deployed six and a half hours into the flight using the Inertial Upper Stage (IUS). As this was much less powerful than the Shuttle-Centaur upper stage, Galileo had to employ a gravity assist from Venus and two from Earth, and it took six years instead of two for the Galileo to reach Jupiter.[49][48] "Both Ellen and I sighed a great sigh of relief, because we figured Galileo was not our concern at that point, because we'd gotten rid of it," Lucid reported. "Happiness was an empty payload bay and we got happier and happier as the IUS and Galileo went further away from us."[51]

                  The mission also conducted a five-day Shuttle Solar Backscatter Ultraviolet (SSBUV) experiment carried in the cargo bay, and experiments related to growth hormone crystal distribution (GHCD) and polymer morphology (PM), a sensor technology experiment (STEX), a mesoscale lightning experiment (MLE), a Shuttle Student Involvement Program (SSIP) experiment that investigated ice crystal formation in zero gravity, and a ground-based Air Force Maui Optical Station (AMOS) experiment. Lucid and Chang-Diaz operated the PM experiment, which used a laptop computer to collect two gigabytes of data from an infrared spectrometer to study the effects of microgravity on minerals. The crew filmed their activities with an IMAX camera. The mission completed 79 orbits of the Earth, traveling 3.2 million kilometers (2 million miles) in 119 hours and 39 minutes before landing at Edwards Air Force Base on October 23.[48][52]

                </p><br></br>
                <p>
                  After the STS-51-G mission, Lucid was assigned to Capsule Communicator (CAPCOM) duty. She served as the CAPCOM for the STS-51-J mission in October 1985,[42] the STS-61-A mission in November 1985,[43] STS-61-B mission in November and December 1985,[44] and the STS-61-C mission in January 1986.[45] The January 1986 Space Shuttle Challenger disaster later that month halted Space Shuttle operations for 32 months while NASA conducted investigations and remediation. Flight crews were stood down. One consequence of the disaster was the Galileo project, an unmanned probe to Jupiter, which lost both its launch window and its ride due to the cancelation of the Shuttle-Centaur project.[46]

                  On November 30, 1988, NASA announced that Galileo would be deployed by the Space Shuttle Atlantis on the STS-34 mission, which was scheduled for October 12, 1989. The mission was commanded by Donald E. Williams, with pilot Michael J. McCulley and Lucid, Ellen S. Baker and Franklin Chang-Diaz as mission specialists.[47] The launch was delayed for five days due to a faulty Space Shuttle main engine controller, and then for an additional day due to bad weather. Atlantis lifted off from KSC on October 18.[48]

                  As the lead mission specialist, Lucid was primarily responsible for the Galileo spacecraft,[49] and initiated its deployment by pressing a button to separate Galileo from Atlantis.[50] Galileo was successfully deployed six and a half hours into the flight using the Inertial Upper Stage (IUS). As this was much less powerful than the Shuttle-Centaur upper stage, Galileo had to employ a gravity assist from Venus and two from Earth, and it took six years instead of two for the Galileo to reach Jupiter.[49][48] "Both Ellen and I sighed a great sigh of relief, because we figured Galileo was not our concern at that point, because we'd gotten rid of it," Lucid reported. "Happiness was an empty payload bay and we got happier and happier as the IUS and Galileo went further away from us."[51]

                  The mission also conducted a five-day Shuttle Solar Backscatter Ultraviolet (SSBUV) experiment carried in the cargo bay, and experiments related to growth hormone crystal distribution (GHCD) and polymer morphology (PM), a sensor technology experiment (STEX), a mesoscale lightning experiment (MLE), a Shuttle Student Involvement Program (SSIP) experiment that investigated ice crystal formation in zero gravity, and a ground-based Air Force Maui Optical Station (AMOS) experiment. Lucid and Chang-Diaz operated the PM experiment, which used a laptop computer to collect two gigabytes of data from an infrared spectrometer to study the effects of microgravity on minerals. The crew filmed their activities with an IMAX camera. The mission completed 79 orbits of the Earth, traveling 3.2 million kilometers (2 million miles) in 119 hours and 39 minutes before landing at Edwards Air Force Base on October 23.[48][52]

                </p><br></br>
                <p>
                  After the STS-51-G mission, Lucid was assigned to Capsule Communicator (CAPCOM) duty. She served as the CAPCOM for the STS-51-J mission in October 1985,[42] the STS-61-A mission in November 1985,[43] STS-61-B mission in November and December 1985,[44] and the STS-61-C mission in January 1986.[45] The January 1986 Space Shuttle Challenger disaster later that month halted Space Shuttle operations for 32 months while NASA conducted investigations and remediation. Flight crews were stood down. One consequence of the disaster was the Galileo project, an unmanned probe to Jupiter, which lost both its launch window and its ride due to the cancelation of the Shuttle-Centaur project.[46]

                  On November 30, 1988, NASA announced that Galileo would be deployed by the Space Shuttle Atlantis on the STS-34 mission, which was scheduled for October 12, 1989. The mission was commanded by Donald E. Williams, with pilot Michael J. McCulley and Lucid, Ellen S. Baker and Franklin Chang-Diaz as mission specialists.[47] The launch was delayed for five days due to a faulty Space Shuttle main engine controller, and then for an additional day due to bad weather. Atlantis lifted off from KSC on October 18.[48]

                  As the lead mission specialist, Lucid was primarily responsible for the Galileo spacecraft,[49] and initiated its deployment by pressing a button to separate Galileo from Atlantis.[50] Galileo was successfully deployed six and a half hours into the flight using the Inertial Upper Stage (IUS). As this was much less powerful than the Shuttle-Centaur upper stage, Galileo had to employ a gravity assist from Venus and two from Earth, and it took six years instead of two for the Galileo to reach Jupiter.[49][48] "Both Ellen and I sighed a great sigh of relief, because we figured Galileo was not our concern at that point, because we'd gotten rid of it," Lucid reported. "Happiness was an empty payload bay and we got happier and happier as the IUS and Galileo went further away from us."[51]

                  The mission also conducted a five-day Shuttle Solar Backscatter Ultraviolet (SSBUV) experiment carried in the cargo bay, and experiments related to growth hormone crystal distribution (GHCD) and polymer morphology (PM), a sensor technology experiment (STEX), a mesoscale lightning experiment (MLE), a Shuttle Student Involvement Program (SSIP) experiment that investigated ice crystal formation in zero gravity, and a ground-based Air Force Maui Optical Station (AMOS) experiment. Lucid and Chang-Diaz operated the PM experiment, which used a laptop computer to collect two gigabytes of data from an infrared spectrometer to study the effects of microgravity on minerals. The crew filmed their activities with an IMAX camera. The mission completed 79 orbits of the Earth, traveling 3.2 million kilometers (2 million miles) in 119 hours and 39 minutes before landing at Edwards Air Force Base on October 23.[48][52]

                </p>
                <p>
                  After the STS-51-G mission, Lucid was assigned to Capsule Communicator (CAPCOM) duty. She served as the CAPCOM for the STS-51-J mission in October 1985,[42] the STS-61-A mission in November 1985,[43] STS-61-B mission in November and December 1985,[44] and the STS-61-C mission in January 1986.[45] The January 1986 Space Shuttle Challenger disaster later that month halted Space Shuttle operations for 32 months while NASA conducted investigations and remediation. Flight crews were stood down. One consequence of the disaster was the Galileo project, an unmanned probe to Jupiter, which lost both its launch window and its ride due to the cancelation of the Shuttle-Centaur project.[46]

                  On November 30, 1988, NASA announced that Galileo would be deployed by the Space Shuttle Atlantis on the STS-34 mission, which was scheduled for October 12, 1989. The mission was commanded by Donald E. Williams, with pilot Michael J. McCulley and Lucid, Ellen S. Baker and Franklin Chang-Diaz as mission specialists.[47] The launch was delayed for five days due to a faulty Space Shuttle main engine controller, and then for an additional day due to bad weather. Atlantis lifted off from KSC on October 18.[48]

                  As the lead mission specialist, Lucid was primarily responsible for the Galileo spacecraft,[49] and initiated its deployment by pressing a button to separate Galileo from Atlantis.[50] Galileo was successfully deployed six and a half hours into the flight using the Inertial Upper Stage (IUS). As this was much less powerful than the Shuttle-Centaur upper stage, Galileo had to employ a gravity assist from Venus and two from Earth, and it took six years instead of two for the Galileo to reach Jupiter.[49][48] "Both Ellen and I sighed a great sigh of relief, because we figured Galileo was not our concern at that point, because we'd gotten rid of it," Lucid reported. "Happiness was an empty payload bay and we got happier and happier as the IUS and Galileo went further away from us."[51]

                  The mission also conducted a five-day Shuttle Solar Backscatter Ultraviolet (SSBUV) experiment carried in the cargo bay, and experiments related to growth hormone crystal distribution (GHCD) and polymer morphology (PM), a sensor technology experiment (STEX), a mesoscale lightning experiment (MLE), a Shuttle Student Involvement Program (SSIP) experiment that investigated ice crystal formation in zero gravity, and a ground-based Air Force Maui Optical Station (AMOS) experiment. Lucid and Chang-Diaz operated the PM experiment, which used a laptop computer to collect two gigabytes of data from an infrared spectrometer to study the effects of microgravity on minerals. The crew filmed their activities with an IMAX camera. The mission completed 79 orbits of the Earth, traveling 3.2 million kilometers (2 million miles) in 119 hours and 39 minutes before landing at Edwards Air Force Base on October 23.[48][52]

                </p>
              </div>
            </div>
          </div>
        </div></>

       
      );
   
};


  export default About; 
  