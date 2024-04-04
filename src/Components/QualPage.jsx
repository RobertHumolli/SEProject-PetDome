import React, { useState } from 'react';
import './QualPage.css';

function Qualifications() {
    const [files, setFiles] = useState([]);

    const file_upload = (event) => {
        const uploadedFiles = Array.from(event.target.files);
        setFiles([...files, ...uploadedFiles]); // ... is used to concatenate new files to array of exisiting files stored in variable
    };

    const file_remove = (index) => {
        const updatedFiles = [...files]; 
        updatedFiles.splice(index, 1); // remove the file at the specified index
        setFiles(updatedFiles);
    };

    return (
        <div className="qual-container">
            <h1>Please upload your qualifications files</h1>
            <input type="file" multiple onChange={file_upload} />
            {files.map((file, index) => (
                <div key={index}>
                    <p>{file.name}</p>
                    <button onClick={() => file_remove(index)}>Remove</button> {/* when remove button is pressed, file_remove function is used to remove selected file */}
                </div>
            ))}
        </div>
    );
}

export default Qualifications;