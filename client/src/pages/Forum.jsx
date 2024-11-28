import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarUser from "../components/NavbarUser";

const Forum = () => {
  const [newComment, setNewComment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostCategory, setNewPostCategory] = useState(""); // State untuk kategori
  const [selectedImage, setSelectedImage] = useState("");
  const [currentUser, setCurrentUser] = useState({
    username: "Pengguna Baru", // Ganti dengan nama pengguna yang sesuai
    avatar: "src/assets/pria.png", // Ganti dengan URL gambar avatar pengguna
  });

  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Pengguna 1",
      time: "2 jam yang lalu",
      category: "Sayuran",
      title: "Pengalaman Menanam Tanaman Hidroponik",
      content:
        "Bagaimana tips kalian dalam merawat tanaman hidroponik, khususnya tanaman sawi agar tidak layu ?",
      image: "src/assets/tanaman-layu.jpg",
      comments: [""],
      showComments: false,
    },
    {
      id: 2,
      username: "Pengguna 2",
      time: "5 jam yang lalu",
      category: "Sayuran",
      title: "Cara Merawat Tanaman Hidroponik",
      content: "Postingan lain tentang hidroponik dan cara merawat tanaman.",
      image: "src/assets/tanaman-layu2.jpg",
      comments: [],
      showComments: false,
    },
    {
      id: 3,
      username: "Pengguna 3",
      time: "5 jam yang lalu",
      category: "Sayuran",
      title: "Perawatan Tanaman Hidroponik",
      content: "Postingan lain tentang hidroponik dan perawatan tanaman.",
      image: "src/assets/tanaman-layu3.jpg",
      comments: [],
      showComments: false,
    },
  ]);

  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState(""); // State untuk judul
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State untuk pencarian

  const [lastPostId, setLastPostId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editPost, setEditPost] = useState({
    title: "",
    content: "",
    image: "",
  });

  const openEditModal = (post) => {
    setEditPost(post);
    setIsEditModalOpen(true);
  };

  const saveEditedPost = () => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === editPost.id
          ? {
              ...post,
              title: editPost.title,
              content: editPost.content,
              image: editPost.image,
            }
          : post
      )
    );
    setIsEditModalOpen(false);
  };

  const addComment = (postId) => {
    if (!newComment.trim()) return;
    const commentWithUser = {
      username: currentUser.username,
      avatar: currentUser.avatar,
      text: newComment,
    };
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, commentWithUser] }
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
      title: newPostTitle, // Menyimpan judul
      category: newPostCategory, // Menyimpan kategori
      content: newPostContent,
      image: newPostImage,
      comments: [],
      showComments: false,
    };

    setPosts([newPost, ...posts]);
    setLastPostId(newPost.id);
    setNewPostTitle(""); // Reset judul setelah postingan dibuat
    setNewPostCategory(""); // Reset kategori setelah postingan dibuat
    setNewPostContent("");
    setNewPostImage("");
    setIsCreatePostOpen(false);
  };

  // Filter berdasarkan judul atau konten saat pencarian
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      
      <section className="bg-[#075852] p-8 md:p-16 text-white">
        <div className="flex flex-col md:flex-row flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
              Forum Komunitas Hidroponik!
            </h1>
            <div className="mb-4 w-full flex justify-center md:justify-start">
              <input
                type="text"
                placeholder="Cari pertanyaan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-md p-2 rounded-lg text-black"
              />
              <button className="bg-green-700 hover:bg-[#26BE71] text-white p-2 ml-2 rounded-lg">
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
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="relative bg-white p-6 rounded-lg w-full max-w-lg">
                <button
                  onClick={() => setIsCreatePostOpen(false)}
                  className="absolute top-2 right-2 text-white bg-red-500 p-3 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600"
                >
                  X
                </button>
                <h2 className="text-2xl font-bold text-center mb-4">
                  Buat Postingan Baru
                </h2>
                <input
                  type="text"
                  placeholder="Judul Postingan..."
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg mb-4"
                />
                <textarea
                  placeholder="Tulis postingan kamu..."
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg mb-4"
                  rows="4"
                />
                <select
                  value={newPostCategory}
                  onChange={(e) => setNewPostCategory(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg mb-4"
                >
                  <option value="" disabled>
                    Pilih Kategori...
                  </option>
                  <option value="Sayuran">Sayuran</option>
                  <option value="Buah-buahan">Buah-buahan</option>
                </select>
                <input
                  type="file"
                  onChange={(e) =>
                    setNewPostImage(URL.createObjectURL(e.target.files[0]))
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                
                <div className="flex justify-center space-x-4 mt-6">
                  <button
                    onClick={addPost}
                    className="bg-[#075852] hover:bg-[#26BE71] text-white py-2 px-4 rounded-lg"
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
          )}

          <div className="fixed bottom-6 right-6 z-50">
            <button
              onClick={() => setIsCreatePostOpen(true)}
              className="bg-[#075852] hover:bg-[#26BE71] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
              aria-label="Buat Postingan Baru"
            >
              +
            </button>
          </div>

          {/* Menampilkan daftar postingan berdasarkan pencarian */}
          {filteredPosts.map((post) => (
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
                  <p className="text-sm text-gray-500">{post.category}</p>
                </div>
              </div>
              <h4 className="text-xl font-bold">{post.title}</h4>
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

              {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="relative bg-white p-6 rounded-lg w-full max-w-lg">
                    <button
                      onClick={() => setIsEditModalOpen(false)}
                      className="absolute top-2 right-2 text-white bg-red-500 p-3 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600"
                    >
                      X
                    </button>
                    <h2 className="text-2xl font-bold text-center mb-4">
                      Edit Postingan
                    </h2>
                    <input
                      type="text"
                      placeholder="Judul Postingan..."
                      value={editPost.title}
                      onChange={(e) =>
                        setEditPost({ ...editPost, title: e.target.value })
                      }
                      className="w-full p-4 border border-gray-300 rounded-lg mb-4"
                    />
                    <textarea
                      placeholder="Tulis postingan kamu..."
                      value={editPost.content}
                      onChange={(e) =>
                        setEditPost({ ...editPost, content: e.target.value })
                      }
                      className="w-full p-4 border border-gray-300 rounded-lg mb-4"
                      rows="4"
                    />
                    <select
                      value={editPost.category}
                      onChange={(e) =>
                        setEditPost({ ...editPost, category: e.target.value })
                      }
                      className="w-full p-4 border border-gray-300 rounded-lg mb-4"
                    >
                      <option value="" disabled>
                        Pilih Kategori...
                      </option>
                      <option value="Sayuran">Sayuran</option>
                      <option value="Buah-buahan">Buah-buahan</option>
                    </select>
                    <input
                      type="file"
                      onChange={(e) =>
                        setEditPost({
                          ...editPost,
                          image: URL.createObjectURL(e.target.files[0]),
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    />
                    
                    <div className="flex justify-center space-x-4 mt-6">
                      <button
                        onClick={saveEditedPost}
                        className="bg-[#075852] hover:bg-[#26BE71] text-white py-2 px-4 rounded-lg"
                      >
                        Simpan Perubahan
                      </button>
                      <button
                        onClick={() => setIsEditModalOpen(false)}
                        className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-lg"
                      >
                        Batal
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tombol Like, Edit dan Komentar */}
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

                {post.id === lastPostId && (
                  <button
                    onClick={() => openEditModal(post)}
                    className="flex items-center text-gray-700 hover:text-green-700"
                  >
                    <span className="mr-2">✏️</span>
                    Edit
                  </button>
                )}
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
                      className="bg-[#075852] hover:bg-[#26BE71] text-white py-2 px-4 rounded-lg mt-4"
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
                        <div key={index} className="flex items-start mb-2">
                          <img
                            src={comment.avatar}
                            alt=""
                            className="w-8 h-8 rounded-full mr-2"
                          />

                          <div>
                            <span className="font-semibold">
                              {comment.username}
                            </span>

                            <p className="text-gray-600">{comment.text}</p>
                          </div>
                        </div>
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
      <Footer />
    </div>
  );
};

export default Forum;
