import React, { useState, useRef } from "react";

function Hero() {
  const [images, setImages] = useState([]); // Store multiple images
  const [loading, setLoading] = useState(false); // Track loading state
  const [page, setPage] = useState(1); // Track current page for pagination
  const [hasMore, setHasMore] = useState(true); // Control visibility of Load More button
  const inputRef = useRef(null);

  const accessKey = "yi_VPfdGWj-BH5OQaIp2y5ogR9TEQCECqN2OdLfEgsU";

  async function fetchImages(newSearch = false) {
    let keyword = inputRef.current.value.trim(); // Remove extra spaces

    if (!keyword) {
      alert("Enter the name of the image to search");
      return;
    }

    setLoading(true);
    const currentPage = newSearch ? 1 : page; // Reset page if it's a new search
    const url = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (newSearch) {
        setImages(data.results); // Reset images for a new search
      } else {
        setImages((prevImages) => [...prevImages, ...data.results]); // Append new images
      }

      setHasMore(data.results.length > 0); // Hide Load More button if no more results
      if (newSearch) setPage(2); // Reset to page 2 for next load
      else setPage((prevPage) => prevPage + 1); // Increase page count
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-teal-600 flex flex-col items-center py-10 px-6">
    {/* Intro Message */}
    <div className="my-10">
      <h1 className="text-2xl sm:text-3xl font-semibold text-white text-center mt-6">
        Discover Stunning Images Instantly!
      </h1>
      <p className="text-gray-200 text-center mt-2">
        Type a keyword below and explore a world of amazing visuals.
      </p>
    </div>
  

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-lg">
        <input
          type="text"
          className="py-3 px-6 w-full sm:w-80 border-2 border-gray-300 rounded-full text-gray-200 text-md font-medium bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-50"
          placeholder="Search images..."
          ref={inputRef}
        />

        <button
          className="bg-blue-800 hover:scale-110 ease-in-out duration-200 text-white font-semibold py-3 px-6 w-full sm:w-auto rounded-full transition-all"
          onClick={() => fetchImages(true)}
        >
          Search
        </button>
      </div>


      {/* Loading State */}
        {loading && (
          <div className="mt-6 flex justify-center">
            <img
              src="https://i.gifer.com/ZKZg.gif"  // Replace this with your preferred loading GIF
              alt="Loading..."
              className="w-16 h-16"
            />
          </div>
        )}


      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {images.length > 0 ? (
          images.map((img) => (
            <div key={img.id} className="text-center p-4 bg-white rounded-lg shadow-md">
              <img
                src={img.urls.small}
                alt={img.description || "Unsplash Image"}
                className="rounded-lg w-full h-48 object-cover"
              />
              <a
                href={img.links.html}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-500  font-medium text-md  hover:underline"
              >
                View on Unsplash
              </a>
            </div>
          ))
        ) : (
          !loading && <p className="mt-6 text-gray-200">No images found</p>
        )}
      </div>

      {/* Load More Button */}
      {hasMore && images.length > 0 && (
        <button
          className="mt-6 bg-green-500 hover:bg-green-600 ease-in duration-200 text-white font-semibold py-3 px-6 rounded-full transition-all"
          onClick={() => fetchImages(false)}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Hero;
