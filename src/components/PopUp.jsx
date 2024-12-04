import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';  // Import the close icon

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Check if the popup has been shown before
  useEffect(() => {
    const hasPopupShown = localStorage.getItem('popupShown');

    // If popup hasn't been shown before, show it
    if (!hasPopupShown) {
      setIsOpen(true);
      localStorage.setItem('popupShown', 'true'); // Set flag to prevent it from showing again
    }

    // Disable background scroll when popup is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup to reset overflow when the component is unmounted or modal is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]); // Run effect when isOpen changes

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    // Check if the email field is empty
    if (!email) {
      setError('Please enter your email address before submitting.');
    } else {
      setError('');
      setIsOpen(false);  // Close the modal when email is entered
    }
  };

  return (
    <div>
      {/* Popup modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white px-7 pt-7 pb-2 rounded-lg shadow-lg max-w-4xl w-full md:w-2/3 lg:w-1/2 flex relative">
            {/* Left side with image */}
            <div className="w-1/2 h-full hidden md:block">
              <img
                src="/images/about2.png"
                alt="Left Side Image"
                className="object-cover w-full h-full rounded-l-lg"
              />
            </div>

            {/* Right side content */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
              {/* Close icon */}
              <button
                className="text-red-500 font-bold text-3xl hover:opacity-75 absolute top-4 right-4"
                onClick={toggleModal}
              >
                <FaTimes /> {/* Close icon */}
              </button>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Welcome to Our Site!</h2>
                <p className="mb-4 text-gray-700">
                  Please enter your email address below to stay updated.
                </p>

                {/* Email Input */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}  // Update email state
                  placeholder="Enter your email"
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                />

                {/* Display error if email is not entered */}
                {error && <p className="text-red-500 mb-4">{error}</p>}

                {/* Submit Button */}
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                  onClick={handleSubmit}  // Only close modal when email is entered
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;
