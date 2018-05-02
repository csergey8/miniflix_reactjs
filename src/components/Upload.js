import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

class Upload extends Component {

    uploadWidget = () => {
        window.cloudinary.openUploadWidget(
            { cloud_name: 'dyxyl4lpx',
              upload_preset: 'x2gsxo82',
              tags: ['miniflix'],
              sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
            },
            function(error, result) {
                console.log("This is result of the last upload", result);
            });
    }


    render() {
        return (
            <div>
                <Nav />
                <h3 className="text-center">Upload your 20-second video in a Jiffy</h3>
                <hr />

                <div className="col-sm-12">
                    <div className="jumbotron text-center">
                        <button onClick={this.uploadWidget}className="btn btn-lg btn-info">Upload Video</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Upload;