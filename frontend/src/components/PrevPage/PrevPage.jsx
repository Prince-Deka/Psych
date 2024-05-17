import React from 'react'
import PrevStyle from './PrevPage.module.css'
import { FaFileImage } from 'react-icons/fa';
import { FaCameraRetro } from 'react-icons/fa';



const PrevPage = () => {
    return (
        <>
            <div className={PrevStyle.prevpageContainer}>
                <div className={PrevStyle.uploadOption}>
                    <div className={PrevStyle.uploadContainer}>
                        <div className={PrevStyle.borderContainer}>
                            <div className={PrevStyle.icons}>
                                <FaFileImage className={PrevStyle.imageFileIcon} size={80} />
                            </div>
                            <input type="file" id="file-upload" style={{ display: "none" }} /> {/* Hidden input for file selection */}
                            <label htmlFor="file-upload">
                                <p>
                                    Drag and drop files here, or <span className={PrevStyle.browseLink}>browse</span> your computer.
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
                <button className={PrevStyle.cameraOption}>
                    <div className={PrevStyle.icons}>
                    <FaCameraRetro className={PrevStyle.cameraFileIcon} size={80} /> 
                    </div>
                    <p>OPEN CAMERA</p>
                </button>
            </div>
        </>
    )
};
export default PrevPage;