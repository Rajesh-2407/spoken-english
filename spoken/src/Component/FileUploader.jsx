import React, { useState } from "react";
import img1 from '../assets/file.png'
import "./FileUploader.css"; // Import CSS file


const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [showUploadBox, setShowUploadBox] = useState(false); // Show/Hide Upload Box
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleUpload = () => {
        if (!file) return;
        setUploading(true);
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploading(false);
                    setShowUploadBox(false);
                    setFile(null);
                    setPreviewUrl(null);
                    return 100;
                }
                return prev + 10;
            });
        }, 300);
    };


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        setFile(selectedFile);

        // Create preview URL
        const url = URL.createObjectURL(selectedFile);
        setPreviewUrl(url);
    };

    const handlePreview = () => {
        if (previewUrl) {
            window.open(previewUrl, "_blank"); // Opens file preview in a new tab
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        setPreviewUrl(null);
        setUploading(false);
        setProgress(0);
    };


    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
            setPreviewUrl(URL.createObjectURL(droppedFile));
        }
    };

    return (
       
        <div className="container" id="fileupload">
            <div className="cont">
                {/* Show Upload Box Button */}
                <button className="upload-btn" onClick={() => setShowUploadBox(true)}>
                    Upload File
                </button>
            </div>

            {/* Upload Box (Shown only when showUploadBox is true) */}
            {showUploadBox && (
                <div className="upload-box">
                    <div className="upload-header">
                        <h3>Upload File</h3>
                        <button className="close-btn" onClick={() => setShowUploadBox(false)}>✖</button>
                    </div>

                    <div
                        className="drop-area"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                    >
                        Drag & Drop files here or
                        <input type="file" onChange={handleFileChange} className="file-input" />
                    </div>

                    {file && (
                        <div className="file-details">
                            <p>
                                <strong>Name:</strong>{" "}
                                <span className="file-link" onClick={handlePreview}>
                                    {file.name}
                                </span>
                            </p>
                            <p><strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>

                            {/* Image Preview */}
                            {previewUrl && file.type.startsWith("image/") && (
                                <img src={previewUrl} alt="Preview" className="file-preview" />
                            )}

                            {/* PDF Preview */}
                            {previewUrl && file.type === "application/pdf" && (
                                <embed src={previewUrl} type="application/pdf" width="100%" height="200px" />
                            )}
                            <br />
                            {/* Upload Button */}
                            {!uploading ? (
                                <button className="upload-btn" onClick={handleUpload}>
                                    Upload File
                                </button>
                            ) : (
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${progress}%` }}>
                                        {progress}%
                                    </div>
                                </div>
                            )}
                            &nbsp;
                            {/* Remove File Button */}
                            <button className="remove-btn" onClick={handleRemoveFile}>
                                Remove File
                            </button>
                        </div>
                    )}
                </div>
            )}


            <div className="image">
                     <img src={img1}></img>
            </div>
        </div>

    );

};

export default FileUploader;