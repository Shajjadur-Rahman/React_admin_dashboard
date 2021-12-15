import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import './profile.css'
import profile_img from '../../assets/images/profile.jpg'
import Modal from '../../UI/modal/Modal'
import Form from '../../components/form/Form'
import UpdateProfile from './updateProfile/UpdateProfile'

const Profile = props => {
    useEffect(() => {
        document.title = "Your profile"
    }, [])
    const [modalOpen, setModalOpen] = useState(false)
    const history = useHistory()
    const back = () => history.goBack()

    return (

            <>
                <Modal show={modalOpen}>
                    <Form  title='Update Profile' hide={setModalOpen}>
                        <UpdateProfile hide={setModalOpen}/>
                    </Form>
                </Modal>
                <div className='user__profile__wrapper'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='user__profile__img__wrapper'>
                                <div className='user__profile__img'>
                                    <img src={profile_img} alt='Profile_image'/>
                                </div>
                                <div className='user__profile__text' style={{display: 'none'}}>
                                    <h3>Shjjad</h3>
                                    <h4>Full stack developer</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='user__profile__content'>
                        <h1>Shajjad Sumon</h1>

                            <h2>BIO</h2>
                            <p>
                            Why do we use it?

                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                       
                            <div className='user__profile_conatcs'>
                                <h3><i className="fas fa-phone"></i> Mobile : 01785259895</h3>
                                <h3><i className="fas fa-tty"></i> Tele-phone : None</h3>
                                <h3><i className="fab fa-facebook-f"></i> Facebook : <a href='https://www.facebook.com/Shajjad143'>View profile</a></h3>
                                <h3><i className="fab fa-linkedin-in"></i> Link Din : <a href='https://www.facebook.com/Shajjad143'>View profile</a></h3>
                                <h3><i className="fab fa-instagram"></i> Instagrame : <a href='https://www.facebook.com/Shajjad143'>View profile</a></h3>
                            </div>
                            <div className='user__profile_btns'>
                                <div className='user__btn_wrapper'>
                                    <button className="custom_btn btn__primary" onClick={() => back()}>Back</button>
                                    <button className="custom_btn btn__info" onClick={() => setModalOpen(true)}>Update</button>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </>
    )
}

export default Profile
