import React, { useRef, useState } from "react";
import Select from "react-select";
import "./Filter.scss";

import {
  ApplicantMarks,
  CategoryOptions,
  DurationMarks,
  LocationOptions,
  SkillsOptions,
  StipendMarks,
  customStyles,
  handleCheckboxChange,
} from "../../dummyData";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Slider from "@mui/material/Slider";
import Slider from '@mui/material/Slider';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { filterOpenings } from "../../redux/Opening/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Filter = ({ setClicked }) => {
  const { openingList } = useSelector((state) => state.opening);
  const { companyList } = useSelector((state) => state.company);
  const dispatch = useDispatch()
  const [allSel, setAllSel] = useState({
    timings: [],
    type: [],
  });
  const skillRef = useRef(null), categoryRef = useRef(null), locationRef = useRef(null);


  const handleClear = () => {
    skillRef.current.setValue([]);
    categoryRef.current.setValue([]);
    locationRef.current.setValue([]);
    setAllSel({timings: [],type: [],});
  };

  const handleFilter = () => {
    dispatch(filterOpenings(allSel, openingList, companyList));
    setClicked(false)
  };

  return (
    <div className="filter-container">
      <div className="top">
        <div className="title">Filters</div>
        <div className="cross">
          <CloseOutlinedIcon
            style={{ fontSize: "17px", cursor: "pointer" }}
            onClick={() => setClicked(false)}
          />
        </div>
      </div>
      <div className="filterOptions">
        <div className="tokens">
          <div className="label" htmlFor="">
            Category
          </div>
          <Select
            options={CategoryOptions}
            isMulti
            styles={customStyles}
            ref={categoryRef}
            onChange={(selected) =>
              setAllSel({
                ...allSel,
                category: selected.map((items) => items.value),
              })
            }
          />
        </div>
        <div className="tokens">
          <div className="label" htmlFor="">
            Skills
          </div>
          <Select
            options={SkillsOptions}
            isMulti
            styles={customStyles}
            ref={skillRef}
            onChange={(selected) =>
              setAllSel({
                ...allSel,
                skills: selected.map((items) => items.value),
              })
            }
          />
        </div>
        <div className="tokens">
          <div className="label" htmlFor="">
            Timings
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value="Part Time"
                  checked={allSel.timings.includes("Part Time")}
                  onChange={(e) =>
                    handleCheckboxChange(e, "timings", setAllSel)
                  }
                />
              }
              label="Part Time"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="Full Time"
                  checked={allSel.timings.includes("Full Time")}
                  onChange={(e) =>
                    handleCheckboxChange(e, "timings", setAllSel)
                  }
                />
              }
              label="Full Time"
            />
          </FormGroup>
        </div>
        <div className="tokens">
          <div className="label" htmlFor="">
            Type
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value="Work From Home"
                  onChange={(e) => handleCheckboxChange(e, "type", setAllSel)}
                  checked={allSel.type.includes("Work From Home")}
                />
              }
              label="Work From Home"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="In Office"
                  onChange={(e) => handleCheckboxChange(e, "type", setAllSel)}
                  checked={allSel.type.includes("In Office")}
                />
              }
              label="In Office"
            />
          </FormGroup>
        </div>

        <div className="tokens">
          <div className="label" htmlFor="">
            Duration(Months)
          </div>
          {/* <Slider
            getAriaLabel={() => "Minimum distance"}
            value={allSel.dur}
            onChange={handleDur}
            valueLabelDisplay="auto"
            marks={DurationMarks}
            min={1}
            step={1}
            max={6}
            disableSwap
          /> */}
          <Slider
            aria-label="Temperature"
            value={allSel.dur || 0}
            onChange={(e,newValue)=>setAllSel({...allSel,dur:newValue})}
            valueLabelDisplay="auto"
            step={1}
            marks={DurationMarks}
            min={1}
            max={6}
          />
        </div>

        <div className="tokens">
          <div className="label" htmlFor="">
            Location
          </div>
          <Select
            options={LocationOptions}
            isMulti
            styles={customStyles}
            ref={locationRef}
            onChange={(selected) =>
              setAllSel({
                ...allSel,
                location: selected.map((items) => items.value),
              })
            }
          />
        </div>

        <div className="tokens">
          <div className="label" htmlFor="">
            Stipend
          </div>
          {/* <Slider
            getAriaLabel={() => "Minimum distance"}
            value={allSel.stip}
            onChange={handleSti}
            valueLabelDisplay="auto"
            marks={StipendMarks}
            min={StipendMarks[0].value}
            step={5}
            max={StipendMarks.slice(-1)[0].value}
            disableSwap
          /> */}
          <Slider
            aria-label="Temperature"
            value={allSel.stip || 0}
            onChange={(e,newValue)=>setAllSel({...allSel,stip:newValue})}
            valueLabelDisplay="auto"
            step={5}
            marks={StipendMarks}
            min={StipendMarks[0].value}
            max={StipendMarks.slice(-1)[0].value}
          />
        </div>
        <div className="tokens">
          <div className="label" htmlFor="">
            Applicants
          </div>
          {/* <Slider
            getAriaLabel={() => "Minimum distance"}
            value={allSel.app}
            onChange={handleApp}
            valueLabelDisplay="auto"
            marks={ApplicantMarks}
            min={1}
            step={1}
            max={250}
            disableSwap
          /> */}
          <Slider
            aria-label="Temperature"
            value={allSel.app || 0}
            onChange={(e,newValue)=>setAllSel({...allSel,app:newValue})}
            valueLabelDisplay="auto"
            step={10}
            marks={ApplicantMarks}
            min={ApplicantMarks[0].value}
            max={ApplicantMarks.slice(-1)[0].value}
          />
        </div>
      </div>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>
          Clear All
        </button>
        <button className="apply" onClick={handleFilter}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
