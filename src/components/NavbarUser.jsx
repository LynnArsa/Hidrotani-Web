import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavbarUser  = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isOpen, setIsOpen] = useState(false);
  const [userImage, setUserImage] = useState('public/logo-user.png'); // Path ke gambar avatar pengguna

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="bg-main sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="public/logo-hidro-tani.png"
                alt="Hidrotani"
              />
            </div>

            {/* Menu untuk layar besar */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === '/' ? 'bg-[#075852] text-white' : 'hover:bg-[#26BE71] hover:text-white'}`}
                  aria-current="page"
                  onClick={() => handleLinkClick('/')}
                >
                  Beranda
                </Link>
                <Link
                  to="/edukasi"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === '/edukasi' ? 'bg-[#075852] text-white' : 'hover:bg-[#26BE71] hover:text-white'}`}
                  onClick={() => handleLinkClick('/edukasi')}
                >
                  Edukasi
                </Link>
                <Link
                  to="/forum"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === '/forum' ? 'bg-[#075852] text-white' : 'hover:bg-[#26BE71] hover:text-white'}`}
                  onClick={() => handleLinkClick('/forum')}
                >
                  Forum
                </Link>
                <Link
                  to="/about"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === '/about' ? 'bg-[#075852] text-white' : 'hover:bg-[#26BE71] hover:text-white'}`}
                  onClick={() => handleLinkClick('/about')}
                >
                  Tentang Kami
                </Link>
                <Link
                  to="/mobileapp"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${activeLink === '/mobileapp' ? 'bg-[#075852] text-white' : 'hover:bg-[#26BE71]                   } hover:text-white'}`}
                  onClick={() => handleLinkClick('/mobileapp')}
                >
                  Hidrotani App
                </Link>
              </div>
            </div>
          </div>

          {/* Logo Pengguna */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to="/user" onClick={() => handleLinkClick('/user')}>
              <img
                className="h-10 w-10 rounded-full border-2 border-white shadow-lg"
                src={userImage}
                alt="User  Avatar"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link
            to="/"
            className={`block rounded-md px-3 py-2 text-base font-medium ${activeLink === '/' ? 'bg-[#075852] text-white' : 'hover:bg-[#26BE71] hover:text-white'}`}
            onClick={() => handleLinkClick('/')}
          >
            Beranda
          </Link>
          <Link
            to="/edukasi"
            className={`block rounded-md px-3 py-2 text-base font-medium ${activeLink === '/edukasi' ? 'bg-[#075852] text-white' : 'hover:bg-[#26BE71] hover:text-white'}`}
            onClick={() => handleLinkClick('/edukasi')}
          >
            Edukasi
          </Link>
          <Link
            to="/forum"
            className={`block rounded-md px-3 py-2 text-base font-medium ${activeLink === '/forum' ? 'bg-[#075852] text-white' : 'hover:bg-[#26BE71] hover:text-white'}`}
            onClick={() => handleLinkClick('/forum')}
          >
            Forum
          </Link>
          <Link
            to="/about"
            className={`block rounded-md px-3 py-2 text-base font-medium ${activeLink === '/about' ? 'bg-[#075852] text-white' : 'hover:bg-[#26BE71] hover:text-white'}`}
            onClick={() => handleLinkClick('/about')}
          >
            Tentang Kami
          </Link>
          <Link
            to="/mobileapp"
            className={`block rounded-md px-3 py-2 text-base font-medium ${activeLink === '/mobileapp' ? 'bg-[#075852] text-white' : 'hover:bg-[#26BE71] hover:text-white'}`}
            onClick={() => handleLinkClick('/mobileapp')}
          >
            Hidrotani App
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser ;
                    