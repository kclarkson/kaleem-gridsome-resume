<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Kaleem
        <span class="text-primary">Clarkson</span>
      </h1>
      <div class="subheading mb-5">
        7500 Roswell Road · Atlanta, GA 30350· 207.320.7918 ·
        <a
          href="mailto:name@email.com"
        >kaleemclarkson@gmail.com</a>
      </div>
      <p class="lead mb-5">
        I am a husband, father, front-end web developer, designer, Drupal evangelist and entrepreneur from Bangor, Maine. Yes the home of Stephen King and Paul Bunyan. I hope you enjoy my projects and find my thoughts useful.</p>

      <div class="social-icons">
        <a href="https://linkedin.com/in/kaleemclarkson" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://github.com/kclarkson" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
        <a href="https://twitter.com/kaleemclarkson" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'twitter']"/>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
