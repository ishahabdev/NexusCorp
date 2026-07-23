export default function Loading() {
  return (
    <section className="bg-blue-50 grid grid-cols-12 gap-4 p-4">
      <aside className="col-span-3 animate-pulse border-r-2 px-4">
        <div className="bg-gray-200 h-16 w-48 rounded-2xl mb-4" />
        <div className="bg-gray-100 h-6 rounded-2xl mb-6" />

        <div className="flex items-center gap-3 mb-4 bg-gray-200 w-64 p-2">
          <div className="h-12 w-12 rounded-full bg-gray-100 shrink-0" />
          <div className="h-3.5 w-28 rounded bg-gray-100" />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="h-9 w-9 rounded-full bg-gray-200 shrink-0" />
          <div className="h-3.5 w-28 rounded bg-gray-200" />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-full bg-gray-200 shrink-0" />
          <div className="h-3.5 w-40 rounded bg-gray-200" />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="h-9 w-9 rounded-full bg-gray-200 shrink-0" />
          <div className="h-3.5 w-28 rounded bg-gray-200" />
        </div>

        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gray-200 shrink-0" />
          <div className="h-3.5 w-20 rounded bg-gray-200" />
        </div>
      </aside>

      <div className="col-span-9 animate-pulse">
        {/* Header/nav row */}
        <div className="flex items-center justify-between mb-5">
          <div className="h-10 w-56 rounded-md bg-gray-200" />
          <div className="flex gap-2.5">
            <div className="h-10 w-10 rounded-full bg-gray-200" />
            <div className="h-10 w-10 rounded-full bg-gray-200" />
            <div className="h-10 w-10 rounded-full bg-gray-200" />
          </div>
        </div>

        {/* Pehla input */}
        <div className="h-8 w-40 rounded-md bg-gray-200 mb-2.5" />

        {/* Doosra input */}
        <div className="h-4 w-80 rounded-md bg-gray-200 mb-8" />

        {/* 4 cards grid — ek row mein */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-4 flex-1 rounded-md bg-gray-200" />
              <div className="h-8 w-8 rounded-full bg-gray-200 shrink-0" />
            </div>
            <div className="h-8 w-3/4 rounded-md bg-gray-200 mb-2" />
            <div className="h-2.5 w-full rounded-md bg-gray-200" />
          </div>

          <div className="bg-white rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-4 flex-1 rounded-md bg-gray-200" />
              <div className="h-8 w-8 rounded-full bg-gray-200 shrink-0" />
            </div>
            <div className="h-8 w-3/4 rounded-md bg-gray-200 mb-2" />
            <div className="h-2.5 w-full rounded-md bg-gray-200" />
          </div>

          <div className="bg-white rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-4 flex-1 rounded-md bg-gray-200" />
              <div className="h-8 w-8 rounded-full bg-gray-200 shrink-0" />
            </div>
            <div className="h-8 w-3/4 rounded-md bg-gray-200 mb-2" />
            <div className="h-2.5 w-full rounded-md bg-gray-200" />
          </div>

          <div className="bg-white rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-4 flex-1 rounded-md bg-gray-200" />
              <div className="h-8 w-8 rounded-full bg-gray-200 shrink-0" />
            </div>
            <div className="h-8 w-3/4 rounded-md bg-gray-200 mb-2" />
            <div className="h-2.5 w-full rounded-md bg-gray-200" />
          </div>
        </div>


    <div className="grid grid-cols-2 gap-4 mt-4">

  {/* Left Card */}
  <div className="bg-white rounded-xl p-3.5 h-120 flex flex-col">
    {/* Header */}
    <div className="flex items-center justify-between mb-3.5">
      <div className="h-9 w-40 rounded-md bg-gray-200" />

      <div className="flex items-center gap-2">
        <div className="h-10 w-12 rounded-md bg-gray-200" />
        <div className="h-10 w-12 rounded-md bg-gray-200" />
      </div>
    </div>

    {/* Body */}
    <div className="h-90 rounded-md bg-gray-200 mb-3.5" />

    {/* Bottom Inputs */}
    <div className="flex gap-2 mt-auto">
      <div className="h-4 flex-1 rounded-md bg-gray-200" />
      <div className="h-4 flex-1 rounded-md bg-gray-200" />
      <div className="h-4 flex-1 rounded-md bg-gray-200" />
      <div className="h-4 flex-1 rounded-md bg-gray-200" />
      <div className="h-4 flex-1 rounded-md bg-gray-200" />
    </div>
  </div>

  {/* Right Card */}
  <div className="bg-white rounded-xl p-3.5 h-120 flex flex-col">

    <div>
      {/* Top Input */}
      <div className="h-6 w-40 rounded-md bg-gray-200 mb-3" />

      {/* 5 Rows */}
      <div className="space-y-2">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center gap-2">
            {/* Square Image */}
            <div className="h-12 w-12 rounded-md bg-gray-200 shrink-0" />

            {/* Inputs */}
            <div className="flex-1 space-y-2">
              <div className="h-7 w-full rounded-md bg-gray-200" />
              <div className="h-7 w-3/4 rounded-md bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Input */}
    <div className="h-12 w-full rounded-md bg-gray-200 mt-auto" />
  </div>

</div>  
      </div>
      






    </section>
  );
}