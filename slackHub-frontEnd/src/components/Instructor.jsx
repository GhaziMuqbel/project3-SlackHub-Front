import { useState } from 'react';
import axios from 'axios';
const Instructor = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    try {
      const response = await axios.post('/assignments', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading assignment:', error);
    }
  }
}