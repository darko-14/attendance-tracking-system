import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

const CameraCapture: React.FC<{ onCapture: (image: Float32Array) => void }> = ({ onCapture }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = '/models';

            await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
            await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
            await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
        };

        loadModels();
        startCamera();
    }, []);

    const startCamera = async () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                try {
                    await videoRef.current?.play();
                } catch (err: any) {
                    if (err.name !== "AbortError") {
                        console.error(err);
                    }
                }
            }
        }
    };

    const captureImage = async () => {

        if (canvasRef.current && videoRef.current) {
            const detections = await faceapi
                .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks().withFaceDescriptor();

            console.log('detections', detections);
            if (!detections) return alert("No face detected");

            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
                const imageData = canvasRef.current.toDataURL('image/png');
                onCapture(detections.descriptor);
                stopCamera();
            }
        }
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
    };

    return (
        <div>
            <video ref={videoRef} width="400" height="300" autoPlay muted />
            <button onClick={captureImage}>Capture</button>
            <canvas ref={canvasRef} width="400" height="300" style={{ display: 'none' }} />
        </div>
    );
};

export default CameraCapture;