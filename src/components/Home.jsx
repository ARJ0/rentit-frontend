import React from 'react'
import { Link } from 'react-router-dom'
import PaymentsIcon from '@mui/icons-material/Payments';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ChatIcon from '@mui/icons-material/Chat';
import TourIcon from '@mui/icons-material/Tour';

function Home() {
  return (
    <>
      <div className='page home'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .2 }}
      >
        <div className="top flex-col hero" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/3d-crane-against-sunset-sky_1048-7298.jpg?w=1480&t=st=1708613815~exp=1708614415~hmac=3e72256cd084605c203c148a255627ab8a5c83a998ba530fd13e246c8975092e)` }}> 
        {/* image source : url - https://www.freepik.com/free-photo/3d-crane-against-sunset-sky_1594716.htm#query=crane%20banner&position=0&from_view=search&track=ais&uuid=274c1463-efb9-4a3e-a6ab-3db9945a4b55 */}
          <h1>
            Get The Goods that You need
          </h1>
          <Link className='brand-bg text-white exploreBtn' to='/explore'>
            Explore Now
          </Link>
        </div>
        <div className="bottom">
          <h2>Featured Products</h2>
          <div className="why flex">
            <div class="card" style={{"width": "18rem"}}>
              <div class="card-body">
              <img class="card-img-top" src="https://img.freepik.com/free-photo/logistic-center-with-forklift_23-2148902599.jpg?w=1380&t=st=1708614165~exp=1708614765~hmac=a4f88686f034df5675fc04c90ead6837333ced14cf44dca94577265a57165d04" alt="Card image cap" />
              {/* image source : url - https://www.freepik.com/free-photo/logistic-center-with-forklift_13291114.htm#query=forklift&position=20&from_view=search&track=sph&uuid=4845b341-667e-456f-87de-3b68c74fc652 */}
                <p class="card-text mt-5">Forklift</p>
              </div>
            </div>
            <div class="card" style={{"width": "18rem"}}>
              <div class="card-body">
              <img class="card-img-top" src="https://img.freepik.com/free-photo/heavy-excavator-digging-day-light_23-2149194835.jpg?w=1380&t=st=1708614325~exp=1708614925~hmac=bb6d1d467f538c52c59784f3999f55b15b682efffd5eb008f981bedbb79771fd" alt="Card image cap" />
                {/* image source : url - https://www.freepik.com/free-photo/heavy-excavator-digging-day-light_20828280.htm#query=jcb&position=28&from_view=search&track=ais&uuid=e21fe950-3584-41e2-8c91-49bb32683260 */}
                <p class="card-text mt-5">Heavy Excavator</p>

              </div>
            </div>
            <div class="card" style={{"width": "18rem"}}>
              <div class="card-body">
              <img class="card-img-top" src="https://img.freepik.com/free-photo/full-shot-man-construction-site_23-2148751969.jpg?w=1380&t=st=1708614466~exp=1708615066~hmac=69bff5aaa55d4c43b265ca6008e219ea52f9faa62e6b5fdba01e126bd4b45e98" alt="Card image cap" />
              {/* image source : url - https://www.freepik.com/free-photo/full-shot-man-construction-site_11106646.htm#page=2&query=Road%20roller&position=16&from_view=search&track=ais&uuid=ecf8c2e7-4485-4ca1-b040-8e482772a51f */}
                <p class="card-text mt-5">Road Roller</p>

              </div>
            </div>
          </div>


        </div>
        <div className="bottom">
          <h2>Why Borrowing instead of purchasing ?</h2>
          <div className="why flex">
            <div className="card yellow">
              <PaymentsIcon sx={{ fontSize: 70 }} />

              <b>No initial costs</b>
              <p>
                Renting a product means you don't have to pay the money for purchasing it. Means you dont have to make initial investment.
              </p>
            </div>

            <div className="card yellow">
              <EngineeringIcon sx={{ fontSize: 70 }} />

              <b>No Maintenance costs</b>
              <p>
                After Purchasing a product you may need to maintain it, if you are having it for a long time. But by renting it you can save some of that pennies.
              </p>
            </div>

            <div className="card yellow">
              <PrecisionManufacturingIcon sx={{ fontSize: 70 }} />

              <b>For Trial purpose</b>
              <p>
                If You want a product just to try out then Renting it can be an easy way than directly purchasing it.
              </p>
            </div>


          </div>


          <h2>How it works ?</h2>
          <div className="how flex">


            <div className="card green">
              <TravelExploreIcon sx={{ fontSize: 70 }} />

              <b>Find the product you need</b>
              <p>
                Search for the product on this platform.

              </p>
            </div>

            <div className="card green">
              <ChatIcon sx={{ fontSize: 70 }} />

              <b>Chat with renter</b>
              <p>
                Chat or Send a request to product owner in order to assign that product to you.
              </p>
            </div>

            <div className="card green">
              <TourIcon sx={{ fontSize: 70 }} />

              <b>Use it for your need</b>
              <p>
                Collect the product from the owner and use it for your need.
              </p>
            </div>

          </div>


        </div>

      </div>
    </>
  )
}

export default Home
