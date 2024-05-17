import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';



function Home() {
    const webcamRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [result, setResult] = useState('');
    const [darkTheme, setDarkTheme] = useState(false);

    const capture = () => {
        const imgSrc = webcamRef.current.getScreenshot();
        setImageSrc(imgSrc);
    };

    const retake = () => {
        setImageSrc(null);
        setResult('');
    };

    const analyze = async () => {
        if (imageSrc) {
            const blob = await fetch(imageSrc).then(res => res.blob());
            const formData = new FormData();
            formData.append('file1', blob, 'image.jpg');

            // https://psychpredictserver.onrender.com/predict for hosted
            // http://127.0.0.1:5000/predict for running in loca
            // http://13.127.222.108/predict for aws

            try {
                const response = await fetch('http://13.127.222.108/predict', {
                    
                    method: 'POST',
                    body: formData  // Do not set 'Content-Type' header, let the browser set it
                });
                const data = await response.json();
                setResult(`Emotion: ${data.emotion}`);
            } catch (error) {
                console.error('Error during analysis:', error);
                setResult('Error: Unable to connect to server.');
            }
        }
    };

    return (
        <div className={`App ${darkTheme ? 'dark' : 'light'}`}>
            <div className="container">
                <button onClick={() => setDarkTheme(!darkTheme)} className="toggle-theme">
                    {darkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                </button>
                {!imageSrc ? (
                    <>
                        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
                        <button onClick={capture} className="capture">Capture</button>
                    </>
                ) : (
                    <>
                        <img src={imageSrc} alt="Captured" className="preview" />
                        <button onClick={retake} className="retake">Retake</button>
                        <button onClick={analyze} className="analyze">Analyze</button>
                    </>
                )}
                <div className="result">{result}</div>
            </div>
        </div>
    );
}

export default Home