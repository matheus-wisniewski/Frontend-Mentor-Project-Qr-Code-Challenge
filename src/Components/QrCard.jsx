import React, { Component } from 'react';
import image from '../assets/images/image-qr-code.png'

class QrCard extends Component {
    render() {
        return (
            <div className='card'>
                <img src={ image } alt='qrcode' />

                <div className='texts'>
                    <p className='first-p'>
                        Improve your front-end skills by building projects
                    </p>
                    <p className='second-p'>
                        Scan the QR code to visit Frontend Mentor and take your coding skills 
                        to the next level
                    </p>
                </div>
            </div>
        );
    }
}

export default QrCard;