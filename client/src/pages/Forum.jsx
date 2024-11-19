import { useState } from "react";

const Forum = () => {
  const [newComment, setNewComment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Pengguna 1",
      time: "2 jam yang lalu",
      content:
        "Ini adalah postingan tentang pengalaman saya menanam tanaman hidroponik...",
      image: "src/assets/tanaman-layu.jpg",
      comments: [""],
      showComments: false,
    },
    {
      id: 2,
      username: "Pengguna 2",
      time: "5 jam yang lalu",
      content: "Postingan lain tentang hidroponik dan cara merawat tanaman.",
      image: "src/assets/tanaman-layu2.jpg",
      comments: [],
      showComments: false,
    },
    {
      id: 3,
      username: "Pengguna 3",
      time: "5 jam yang lalu",
      content: "Postingan lain tentang hidroponik dan perawatan tanaman.",
      image: "src/assets/tanaman-layu3.jpg",
      comments: [],
      showComments: false,
    },

  ]);

  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState("");

  const addComment = (postId) => {
    if (!newComment.trim()) return;

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
    setNewComment("");
  };

  const toggleComments = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, showComments: !post.showComments }
          : post
      )
    );
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addPost = () => {
    const newPost = {
      id: posts.length + 1,
      username: "Pengguna Baru",
      time: "Sekarang",
      content: newPostContent,
      image: newPostImage,
      comments: [],
      showComments: false,
    };

    setPosts([newPost, ...posts]);
    setNewPostContent("");
    setNewPostImage("");
    setIsCreatePostOpen(false);
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-secondary p-8 md:p-16 text-white">
        <div className="flex flex-col md:flex-row flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
              Forum Komunitas Hidroponik!
            </h1>
            <div className="mb-4 w-full flex justify-center md:justify-start">
              <input
                type="text"
                placeholder="Cari pertanyaan..."
                className="w-full max-w-md p-2 rounded-lg text-black"
              />
              <button className="bg-green-700 hover:bg-green-600 text-white p-2 ml-2 rounded-lg">
                Cari
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <img
              src="src/assets/section-forum.png"
              className="max-w-[250px] h-auto rounded-lg"
              alt="Forum Komunitas"
            />
          </div>
        </div>
      </section>

      <section className="bg-white p-6 md:p-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Postingan Komunitas Hidroponik
          </h2>

          {isCreatePostOpen && (
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
                      onClick={addPost}
                      className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                    >
                      Kirim Postingan
                    </button>
                    <button
                      onClick={() => setIsCreatePostOpen(false)}
                      className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-lg"
                    >
                      Batal
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          <div className="container mx-auto text-center mb-6">
            <button
              onClick={() => setIsCreatePostOpen(true)}
              className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
            >
              Buat Postingan Baru
            </button>
          </div>

          {/* Menampilkan daftar postingan */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-100 rounded-lg shadow-md p-6 mb-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src="src/assets/pria.png"
                  alt="Avatar Pengguna"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{post.username}</h3>
                  <p className="text-sm text-gray-600">{post.time}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <img
                src={post.image}
                alt="Gambar Postingan"
                className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  height: "300px",
                }}
                onClick={() => openModal(post.image)}
              />

              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="relative bg-white p-4 rounded-lg">
                    <button
                      onClick={closeModal}
                      className="absolute top-2 right-2 text-white bg-red-500 p-3 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600"
                    >
                      X
                    </button>

                    <img
                      src={selectedImage}
                      alt="Perbesar"
                      className="w-full h-auto max-w-[90vw] max-h-[80vh] object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Tombol Like dan Komentar */}
              <div className="flex items-center space-x-6">
                <button className="flex items-center text-gray-700 hover:text-green-700">
                  <span className="mr-2">👍</span> Like
                </button>
                <button
                  onClick={() => toggleComments(post.id)}
                  className="flex items-center text-gray-700 hover:text-green-700"
                >
                  <span className="mr-2">💬</span> Komentar
                </button>
              </div>

              {post.showComments && (
                <div className="mt-6">
                    <div>
                      <textarea
                        className="w-full p-4 border border-gray-300 rounded-lg"
                        placeholder="Tulis komentar..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                      />
                      <button
                        onClick={() => addComment(post.id)}
                        className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-4"
                      >
                        Kirim Komentar
                      </button>
                    </div>

                  {/* Daftar komentar */}
                  <div className="mt-6">
                    <h4 className="text-gray-700 font-semibold mb-4">
                      Komentar:
                    </h4>
                    {post.comments.length > 0 ? (
                      post.comments.map((comment, index) => (
                        <p key={index} className="text-gray-600">
                          {comment}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-500">Belum ada komentar.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Forum;
