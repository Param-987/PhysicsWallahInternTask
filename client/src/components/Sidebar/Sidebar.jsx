import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import SideDesc from "../SideDescription/SideDesc";
import { getAllOpening } from "../../redux/Opening/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ onPropChange }) => {
  const { openingList , showingList } = useSelector((state) => state.opening);
  const [isActive, setIsActive] = useState(0);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    openingList.length === 0 && dispatch(getAllOpening());
  }, [dispatch,openingList]);

  // const [list,setList] = useState([])
  console.log(showingList,openingList)
  const [list,setList] = useState(showingList || [])

  console.log(showingList)






  useEffect(()=>{
    if(isActive === 0) setList(showingList);
    else if(isActive === 1) setList([...showingList.sort((a,b)=> {return new Date(b.PostedDate)- new Date(a.PostedDate)})])
    else setList([...showingList.filter(({ _id }) => user.Bookmarks.includes(_id))])
  },[isActive,showingList,user.Bookmarks])

  list.length && console.log(list)


  return (
    openingList.length && (
      <div className="SideContainer">
        <div className="search-left">
          <div
            className={`options ${isActive === 0 && "active"}`}
            onClick={() => {
              setIsActive(0);
            }}
          >
            Popular
          </div>
          <div
            className={`options ${isActive === 1 && "active"}`}
            onClick={() => {
              setIsActive(1);
            }}
          >
            Newest
          </div>
          <div
            className={`options ${isActive === 2 && "active"}`}
            onClick={() => {
              setIsActive(2);
            }}
          >
            Bookmark
          </div>
        </div>

          <div className="sidebar">
            {
              list.length ? 
                list.map((data, key) => (
              <SideDesc data={data} key={key} onPropChange={onPropChange}/>
            )):
    (<h4>No Opening Found</h4>)
          }
          </div>
      </div>
    )
  )
};

export default Sidebar;
