import { FiClock } from "react-icons/fi";

const WaitingLine = () => {
  return (
    <section className="section_waitingticket">
      <div className="waiting_box">
        <FiClock />
        <span className="text">Waiting</span>
      </div>
      <p className="information">
        You must wait until your ticket is confirmed by someone.
      </p>
    </section>
  );
};

export default WaitingLine;
