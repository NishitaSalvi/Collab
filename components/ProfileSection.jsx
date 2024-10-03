import React from "react";

const ProfileSection = () => {
  return (
    <div className="text-white w-[90%]">
      <h3 className="text-2xl font-bold mb-4">Profile Settings</h3>
      
      {/* DP (Display Picture) */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Display Picture</label>
        <input
          type="file"
          className="w-[50vw] bg-transparent border-zinc-800 border-[0.5px] rounded-md px-4 py-2 text-sm"
        />
      </div>
      
      {/* Username */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Username</label>
        <input
          type="text"
          placeholder="username"
          className="w-[50vw] bg-transparent rounded-md px-4 py-2 text-sm border-zinc-800 border-[0.5px]"
        />
      </div>
      
      {/* Gmail */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Email</label>
        <input
          type="email"
          placeholder="email"
          className="w-[50vw] bg-transparent border-zinc-800 border-[0.5px] rounded-md px-4 py-2 text-sm"
        />
      </div>
      
      {/* Phone Number */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Phone Number</label>
        <input
          type="tel"
          placeholder="phone number"
          className="w-[50vw] bg-transparent border-zinc-800 border-[0.5px] rounded-md px-4 py-2 text-sm"
        />
      </div>

      <button className="bg-white text-black px-4 py-2 rounded-md">Save Changes</button>
    </div>
  );
};

export default ProfileSection;
