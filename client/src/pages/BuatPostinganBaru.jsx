import React, { useState } from "react";

const BuatPostinganBaru = ({ addPost, navigate }) => {
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState("");

  const handlePostSubmit = () => {
    addPost({
      content: newPostContent,
      image: newPostImage,
    });
    setNewPostContent("");
    setNewPostImage("");
    navigate("/forum"); // Kembali ke halaman forum
  };

  return (
    <section className="bg-white p-6 md:p-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Buat Postingan Baru
        </h2>
        <div className="space-y-4">
          <textarea
            placeholder="Tulis postingan kamu..."
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg"
            rows="4"
          />
          <input
            type="file"
            onChange={(e) =>
              setNewPostImage(URL.createObjectURL(e.target.files[0]))
            }
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {newPostImage && (
            <img
              src={newPostImage}
              alt="Preview Gambar"
              className="mt-4 max-w-full h-auto rounded-lg"
            />
          )}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={handlePostSubmit}
              className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
            >
              Kirim Postingan
            </button>
            <button
              onClick={() => navigate("/forum")}
              className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-lg"
            >
              Batal
            </button>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default BuatPostinganBaru;
