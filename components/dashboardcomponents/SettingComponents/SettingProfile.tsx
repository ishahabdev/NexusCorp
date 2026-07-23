"use client"

import Image from "next/image"
import Button from "@/components/ui/Button"
import { Pencil } from "lucide-react"
import { ChangeEvent, useRef, useState } from "react"

export default function SettingProfile() {
  const defaultImage = "/images/Avatar.jpg"

  const [profileImage, setProfileImage] = useState(defaultImage)
  const [fullName, setFullName] = useState("Alexander Sterling")
  const [email, setEmail] = useState("alexander@nexuscorp.ai")
  const [bio, setBio] = useState(
    "Senior Infrastructure Engineer leading Project Alpha at NexusCorp. Focused on precision minimalism and scalable cloud architectures."
  )

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Open image picker
  const handleReplace = () => {
    fileInputRef.current?.click()
  }

  // Image preview
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    const imageUrl = URL.createObjectURL(file)
    setProfileImage(imageUrl)
  }

  // Remove image
  const handleRemove = () => {
    setProfileImage(defaultImage)

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Save data
  const handleSave = () => {
    const data = {
      profileImage,
      fullName,
      email,
      bio,
    }

    localStorage.setItem("profile", JSON.stringify(data))

    alert("Profile Saved Successfully")
  }


  return (
    <div className="bg-white rounded-xl border p-6 space-y-6">

      {/* Profile Photo */}
      <div className="flex items-center gap-5">

        <div className="relative w-20 h-20">

          <Image
            src={profileImage}
            alt="Profile"
            fill
            className="rounded-full object-cover border"
          />


          {/* Pencil */}
          <button
            type="button"
            onClick={handleReplace}
            className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center"
          >
            <Pencil size={14} />
          </button>


          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

        </div>


        <div>

          <h3 className="font-medium text-gray-700">
            Profile Photo
          </h3>

          <p className="text-sm text-gray-500 mb-3">
            JPG, PNG or GIF. Max size 800KB.
          </p>


          <div className="flex gap-3">

            <Button
              type="button"
              variant="outline"
              onClick={handleReplace}
              className="px-4 py-2 text-xs text-black border"
            >
              Replace
            </Button>


            <Button
              type="button"
              variant="outline"
              onClick={handleRemove}
              className="px-4 py-2 text-xs text-red-600 border"
            >
              Remove
            </Button>

          </div>

        </div>

      </div>



      {/* Form */}
      <div className="space-y-5">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={fullName}
              onChange={(e)=>setFullName(e.target.value)}
              className="w-full h-11 rounded-lg border px-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>



          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full h-11 rounded-lg border px-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


        </div>



        {/* Bio */}
        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>


          <textarea
            rows={4}
            value={bio}
            onChange={(e)=>setBio(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
          />

        </div>


      </div>



      {/* Save Button */}
      <div className="flex justify-end">

        <Button
          type="button"
          onClick={handleSave}
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Save Changes
        </Button>

      </div>


    </div>
  )
}