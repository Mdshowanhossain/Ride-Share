import { Button } from '@material-ui/core';
import React from 'react';
import './Destination.css'
import SearchIcon from '@material-ui/icons/Search';




const Destination = () => {
    return (
        <div className="total-div">
            <div className="destination-fil">

                <div className="input-div">
                    <p>Pick From</p>
                    <input className="inputStayle" type="text" /><br /><br />
                    <p>Pick To</p>
                    <input className="inputStayle" type="text" /><br /><br />
                    <Button variant="contained" color="primary"><SearchIcon /> Search</Button>
                </div>
            </div>
            <div className="map">
                <iframe className="mapStyle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117658.84846567354!2d89.46246177776992!3d22.8454447834434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9071cb47152f%3A0xf04b212290718952!2sKhulna!5e0!3m2!1sen!2sbd!4v1616234722899!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
            </div>

        </div>
    );
};

export default Destination;