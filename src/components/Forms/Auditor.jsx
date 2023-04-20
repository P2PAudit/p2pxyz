import React, { useState } from 'react'
import axios from 'axios'
const urltest = "http://localhost:5000"

const Auditor = () => {

  const [username, setUsername] = useState("");
  const [timecommitment, setTimecommitment] = useState("");
  const [discord, setDiscord] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [social, setSocial] = useState("");
  const [github, setGithub] = useState("");
  const [yourself, setYourself] = useState("");
  const [contribute, setContribute] = useState("");
  const [know, setKnow] = useState("");

  const [sending, setSending] = useState("Submit");
  const [tick, setTick] = useState(false);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const submitform = async (e) => {
    e.preventDefault();
    try {
      setSending("Submiting...");
      await axios.post(`${urltest}/auditorform`, {
        Username: username,
        TimeCommitment: timecommitment,
        Discord: discord,
        Email: email,
        Twitter: twitter,
        Social: social,
        Github: github,
        Yourself: yourself,
        Contribute: contribute,
        Know: know
      })
    // .then(props.refresh)
      setUsername("");
      setTimecommitment("");
      setDiscord("");
      setEmail("");
      setTwitter("");
      setSocial("");
      setGithub("");
      setYourself("");
      setContribute("");
      setKnow("");
      setTick(true);
      setSending("Submitted");
      await delay(1500);
      setTick(false);
      setSending("Submit");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='form'>
      <div className="formhead">
        Apply as an Auditor
      </div>
      <div className="formdesc">
        To start the journey of being an Auditor, please fill out this form and join us in Discord
      </div>
      <form onSubmit={submitform}>
        <div className="inputbox">
          <div className="forminputtitle">
            Username *
          </div>
          <div className="forminputdesc">
            Choose wisely! Your username cannot be changed later.
          </div>
          <div className="forminputdesc">
            (Note: Please ensure your Username should match your Github profile name .)
          </div>
          <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} className="form-control" placeholder="Username" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            What level of time commitment are you looking for? *
          </div>
          <select value={timecommitment} onChange={(e) => { setTimecommitment(e.target.value) }} required>

            <option value="" disabled selected>Select an option</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Not sure yet">Not sure yet</option>

          </select>
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Discord Username *
          </div>
          <input type="text" value={discord} onChange={(e) => { setDiscord(e.target.value) }} className="form-control" placeholder="Auditor#1234" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Email Address *
          </div>
          <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Auditor@email.com" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Twitter/LinkedIn profile link*
          </div>
          <input type="text" value={twitter} onChange={(e) => { setTwitter(e.target.value) }} className="form-control" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Social Links(Optional)
          </div>
          <div className="forminputdesc">
            Link your Medium , Substack , etc.
          </div>
          <input type="text" value={social} onChange={(e) => { setSocial(e.target.value) }} className="form-control" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            GitHub Profile link *
          </div>
          <div className="forminputdesc">
            Used in case we need to give you access to certain repositories.
          </div>
          <input type="text" value={github} onChange={(e) => { setGithub(e.target.value) }} className="form-control" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Describe about yourself ? *
          </div>
          <input type="text" value={yourself} onChange={(e) => { setYourself(e.target.value) }} className="form-control" aria-label="Last name" required />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            How can you contribute to the P2P Audit community? What skillset can you offer? *
          </div>
          <input type="" value={contribute} onChange={(e) => { setContribute(e.target.value) }} className="form-control" aria-label="Last name" required />
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

export default Auditor;