import React from 'react'
import tech2 from '../assets/tech2.png'
import tech3 from '../assets/tech3.png'
function Projects() {
  return (
    <section class="section__container trainer__container" id="projects">
      <h2 class="section__header">Projects</h2>
      <p class="section__description">
        "Explore my portfolio of projects, each a testament to my creativity and expertise in bringing ideas to fruition."
      </p>
      <div class="trainer__grid">
        <div class="trainer__card">
          <img src={tech2} alt="" />
        </div>
        <div class="trainer__card">
          <div class="trainer__content">
            <h4>Project #1</h4>
            <h5>MERN-Stack</h5>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae delectus, facere illo facilis excepturi repellendus tempore atque nostrum doloremque tenetur?
            </p>
            <div class="trainer__socials">
              <a href="#"><i class="ri-github-fill"></i></a>
              <a href="#"><i class="ri-live-line"></i></a>
              <a href="#"><i class="ri-code-line"></i></a>
            </div>
          </div>
        </div>
        <div class="trainer__card">
          <img src={tech2} alt="" />
        </div>
        <div class="trainer__card">
          <div class="trainer__content">
            <h4>Project #2</h4>
            <h5>React-Native</h5>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae delectus, facere illo facilis excepturi repellendus tempore atque nostrum doloremque tenetur?
            </p>
            <div class="trainer__socials">
            <a href="#"><i class="ri-github-fill"></i></a>
              <a href="#"><i class="ri-live-line"></i></a>
              <a href="#"><i class="ri-code-line"></i></a>
            </div>
          </div>
        </div>
        <div class="trainer__card">
          <img src={tech2} alt="" />
        </div>
        <div class="trainer__card">
          <div class="trainer__content">
            <h4>Project #3</h4>
            <h5>Digital Marketing</h5>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae delectus, facere illo facilis excepturi repellendus tempore atque nostrum doloremque tenetur?
            </p>
            <div class="trainer__socials">
            <a href="#"><i class="ri-github-fill"></i></a>
              <a href="#"><i class="ri-live-line"></i></a>
              <a href="#"><i class="ri-code-line"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects