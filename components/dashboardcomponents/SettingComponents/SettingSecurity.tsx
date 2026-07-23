"use client"

export default function SettingSecurity() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-semibold">Security</h1>
      <p className="mt-1 mb-6 text-sm text-gray-500">
        Password aur account security settings yahan manage karein.
      </p>

      <div className="rounded-lg border p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Password</p>
            <p className="text-sm text-gray-500">Last changed: Yesterday</p>
          </div>
          <button className="text-sm text-blue-600 font-medium">
            Change
          </button>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-sm font-medium">Two-factor authentication</p>
            <p className="text-sm text-gray-500">Currently disabled</p>
          </div>
          <button className="text-sm text-blue-600 font-medium">
            Enable
          </button>
        </div>
      </div>
    </div>
  );
}