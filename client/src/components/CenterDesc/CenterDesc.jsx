import React, { useEffect, useState } from "react";
import "./CenterDesc.scss";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MilitaryTechSharpIcon from "@mui/icons-material/MilitaryTechSharp";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { getRandom } from "../../redux/Opening/apiCalls";
import { getCompanyByID } from "../../redux/Company/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { getDateDiff } from "../../dummyData";
import Filter from "../Filter/Filter";

const CenterDesc = ({ data }) => {
  const [randomOpening, setRandomOpening] = useState(data);
  const { companyList } = useSelector((state) => state.company);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const func = async () => {
      !randomOpening && setRandomOpening(await getRandom());
      randomOpening &&
        companyList[randomOpening.company_id] === undefined &&
        dispatch(getCompanyByID(randomOpening._id));
    };
    func();
  }, [randomOpening, dispatch, companyList]);

  useEffect(() => {
    data && setRandomOpening(data);
  }, [data]);

  return (
    randomOpening &&
    companyList[randomOpening.company_id] && (
      <>
        <div className="search-container">
          <div className="search-center">
            <input type="text" />
            <SearchOutlinedIcon className="search-icon" />
          </div>
          <div className="search-right">
            <FilterAltIcon 
            className="icon"
            onClick = {(e)=>setClicked(true)}
            />

          </div>
        </div>
        <div className="centerContainer">
          <div className="title">
            <div className="icons">
              <img
                src={companyList[randomOpening.company_id].Icon}
                width={"100px"}
                alt=""
              />
            </div>
            <div className="name">
              <div className="jobtype">{randomOpening.JobName}</div>
              <div className="comp-name">
                {companyList[randomOpening.company_id].title}
              </div>
            </div>
            <div className="type">
              {companyList[randomOpening.company_id].compantType}
            </div>
          </div>
          <div className="info">
            <div className="top-details">
              <div className="details">
                <div className="centralise">
                  <div className="left">
                    <HourglassTopIcon className="icon" />
                  </div>
                  <div className="right">
                    <div className="value">{randomOpening.Duration} Months</div>
                    <div className="key">Duration</div>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="centralise">
                  <div className="left">
                    <MilitaryTechSharpIcon className="icon" />
                  </div>
                  <div className="right">
                    <div className="value">{randomOpening.timings}</div>
                    <div className="key">Experience</div>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="centralise">
                  <div className="left">
                    <AccountBalanceWalletIcon className="icon" />
                  </div>
                  <div className="right">
                    <div className="value">
                      {randomOpening.Stipend.length === 0
                        ? "Unpaid"
                        : `₹${randomOpening.Stipend.join("-₹")}`}
                    </div>
                    <div className="key">Stipend</div>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="centralise">
                  <div className="left">
                    <LocationOnIcon className="icon" />
                  </div>
                  <div className="right">
                    <div className="value">
                      {randomOpening.location.join("•")}
                    </div>
                    <div className="key">location</div>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="bottom-details">
              <div className="details">
                <div className="centralise">
                  <div className="left">
                    <CalendarMonthIcon className="icon" />
                  </div>
                  <div className="right">
                    <div className="value">
                      {`${getDateDiff(randomOpening.PostedDate)} Ago`}
                    </div>
                    <div className="key">Posted</div>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="centralise">
                  <div className="left">
                    <EventBusyIcon className="icon" />
                  </div>
                  <div className="right">
                    <div className="value">
                      {`${getDateDiff(
                        new Date().toISOString().slice(0, 10),
                        randomOpening.EndIn
                      )}`}
                    </div>
                    <div className="key">End in</div>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="centralise">
                  <div className="left">
                    <PersonAddIcon className="icon" />
                  </div>
                  <div className="right">
                    <div className="value">{randomOpening.NoOfOpenings}</div>
                    <div className="key">Open Positions</div>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="centralise">
                  <div className="left">
                    <SupervisorAccountIcon className="icon" />
                  </div>
                  <div className="right">
                    <div className="value">
                      {companyList[randomOpening.company_id].Applicant}
                    </div>
                    <div className="key">Total Applicants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            {randomOpening.skills.map((item, key) => (
              <div className="itemName" key={key}>
                {item}
              </div>
            ))}
            {/* </div> */}
          </div>
          <div className="aboutUs">
            <div className="tag">About Us</div>
            <p>{companyList[randomOpening.company_id].AboutUs}</p>
          </div>
          <div className="requirements">
            <div className="req">Requirements</div>
            <div className="req-info">
              <ul>
                {randomOpening.requirements.map((text, key) => (
                  <li key={key}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="responsibilities">
            <div className="req">Responsibilities</div>
            <div className="req-info">
              <ul>
                {randomOpening.responsibilites.map((text, key) => (
                  <li key={key}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="link">
            <a
              href={companyList[randomOpening.company_id].WebSiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit WebSite
            </a>
          </div>
        </div>
        <div className={`filterDiv ${clicked && "moveFilter"}`}>
          <Filter setClicked={setClicked}/>
        </div>
      </>
    )
  );
};

export default CenterDesc;
