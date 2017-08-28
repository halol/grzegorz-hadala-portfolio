<template>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h5 style="line-height: 48px;">Get in touch</h5>
          <nav class="social-links">
            <a target="_blank" href="mailto:grzegorz.hadala@gmail.com"><img src="../assets/email-1573.svg" alt=""></a>
            <a target="_blank" href="https://www.linkedin.com/in/grzegorzhadala/"><img src="../assets/linkedin-161.svg" alt=""></a>
            <a target="_blank" href="https://www.behance.net/greghadala"><img src="../assets/behance-163.svg" alt=""></a>
            <a target="_blank" href="https://twitter.com/GregHadala"><img src="../assets/twitter-154.svg" alt=""></a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
.social-links {
  margin-bottom: 64px;
  > a {
    //outline: 1px solid red;
    border-radius: 16px;
    background: #D3DBE0;
    display: inline-block;
    text-align: left;
    padding: 32px;
    vertical-align: bottom;
    margin-bottom: 32px;
    &:hover {
      opacity: 0.7;
    }
    &:not(:first-child) {
      margin-left: 16px;
    }
    > img {
      vertical-align: bottom;
      width: 24px;
    }
    @media (max-width: 414px) {
      width: 100%;
      text-align: center;
      // margin: 0;
      &:not(:first-child) {
        margin-left: 0;
      }
    }
  }
}
</style>

