import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const urltest = "http://localhost:5000"
const urlserver = "https://p2pauditserver.vercel.app";

const Katanaform = () => {
  
  const navigate = useNavigate();

  const [project, setProject] = useState("");
  const [website, setWebsite] = useState("");
  const [discordtelegram, setDiscordtelegram] = useState("");
  const [email, setEmail] = useState("");
  const [sourcecode, setSourcecode] = useState("");
  const [github, setGithub] = useState("");
  const [contribute, setContribute] = useState("");
  const [know, setKnow] = useState("");

  const [sending, setSending] = useState("Submit");
  const [tick, setTick] = useState(false);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const submitform = async (e) => {
    e.preventDefault();
    try {
      setSending("Submiting...");
      await axios.post(`${urlserver}/katanaform`, {
        Project: project,
        Website: website,
        DiscordTelegram: discordtelegram,
        Email: email,
        SourceCode: sourcecode,
        Github: github,
        Contribute: contribute,
        Know: know
      })
      // .then(props.refresh)
      setProject("");
      setWebsite("");
      setDiscordtelegram("");
      setEmail("");
      setSourcecode("");
      setGithub("");
      setContribute("");
      setKnow("");
      setTick(true);
      setSending("Submitted");
      await delay(1500);
      navigate('/thankyou');
      setTick(false);
      setSending("Submit");
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='form'>
      <div className="formhead">
        P2P AuditKatana
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
            Website Link (or) any Social Link * 🔗
          </div>
          <input type="url" value={website} onChange={(e) => { setWebsite(e.target.value) }} className="form-control" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Discord Username *
          </div>
          <input type="text" value={discordtelegram} onChange={(e) => { setDiscordtelegram(e.target.value) }} className="form-control" placeholder="Auditor#1234" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Email Address *
          </div>
          <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Auditor@email.com" aria-label="Last name" required />
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
            GitHub Profile link *
          </div>
          <div className="forminputdesc">
            Used in case we need to give you access to certain repositories.
          </div>
          <input type="url" value={github} onChange={(e) => { setGithub(e.target.value) }} className="form-control" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Please describe how you can assist the P2P Audit community and what skills you possess? *
          </div>
          <input type="text" value={contribute} onChange={(e) => { setContribute(e.target.value) }} className="form-control" aria-label="Last name" required />
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

export default Katanaform;