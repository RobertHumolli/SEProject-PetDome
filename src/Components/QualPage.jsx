import React, { useState } from 'react';
import './QualPage.css';

function Qualifications() {
    const [files, setFiles] = useState([]);

    const file_upload = (event) => {
        const uploadedFiles = Array.from(event.target.files);
        setFiles([...files, ...uploadedFiles]);
    };

    const file_remove = (index) => {
        const updatedFiles = [...files]; 
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    return (
        <div className="qual-container">
            <h1>Please upload your qualifications</h1>
            <input type="file" multiple onChange={file_upload} />
            {files.length > 0 ? (
                <div>
                    <p class ="file_desc1">Thank you for uploading the following files:</p>
                    <p class = "file_desc2">Click on the 'Remove' button to remove a file. Files not removed are automatically uploaded.</p>
                    {files.map((file, index) => (
                        <div key={index}>
                            <p className='file_name'>{file.name}</p>
                            <button onClick={() => file_remove(index)}>Remove</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p class = "file_desc1">No files uploaded yet.</p>
            )}
        </div>
    );
}

export default Qualifications;