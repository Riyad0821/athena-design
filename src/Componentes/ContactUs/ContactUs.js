import React from 'react';
import coverImage from '../../resources/20 [Converted]@2x.png';

const ContactUs = () => {
    return (
        <div className="backgroundImgStyle mt-3">
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                          <img src={coverImage} className="img-fluid imageSizing" alt="coverImage"/>
                    </div>
                    <div className="col-md-5 pt-5">
                        <h1 className="pt-5">Stay Running & Project</h1>
                        <p className="textStyle pt-3">It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of
                        using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letter.</p>
                        <button className="btn btn-info px-4 btnStyle">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;