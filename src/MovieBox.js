import { Modal,Button } from 'react-bootstrap'
import React, { useState } from 'react'
// import { Card } from 'react-bootstrap';
const IMAGES_API = "https://image.tmdb.org/t/p/w500/"

const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {
    const [show,setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return (
        <div className='card text-center bg-secondary mb-3 mt-3'>
            <div className='card-body'>
                <img className='card-img-top' src={IMAGES_API + poster_path} alt="not found" />
                <div className='card-body'>
                    <button type='button' className='btn btn-dark' onClick={handleShow}>View More</button>
                    <Modal show={show} onHide={handleClose}>
                       <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                       </Modal.Header>
                       <Modal.Body>
                       <img className='card-img-top' src={IMAGES_API + poster_path} style={{width:'14rem'}} alt="not found" />
                       <h3>{title}</h3>
                       <h4>ImDb:{vote_average}</h4>
                       <h5>Release Date:{release_date}</h5>
                       <br></br>
                       <h6>OverView</h6>
                       <p>{overview}</p>
                       </Modal.Body>
                       <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>close</Button>
                       </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox
