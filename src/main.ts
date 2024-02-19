import { setupCounter } from './counter.ts'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen bg-gray-100 p-4">
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
    <div class="flex justify-between items-center mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-gray-600"
      >
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
      </svg>
      <h1 class="text-xl font-semibold text-gray-800">Tiempo actual</h1>
      <div></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="mb-4 flex flex-col items-center justify-center w-48 h-48 bg-blue-200 rounded-full">
        <span class="text-4xl font-semibold text-blue-800">15:30</span>
      </div>
      <h2 class="mb-2 text-lg font-medium text-gray-700">Hoy</h2>
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mb-2 w-full bg-blue-400 text-white">
        30:00
      </button>
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mb-2 w-full bg-pink-300 text-white">
        5:00
      </button>
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-blue-400 text-white">
        30:00
      </button>
    </div>
  </div>
</div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
