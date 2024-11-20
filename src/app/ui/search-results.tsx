"use client"

export default function SearchResults() {
  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 mt-[30%] md:mt-[5%] md:mr-[6.5rem]">
      <div className="bg-zinc-50 flex flex-col justify-center w-full max-w-[90%] md:max-w-[45%] p-4 border gap-3 rounded-xl">
        <div className="flex justify-between rounded-3xl border px-4 py-3">
          <strong>GTX 1650</strong>
          <span className="text-green-700">em GPUS</span>
        </div>
        <div className="flex justify-between rounded-3xl border px-4 py-3">
          <strong>GTX 1650</strong>
          <span className="text-green-700">em GPUS</span>
        </div>
      </div>
    </div>
  )
}
