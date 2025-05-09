const ProfileImage = () => {
  return (
    <div className="relative w-24 h-24 sm:w-48 sm:h-48 rounded-full overflow-hidden group">
      {/* Default Image */}
      <img
        src="/r.jpeg"
        alt="profile"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
      />

      {/* Hover Image */}
      <img
        src="https://i.pinimg.com/736x/66/37/d4/6637d4e5e30685889c6296e4cb0aa9e3.jpg  "
        alt="hover profile"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      />
    </div>
  );
};

export default ProfileImage;
