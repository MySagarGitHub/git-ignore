import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!file) {
      alert('Please select a file');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setUploadResult(result);
        alert('File uploaded successfully!');
      } else {
        alert('Upload failed: ' + result.error);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Upload File to S3</h2>
      
      <form onSubmit={handleUpload}>
        <div className="mb-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            accept="image/*,application/pdf"
          />
        </div>
        
        <button
          type="submit"
          disabled={!file || uploading}
          className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-300"
        >
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>
      </form>

      {uploadResult && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <p className="text-green-700">Upload successful!</p>
          <p className="text-sm text-gray-600 break-all">
            URL: {uploadResult.fileUrl}
          </p>
        </div>
      )}
    </div>
  );
}