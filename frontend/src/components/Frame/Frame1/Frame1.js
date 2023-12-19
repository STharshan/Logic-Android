import { useCallback } from "react";
import GroupComponent3 from "../../AllGroupComponent/GroupComponent3/GroupComponent3";
import { useNavigate } from "react-router-dom";
import "./Frame1.css";

const Frame1 = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/frame1");
  }, [navigate]);

  const onSpecialClick = useCallback(() => {
    navigate("/special-contractors");
  }, [navigate]);

  const onContractorClick = useCallback(() => {
    navigate("/sub-contractors");
  }, [navigate]);

  const onSeekerClick = useCallback(() => {
    navigate("/job-seeker");
  }, [navigate]);

  const onGotohome = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="group-top">
      <div className="instance-group">
        <GroupComponent3
          choose="Choose"
          showMingcutedownFillIcon={false}
          groupDivWidth="100%"
          groupDivHeight="16.67%"
          groupDivPosition="absolute"
          groupDivTop="0%"
          groupDivRight="0%"
          groupDivBottom="83.33%"
          groupDivLeft="0%"
          groupDivCursor="unset"
          rectangleDivBorderRadius="var(--br-7xs) var(--br-7xs) 0px 0px"
          chooseHeight="39.5%"
          chooseWidth="23.53%"
          chooseFontFamily="Inter"
          chooseColor="#5e5b5b"
          chooseFontWeight="unset"
        />
        <div className="group-parent10">
          <div className="rectangle-parent68">
            <div className="group-child92" />
            <div className="categorises1">Categorises</div>
          </div>
          <div className="rectangle-parent69" onClick={onGroupContainer2Click}>
            <div className="group-child93" />
            <div className="categorises1">Rent Machines</div>
          </div>
          <div className="rectangle-parent70">
            <div className="group-child93" onClick={onSpecialClick} />
            <div className="categorises1">Special Contractors</div>
          </div>
          <div className="rectangle-parent71">
            <div className="group-child93" onClick={onContractorClick} />
            <div className="categorises1">Sub Contractors</div>
          </div>
          <div className="rectangle-parent72">
            <div className="group-child93" onClick={onSeekerClick} />
            <div className="categorises1">Job Seekers</div>
          </div>
          <img
            className="mingcutedown-fill-icon18"
            alt=""
            src="/mingcutedownfill4.svg"
          />
          <img
            className="mingcutedown-fill-icon19"
            alt=""
            src="/mingcutedownfill4.svg"
          />
          <img
            className="mingcutedown-fill-icon20"
            alt=""
            src="/mingcutedownfill4.svg"
          />
          <img
            className="mingcutedown-fill-icon21"
            alt=""
            src="/mingcutedownfill4.svg"
          />
          <img
            className="mingcutedown-fill-icon22"
            alt=""
            src="/mingcutedownfill4.svg"
          />
        </div>
      </div>
      <img
        className="mingcutedown-fill-icon23"
        alt=""
        src="/mingcutedownfill5.svg"
        onClick={onGotohome}
      />
    </div>
  );
};

export default Frame1;