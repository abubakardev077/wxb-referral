import axios from 'axios'
import React, { useEffect, useState } from 'react'




const Referrals = () => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        axios
            .get('https://wxb-referral-apis.vercel.app/api/all-users')
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


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
                                {data === undefined ?
                                    <div className='h5'>
                                        Loading information
                                    </div>
                                    :
                                    <>
                                        {data?.map((user, index) => {
                                            return (
                                                <div className='text-align-left'>
                                                    <hr />
                                                    <h5>USER {index + 1}</h5>
                                                    <h5>ADDRESS: {user.address.slice(0, 10)}...{user.address.slice(35)}</h5>
                                                    <h5>NUMBER OF REFERRALS: {user.addressReferred.length}</h5>
                                                    {user.addressReferred == [] ?
                                                        <h5>No referrals yet</h5>
                                                        :
                                                        <>
                                                            
                                                            {user.addressReferred?.map((refer) => {
                                                                return(
                                                                    <>
                                                                    <br />
                                                                    <h5>USER {index + 1} referred <b>{refer.address.slice(0, 5)}...{refer.address.slice(35)}</b> to mint {refer.mintType}</h5>
                                                                    </>
                                                                )
                                                               
                                                            })}
                                                        </>
                                                    }

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