import React from 'react'

function Banner() {
  return (
    <>
    <div class="hero bg-base-100">
  <div class="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      class=" rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">
      If Hallmark’s business model were a Hallmark movie, the logline would be straightforward: 
      Tired of the monotonous dating landscape, a hardworking woman is ready to try something different.
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Banner