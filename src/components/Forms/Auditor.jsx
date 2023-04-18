import React from 'react'

const Auditor = () => {
  return (
    <div className='form'>
      <div className="formhead">
        Apply as an Auditor
      </div>
      <div className="formdesc">
        To start the journey of being an Auditor, please fill out this form and join us in Discord
      </div>
      <form>
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
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" placeholder="Username" aria-label="Last name" />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            What level of time commitment are you looking for? *
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
            GitHub Profile link *
          </div>
          <div className="forminputdesc">
            Used in case we need to give you access to certain repositories.
          </div>
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" aria-label="Last name" />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            Describe about yourself ? *
          </div>
          <input type="text" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" aria-label="Last name" />
        </div>
        <div className="inputbox">
          <div className="forminputtitle">
            How can you contribute to the P2P Audit community? What skillset can you offer? *
          </div>
          <input type="" /*value={lastname} onChange={(e) => { setLastname(e.target.value) }}*/ className="form-control" aria-label="Last name" />
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

export default Auditor;