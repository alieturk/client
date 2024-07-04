// pages/index.tsx

import { useState } from 'react';
import axios from 'axios';

//Interface for Pixabay image data
interface PixabayImage {
  id: number;
  pageURL: string;
  tags: string;
  previewURL: string;
  webformatURL: string;
}
// Main functional component
export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<PixabayImage[]>([]);
  // Function to handle the search operation

  const handleSearch = async () => {
      console.log('handleSearch called');
    try {
      //a GET request to the backend search endpoint
      const response = await axios.get(`http://localhost:8080/search?query=${query}`);
      const images = response.data.hits; // Extracting the images from the response
      console.log('Image URLs:', images.map((image: { webformatURL: any; }) => image.webformatURL));
      setImages(images);
    } catch (error: any) {
      console.error('Error fetching images:', error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Image Search</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter tags to search..."
          className="p-2 border border-gray-300 rounded-l-md w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-md"
        >
          Search
        </button>
      </div>
      {/* Grid layout for displaying fetched images */}
            <div className="grid grid-cols-3 gap-4">
        {images.length > 0? (
          images.map((image) => (
            <div key={image.id} className="border border-gray-300 rounded-md p-2">
              <a href={image.pageURL} target="_blank" rel="noopener noreferrer">
                <img src={image.webformatURL} alt={image.tags} className="w-full h-auto" crossOrigin="anonymous" />
              </a>
              <p className="mt-2 text-sm text-gray-600">{image.tags}</p>
            </div>
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
    </div>
  );
}
