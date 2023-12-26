import { useState, useEffect } from "react";

import { supabase } from "./utils/client";
import Checked from "./components/Checked";
import WaitingLine from "./components/WaitingLine";
import "./styles/main.scss";

import Logo from "./assets/images/Logo.png";

export default function App() {
  const [ticket, setTicket] = useState({ ticketnumber: "", isChecked: false });
  const [tickets, setTickets] = useState([]);

  const handleOnChange = (event) => {
    setTicket(event.target.value);
  };

  async function fetchTickets() {
    const { data } = await supabase.from("tickets").select();
    setTickets(data);
    console.log(data);
  }

  const submittionTicket = localStorage.getItem("hasSubmitted");

  const createTicket = async (event) => {
    event.preventDefault();
    if (submittionTicket) return; // todo
    localStorage.setItem("hasSubmitted", true);
    await supabase
      .from("tickets")
      .insert([{ ticketnumber: ticket, isChecked: false }])
      .single();
    setTicket({ ticketnumber: "", isChecked: null });
    fetchTickets();
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <>
      <form
        method="GET"
        className={submittionTicket ? "hidden" : ""}
        onSubmit={createTicket}
      >
        <h1 className="title">Choisissez le numéro de votre ticket</h1>
        <div className="form_field">
          <input
            type="text"
            className="text_input"
            name="textinput"
            maxLength="3"
            value={ticket.ticketnumber}
            onChange={handleOnChange}
            autoComplete="off"
            pattern="[0-9]{3}"
            title="Uniquement des chiffres"
            placeholder="000"
            required
          />
        </div>
        <input type="submit" className="confirm_button" value="Confirmer" />
      </form>

      <div className="output_messages">
        <div className="message error hidden">
          This is an example of an error message.
        </div>
        <div className="message success hidden">
          This is an example of a success message.
        </div>
      </div>

      {!submittionTicket ? <Checked /> : <WaitingLine />}

      <svg
        className="svg_layout"
        width="1280"
        height="595"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 1280 595"
      >
        <g transform="translate(640,297.5) scale(-1,-1) translate(-640,-297.5)">
          <linearGradient
            id="lg-0.8773310012946122"
            x1="0"
            x2="1"
            y1="0"
            y2="0"
          >
            <stop stopColor="#ffd800" offset="0"></stop>
            <stop stopColor="#ffe449" offset="1"></stop>
          </linearGradient>
          <path d="" fill="url(#lg-0.8773310012946122)" opacity="0.56">
            <animate
              attributeName="d"
              dur="6.666666666666666s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="0s"
              values="M0 0L 0 595Q 128 452.4822666433381  256 416.9996679923306T 512 238.99933598466123T 768 60.999003976991844T 1024 -117.00132803067754T 1280 -295.0016600383469L 1280 0 Z;M0 0L 0 595Q 128 461.5197406040172  256 429.57105517823715T 512 264.1421103564743T 768 98.7131655347115T 1024 -66.71577928705142T 1280 -232.14472410881422L 1280 0 Z;M0 0L 0 595Q 128 431.32507342976936  256 399.6939580709296T 512 204.3879161418592T 768 9.081874212788762T 1024 -186.2241677162816T 1280 -381.5302096453521L 1280 0 Z;M0 0L 0 595Q 128 452.4822666433381  256 416.9996679923306T 512 238.99933598466123T 768 60.999003976991844T 1024 -117.00132803067754T 1280 -295.0016600383469L 1280 0 Z"
            ></animate>
          </path>
          <path d="" fill="url(#lg-0.8773310012946122)" opacity="0.56">
            <animate
              attributeName="d"
              dur="6.666666666666666s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-2.222222222222222s"
              values="M0 0L 0 595Q 128 452.7896046632884  256 422.21368032123996T 512 249.42736064247987T 768 76.64104096371989T 1024 -96.14527871504026T 1280 -268.9315983938002L 1280 0 Z;M0 0L 0 595Q 128 462.7447157730298  256 437.4373270293776T 512 279.87465405875525T 768 122.31198108813294T 1024 -35.25069188248949T 1280 -192.8133648531118L 1280 0 Z;M0 0L 0 595Q 128 465.6881795630269  256 423.7740015267857T 512 252.5480030535714T 768 81.32200458035709T 1024 -89.90399389285722T 1280 -261.1299923660715L 1280 0 Z;M0 0L 0 595Q 128 452.7896046632884  256 422.21368032123996T 512 249.42736064247987T 768 76.64104096371989T 1024 -96.14527871504026T 1280 -268.9315983938002L 1280 0 Z"
            ></animate>
          </path>
          <path d="" fill="url(#lg-0.8773310012946122)" opacity="0.56">
            <animate
              attributeName="d"
              dur="6.666666666666666s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-4.444444444444444s"
              values="M0 0L 0 595Q 128 440.5613026714126  256 404.7983571988806T 512 214.59671439776116T 768 24.395071596641742T 1024 -165.80657120447768T 1280 -356.0082140055971L 1280 0 Z;M0 0L 0 595Q 128 428.86531090358653  256 404.8755072667815T 512 214.75101453356302T 768 24.626521800344563T 1024 -165.49797093287395T 1280 -355.6224636660925L 1280 0 Z;M0 0L 0 595Q 128 432.02830047854496  256 403.0165122992762T 512 211.03302459855234T 768 19.04953689782849T 1024 -172.9339508028953T 1280 -364.9174385036191L 1280 0 Z;M0 0L 0 595Q 128 440.5613026714126  256 404.7983571988806T 512 214.59671439776116T 768 24.395071596641742T 1024 -165.80657120447768T 1280 -356.0082140055971L 1280 0 Z"
            ></animate>
          </path>
        </g>
      </svg>
      <img
        src={Logo}
        className="form_logo"
        draggable="false"
        alt="Logo du projet"
      />
    </>
  );
}
