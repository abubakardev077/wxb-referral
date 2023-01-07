import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { isAuth } from '../../../helper/Auth'

const Referrals = () => {
  const [data, setData] = useState(null)
  const auth = isAuth?.addressReferred

  
  return (
    <section className="tf-section login-page register-page">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="form-create-item-content">
            <div className="form-create-item">
              <div className="sc-heading">
                <h3>All Addresses referred by you</h3>
              </div>
              {auth === undefined ? 
                <div className='h5'>
                 You have not referred any address...Make sure to share your referral code to frens and fams
                </div>
                :
                <>
                  {auth?.map((user) => {
                    return(
                      
                      <div className='text-align-left'>
                         <hr />
                      <h5>You referred <b>{user.address.slice(0, 10)}...{user.address.slice(35)}</b> to mint {user.mintType}</h5>
                     
                    </div>
                    )
                  })}
                </>
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Referrals