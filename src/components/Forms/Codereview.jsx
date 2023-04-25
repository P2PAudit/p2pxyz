import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const urltest = "http://localhost:5000"
const urlserver = "https://p2pauditserver.vercel.app";

const Codereview = () => {
  
  const navigate = useNavigate();

  const [project, setProject] = useState("");
  const [website, setWebsite] = useState("");
  const [discord, setDiscord] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [sourcecode, setSourcecode] = useState("");
  const [budgetpreferred, setBudgetpreferred] = useState("");
  const [stateofcode, setStateofcode] = useState("");
  const [know, setKnow] = useState("");

  const [sending, setSending] = useState("Submit");
  const [tick, setTick] = useState(false);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const submitform = async (e) => {
    e.preventDefault();
    try {
      setSending("Submiting...");
      await axios.post(`${urlserver}/codereviewform`, {
        Project: project,
        Website: website,
        Discord: discord,
        Email: email,
        Twitter: twitter,
        SourceCode: sourcecode,
        Budgetpreferred: budgetpreferred,
        Stateofcode: stateofcode,
        Know: know
      })
      // .then(props.refresh)
      setProject("");
      setWebsite("");
      setDiscord("");
      setEmail("");
      setTwitter("");
      setSourcecode("");
      setBudgetpreferred("");
      setStateofcode("");
      setKnow("");
      setTick(true);
      setSending("Submitted");
      await delay(1500);
      navigate('/thankyou');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      setTick(false);
      setSending("Submit");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='form'>
      <div className="formhead">
        Request Code Review
      </div>
      <div className="formdesc">
        To get a complete security of your project, please fill out this form and join us in Discord
      </div>
      <form onSubmit={submitform}>
      <div className="inputbox">
          <div className="forminputtitle">
            Project Name *
          </div>
          <input type="text" value={project} onChange={(e) => { setProject(e.target.value) }} className="form-control" placeholder="Project Name" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Website Link * 🔗
          </div>
          <input type="url" value={website} onChange={(e) => { setWebsite(e.target.value) }} className="form-control" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Best Way to Connect with you ? *
          </div>
          <div className="forminputdesc">
            Share Your Discord or Telegram Id
          </div>
          <input type="text" value={discord} onChange={(e) => { setDiscord(e.target.value) }} className="form-control" placeholder="Auditor#1234" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Email Address *
          </div>
          <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Auditor@email.com" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Social profile link *
          </div>
          <div className="forminputdesc">
            Link Your Project's Twitter or Linkedin Profile
          </div>
          <input type="url" value={twitter} onChange={(e) => { setTwitter(e.target.value) }} className="form-control" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Please provide us with the link to your smart contracts source code? * 📚
          </div>
          <div className="forminputdesc">
            (You can share a link to any of the following: GitHub/Etherscan/Bscscan/Dropbox/GDrive (or) others.)
          </div>
          <input type="url" value={sourcecode} onChange={(e) => { setSourcecode(e.target.value) }} className="form-control" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Budget preferred (in $) *
          </div>
          <input type="number" value={budgetpreferred} onChange={(e) => { setBudgetpreferred(e.target.value) }} className="form-control" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            State of Code *
          </div>
          <select value={stateofcode} onChange={(e) => { setStateofcode(e.target.value) }} required>

            <option value="" disabled selected>Select an option</option>
            <option value="Contracts are Under development">Contracts are Under development</option>
            <option value="Contract fully developed and ready for audit">Contract fully developed and ready for audit</option>
            <option value="Any other audit performed before">Any other audit performed before</option>

          </select>
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            How did you came to know about P2PAudit? *
          </div>
          <input type="text" value={know} onChange={(e) => { setKnow(e.target.value) }} className="form-control" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <button type="submit" className="formsubmit" aria-label="Last name" ><div className="formsubmitborder"><div className="formsubmittext">{sending} {tick?<>&#10003;</>:<></>}</div></div></button>
        </div>
      </form>
    </div>
  )
}

export default Codereview;