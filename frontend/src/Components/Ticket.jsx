import React, { useState } from 'react';
import axios from 'axios';

const Ticket = () => {

    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
  
    const handleTextChange = (e) => {
        setText(e.target.value);
    };
  
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleButtonClick = async () => {
        const formData = new FormData();
        formData.append('text', text);
        if (file) {
          formData.append('file', file);
        }
    
        try {
          const response = await axios.post('http://localhost:8000/api/tickets', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('Response:', response.data);
        } catch (error) {
          console.error('Error:', error);
        }
    };

    return (
        <div className="flex flex-col items-center p-6 border border-black rounded-lg w-96 mx-auto">
            <textarea
                className="w-full h-24 mb-4 p-2 border border-gray-300 rounded"
                value={text}
                onChange={handleTextChange}
                placeholder="Enter text here"
            />
            <input
                type="file"
                className="mb-4"
                onChange={handleFileChange}
            />
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={handleButtonClick}
            >
                Button
            </button>
        </div>
    )
}

export default Ticket;