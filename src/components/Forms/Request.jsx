import React from 'react'

const Request = () => {
  return (
    <div className='form'>
      <div className="formhead">
        Request a Quote for Audit
      </div>
      <div className="formdesc">
        To get a complete security of your project, please fill out this form and join us in Discord
      </div>
      <form>
        <div className="inputbox">
          <div className="forminputtitle">
            Project Name
          </div>
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" placeholder="Username" aria-label="Last name" />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Website Link (or) any Social Media handles? 🔗
          </div>
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" placeholder="Username" aria-label="Last name" />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Discord Username *
          </div>
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" placeholder="Auditor#1234" aria-label="Last name" />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Email Address *
          </div>
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" placeholder="Auditor@email.com" aria-label="Last name" />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Twitter/LinkedIn profile link*
          </div>
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" aria-label="Last name" />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Social Links(Optional)
          </div>
          <div className="forminputdesc">
            Link your Medium , Substack , etc.
          </div>
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" aria-label="Last name" />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Please provide us with the link to your smart contracts source code? 📚
          </div>
          <div className="forminputdesc">
            (You can share a link to any of the following: GitHub/Etherscan/Bscscan/Dropbox/GDrive (or) others.)
          </div>
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" aria-label="Last name" />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            GitHub Profile link *
          </div>
          <div className="forminputdesc">
            Used in case we need to give you access to certain repositories.
          </div>
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" aria-label="Last name" />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Please describe how you can assist the P2P Audit community and what skills you possess.
          </div>
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" aria-label="Last name" />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            How did you came to know about P2PAudit? *
          </div>
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" aria-label="Last name" />
        </div>
      </form>
    </div>
  )
}

export default Request;