import React from 'react'

function FaqSection() {
  return (
    <div className="bg-base-100 text-base-content border-base-300 border-t px-10 py-4">
    <div class="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div class="collapse-content">
            <p>hello</p>
        </div>
        </div>
        <div class="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div class="collapse-content">
            <p>hello</p>
        </div>
        </div>
        <div class="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div class="collapse-content">
            <p>hello</p>
        </div>
    </div>
    </div>
  )
}

export default FaqSection