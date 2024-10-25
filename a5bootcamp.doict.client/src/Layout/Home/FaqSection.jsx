import React from 'react'

function FaqSection() {
  return (
    <div className="bg-base-100 text-base-content border-base-300 border-t px-10 py-4 m-5">
      <div className='text-center'>
    <div class="stats shadow text-center">
    <div class="stat">
        <div class="stat-title"></div>
        <div class="stat-value">FAQ</div>
        <div class="stat-desc"></div>
    </div>
    </div>
    </div>
    <div class="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div class="collapse-title text-xl font-medium">About Movie Bazar</div>
        <div class="collapse-content">
            <p>Movie Download Site</p>
        </div>
        </div>
        <div class="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">How can i download?</div>
        <div class="collapse-content">
            <p>Register here and login to get your download link.</p>
        </div>
        </div>
        <div class="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">Any Payment Issue Here?</div>
        <div class="collapse-content">
            <p>Yes. </p>
        </div>
    </div>
    </div>
  )
}

export default FaqSection
