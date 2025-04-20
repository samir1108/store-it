import React from 'react'

const SideBar = () => {
  return (
    <div className="">
        <div>
            <div>
                <Image src={expand ? assets.logo_text:assets.log_icon} alt="logo" className="logo" onClick={toggleExpand} />
            </div>
        </div>
      
    </div>
  )
}

export default S
