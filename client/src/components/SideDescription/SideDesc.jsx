import React, { useEffect, useState } from "react";
import "./SideDesc.scss";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyByID } from "../../redux/Company/apiCalls";
import { getDateDiff } from "../../dummyData";
import { AddBookMark, RemoveBookMark } from "../../redux/User/apiCalls";

const SideDesc = ({ data ,onPropChange}) => {
  const { companyList } = useSelector((state) => state.company);
  const { user } = useSelector((state) => state.user);
  const [isSelected, setIsSelected] = useState();
  const dispatch = useDispatch();


  useEffect(() => {
    if (!companyList[data.company_id])
      dispatch(getCompanyByID(data.company_id));
  }, [dispatch, companyList, data.company_id]);

  const handleAdd = ()=>{
    console.log("Called")
    dispatch(AddBookMark(data._id));
    setIsSelected(true);
  }
  const handleRemove = ()=>{
    console.log("Reovecalled")
    dispatch(RemoveBookMark(data._id));
    setIsSelected(false);
  }

  useEffect(()=>{
    setIsSelected(user && user.Bookmarks.includes(data._id))
  },[user,data._id])


  return (
    companyList[data.company_id] && (
      <div className="job-desc" onClick={(e)=>onPropChange(data)}>
        <div className="topbar">
          <div className="left">
            <div className="title">{data.JobName}</div>
            <div className="name">{companyList[data.company_id].title}</div>
          </div>
          <div className="right">
            {isSelected ? (
              <TurnedInOutlinedIcon
                onClick={handleRemove}
                className="icon"
              />
            ) : (
              <TurnedInNotOutlinedIcon
                onClick={handleAdd}
                className="icon"
              />
            )}
          </div>
        </div>
        <div className="middle">
          <div className="img">
            <img src={companyList[data.company_id].Icon} alt="" />
          </div>
          <div className="skills">
            {data.skills.slice(0, 3).map((item, key) => (
              <div className="skillName" key={key}>
                {item}
              </div>
            ))}
            {data.skills.length > 3 && (
              <div className="skillName left">+{data.skills.length - 3}</div>
            )}
          </div>
        </div>

        <div className="bottom">
          <div className="timeline">
            <HourglassTopIcon />
            <span>
              {data.Duration} {data.Duration === 1 ? "month" : "months"}
              </span>
          </div>
          <div className="stipend">
            <AccountBalanceWalletIcon />
            <span>
              {data.Stipend[0].length === 0
                ? "Unpaid"
                : `₹${data.Stipend.join(" - ₹")}`}
            </span>
          </div>
          <div className="applicant">
            <SupervisorAccountIcon />
            <span>
              {companyList[data.company_id].Applicant}

              {data.applicants > 1 ? " applicants" : " applicant"}
            </span>
          </div>
          <div className="endtime">
            <EventBusyIcon />
            <span>
              End in{" "}
              {getDateDiff(
              new Date().toISOString().split("T")[0],
              data.EndIn
            )}
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default SideDesc;
