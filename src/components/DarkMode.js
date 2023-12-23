import React from 'react'

export default function DarkMode() {
  return (
    <div>
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled/>
  <label className="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled/>
  <label className="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
    </div>
  )
}
