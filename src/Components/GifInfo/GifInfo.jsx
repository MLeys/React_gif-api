import React from "react";
import { useState } from 'react';

function GifInfo(props) {

    return (
        <div className="gif-image">
            <img src={props.gifData.image_url} alt='' />
        </div>
    )
}

export default GifInfo