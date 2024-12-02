import React from 'react'

const ContactDetails = ({contact}) => {
    // console("AA raha hai")
  return (
     <div className='flex flex-col items-start gap-1'>
        <h2 className="font-medium"> <span className='font-medium'> Name : </span> {contact.name}</h2>
        <p><span className='font-medium'>Email : </span> {contact.email}</p>
        <p><span className='font-medium'>Contact No :</span> {contact.number}</p>
        <div className='flex'>
          <h5 className='font-medium'>Address: </h5> 
          <div className='break-all items-start'>   {contact.address}
          </div>
        </div>
    </div>

  )
}

export default ContactDetails
