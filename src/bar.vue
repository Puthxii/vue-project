<template>
<section class="section is-medium has-background-light membership">
    <div class="container">
        <h3 class="title has-text-primary is-size-4-mobile">
                Please register and get special promotions!
            </h3>
        <div class="columns is-vcentered is-mobile">
            <div class="column is-narrow">
                <button type="button" id="button-footer-signup" class="button is-primary">
                    Register
                </button>
            </div>
            <div class="column is-narrow is-paddingless">
                or
            </div>
            <div class="column is-narrow">
                <button type="button" id="button-footer-login" class="button is-secondary">
                    Log In
                </button>
            </div>
        </div>
    </div>
</section>

</template>

<script>


export default {
  name: 'bar',

};
</script>

<style scoped>


  .navbar-link::after,
  .select:not(.is-multiple):not(.is-loading)::after {
    border: 3px solid transparent;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: .625em;
    margin-top: -.4375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: center;
    transform-origin: center;
    width: .625em
  }

  .block:not(:last-child),
  .box:not(:last-child),
  .highlight:not(:last-child),
  .level:not(:last-child),
  .subtitle:not(:last-child),
  .title:not(:last-child) {
    margin-bottom: 30px
  }

  .delete,
  .modal-close {
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: rgba(45, 47, 48, .2);
    border: none;
    border-radius: 290486px;
    cursor: pointer;
    display: inline-block;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 0;
    height: 20px;
    max-height: 20px;
    max-width: 20px;
    min-height: 20px;
    min-width: 20px;
    outline: 0;
    position: relative;
    vertical-align: top;
    width: 20px
  }

  .delete::after,
  .delete::before,
  .modal-close::after,
  .modal-close::before {
    background-color: #fff;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -webkit-transform-origin: center center;
    transform-origin: center center
  }

  .delete::before,
  .modal-close::before {
    height: 2px;
    width: 50%
  }

  .delete::after,
  .modal-close::after {
    height: 50%;
    width: 2px
  }

  .delete:focus,
  .delete:hover,
  .modal-close:focus,
  .modal-close:hover {
    background-color: rgba(45, 47, 48, .3)
  }

  .delete:active,
  .modal-close:active {
    background-color: rgba(45, 47, 48, .4)
  }

  .is-small.delete,
  .is-small.modal-close {
    height: 16px;
    max-height: 16px;
    max-width: 16px;
    min-height: 16px;
    min-width: 16px;
    width: 16px
  }

  .is-medium.delete,
  .is-medium.modal-close {
    height: 24px;
    max-height: 24px;
    max-width: 24px;
    min-height: 24px;
    min-width: 24px;
    width: 24px
  }

  .is-large.delete,
  .is-large.modal-close {
    height: 32px;
    max-height: 32px;
    max-width: 32px;
    min-height: 32px;
    min-width: 32px;
    width: 32px
  }

  .button.is-loading::after,
  .control.is-loading::after,
  .loader,
  .select.is-loading::after {
    -webkit-animation: spinAround .5s infinite linear;
    animation: spinAround .5s infinite linear;
    border: 2px solid #dbdbdb;
    border-radius: 290486px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 1em;
    position: relative;
    width: 1em
  }

  .hero-video,
  .image.is-16by9 img,
  .image.is-1by1 img,
  .image.is-1by2 img,
  .image.is-1by3 img,
  .image.is-2by1 img,
  .image.is-2by3 img,
  .image.is-3by1 img,
  .image.is-3by2 img,
  .image.is-3by4 img,
  .image.is-3by5 img,
  .image.is-4by3 img,
  .image.is-4by5 img,
  .image.is-5by3 img,
  .image.is-5by4 img,
  .image.is-9by16 img,
  .image.is-square img,
  .is-overlay,
  .modal,
  .modal-background {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0
  }

  .button,
  .file-cta,
  .file-name,
  .input,
  .select select,
  .textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 14px;
    height: 2.25em;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(.375em - 1px);
    padding-left: calc(.625em - 1px);
    padding-right: calc(.625em - 1px);
    padding-top: calc(.375em - 1px);
    position: relative;
    vertical-align: top
  }

  .button:active,
  .button:focus,
  .file-cta:active,
  .file-cta:focus,
  .file-name:active,
  .file-name:focus,
  .input:active,
  .input:focus,
  .is-active.button,
  .is-active.file-cta,
  .is-active.file-name,
  .is-active.input,
  .is-active.textarea,
  .is-focused.button,
  .is-focused.file-cta,
  .is-focused.file-name,
  .is-focused.input,
  .is-focused.textarea,
  .select select.is-active,
  .select select.is-focused,
  .select select:active,
  .select select:focus,
  .textarea:active,
  .textarea:focus {
    outline: 0
  }

  .button[disabled],
  .file-cta[disabled],
  .file-name[disabled],
  .input[disabled],
  .select select[disabled],
  .textarea[disabled] {
    cursor: not-allowed
  }

  .button,
  .checkbox input,
  .radio input,
  a {
    cursor: pointer
  }

  .swiper-container.-swiper-pagination-bottom {
    padding-bottom: 45px
  }

  .swiper-container.-swiper-pagination-bottom .swiper-pagination {
    bottom: 15px
  }

  .swiper-container.-pagination-size-small .swiper-pagination-bullet {
    width: 15px;
    height: 15px
  }

  .swiper-container.-pagination-size-small .swiper-pagination-bullet:after {
    width: 10px;
    height: 10px
  }

  .swiper-container.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px 0 0
  }

  .swiper-container.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet:last-child {
    margin: 0
  }

  .swiper-container .swiper-pagination {
    bottom: 20px
  }

  .swiper-container .swiper-pagination-bullet {
    background-color: transparent;
    opacity: 1;
    position: relative;
    margin: 0;
    width: 20px;
    height: 20px
  }

  .swiper-container .swiper-pagination-bullet:focus {
    outline: 0
  }

  .swiper-container .swiper-pagination-bullet:after {
    position: absolute;
    border-radius: 50%;
    content: '';
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    display: block;
    background-color: #c2b885;
    -webkit-transition: background-color .2s;
    transition: background-color .2s
  }

 

  code,
  hr,
  pre {
    background-color: #f5f5f5
  }

  /*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */
  blockquote,
  body,
  dd,
  dl,
  dt,
  fieldset,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  html,
  iframe,
  legend,
  li,
  ol,
  p,
  pre,
  textarea,
  ul {
    margin: 0;
    padding: 0
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: 400
  }

  body,
  html {
    font-size: 14px
  }

  ul {
    list-style: none
  }

  button,
  input,
  select,
  textarea {
    margin: 0
  }

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%
  }

  *,
  ::after,
  ::before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit
  }

  audio,
  img,
  video {
    height: auto;
    max-width: 100%
  }

  iframe {
    border: 0
  }

  table {
    border-collapse: collapse;
    border-spacing: 0
  }

  td,
  th {
    padding: 0;
    text-align: left
  }

  article,
  aside,
  figure,
  footer,
  header,
  hgroup,
  section {
    display: block
  }

  body,
  button,
  input,
  select,
 

  code,
  pre {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-family: monospace
  }

  body {
    color: #2d2f30;
    font-weight: 500;
    line-height: 1.5
  }

  code,
  pre,
  small {
    font-size: .875em
  }

  a {
    color: #e32126;
    text-decoration: none
  }

  .button.is-text,
  .footer-container .footer-menu .wrapper-menu a:hover {
    text-decoration: underline
  }

  a:hover {
    color: #4c0b0a
  }

  code {
    color: #ff3860;
    font-weight: 400;
    padding: .25em .5em
  }

  hr {
    border: none;
    display: block;
    height: 2px;
    margin: 1.5rem 0
  }

  input[type=checkbox],
  input[type=radio] {
    vertical-align: baseline
  }

  span {
    font-style: inherit;
    font-weight: inherit
  }

  strong {
    font-weight: 900
  }

  pre {
    color: #4a4a4a;
    overflow-x: auto;
    padding: 1.25rem 1.5rem;
    white-space: pre;
    word-wrap: normal
  }

  .button,
  .button-location .text,
  .file-cta,
  .file-name,
  .has-text-ellipse,
  .has-text-nowrap,
  .input-datepicker .vdp-datepicker__calendar .cell.day-header,
  .label-float .placeholder,
  .price {
    white-space: nowrap
  }

  pre code {
    background-color: transparent;
    font-size: 1em;
    padding: 0
  }

  table td,
  table th {
    text-align: left;
    vertical-align: top
  }

  .is-clearfix::after {
    clear: both;
    content: " ";
    display: table
  }

  .is-pulled-left {
    float: left !important
  }

  .is-pulled-right {
    float: right !important
  }

  .is-clipped {
    overflow: hidden !important
  }

  .is-size-1 {
    font-size: 68px !important
  }

  .is-size-2 {
    font-size: 46px !important
  }

  .is-size-3 {
    font-size: 32px !important
  }

  .is-size-4 {
    font-size: 22px !important
  }

  .is-size-5 {
    font-size: 14px !important
  }

  .is-size-6 {
    font-size: 12px !important
  }

  .is-size-7 {
    font-size: 10px !important
  }

  @media screen and (max-width:767px) {
    .is-size-1-mobile {
      font-size: 68px !important
    }

    .is-size-2-mobile {
      font-size: 46px !important
    }

    .is-size-3-mobile {
      font-size: 32px !important
    }

    .is-size-4-mobile {
      font-size: 22px !important
    }

    .is-size-5-mobile {
      font-size: 14px !important
    }

    .is-size-6-mobile {
      font-size: 12px !important
    }

    .is-size-7-mobile {
      font-size: 10px !important
    }
  }

  @media screen and (min-width:768px),
  print {
    .is-size-1-tablet {
      font-size: 68px !important
    }

    .is-size-2-tablet {
      font-size: 46px !important
    }

    .is-size-3-tablet {
      font-size: 32px !important
    }

    .is-size-4-tablet {
      font-size: 22px !important
    }

    .is-size-5-tablet {
      font-size: 14px !important
    }

    .is-size-6-tablet {
      font-size: 12px !important
    }

    .is-size-7-tablet {
      font-size: 10px !important
    }
  }

  @media screen and (max-width:1169px) {
    .is-size-1-touch {
      font-size: 68px !important
    }

    .is-size-2-touch {
      font-size: 46px !important
    }

    .is-size-3-touch {
      font-size: 32px !important
    }

    .is-size-4-touch {
      font-size: 22px !important
    }

    .is-size-5-touch {
      font-size: 14px !important
    }

    .is-size-6-touch {
      font-size: 12px !important
    }

    .is-size-7-touch {
      font-size: 10px !important
    }
  }

  .has-text-centered {
    text-align: center !important
  }

  .has-text-justified {
    text-align: justify !important
  }

  .has-text-left {
    text-align: left !important
  }

  .has-text-right {
    text-align: right !important
  }

  @media screen and (min-width:768px),
  print {
    .has-text-centered-tablet {
      text-align: center !important
    }
  }

  @media screen and (min-width:768px) and (max-width:1169px) {
    .has-text-centered-tablet-only {
      text-align: center !important
    }
  }

  @media screen and (max-width:1169px) {
    .has-text-centered-touch {
      text-align: center !important
    }
  }

  @media screen and (min-width:1170px) {
    .is-size-1-desktop {
      font-size: 68px !important
    }

    .is-size-2-desktop {
      font-size: 46px !important
    }

    .is-size-3-desktop {
      font-size: 32px !important
    }

    .is-size-4-desktop {
      font-size: 22px !important
    }

    .is-size-5-desktop {
      font-size: 14px !important
    }

    .is-size-6-desktop {
      font-size: 12px !important
    }

    .is-size-7-desktop {
      font-size: 10px !important
    }

    .has-text-centered-desktop {
      text-align: center !important
    }
  }

  @media screen and (max-width:767px) {
    .has-text-centered-mobile {
      text-align: center !important
    }

    .has-text-justified-mobile {
      text-align: justify !important
    }
  }

  @media screen and (min-width:768px),
  print {
    .has-text-justified-tablet {
      text-align: justify !important
    }
  }

  @media screen and (min-width:768px) and (max-width:1169px) {
    .has-text-justified-tablet-only {
      text-align: justify !important
    }
  }

  @media screen and (max-width:1169px) {
    .has-text-justified-touch {
      text-align: justify !important
    }
  }

  @media screen and (min-width:1170px) {
    .has-text-justified-desktop {
      text-align: justify !important
    }

    .has-text-left-desktop {
      text-align: left !important
    }
  }

  @media screen and (min-width:768px),
  print {
    .has-text-left-tablet {
      text-align: left !important
    }
  }

  @media screen and (min-width:768px) and (max-width:1169px) {
    .has-text-left-tablet-only {
      text-align: left !important
    }
  }

  @media screen and (max-width:1169px) {
    .has-text-left-touch {
      text-align: left !important
    }
  }

  @media screen and (max-width:767px) {
    .has-text-left-mobile {
      text-align: left !important
    }

    .has-text-right-mobile {
      text-align: right !important
    }

    .is-block-mobile {
      display: block !important
    }
  }

  .is-capitalized {
    text-transform: capitalize !important
  }

  .is-lowercase {
    text-transform: lowercase !important
  }

  .is-uppercase {
    text-transform: uppercase !important
  }

  .heading,
  .menu-label {
    text-transform: uppercase
  }

  .is-italic {
    font-style: italic !important
  }

  .has-text-white {
    color: #fff !important
  }

  a.has-text-white:focus,
  a.has-text-white:hover {
    color: #e6e6e6 !important
  }

  .has-background-white {
    background-color: #fff !important
  }

  .has-text-black {
    color: #0a0a0a !important
  }

  a.has-text-black:focus,
  a.has-text-black:hover {
    color: #000 !important
  }

  .has-background-black {
    background-color: #0a0a0a !important
  }

  .has-text-light {
    color: #f5f5f5 !important
  }

  a.has-text-light:focus,
  a.has-text-light:hover {
    color: #dbdbdb !important
  }

  .has-background-light {
    background-color: #f5f5f5 !important
  }

  .has-text-dark {
    color: #363636 !important
  }

  a.has-text-dark:focus,
  a.has-text-dark:hover {
    color: #1c1c1c !important
  }

  .has-background-dark {
    background-color: #363636 !important
  }

  .has-text-primary {
    color: #e32126 !important
  }

  a.has-text-primary:focus,
  a.has-text-primary:hover {
    color: #ba171c !important
  }

  .has-background-primary {
    background-color: #e32126 !important
  }

  .has-text-link {
    color: #3273dc !important
  }

  a.has-text-link:focus,
  a.has-text-link:hover {
    color: #205bbc !important
  }

  .has-background-link {
    background-color: #3273dc !important
  }

  .has-text-info {
    color: #209cee !important
  }

  a.has-text-info:focus,
  a.has-text-info:hover {
    color: #0f81cc !important
  }

  .has-background-info {
    background-color: #209cee !important
  }

  .has-text-success {
    color: #23d160 !important
  }

  a.has-text-success:focus,
  a.has-text-success:hover {
    color: #1ca64c !important
  }

  .has-background-success {
    background-color: #23d160 !important
  }

  .has-text-warning {
    color: #ffdd57 !important
  }

  a.has-text-warning:focus,
  a.has-text-warning:hover {
    color: #ffd324 !important
  }

  .has-background-warning {
    background-color: #ffdd57 !important
  }

  .has-text-danger {
    color: #ff3860 !important
  }

  a.has-text-danger:focus,
  a.has-text-danger:hover {
    color: #ff0537 !important
  }

  .has-background-danger {
    background-color: #ff3860 !important
  }

  .has-text-gold {
    color: #c2b885 !important
  }

  a.has-text-gold:focus,
  a.has-text-gold:hover {
    color: #b1a463 !important
  }

  .has-background-gold {
    background-color: #c2b885 !important
  }

  .has-text-red {
    color: #e32126 !important
  }

  a.has-text-red:focus,
  a.has-text-red:hover {
    color: #ba171c !important
  }

  .has-background-red {
    background-color: #e32126 !important
  }

  .has-text-red-dark {
    color: #4c0b0a !important
  }

  a.has-text-red-dark:focus,
  a.has-text-red-dark:hover {
    color: #1f0404 !important
  }

  .has-background-red-dark {
    background-color: #4c0b0a !important
  }

  .has-text-secondary {
    color: #c2b885 !important
  }

  a.has-text-secondary:focus,
  a.has-text-secondary:hover {
    color: #b1a463 !important
  }

  .has-background-secondary {
    background-color: #c2b885 !important
  }

  a.has-text-grey-light:focus,
  a.has-text-grey-light:hover {
    color: #d6dae2 !important
  }

  a.has-text-grey:focus,
  a.has-text-grey:hover {
    color: #a4adba !important
  }

  a.has-text-grey-dark:focus,
  a.has-text-grey-dark:hover {
    color: #141516 !important
  }

  .has-text-green {
    color: #43c683 !important
  }

  a.has-text-green:focus,
  a.has-text-green:hover {
    color: #32a46a !important
  }

  .has-background-green {
    background-color: #43c683 !important
  }

  .has-text-black-bis {
    color: #121212 !important
  }

  .has-background-black-bis {
    background-color: #121212 !important
  }

  .has-text-black-ter {
    color: #242424 !important
  }

  .has-background-black-ter {
    background-color: #242424 !important
  }

  .has-text-grey-darker {
    color: #363636 !important
  }

  .has-background-grey-darker {
    background-color: #363636 !important
  }

  .has-text-grey-dark {
    color: #4a4a4a !important
  }

  .has-background-grey-dark {
    background-color: #4a4a4a !important
  }

  .has-text-grey {
    color: #7a7a7a !important
  }

  .has-background-grey {
    background-color: #7a7a7a !important
  }

  .has-text-grey-light {
    color: #b5b5b5 !important
  }

  .has-background-grey-light {
    background-color: #b5b5b5 !important
  }

  .has-text-grey-lighter {
    color: #dbdbdb !important
  }

  .has-background-grey-lighter {
    background-color: #dbdbdb !important
  }

  .has-text-white-ter {
    color: #f5f5f5 !important
  }

  .has-background-white-ter {
    background-color: #f5f5f5 !important
  }

  .has-text-white-bis {
    color: #fafafa !important
  }

  .has-background-white-bis {
    background-color: #fafafa !important
  }

  .box,
  .button {
    background-color: #fff
  }

  .has-text-weight-light {
    font-weight: 300 !important
  }

  .has-text-weight-normal {
    font-weight: 500 !important
  }

  .has-text-weight-semibold {
    font-weight: 600 !important
  }

  .has-text-weight-bold {
    font-weight: 900 !important
  }

  .is-block {
    display: block !important
  }

  @media screen and (min-width:768px),
  print {
    .has-text-right-tablet {
      text-align: right !important
    }

    .is-block-tablet {
      display: block !important
    }
  }

  @media screen and (min-width:768px) and (max-width:1169px) {
    .has-text-right-tablet-only {
      text-align: right !important
    }

    .is-block-tablet-only {
      display: block !important
    }
  }

  @media screen and (max-width:1169px) {
    .has-text-right-touch {
      text-align: right !important
    }

    .is-block-touch {
      display: block !important
    }
  }

  @media screen and (min-width:1170px) {
    .has-text-right-desktop {
      text-align: right !important
    }

    .is-block-desktop {
      display: block !important
    }
  }

  .is-flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important
  }

  @media screen and (max-width:767px) {
    .is-flex-mobile {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important
    }
  }

  @media screen and (min-width:768px),
  print {
    .is-flex-tablet {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important
    }
  }

  @media screen and (min-width:768px) and (max-width:1169px) {
    .is-flex-tablet-only {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important
    }
  }

  @media screen and (max-width:1169px) {
    .is-flex-touch {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important
    }
  }

  @media screen and (min-width:1170px) {
    .is-flex-desktop {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important
    }

    .is-inline-desktop {
      display: inline !important
    }
  }

  .is-inline {
    display: inline !important
  }

  @media screen and (max-width:767px) {
    .is-inline-mobile {
      display: inline !important
    }
  }

  @media screen and (min-width:768px),
  print {
    .is-inline-tablet {
      display: inline !important
    }
  }

  @media screen and (min-width:768px) and (max-width:1169px) {
    .is-inline-tablet-only {
      display: inline !important
    }
  }

  @media screen and (max-width:1169px) {
    .is-inline-touch {
      display: inline !important
    }
  }

  .is-inline-block {
    display: inline-block !important
  }

  @media screen and (max-width:767px) {
    .is-inline-block-mobile {
      display: inline-block !important
    }
  }

  @media screen and (min-width:768px),
  print {
    .is-inline-block-tablet {
      display: inline-block !important
    }
  }

  @media screen and (min-width:768px) and (max-width:1169px) {
    .is-inline-block-tablet-only {
      display: inline-block !important
    }
  }

  @media screen and (max-width:1169px) {
    .is-inline-block-touch {
      display: inline-block !important
    }
  }

  @media screen and (min-width:1170px) {
    .is-inline-block-desktop {
      display: inline-block !important
    }
  }

  .is-inline-flex {
    display: -webkit-inline-box !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important
  }

  @media screen and (max-width:767px) {
    .is-inline-flex-mobile {
      display: -webkit-inline-box !important;
      display: -ms-inline-flexbox !important;
      display: inline-flex !important
    }
  }

  @media screen and (min-width:768px),
  print {
    .is-inline-flex-tablet {
      display: -webkit-inline-box !important;
      display: -ms-inline-flexbox !important;
      display: inline-flex !important
    }
  }

  @media screen and (min-width:768px) and (max-width:1169px) {
    .is-inline-flex-tablet-only {
      display: -webkit-inline-box !important;
      display: -ms-inline-flexbox !important;
      display: inline-flex !important
    }
  }

  @media screen and (max-width:1169px) {
    .is-inline-flex-touch {
      display: -webkit-inline-box !important;
      display: -ms-inline-flexbox !important;
      display: inline-flex !important
    }
  }

  @media screen and (min-width:1170px) {
    .is-inline-flex-desktop {
      display: -webkit-inline-box !important;
      display: -ms-inline-flexbox !important;
      display: inline-flex !important
    }

    .is-hidden-desktop {
      display: none !important
    }
  }

  .is-hidden {
    display: none !important
  }

  .is-invisible {
    visibility: hidden !important
  }

  @media screen and (max-width:767px) {
    .is-hidden-mobile {
      display: none !important
    }

    .is-invisible-mobile {
      visibility: hidden !important
    }
  }

  @media screen and (min-width:768px),
  print {
    .is-hidden-tablet {
      display: none !important
    }

    .is-invisible-tablet {
      visibility: hidden !important
    }
  }

  @media screen and (min-width:768px) and (max-width:1169px) {
    .is-hidden-tablet-only {
      display: none !important
    }

    .is-invisible-tablet-only {
      visibility: hidden !important
    }
  }

  @media screen and (max-width:1169px) {
    .is-hidden-touch {
      display: none !important
    }

    .is-invisible-touch {
      visibility: hidden !important
    }
  }

  .is-marginless {
    margin: 0 !important
  }

  .is-paddingless {
    padding: 0 !important
  }

  .is-radiusless {
    border-radius: 0 !important
  }

  .is-shadowless {
    -webkit-box-shadow: none !important;
    box-shadow: none !important
  }

  .box {
    border-radius: 6px;
    -webkit-box-shadow: 0 2px 3px rgba(45, 47, 48, .1), 0 0 0 1px rgba(45, 47, 48, .1);
    box-shadow: 0 2px 3px rgba(45, 47, 48, .1), 0 0 0 1px rgba(45, 47, 48, .1);
    color: #2d2f30;
    display: block;
    padding: 15px
  }

  .button {
    border-color: #dbdbdb;
    border-width: 1px;
    color: #363636;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    padding: 5px 20px
  }

  .button strong {
    color: inherit
  }

  .button .icon,
  .button .icon.is-large,
  .button .icon.is-medium,
  .button .icon.is-small {
    height: 1.5em;
    width: 1.5em
  }

  .button .icon:first-child:not(:last-child) {
    margin-left: calc(-.375em - 1px);
    margin-right: .1875em
  }

  .button .icon:last-child:not(:first-child) {
    margin-left: .1875em;
    margin-right: calc(-.375em - 1px)
  }

  .button .icon:first-child:last-child {
    margin-left: calc(-.375em - 1px);
    margin-right: calc(-.375em - 1px)
  }

  .button.is-hovered,
  .button:hover {
    border-color: #b5b5b5;
    color: #4c0b0a
  }

  .button.is-focused,
  .button:focus {
    border-color: #3273dc;
    color: #363636
  }

  .button.is-focused:not(:active),
  .button:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25);
    box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25)
  }

  .button.is-active,
  .button:active {
    border-color: #4a4a4a;
    color: #363636
  }

  .button.is-text {
    background-color: transparent;
    border-color: transparent;
    color: #2d2f30
  }

  .button.is-text.is-focused,
  .button.is-text.is-hovered,
  .button.is-text:focus,
  .button.is-text:hover {
    background-color: #f5f5f5;
    color: #363636
  }

  .button.is-text.is-active,
  .button.is-text:active {
    background-color: #e8e8e8;
    color: #363636
  }

  .button.is-white,
  .button.is-white.is-active,
  .button.is-white.is-focused,
  .button.is-white:active,
  .button.is-white:focus {
    color: #0a0a0a;
    border-color: transparent
  }

  .button.is-text[disabled] {
    background-color: transparent;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-white {
    background-color: #fff
  }

  .button.is-white.is-hovered,
  .button.is-white:hover {
    background-color: #f9f9f9;
    border-color: transparent;
    color: #0a0a0a
  }

  .button.is-white.is-focused:not(:active),
  .button.is-white:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(255, 255, 255, .25);
    box-shadow: 0 0 0 .125em rgba(255, 255, 255, .25)
  }

  .button.is-white.is-active,
  .button.is-white:active {
    background-color: #f2f2f2
  }

  .button.is-white[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-white.is-inverted {
    background-color: #0a0a0a;
    color: #fff
  }

  .button.is-white.is-inverted:hover {
    background-color: #000
  }

  .button.is-white.is-inverted[disabled] {
    background-color: #0a0a0a;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-white.is-loading::after {
    border-color: transparent transparent #0a0a0a #0a0a0a !important
  }

  .button.is-white.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-white.is-outlined:focus,
  .button.is-white.is-outlined:hover {
    background-color: #fff;
    border-color: #fff;
    color: #0a0a0a
  }

  .button.is-white.is-outlined.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-white.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-white.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #0a0a0a;
    color: #0a0a0a
  }

  .button.is-white.is-inverted.is-outlined:focus,
  .button.is-white.is-inverted.is-outlined:hover {
    background-color: #0a0a0a;
    color: #fff
  }

  .button.is-white.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #0a0a0a;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #0a0a0a
  }

  .button.is-black,
  .button.is-black.is-active,
  .button.is-black.is-focused,
  .button.is-black:active,
  .button.is-black:focus {
    color: #fff;
    border-color: transparent
  }

  .button.is-black {
    background-color: #0a0a0a
  }

  .button.is-black.is-hovered,
  .button.is-black:hover {
    background-color: #040404;
    border-color: transparent;
    color: #fff
  }

  .button.is-black.is-focused:not(:active),
  .button.is-black:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(10, 10, 10, .25);
    box-shadow: 0 0 0 .125em rgba(10, 10, 10, .25)
  }

  .button.is-black.is-active,
  .button.is-black:active {
    background-color: #000
  }

  .button.is-black[disabled] {
    background-color: #0a0a0a;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-black.is-inverted {
    background-color: #fff;
    color: #0a0a0a
  }

  .button.is-black.is-inverted:hover {
    background-color: #f2f2f2
  }

  .button.is-black.is-inverted[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #0a0a0a
  }

  .button.is-black.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-black.is-outlined {
    background-color: transparent;
    border-color: #0a0a0a;
    color: #0a0a0a
  }

  .button.is-black.is-outlined:focus,
  .button.is-black.is-outlined:hover {
    background-color: #0a0a0a;
    border-color: #0a0a0a;
    color: #fff
  }

  .button.is-black.is-outlined.is-loading::after {
    border-color: transparent transparent #0a0a0a #0a0a0a !important
  }

  .button.is-black.is-outlined[disabled] {
    background-color: transparent;
    border-color: #0a0a0a;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #0a0a0a
  }

  .button.is-black.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-black.is-inverted.is-outlined:focus,
  .button.is-black.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #0a0a0a
  }

  .button.is-black.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-light,
  .button.is-light.is-active,
  .button.is-light.is-focused,
  .button.is-light:active,
  .button.is-light:focus {
    color: #363636;
    border-color: transparent
  }

  .button.is-light {
    background-color: #f5f5f5
  }

  .button.is-light.is-hovered,
  .button.is-light:hover {
    background-color: #eee;
    border-color: transparent;
    color: #363636
  }

  .button.is-light.is-focused:not(:active),
  .button.is-light:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(245, 245, 245, .25);
    box-shadow: 0 0 0 .125em rgba(245, 245, 245, .25)
  }

  .button.is-light.is-active,
  .button.is-light:active {
    background-color: #e8e8e8
  }

  .button.is-light[disabled] {
    background-color: #f5f5f5;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-light.is-inverted {
    background-color: #363636;
    color: #f5f5f5
  }

  .button.is-light.is-inverted:hover {
    background-color: #292929
  }

  .button.is-light.is-inverted[disabled] {
    background-color: #363636;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #f5f5f5
  }

  .button.is-light.is-loading::after {
    border-color: transparent transparent #363636 #363636 !important
  }

  .button.is-light.is-outlined {
    background-color: transparent;
    border-color: #f5f5f5;
    color: #f5f5f5
  }

  .button.is-light.is-outlined:focus,
  .button.is-light.is-outlined:hover {
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    color: #363636
  }

  .button.is-light.is-outlined.is-loading::after {
    border-color: transparent transparent #f5f5f5 #f5f5f5 !important
  }

  .button.is-light.is-outlined[disabled] {
    background-color: transparent;
    border-color: #f5f5f5;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #f5f5f5
  }

  .button.is-light.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #363636;
    color: #363636
  }

  .button.is-light.is-inverted.is-outlined:focus,
  .button.is-light.is-inverted.is-outlined:hover {
    background-color: #363636;
    color: #f5f5f5
  }

  .button.is-light.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #363636;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #363636
  }

  .button.is-dark,
  .button.is-dark.is-active,
  .button.is-dark.is-focused,
  .button.is-dark:active,
  .button.is-dark:focus {
    color: #f5f5f5;
    border-color: transparent
  }

  .button.is-dark {
    background-color: #363636
  }

  .button.is-dark.is-hovered,
  .button.is-dark:hover {
    background-color: #2f2f2f;
    border-color: transparent;
    color: #f5f5f5
  }

  .button.is-dark.is-focused:not(:active),
  .button.is-dark:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(54, 54, 54, .25);
    box-shadow: 0 0 0 .125em rgba(54, 54, 54, .25)
  }

  .button.is-dark.is-active,
  .button.is-dark:active {
    background-color: #292929
  }

  .button.is-dark[disabled] {
    background-color: #363636;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-dark.is-inverted {
    background-color: #f5f5f5;
    color: #363636
  }

  .button.is-dark.is-inverted:hover {
    background-color: #e8e8e8
  }

  .button.is-dark.is-inverted[disabled] {
    background-color: #f5f5f5;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #363636
  }

  .button.is-dark.is-loading::after {
    border-color: transparent transparent #f5f5f5 #f5f5f5 !important
  }

  .button.is-dark.is-outlined {
    background-color: transparent;
    border-color: #363636;
    color: #363636
  }

  .button.is-dark.is-outlined:focus,
  .button.is-dark.is-outlined:hover {
    background-color: #363636;
    border-color: #363636;
    color: #f5f5f5
  }

  .button.is-dark.is-outlined.is-loading::after {
    border-color: transparent transparent #363636 #363636 !important
  }

  .button.is-dark.is-outlined[disabled] {
    background-color: transparent;
    border-color: #363636;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #363636
  }

  .button.is-dark.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #f5f5f5;
    color: #f5f5f5
  }

  .button.is-dark.is-inverted.is-outlined:focus,
  .button.is-dark.is-inverted.is-outlined:hover {
    background-color: #f5f5f5;
    color: #363636
  }

  .button.is-dark.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #f5f5f5;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #f5f5f5
  }

  .button.is-primary {
    background-color: #e32126;
    border-color: transparent;
    color: #fff
  }

  .button.is-primary.is-hovered,
  .button.is-primary:hover {
    background-color: #dc1c21;
    border-color: transparent;
    color: #fff
  }

  .button.is-primary.is-focused,
  .button.is-primary:focus {
    border-color: transparent;
    color: #fff
  }

  .button.is-primary.is-focused:not(:active),
  .button.is-primary:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25);
    box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25)
  }

  .button.is-primary.is-active,
  .button.is-primary:active {
    background-color: #d01a1f;
    border-color: transparent;
    color: #fff
  }

  .button.is-primary[disabled] {
    background-color: #e32126;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-primary.is-inverted {
    background-color: #fff;
    color: #e32126
  }

  .button.is-primary.is-inverted:hover {
    background-color: #f2f2f2
  }

  .button.is-primary.is-inverted[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #e32126
  }

  .button.is-primary.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-primary.is-outlined {
    background-color: transparent;
    border-color: #e32126;
    color: #e32126
  }

  .button.is-primary.is-outlined:focus,
  .button.is-primary.is-outlined:hover {
    background-color: #e32126;
    border-color: #e32126;
    color: #fff
  }

  .button.is-primary.is-outlined.is-loading::after {
    border-color: transparent transparent #e32126 #e32126 !important
  }

  .button.is-primary.is-outlined[disabled] {
    background-color: transparent;
    border-color: #e32126;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #e32126
  }

  .button.is-primary.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-primary.is-inverted.is-outlined:focus,
  .button.is-primary.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #e32126
  }

  .button.is-primary.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-link {
    background-color: #3273dc;
    border-color: transparent;
    color: #fff
  }

  .button.is-link.is-hovered,
  .button.is-link:hover {
    background-color: #276cda;
    border-color: transparent;
    color: #fff
  }

  .button.is-link.is-focused,
  .button.is-link:focus {
    border-color: transparent;
    color: #fff
  }

  .button.is-link.is-focused:not(:active),
  .button.is-link:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(50, 115, 220, .25);
    box-shadow: 0 0 0 .125em rgba(50, 115, 220, .25)
  }

  .button.is-link.is-active,
  .button.is-link:active {
    background-color: #2366d1;
    border-color: transparent;
    color: #fff
  }

  .button.is-link[disabled] {
    background-color: #3273dc;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-link.is-inverted {
    background-color: #fff;
    color: #3273dc
  }

  .button.is-link.is-inverted:hover {
    background-color: #f2f2f2
  }

  .button.is-link.is-inverted[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #3273dc
  }

  .button.is-link.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-link.is-outlined {
    background-color: transparent;
    border-color: #3273dc;
    color: #3273dc
  }

  .button.is-link.is-outlined:focus,
  .button.is-link.is-outlined:hover {
    background-color: #3273dc;
    border-color: #3273dc;
    color: #fff
  }

  .button.is-link.is-outlined.is-loading::after {
    border-color: transparent transparent #3273dc #3273dc !important
  }

  .button.is-link.is-outlined[disabled] {
    background-color: transparent;
    border-color: #3273dc;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #3273dc
  }

  .button.is-link.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-link.is-inverted.is-outlined:focus,
  .button.is-link.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #3273dc
  }

  .button.is-link.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-info {
    background-color: #209cee;
    border-color: transparent;
    color: #fff
  }

  .button.is-info.is-hovered,
  .button.is-info:hover {
    background-color: #1496ed;
    border-color: transparent;
    color: #fff
  }

  .button.is-info.is-focused,
  .button.is-info:focus {
    border-color: transparent;
    color: #fff
  }

  .button.is-info.is-focused:not(:active),
  .button.is-info:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(32, 156, 238, .25);
    box-shadow: 0 0 0 .125em rgba(32, 156, 238, .25)
  }

  .button.is-info.is-active,
  .button.is-info:active {
    background-color: #118fe4;
    border-color: transparent;
    color: #fff
  }

  .button.is-info[disabled] {
    background-color: #209cee;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-info.is-inverted {
    background-color: #fff;
    color: #209cee
  }

  .button.is-info.is-inverted:hover {
    background-color: #f2f2f2
  }

  .button.is-info.is-inverted[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #209cee
  }

  .button.is-info.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-info.is-outlined {
    background-color: transparent;
    border-color: #209cee;
    color: #209cee
  }

  .button.is-info.is-outlined:focus,
  .button.is-info.is-outlined:hover {
    background-color: #209cee;
    border-color: #209cee;
    color: #fff
  }

  .button.is-info.is-outlined.is-loading::after {
    border-color: transparent transparent #209cee #209cee !important
  }

  .button.is-info.is-outlined[disabled] {
    background-color: transparent;
    border-color: #209cee;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #209cee
  }

  .button.is-info.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-info.is-inverted.is-outlined:focus,
  .button.is-info.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #209cee
  }

  .button.is-info.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-success {
    background-color: #23d160;
    border-color: transparent;
    color: #fff
  }

  .button.is-success.is-hovered,
  .button.is-success:hover {
    background-color: #22c65b;
    border-color: transparent;
    color: #fff
  }

  .button.is-success.is-focused,
  .button.is-success:focus {
    border-color: transparent;
    color: #fff
  }

  .button.is-success.is-focused:not(:active),
  .button.is-success:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(35, 209, 96, .25);
    box-shadow: 0 0 0 .125em rgba(35, 209, 96, .25)
  }

  .button.is-success.is-active,
  .button.is-success:active {
    background-color: #20bc56;
    border-color: transparent;
    color: #fff
  }

  .button.is-success[disabled] {
    background-color: #23d160;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-success.is-inverted {
    background-color: #fff;
    color: #23d160
  }

  .button.is-success.is-inverted:hover {
    background-color: #f2f2f2
  }

  .button.is-success.is-inverted[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #23d160
  }

  .button.is-success.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-success.is-outlined {
    background-color: transparent;
    border-color: #23d160;
    color: #23d160
  }

  .button.is-success.is-outlined:focus,
  .button.is-success.is-outlined:hover {
    background-color: #23d160;
    border-color: #23d160;
    color: #fff
  }

  .button.is-success.is-outlined.is-loading::after {
    border-color: transparent transparent #23d160 #23d160 !important
  }

  .button.is-success.is-outlined[disabled] {
    background-color: transparent;
    border-color: #23d160;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #23d160
  }

  .button.is-success.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-success.is-inverted.is-outlined:focus,
  .button.is-success.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #23d160
  }

  .button.is-success.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-warning,
  .button.is-warning.is-active,
  .button.is-warning.is-focused,
  .button.is-warning:active,
  .button.is-warning:focus {
    color: rgba(0, 0, 0, .7);
    border-color: transparent
  }

  .button.is-warning {
    background-color: #ffdd57
  }

  .button.is-warning.is-hovered,
  .button.is-warning:hover {
    background-color: #ffdb4a;
    border-color: transparent;
    color: rgba(0, 0, 0, .7)
  }

  .button.is-warning.is-focused:not(:active),
  .button.is-warning:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(255, 221, 87, .25);
    box-shadow: 0 0 0 .125em rgba(255, 221, 87, .25)
  }

  .button.is-warning.is-active,
  .button.is-warning:active {
    background-color: #ffd83d
  }

  .button.is-warning[disabled] {
    background-color: #ffdd57;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-warning.is-inverted,
  .button.is-warning.is-inverted:hover {
    background-color: rgba(0, 0, 0, .7)
  }

  .button.is-warning.is-inverted {
    color: #ffdd57
  }

  .button.is-warning.is-inverted[disabled] {
    background-color: rgba(0, 0, 0, .7);
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #ffdd57
  }

  .button.is-warning.is-loading::after {
    border-color: transparent transparent rgba(0, 0, 0, .7) rgba(0, 0, 0, .7) !important
  }

  .button.is-warning.is-outlined {
    background-color: transparent;
    border-color: #ffdd57;
    color: #ffdd57
  }

  .button.is-warning.is-outlined:focus,
  .button.is-warning.is-outlined:hover {
    background-color: #ffdd57;
    border-color: #ffdd57;
    color: rgba(0, 0, 0, .7)
  }

  .button.is-warning.is-outlined.is-loading::after {
    border-color: transparent transparent #ffdd57 #ffdd57 !important
  }

  .button.is-warning.is-outlined[disabled] {
    background-color: transparent;
    border-color: #ffdd57;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #ffdd57
  }

  .button.is-warning.is-inverted.is-outlined {
    background-color: transparent;
    border-color: rgba(0, 0, 0, .7);
    color: rgba(0, 0, 0, .7)
  }

  .button.is-warning.is-inverted.is-outlined:focus,
  .button.is-warning.is-inverted.is-outlined:hover {
    background-color: rgba(0, 0, 0, .7);
    color: #ffdd57
  }

  .button.is-warning.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: rgba(0, 0, 0, .7);
    -webkit-box-shadow: none;
    box-shadow: none;
    color: rgba(0, 0, 0, .7)
  }

  .button.is-danger,
  .button.is-danger.is-active,
  .button.is-danger.is-focused,
  .button.is-danger:active,
  .button.is-danger:focus {
    color: #fff;
    border-color: transparent
  }

  .button.is-danger {
    background-color: #ff3860
  }

  .button.is-danger.is-hovered,
  .button.is-danger:hover {
    background-color: #ff2b56;
    border-color: transparent;
    color: #fff
  }

  .button.is-danger.is-focused:not(:active),
  .button.is-danger:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(255, 56, 96, .25);
    box-shadow: 0 0 0 .125em rgba(255, 56, 96, .25)
  }

  .button.is-danger.is-active,
  .button.is-danger:active {
    background-color: #ff1f4b
  }

  .button.is-danger[disabled] {
    background-color: #ff3860;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-danger.is-inverted {
    background-color: #fff;
    color: #ff3860
  }

  .button.is-danger.is-inverted:hover {
    background-color: #f2f2f2
  }

  .button.is-danger.is-inverted[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #ff3860
  }

  .button.is-danger.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-danger.is-outlined {
    background-color: transparent;
    border-color: #ff3860;
    color: #ff3860
  }

  .button.is-danger.is-outlined:focus,
  .button.is-danger.is-outlined:hover {
    background-color: #ff3860;
    border-color: #ff3860;
    color: #fff
  }

  .button.is-danger.is-outlined.is-loading::after {
    border-color: transparent transparent #ff3860 #ff3860 !important
  }

  .button.is-danger.is-outlined[disabled] {
    background-color: transparent;
    border-color: #ff3860;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #ff3860
  }

  .button.is-danger.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-danger.is-inverted.is-outlined:focus,
  .button.is-danger.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #ff3860
  }

  .button.is-danger.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-gold {
    background-color: #c2b885;
    border-color: transparent;
    color: #fff
  }

  .button.is-gold.is-hovered,
  .button.is-gold:hover {
    background-color: #beb37d;
    border-color: transparent;
    color: #fff
  }

  .button.is-gold.is-focused,
  .button.is-gold:focus {
    border-color: transparent;
    color: #fff
  }

  .button.is-gold.is-focused:not(:active),
  .button.is-gold:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(194, 184, 133, .25);
    box-shadow: 0 0 0 .125em rgba(194, 184, 133, .25)
  }

  .button.is-gold.is-active,
  .button.is-gold:active {
    background-color: #baae74;
    border-color: transparent;
    color: #fff
  }

  .button.is-gold[disabled] {
    background-color: #c2b885;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-gold.is-inverted {
    background-color: #fff;
    color: #c2b885
  }

  .button.is-gold.is-inverted:hover {
    background-color: #f2f2f2
  }

  .button.is-gold.is-inverted[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #c2b885
  }

  .button.is-gold.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-gold.is-outlined {
    background-color: transparent;
    border-color: #c2b885;
    color: #c2b885
  }

  .button.is-gold.is-outlined:focus,
  .button.is-gold.is-outlined:hover {
    background-color: #c2b885;
    border-color: #c2b885;
    color: #fff
  }

  .button.is-gold.is-outlined.is-loading::after {
    border-color: transparent transparent #c2b885 #c2b885 !important
  }

  .button.is-gold.is-outlined[disabled] {
    background-color: transparent;
    border-color: #c2b885;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #c2b885
  }

  .button.is-gold.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-gold.is-inverted.is-outlined:focus,
  .button.is-gold.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #c2b885
  }

  .button.is-gold.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-red {
    background-color: #e32126;
    border-color: transparent;
    color: #fff
  }

  .button.is-red.is-hovered,
  .button.is-red:hover {
    background-color: #dc1c21;
    border-color: transparent;
    color: #fff
  }

  .button.is-red.is-focused,
  .button.is-red:focus {
    border-color: transparent;
    color: #fff
  }

  .button.is-red.is-focused:not(:active),
  .button.is-red:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25);
    box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25)
  }

  .button.is-red.is-active,
  .button.is-red:active {
    background-color: #d01a1f;
    border-color: transparent;
    color: #fff
  }

  .button.is-red[disabled] {
    background-color: #e32126;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-red.is-inverted {
    background-color: #fff;
    color: #e32126
  }

  .button.is-red.is-inverted:hover {
    background-color: #f2f2f2
  }

  .button.is-red.is-inverted[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #e32126
  }

  .button.is-red.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-red.is-outlined {
    background-color: transparent;
    border-color: #e32126;
    color: #e32126
  }

  .button.is-red.is-outlined:focus,
  .button.is-red.is-outlined:hover {
    background-color: #e32126;
    border-color: #e32126;
    color: #fff
  }

  .button.is-red.is-outlined.is-loading::after {
    border-color: transparent transparent #e32126 #e32126 !important
  }

  .button.is-red.is-outlined[disabled] {
    background-color: transparent;
    border-color: #e32126;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #e32126
  }

  .button.is-red.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-red.is-inverted.is-outlined:focus,
  .button.is-red.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #e32126
  }

  .button.is-red.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-red-dark {
    background-color: #4c0b0a;
    border-color: transparent;
    color: #fff
  }

  .button.is-red-dark.is-hovered,
  .button.is-red-dark:hover {
    background-color: #410909;
    border-color: transparent;
    color: #fff
  }

  .button.is-red-dark.is-focused,
  .button.is-red-dark:focus {
    border-color: transparent;
    color: #fff
  }

  .button.is-red-dark.is-focused:not(:active),
  .button.is-red-dark:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(76, 11, 10, .25);
    box-shadow: 0 0 0 .125em rgba(76, 11, 10, .25)
  }

  .button.is-red-dark.is-active,
  .button.is-red-dark:active {
    background-color: #350807;
    border-color: transparent;
    color: #fff
  }

  .button.is-red-dark[disabled] {
    background-color: #4c0b0a;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-red-dark.is-inverted {
    background-color: #fff;
    color: #4c0b0a
  }

  .button.is-red-dark.is-inverted:hover {
    background-color: #f2f2f2
  }

  .button.is-red-dark.is-inverted[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #4c0b0a
  }

  .button.is-red-dark.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-red-dark.is-outlined {
    background-color: transparent;
    border-color: #4c0b0a;
    color: #4c0b0a
  }

  .button.is-red-dark.is-outlined:focus,
  .button.is-red-dark.is-outlined:hover {
    background-color: #4c0b0a;
    border-color: #4c0b0a;
    color: #fff
  }

  .button.is-red-dark.is-outlined.is-loading::after {
    border-color: transparent transparent #4c0b0a #4c0b0a !important
  }

  .button.is-red-dark.is-outlined[disabled] {
    background-color: transparent;
    border-color: #4c0b0a;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #4c0b0a
  }

  .button.is-red-dark.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-red-dark.is-inverted.is-outlined:focus,
  .button.is-red-dark.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #4c0b0a
  }

  .button.is-red-dark.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-secondary {
    background-color: #c2b885;
    border-color: transparent;
    color: #fff
  }

  .button.is-secondary.is-hovered,
  .button.is-secondary:hover {
    background-color: #beb37d;
    border-color: transparent;
    color: #fff
  }

  .button.is-secondary.is-focused,
  .button.is-secondary:focus {
    border-color: transparent;
    color: #fff
  }

  .button.is-secondary.is-focused:not(:active),
  .button.is-secondary:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(194, 184, 133, .25);
    box-shadow: 0 0 0 .125em rgba(194, 184, 133, .25)
  }

  .button.is-secondary.is-active,
  .button.is-secondary:active {
    background-color: #baae74;
    border-color: transparent;
    color: #fff
  }

  .button.is-secondary[disabled] {
    background-color: #c2b885;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-secondary.is-inverted {
    background-color: #fff;
    color: #c2b885
  }

  .button.is-secondary.is-inverted:hover {
    background-color: #f2f2f2
  }

  .button.is-secondary.is-inverted[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #c2b885
  }

  .button.is-secondary.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-secondary.is-outlined {
    background-color: transparent;
    border-color: #c2b885;
    color: #c2b885
  }

  .button.is-secondary.is-outlined:focus,
  .button.is-secondary.is-outlined:hover {
    background-color: #c2b885;
    border-color: #c2b885;
    color: #fff
  }

  .button.is-secondary.is-outlined.is-loading::after {
    border-color: transparent transparent #c2b885 #c2b885 !important
  }

  .button.is-secondary.is-outlined[disabled] {
    background-color: transparent;
    border-color: #c2b885;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #c2b885
  }

  .button.is-secondary.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-secondary.is-inverted.is-outlined:focus,
  .button.is-secondary.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #c2b885
  }

  .button.is-secondary.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-grey-light {
    background-color: #f4f5f7;
    border-color: transparent;
    color: #2d2f30
  }

  .button.is-grey-light.is-hovered,
  .button.is-grey-light:hover {
    background-color: #edeef2;
    border-color: transparent;
    color: #2d2f30
  }

  .button.is-grey-light.is-focused,
  .button.is-grey-light:focus {
    border-color: transparent;
    color: #2d2f30
  }

  .button.is-grey-light.is-focused:not(:active),
  .button.is-grey-light:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(244, 245, 247, .25);
    box-shadow: 0 0 0 .125em rgba(244, 245, 247, .25)
  }

  .button.is-grey-light.is-active,
  .button.is-grey-light:active {
    background-color: #e5e8ec;
    border-color: transparent;
    color: #2d2f30
  }

  .button.is-grey-light[disabled] {
    background-color: #f4f5f7;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-grey-light.is-inverted {
    background-color: #2d2f30;
    color: #f4f5f7
  }

  .button.is-grey-light.is-inverted:hover {
    background-color: #212223
  }

  .button.is-grey-light.is-inverted[disabled] {
    background-color: #2d2f30;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #f4f5f7
  }

  .button.is-grey-light.is-loading::after {
    border-color: transparent transparent #2d2f30 #2d2f30 !important
  }

  .button.is-grey-light.is-outlined {
    background-color: transparent;
    border-color: #f4f5f7;
    color: #f4f5f7
  }

  .button.is-grey-light.is-outlined:focus,
  .button.is-grey-light.is-outlined:hover {
    background-color: #f4f5f7;
    border-color: #f4f5f7;
    color: #2d2f30
  }

  .button.is-grey-light.is-outlined.is-loading::after {
    border-color: transparent transparent #f4f5f7 #f4f5f7 !important
  }

  .button.is-grey-light.is-outlined[disabled] {
    background-color: transparent;
    border-color: #f4f5f7;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #f4f5f7
  }

  .button.is-grey-light.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #2d2f30;
    color: #2d2f30
  }

  .button.is-grey-light.is-inverted.is-outlined:focus,
  .button.is-grey-light.is-inverted.is-outlined:hover {
    background-color: #2d2f30;
    color: #f4f5f7
  }

  .button.is-grey-light.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #2d2f30;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #2d2f30
  }

  .button.is-grey {
    background-color: #c1c7d0;
    border-color: transparent;
    color: #2d2f30
  }

  .button.is-grey.is-hovered,
  .button.is-grey:hover {
    background-color: #bac0cb;
    border-color: transparent;
    color: #2d2f30
  }

  .button.is-grey.is-focused,
  .button.is-grey:focus {
    border-color: transparent;
    color: #2d2f30
  }

  .button.is-grey.is-focused:not(:active),
  .button.is-grey:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(193, 199, 208, .25);
    box-shadow: 0 0 0 .125em rgba(193, 199, 208, .25)
  }

  .button.is-grey.is-active,
  .button.is-grey:active {
    background-color: #b2bac5;
    border-color: transparent;
    color: #2d2f30
  }

  .button.is-grey[disabled] {
    background-color: #c1c7d0;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-grey.is-inverted {
    background-color: #2d2f30;
    color: #c1c7d0
  }

  .button.is-grey.is-inverted:hover {
    background-color: #212223
  }

  .button.is-grey.is-inverted[disabled] {
    background-color: #2d2f30;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #c1c7d0
  }

  .button.is-grey.is-loading::after {
    border-color: transparent transparent #2d2f30 #2d2f30 !important
  }

  .button.is-grey.is-outlined {
    background-color: transparent;
    border-color: #c1c7d0;
    color: #c1c7d0
  }

  .button.is-grey.is-outlined:focus,
  .button.is-grey.is-outlined:hover {
    background-color: #c1c7d0;
    border-color: #c1c7d0;
    color: #2d2f30
  }

  .button.is-grey.is-outlined.is-loading::after {
    border-color: transparent transparent #c1c7d0 #c1c7d0 !important
  }

  .button.is-grey.is-outlined[disabled] {
    background-color: transparent;
    border-color: #c1c7d0;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #c1c7d0
  }

  .button.is-grey.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #2d2f30;
    color: #2d2f30
  }

  .button.is-grey.is-inverted.is-outlined:focus,
  .button.is-grey.is-inverted.is-outlined:hover {
    background-color: #2d2f30;
    color: #c1c7d0
  }

  .button.is-grey.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #2d2f30;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #2d2f30
  }

  .button.is-grey-dark {
    background-color: #2d2f30;
    border-color: transparent;
    color: #fff
  }

  .button.is-grey-dark.is-hovered,
  .button.is-grey-dark:hover {
    background-color: #272929;
    border-color: transparent;
    color: #fff
  }

  .button.is-grey-dark.is-focused,
  .button.is-grey-dark:focus {
    border-color: transparent;
    color: #fff
  }

  .button.is-grey-dark.is-focused:not(:active),
  .button.is-grey-dark:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(45, 47, 48, .25);
    box-shadow: 0 0 0 .125em rgba(45, 47, 48, .25)
  }

  .button.is-grey-dark.is-active,
  .button.is-grey-dark:active {
    background-color: #212223;
    border-color: transparent;
    color: #fff
  }

  .button.is-grey-dark[disabled] {
    background-color: #2d2f30;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-grey-dark.is-inverted {
    background-color: #fff;
    color: #2d2f30
  }

  .button.is-grey-dark.is-inverted:hover {
    background-color: #f2f2f2
  }

  .button.is-grey-dark.is-inverted[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #2d2f30
  }

  .button.is-grey-dark.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-grey-dark.is-outlined {
    background-color: transparent;
    border-color: #2d2f30;
    color: #2d2f30
  }

  .button.is-grey-dark.is-outlined:focus,
  .button.is-grey-dark.is-outlined:hover {
    background-color: #2d2f30;
    border-color: #2d2f30;
    color: #fff
  }

  .button.is-grey-dark.is-outlined.is-loading::after {
    border-color: transparent transparent #2d2f30 #2d2f30 !important
  }

  .button.is-grey-dark.is-outlined[disabled] {
    background-color: transparent;
    border-color: #2d2f30;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #2d2f30
  }

  .button.is-grey-dark.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-grey-dark.is-inverted.is-outlined:focus,
  .button.is-grey-dark.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #2d2f30
  }

  .button.is-grey-dark.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-green {
    background-color: #43c683;
    border-color: transparent;
    color: #fff
  }

  .button.is-green.is-hovered,
  .button.is-green:hover {
    background-color: #3bc27d;
    border-color: transparent;
    color: #fff
  }

  .button.is-green.is-focused,
  .button.is-green:focus {
    border-color: transparent;
    color: #fff
  }

  .button.is-green.is-focused:not(:active),
  .button.is-green:focus:not(:active) {
    -webkit-box-shadow: 0 0 0 .125em rgba(67, 198, 131, .25);
    box-shadow: 0 0 0 .125em rgba(67, 198, 131, .25)
  }

  .button.is-green.is-active,
  .button.is-green:active {
    background-color: #38b876;
    border-color: transparent;
    color: #fff
  }

  .button.is-green[disabled] {
    background-color: #43c683;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button.is-green.is-inverted {
    background-color: #fff;
    color: #43c683
  }

  .button.is-green.is-inverted:hover {
    background-color: #f2f2f2
  }

  .button.is-green.is-inverted[disabled] {
    background-color: #fff;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #43c683
  }

  .button.is-green.is-loading::after {
    border-color: transparent transparent #fff #fff !important
  }

  .button.is-green.is-outlined {
    background-color: transparent;
    border-color: #43c683;
    color: #43c683
  }

  .button.is-green.is-outlined:focus,
  .button.is-green.is-outlined:hover {
    background-color: #43c683;
    border-color: #43c683;
    color: #fff
  }

  .button.is-green.is-outlined.is-loading::after {
    border-color: transparent transparent #43c683 #43c683 !important
  }

  .button.is-green.is-outlined[disabled] {
    background-color: transparent;
    border-color: #43c683;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #43c683
  }

  .button.is-green.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
  }

  .button.is-green.is-inverted.is-outlined:focus,
  .button.is-green.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #43c683
  }

  .button.is-green.is-inverted.is-outlined[disabled] {
    background-color: transparent;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff
  }

  .button.is-small {
    border-radius: 2px;
    font-size: 12px
  }

  .button.is-medium {
    font-size: 22px
  }

  .button.is-large {
    font-size: 32px
  }

  .button[disabled] {
    background-color: #fff;
    border-color: #dbdbdb;
    -webkit-box-shadow: none;
    box-shadow: none;
    opacity: .5
  }

  .button.is-fullwidth {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%
  }

  .button.is-loading {
    color: transparent !important;
    pointer-events: none
  }

  .button.is-loading::after {
    left: calc(50% - .5em);
    top: calc(50% - .5em);
    position: absolute !important
  }

  .control.has-icon:not(.has-icon-right) .icon,
  .control.has-icons-left .icon.is-left,
  .file-input {
    left: 0
  }

  .button.is-static {
    background-color: #f5f5f5;
    border-color: #dbdbdb;
    color: #c1c7d0;
    -webkit-box-shadow: none;
    box-shadow: none;
    pointer-events: none
  }

  .button.is-rounded {
    border-radius: 290486px;
    padding-left: 1em;
    padding-right: 1em
  }

  .buttons {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
  }

  .buttons .button {
    margin-bottom: 15px
  }

  .buttons .button:not(:last-child) {
    margin-right: 30px
  }

  .buttons:last-child {
    margin-bottom: -15px
  }

  .buttons:not(:last-child) {
    margin-bottom: 30px
  }

  .buttons.has-addons .button:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
  }

  .buttons.has-addons .button:not(:last-child) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    margin-right: -1px
  }

  .buttons.has-addons .button:last-child {
    margin-right: 0
  }

  .buttons.has-addons .button.is-hovered,
  .buttons.has-addons .button:hover {
    z-index: 2
  }

  .buttons.has-addons .button.is-active,
  .buttons.has-addons .button.is-focused,
  .buttons.has-addons .button.is-selected,
  .buttons.has-addons .button:active,
  .buttons.has-addons .button:focus {
    z-index: 3
  }

  .buttons.has-addons .button.is-active:hover,
  .buttons.has-addons .button.is-focused:hover,
  .buttons.has-addons .button.is-selected:hover,
  .buttons.has-addons .button:active:hover,
  .buttons.has-addons .button:focus:hover {
    z-index: 4
  }

  .buttons.has-addons .button.is-expanded {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
  }

  .buttons.is-centered {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .buttons.is-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
  }

  .container {
    margin: 0 auto;
    position: relative
  }

  @media screen and (min-width:1170px) {
    .is-invisible-desktop {
      visibility: hidden !important
    }

    .container {
      max-width: 1110px;
      width: 1110px
    }

    .container.is-fluid {
      margin-left: 30px;
      margin-right: 30px;
      max-width: none;
      width: auto
    }
  }

  .input,
  .textarea {
    background-color: #fff;
    border-color: #dbdbdb;
    color: #2d2f30;
    -webkit-box-shadow: inset 0 1px 2px rgba(45, 47, 48, .1);
    box-shadow: inset 0 1px 2px rgba(45, 47, 48, .1);
    max-width: 100%;
    width: 100%
  }

  .input::-moz-placeholder,
  .textarea::-moz-placeholder {
    color: rgba(45, 47, 48, .3)
  }

  .input::-webkit-input-placeholder,
  .textarea::-webkit-input-placeholder {
    color: rgba(45, 47, 48, .3)
  }

  .input:-moz-placeholder,
  .textarea:-moz-placeholder {
    color: rgba(45, 47, 48, .3)
  }

  .input:-ms-input-placeholder,
  .textarea:-ms-input-placeholder {
    color: rgba(45, 47, 48, .3)
  }

  .input.is-hovered,
  .input:hover,
  .textarea.is-hovered,
  .textarea:hover {
    border-color: #f4f5f7
  }

  .input.is-active,
  .input.is-focused,
  .input:active,
  .input:focus,
  .textarea.is-active,
  .textarea.is-focused,
  .textarea:active,
  .textarea:focus {
    border-color: #e32126;
    -webkit-box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25);
    box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25)
  }

  .input[disabled],
  .textarea[disabled] {
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #7a7a7a
  }

  .input[disabled]::-moz-placeholder,
  .textarea[disabled]::-moz-placeholder {
    color: rgba(122, 122, 122, .3)
  }

  .input[disabled]::-webkit-input-placeholder,
  .textarea[disabled]::-webkit-input-placeholder {
    color: rgba(122, 122, 122, .3)
  }

  .input[disabled]:-moz-placeholder,
  .textarea[disabled]:-moz-placeholder {
    color: rgba(122, 122, 122, .3)
  }

  .input[disabled]:-ms-input-placeholder,
  .textarea[disabled]:-ms-input-placeholder {
    color: rgba(122, 122, 122, .3)
  }

  .input[readonly],
  .textarea[readonly] {
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .input.is-white,
  .textarea.is-white {
    border-color: #fff
  }

  .input.is-white.is-active,
  .input.is-white.is-focused,
  .input.is-white:active,
  .input.is-white:focus,
  .textarea.is-white.is-active,
  .textarea.is-white.is-focused,
  .textarea.is-white:active,
  .textarea.is-white:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(255, 255, 255, .25);
    box-shadow: 0 0 0 .125em rgba(255, 255, 255, .25)
  }

  .input.is-black,
  .textarea.is-black {
    border-color: #0a0a0a
  }

  .input.is-black.is-active,
  .input.is-black.is-focused,
  .input.is-black:active,
  .input.is-black:focus,
  .textarea.is-black.is-active,
  .textarea.is-black.is-focused,
  .textarea.is-black:active,
  .textarea.is-black:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(10, 10, 10, .25);
    box-shadow: 0 0 0 .125em rgba(10, 10, 10, .25)
  }

  .input.is-light,
  .textarea.is-light {
    border-color: #f5f5f5
  }

  .input.is-light.is-active,
  .input.is-light.is-focused,
  .input.is-light:active,
  .input.is-light:focus,
  .textarea.is-light.is-active,
  .textarea.is-light.is-focused,
  .textarea.is-light:active,
  .textarea.is-light:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(245, 245, 245, .25);
    box-shadow: 0 0 0 .125em rgba(245, 245, 245, .25)
  }

  .input.is-dark,
  .textarea.is-dark {
    border-color: #363636
  }

  .input.is-dark.is-active,
  .input.is-dark.is-focused,
  .input.is-dark:active,
  .input.is-dark:focus,
  .textarea.is-dark.is-active,
  .textarea.is-dark.is-focused,
  .textarea.is-dark:active,
  .textarea.is-dark:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(54, 54, 54, .25);
    box-shadow: 0 0 0 .125em rgba(54, 54, 54, .25)
  }

  .input.is-primary,
  .textarea.is-primary {
    border-color: #e32126
  }

  .input.is-primary.is-active,
  .input.is-primary.is-focused,
  .input.is-primary:active,
  .input.is-primary:focus,
  .textarea.is-primary.is-active,
  .textarea.is-primary.is-focused,
  .textarea.is-primary:active,
  .textarea.is-primary:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25);
    box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25)
  }

  .input.is-link,
  .textarea.is-link {
    border-color: #3273dc
  }

  .input.is-link.is-active,
  .input.is-link.is-focused,
  .input.is-link:active,
  .input.is-link:focus,
  .textarea.is-link.is-active,
  .textarea.is-link.is-focused,
  .textarea.is-link:active,
  .textarea.is-link:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(50, 115, 220, .25);
    box-shadow: 0 0 0 .125em rgba(50, 115, 220, .25)
  }

  .input.is-info,
  .textarea.is-info {
    border-color: #209cee
  }

  .input.is-info.is-active,
  .input.is-info.is-focused,
  .input.is-info:active,
  .input.is-info:focus,
  .textarea.is-info.is-active,
  .textarea.is-info.is-focused,
  .textarea.is-info:active,
  .textarea.is-info:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(32, 156, 238, .25);
    box-shadow: 0 0 0 .125em rgba(32, 156, 238, .25)
  }

  .input.is-success,
  .textarea.is-success {
    border-color: #23d160
  }

  .input.is-success.is-active,
  .input.is-success.is-focused,
  .input.is-success:active,
  .input.is-success:focus,
  .textarea.is-success.is-active,
  .textarea.is-success.is-focused,
  .textarea.is-success:active,
  .textarea.is-success:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(35, 209, 96, .25);
    box-shadow: 0 0 0 .125em rgba(35, 209, 96, .25)
  }

  .input.is-warning,
  .textarea.is-warning {
    border-color: #ffdd57
  }

  .input.is-warning.is-active,
  .input.is-warning.is-focused,
  .input.is-warning:active,
  .input.is-warning:focus,
  .textarea.is-warning.is-active,
  .textarea.is-warning.is-focused,
  .textarea.is-warning:active,
  .textarea.is-warning:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(255, 221, 87, .25);
    box-shadow: 0 0 0 .125em rgba(255, 221, 87, .25)
  }

  .input.is-danger,
  .textarea.is-danger {
    border-color: #ff3860
  }

  .input.is-danger.is-active,
  .input.is-danger.is-focused,
  .input.is-danger:active,
  .input.is-danger:focus,
  .textarea.is-danger.is-active,
  .textarea.is-danger.is-focused,
  .textarea.is-danger:active,
  .textarea.is-danger:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(255, 56, 96, .25);
    box-shadow: 0 0 0 .125em rgba(255, 56, 96, .25)
  }

  .input.is-gold,
  .textarea.is-gold {
    border-color: #c2b885
  }

  .input.is-gold.is-active,
  .input.is-gold.is-focused,
  .input.is-gold:active,
  .input.is-gold:focus,
  .textarea.is-gold.is-active,
  .textarea.is-gold.is-focused,
  .textarea.is-gold:active,
  .textarea.is-gold:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(194, 184, 133, .25);
    box-shadow: 0 0 0 .125em rgba(194, 184, 133, .25)
  }

  .input.is-red,
  .textarea.is-red {
    border-color: #e32126
  }

  .input.is-red.is-active,
  .input.is-red.is-focused,
  .input.is-red:active,
  .input.is-red:focus,
  .textarea.is-red.is-active,
  .textarea.is-red.is-focused,
  .textarea.is-red:active,
  .textarea.is-red:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25);
    box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25)
  }

  .input.is-red-dark,
  .textarea.is-red-dark {
    border-color: #4c0b0a
  }

  .input.is-red-dark.is-active,
  .input.is-red-dark.is-focused,
  .input.is-red-dark:active,
  .input.is-red-dark:focus,
  .textarea.is-red-dark.is-active,
  .textarea.is-red-dark.is-focused,
  .textarea.is-red-dark:active,
  .textarea.is-red-dark:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(76, 11, 10, .25);
    box-shadow: 0 0 0 .125em rgba(76, 11, 10, .25)
  }

  .input.is-secondary,
  .textarea.is-secondary {
    border-color: #c2b885
  }

  .input.is-secondary.is-active,
  .input.is-secondary.is-focused,
  .input.is-secondary:active,
  .input.is-secondary:focus,
  .textarea.is-secondary.is-active,
  .textarea.is-secondary.is-focused,
  .textarea.is-secondary:active,
  .textarea.is-secondary:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(194, 184, 133, .25);
    box-shadow: 0 0 0 .125em rgba(194, 184, 133, .25)
  }

  .input.is-grey-light,
  .textarea.is-grey-light {
    border-color: #f4f5f7
  }

  .input.is-grey-light.is-active,
  .input.is-grey-light.is-focused,
  .input.is-grey-light:active,
  .input.is-grey-light:focus,
  .textarea.is-grey-light.is-active,
  .textarea.is-grey-light.is-focused,
  .textarea.is-grey-light:active,
  .textarea.is-grey-light:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(244, 245, 247, .25);
    box-shadow: 0 0 0 .125em rgba(244, 245, 247, .25)
  }

  .input.is-grey,
  .textarea.is-grey {
    border-color: #c1c7d0
  }

  .input.is-grey.is-active,
  .input.is-grey.is-focused,
  .input.is-grey:active,
  .input.is-grey:focus,
  .textarea.is-grey.is-active,
  .textarea.is-grey.is-focused,
  .textarea.is-grey:active,
  .textarea.is-grey:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(193, 199, 208, .25);
    box-shadow: 0 0 0 .125em rgba(193, 199, 208, .25)
  }

  .input.is-grey-dark,
  .textarea.is-grey-dark {
    border-color: #2d2f30
  }

  .input.is-grey-dark.is-active,
  .input.is-grey-dark.is-focused,
  .input.is-grey-dark:active,
  .input.is-grey-dark:focus,
  .textarea.is-grey-dark.is-active,
  .textarea.is-grey-dark.is-focused,
  .textarea.is-grey-dark:active,
  .textarea.is-grey-dark:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(45, 47, 48, .25);
    box-shadow: 0 0 0 .125em rgba(45, 47, 48, .25)
  }

  .input.is-green,
  .textarea.is-green {
    border-color: #43c683
  }

  .input.is-green.is-active,
  .input.is-green.is-focused,
  .input.is-green:active,
  .input.is-green:focus,
  .textarea.is-green.is-active,
  .textarea.is-green.is-focused,
  .textarea.is-green:active,
  .textarea.is-green:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(67, 198, 131, .25);
    box-shadow: 0 0 0 .125em rgba(67, 198, 131, .25)
  }

  .input.is-small,
  .textarea.is-small {
    border-radius: 2px;
    font-size: 12px
  }

  .input.is-medium,
  .textarea.is-medium {
    font-size: 22px
  }

  .input.is-large,
  .textarea.is-large {
    font-size: 32px
  }

  .input.is-fullwidth,
  .textarea.is-fullwidth {
    display: block;
    width: 100%
  }

  .input.is-inline,
  .textarea.is-inline {
    display: inline;
    width: auto
  }

  .input.is-rounded {
    border-radius: 290486px;
    padding-left: 1em;
    padding-right: 1em
  }

  .input.is-static {
    background-color: transparent;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding-left: 0;
    padding-right: 0
  }

  .textarea {
    display: block;
    max-width: 100%;
    min-width: 100%;
    padding: .625em;
    resize: vertical
  }

  .checkbox,
  .radio,
  .select {
    display: inline-block;
    position: relative
  }

  .textarea.has-fixed-size,
  .textarea.no-resize {
    resize: none
  }

  .textarea:not([rows]) {
    max-height: 600px;
    min-height: 120px
  }

  .textarea[rows] {
    height: auto;
    height: initial
  }

  .checkbox,
  .radio {
    cursor: pointer;
    line-height: 1.25
  }

  .checkbox:hover,
  .radio:hover {
    color: #363636
  }

  .checkbox[disabled],
  .radio[disabled] {
    color: #7a7a7a;
    cursor: not-allowed
  }

  .button-social:hover,
  .file-label,
  .navbar-burger,
  .navbar-link,
  .product-qty .icon:hover,
  .select select,
  a.navbar-item {
    cursor: pointer
  }

  .radio+.radio {
    margin-left: .5em
  }

  .select {
    max-width: 100%;
    vertical-align: top
  }

  .select:not(.is-multiple) {
    height: 2.25em
  }

  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: #e32126;
    right: 1.125em;
    z-index: 4
  }

  .select.is-rounded select {
    border-radius: 290486px;
    padding-left: 1em
  }

  .select select {
    background-color: #fff;
    border-color: #dbdbdb;
    color: #2d2f30;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: 0
  }

  .select select::-moz-placeholder {
    color: rgba(45, 47, 48, .3)
  }

  .select select::-webkit-input-placeholder {
    color: rgba(45, 47, 48, .3)
  }

  .select select:-moz-placeholder {
    color: rgba(45, 47, 48, .3)
  }

  .select select:-ms-input-placeholder {
    color: rgba(45, 47, 48, .3)
  }

  .select select.is-hovered,
  .select select:hover {
    border-color: #f4f5f7
  }

  .select select.is-active,
  .select select.is-focused,
  .select select:active,
  .select select:focus {
    border-color: #e32126;
    -webkit-box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25);
    box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25)
  }

  .select select[disabled] {
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #7a7a7a
  }

  .select select[disabled]::-moz-placeholder {
    color: rgba(122, 122, 122, .3)
  }

  .select select[disabled]::-webkit-input-placeholder {
    color: rgba(122, 122, 122, .3)
  }

  .select select[disabled]:-moz-placeholder {
    color: rgba(122, 122, 122, .3)
  }

  .select select[disabled]:-ms-input-placeholder {
    color: rgba(122, 122, 122, .3)
  }

  .select select::-ms-expand {
    display: none
  }

  .select select[disabled]:hover {
    border-color: #f5f5f5
  }

  .select select:not([multiple]) {
    padding-right: 2.5em
  }

  .select select[multiple] {
    height: auto;
    height: initial;
    padding: 0
  }

  .select select[multiple] option {
    padding: .5em 1em
  }

  .select:not(.is-multiple):not(.is-loading):hover::after {
    border-color: #363636
  }

  .select.is-white select,
  .select.is-white:not(:hover)::after {
    border-color: #fff
  }

  .select.is-white select.is-hovered,
  .select.is-white select:hover {
    border-color: #f2f2f2
  }

  .select.is-white select.is-active,
  .select.is-white select.is-focused,
  .select.is-white select:active,
  .select.is-white select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(255, 255, 255, .25);
    box-shadow: 0 0 0 .125em rgba(255, 255, 255, .25)
  }

  .select.is-black select,
  .select.is-black:not(:hover)::after {
    border-color: #0a0a0a
  }

  .select.is-black select.is-hovered,
  .select.is-black select:hover {
    border-color: #000
  }

  .select.is-black select.is-active,
  .select.is-black select.is-focused,
  .select.is-black select:active,
  .select.is-black select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(10, 10, 10, .25);
    box-shadow: 0 0 0 .125em rgba(10, 10, 10, .25)
  }

  .select.is-light select,
  .select.is-light:not(:hover)::after {
    border-color: #f5f5f5
  }

  .select.is-light select.is-hovered,
  .select.is-light select:hover {
    border-color: #e8e8e8
  }

  .select.is-light select.is-active,
  .select.is-light select.is-focused,
  .select.is-light select:active,
  .select.is-light select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(245, 245, 245, .25);
    box-shadow: 0 0 0 .125em rgba(245, 245, 245, .25)
  }

  .select.is-dark select,
  .select.is-dark:not(:hover)::after {
    border-color: #363636
  }

  .select.is-dark select.is-hovered,
  .select.is-dark select:hover {
    border-color: #292929
  }

  .select.is-dark select.is-active,
  .select.is-dark select.is-focused,
  .select.is-dark select:active,
  .select.is-dark select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(54, 54, 54, .25);
    box-shadow: 0 0 0 .125em rgba(54, 54, 54, .25)
  }

  .select.is-primary select,
  .select.is-primary:not(:hover)::after {
    border-color: #e32126
  }

  .select.is-primary select.is-hovered,
  .select.is-primary select:hover {
    border-color: #d01a1f
  }

  .select.is-primary select.is-active,
  .select.is-primary select.is-focused,
  .select.is-primary select:active,
  .select.is-primary select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25);
    box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25)
  }

  .select.is-link select,
  .select.is-link:not(:hover)::after {
    border-color: #3273dc
  }

  .select.is-link select.is-hovered,
  .select.is-link select:hover {
    border-color: #2366d1
  }

  .select.is-link select.is-active,
  .select.is-link select.is-focused,
  .select.is-link select:active,
  .select.is-link select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(50, 115, 220, .25);
    box-shadow: 0 0 0 .125em rgba(50, 115, 220, .25)
  }

  .select.is-info select,
  .select.is-info:not(:hover)::after {
    border-color: #209cee
  }

  .select.is-info select.is-hovered,
  .select.is-info select:hover {
    border-color: #118fe4
  }

  .select.is-info select.is-active,
  .select.is-info select.is-focused,
  .select.is-info select:active,
  .select.is-info select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(32, 156, 238, .25);
    box-shadow: 0 0 0 .125em rgba(32, 156, 238, .25)
  }

  .select.is-success select,
  .select.is-success:not(:hover)::after {
    border-color: #23d160
  }

  .select.is-success select.is-hovered,
  .select.is-success select:hover {
    border-color: #20bc56
  }

  .select.is-success select.is-active,
  .select.is-success select.is-focused,
  .select.is-success select:active,
  .select.is-success select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(35, 209, 96, .25);
    box-shadow: 0 0 0 .125em rgba(35, 209, 96, .25)
  }

  .select.is-warning select,
  .select.is-warning:not(:hover)::after {
    border-color: #ffdd57
  }

  .select.is-warning select.is-hovered,
  .select.is-warning select:hover {
    border-color: #ffd83d
  }

  .select.is-warning select.is-active,
  .select.is-warning select.is-focused,
  .select.is-warning select:active,
  .select.is-warning select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(255, 221, 87, .25);
    box-shadow: 0 0 0 .125em rgba(255, 221, 87, .25)
  }

  .select.is-danger select,
  .select.is-danger:not(:hover)::after {
    border-color: #ff3860
  }

  .select.is-danger select.is-hovered,
  .select.is-danger select:hover {
    border-color: #ff1f4b
  }

  .select.is-danger select.is-active,
  .select.is-danger select.is-focused,
  .select.is-danger select:active,
  .select.is-danger select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(255, 56, 96, .25);
    box-shadow: 0 0 0 .125em rgba(255, 56, 96, .25)
  }

  .select.is-gold select,
  .select.is-gold:not(:hover)::after {
    border-color: #c2b885
  }

  .select.is-gold select.is-hovered,
  .select.is-gold select:hover {
    border-color: #baae74
  }

  .select.is-gold select.is-active,
  .select.is-gold select.is-focused,
  .select.is-gold select:active,
  .select.is-gold select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(194, 184, 133, .25);
    box-shadow: 0 0 0 .125em rgba(194, 184, 133, .25)
  }

  .select.is-red select,
  .select.is-red:not(:hover)::after {
    border-color: #e32126
  }

  .select.is-red select.is-hovered,
  .select.is-red select:hover {
    border-color: #d01a1f
  }

  .select.is-red select.is-active,
  .select.is-red select.is-focused,
  .select.is-red select:active,
  .select.is-red select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25);
    box-shadow: 0 0 0 .125em rgba(227, 33, 38, .25)
  }

  .select.is-red-dark select,
  .select.is-red-dark:not(:hover)::after {
    border-color: #4c0b0a
  }

  .select.is-red-dark select.is-hovered,
  .select.is-red-dark select:hover {
    border-color: #350807
  }

  .select.is-red-dark select.is-active,
  .select.is-red-dark select.is-focused,
  .select.is-red-dark select:active,
  .select.is-red-dark select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(76, 11, 10, .25);
    box-shadow: 0 0 0 .125em rgba(76, 11, 10, .25)
  }

  .select.is-secondary select,
  .select.is-secondary:not(:hover)::after {
    border-color: #c2b885
  }

  .select.is-secondary select.is-hovered,
  .select.is-secondary select:hover {
    border-color: #baae74
  }

  .select.is-secondary select.is-active,
  .select.is-secondary select.is-focused,
  .select.is-secondary select:active,
  .select.is-secondary select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(194, 184, 133, .25);
    box-shadow: 0 0 0 .125em rgba(194, 184, 133, .25)
  }

  .select.is-grey-light select,
  .select.is-grey-light:not(:hover)::after {
    border-color: #f4f5f7
  }

  .select.is-grey-light select.is-hovered,
  .select.is-grey-light select:hover {
    border-color: #e5e8ec
  }

  .select.is-grey-light select.is-active,
  .select.is-grey-light select.is-focused,
  .select.is-grey-light select:active,
  .select.is-grey-light select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(244, 245, 247, .25);
    box-shadow: 0 0 0 .125em rgba(244, 245, 247, .25)
  }

  .select.is-grey select,
  .select.is-grey:not(:hover)::after {
    border-color: #c1c7d0
  }

  .select.is-grey select.is-hovered,
  .select.is-grey select:hover {
    border-color: #b2bac5
  }

  .select.is-grey select.is-active,
  .select.is-grey select.is-focused,
  .select.is-grey select:active,
  .select.is-grey select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(193, 199, 208, .25);
    box-shadow: 0 0 0 .125em rgba(193, 199, 208, .25)
  }

  .select.is-grey-dark select,
  .select.is-grey-dark:not(:hover)::after {
    border-color: #2d2f30
  }

  .select.is-grey-dark select.is-hovered,
  .select.is-grey-dark select:hover {
    border-color: #212223
  }

  .select.is-grey-dark select.is-active,
  .select.is-grey-dark select.is-focused,
  .select.is-grey-dark select:active,
  .select.is-grey-dark select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(45, 47, 48, .25);
    box-shadow: 0 0 0 .125em rgba(45, 47, 48, .25)
  }

  .select.is-green select,
  .select.is-green:not(:hover)::after {
    border-color: #43c683
  }

  .select.is-green select.is-hovered,
  .select.is-green select:hover {
    border-color: #38b876
  }

  .select.is-green select.is-active,
  .select.is-green select.is-focused,
  .select.is-green select:active,
  .select.is-green select:focus {
    -webkit-box-shadow: 0 0 0 .125em rgba(67, 198, 131, .25);
    box-shadow: 0 0 0 .125em rgba(67, 198, 131, .25)
  }

  .select.is-small {
    border-radius: 2px;
    font-size: 12px
  }

  .select.is-medium {
    font-size: 22px
  }

  .select.is-large {
    font-size: 32px
  }

  .select.is-disabled::after {
    border-color: #7a7a7a
  }

  .select.is-fullwidth,
  .select.is-fullwidth select {
    width: 100%
  }

  .select.is-loading::after {
    margin-top: 0;
    position: absolute;
    right: .625em;
    top: .625em;
    -webkit-transform: none;
    transform: none
  }

  .file,
  .file-label {
    position: relative
  }

  .control.has-icon.has-icon-right .icon,
  .control.has-icons-right .icon.is-right {
    right: 0
  }

  .select.is-loading.is-small:after {
    font-size: 12px
  }

  .select.is-loading.is-medium:after {
    font-size: 22px
  }

  .select.is-loading.is-large:after {
    font-size: 32px
  }

  .file {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
  }

  .file.is-white .file-cta {
    background-color: #fff;
    border-color: transparent;
    color: #0a0a0a
  }

  .file.is-white.is-hovered .file-cta,
  .file.is-white:hover .file-cta {
    background-color: #f9f9f9;
    border-color: transparent;
    color: #0a0a0a
  }

  .file.is-white.is-focused .file-cta,
  .file.is-white:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(255, 255, 255, .25);
    box-shadow: 0 0 .5em rgba(255, 255, 255, .25);
    color: #0a0a0a
  }

  .file.is-white.is-active .file-cta,
  .file.is-white:active .file-cta {
    background-color: #f2f2f2;
    border-color: transparent;
    color: #0a0a0a
  }

  .file.is-black .file-cta {
    background-color: #0a0a0a;
    border-color: transparent;
    color: #fff
  }

  .file.is-black.is-hovered .file-cta,
  .file.is-black:hover .file-cta {
    background-color: #040404;
    border-color: transparent;
    color: #fff
  }

  .file.is-black.is-focused .file-cta,
  .file.is-black:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(10, 10, 10, .25);
    box-shadow: 0 0 .5em rgba(10, 10, 10, .25);
    color: #fff
  }

  .file.is-black.is-active .file-cta,
  .file.is-black:active .file-cta {
    background-color: #000;
    border-color: transparent;
    color: #fff
  }

  .file.is-light .file-cta {
    background-color: #f5f5f5;
    border-color: transparent;
    color: #363636
  }

  .file.is-light.is-hovered .file-cta,
  .file.is-light:hover .file-cta {
    background-color: #eee;
    border-color: transparent;
    color: #363636
  }

  .file.is-light.is-focused .file-cta,
  .file.is-light:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(245, 245, 245, .25);
    box-shadow: 0 0 .5em rgba(245, 245, 245, .25);
    color: #363636
  }

  .file.is-light.is-active .file-cta,
  .file.is-light:active .file-cta {
    background-color: #e8e8e8;
    border-color: transparent;
    color: #363636
  }

  .file.is-dark .file-cta {
    background-color: #363636;
    border-color: transparent;
    color: #f5f5f5
  }

  .file.is-dark.is-hovered .file-cta,
  .file.is-dark:hover .file-cta {
    background-color: #2f2f2f;
    border-color: transparent;
    color: #f5f5f5
  }

  .file.is-dark.is-focused .file-cta,
  .file.is-dark:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(54, 54, 54, .25);
    box-shadow: 0 0 .5em rgba(54, 54, 54, .25);
    color: #f5f5f5
  }

  .file.is-dark.is-active .file-cta,
  .file.is-dark:active .file-cta {
    background-color: #292929;
    border-color: transparent;
    color: #f5f5f5
  }

  .file.is-primary .file-cta {
    background-color: #e32126;
    border-color: transparent;
    color: #fff
  }

  .file.is-primary.is-hovered .file-cta,
  .file.is-primary:hover .file-cta {
    background-color: #dc1c21;
    border-color: transparent;
    color: #fff
  }

  .file.is-primary.is-focused .file-cta,
  .file.is-primary:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(227, 33, 38, .25);
    box-shadow: 0 0 .5em rgba(227, 33, 38, .25);
    color: #fff
  }

  .file.is-primary.is-active .file-cta,
  .file.is-primary:active .file-cta {
    background-color: #d01a1f;
    border-color: transparent;
    color: #fff
  }

  .file.is-link .file-cta {
    background-color: #3273dc;
    border-color: transparent;
    color: #fff
  }

  .file.is-link.is-hovered .file-cta,
  .file.is-link:hover .file-cta {
    background-color: #276cda;
    border-color: transparent;
    color: #fff
  }

  .file.is-link.is-focused .file-cta,
  .file.is-link:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(50, 115, 220, .25);
    box-shadow: 0 0 .5em rgba(50, 115, 220, .25);
    color: #fff
  }

  .file.is-link.is-active .file-cta,
  .file.is-link:active .file-cta {
    background-color: #2366d1;
    border-color: transparent;
    color: #fff
  }

  .file.is-info .file-cta {
    background-color: #209cee;
    border-color: transparent;
    color: #fff
  }

  .file.is-info.is-hovered .file-cta,
  .file.is-info:hover .file-cta {
    background-color: #1496ed;
    border-color: transparent;
    color: #fff
  }

  .file.is-info.is-focused .file-cta,
  .file.is-info:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(32, 156, 238, .25);
    box-shadow: 0 0 .5em rgba(32, 156, 238, .25);
    color: #fff
  }

  .file.is-info.is-active .file-cta,
  .file.is-info:active .file-cta {
    background-color: #118fe4;
    border-color: transparent;
    color: #fff
  }

  .file.is-success .file-cta {
    background-color: #23d160;
    border-color: transparent;
    color: #fff
  }

  .file.is-success.is-hovered .file-cta,
  .file.is-success:hover .file-cta {
    background-color: #22c65b;
    border-color: transparent;
    color: #fff
  }

  .file.is-success.is-focused .file-cta,
  .file.is-success:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(35, 209, 96, .25);
    box-shadow: 0 0 .5em rgba(35, 209, 96, .25);
    color: #fff
  }

  .file.is-success.is-active .file-cta,
  .file.is-success:active .file-cta {
    background-color: #20bc56;
    border-color: transparent;
    color: #fff
  }

  .file.is-warning .file-cta {
    background-color: #ffdd57;
    border-color: transparent;
    color: rgba(0, 0, 0, .7)
  }

  .file.is-warning.is-hovered .file-cta,
  .file.is-warning:hover .file-cta {
    background-color: #ffdb4a;
    border-color: transparent;
    color: rgba(0, 0, 0, .7)
  }

  .file.is-warning.is-focused .file-cta,
  .file.is-warning:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(255, 221, 87, .25);
    box-shadow: 0 0 .5em rgba(255, 221, 87, .25);
    color: rgba(0, 0, 0, .7)
  }

  .file.is-warning.is-active .file-cta,
  .file.is-warning:active .file-cta {
    background-color: #ffd83d;
    border-color: transparent;
    color: rgba(0, 0, 0, .7)
  }

  .file.is-danger .file-cta {
    background-color: #ff3860;
    border-color: transparent;
    color: #fff
  }

  .file.is-danger.is-hovered .file-cta,
  .file.is-danger:hover .file-cta {
    background-color: #ff2b56;
    border-color: transparent;
    color: #fff
  }

  .file.is-danger.is-focused .file-cta,
  .file.is-danger:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(255, 56, 96, .25);
    box-shadow: 0 0 .5em rgba(255, 56, 96, .25);
    color: #fff
  }

  .file.is-danger.is-active .file-cta,
  .file.is-danger:active .file-cta {
    background-color: #ff1f4b;
    border-color: transparent;
    color: #fff
  }

  .file.is-gold .file-cta {
    background-color: #c2b885;
    border-color: transparent;
    color: #fff
  }

  .file.is-gold.is-hovered .file-cta,
  .file.is-gold:hover .file-cta {
    background-color: #beb37d;
    border-color: transparent;
    color: #fff
  }

  .file.is-gold.is-focused .file-cta,
  .file.is-gold:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(194, 184, 133, .25);
    box-shadow: 0 0 .5em rgba(194, 184, 133, .25);
    color: #fff
  }

  .file.is-gold.is-active .file-cta,
  .file.is-gold:active .file-cta {
    background-color: #baae74;
    border-color: transparent;
    color: #fff
  }

  .file.is-red .file-cta {
    background-color: #e32126;
    border-color: transparent;
    color: #fff
  }

  .file.is-red.is-hovered .file-cta,
  .file.is-red:hover .file-cta {
    background-color: #dc1c21;
    border-color: transparent;
    color: #fff
  }

  .file.is-red.is-focused .file-cta,
  .file.is-red:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(227, 33, 38, .25);
    box-shadow: 0 0 .5em rgba(227, 33, 38, .25);
    color: #fff
  }

  .file.is-red.is-active .file-cta,
  .file.is-red:active .file-cta {
    background-color: #d01a1f;
    border-color: transparent;
    color: #fff
  }

  .file.is-red-dark .file-cta {
    background-color: #4c0b0a;
    border-color: transparent;
    color: #fff
  }

  .file.is-red-dark.is-hovered .file-cta,
  .file.is-red-dark:hover .file-cta {
    background-color: #410909;
    border-color: transparent;
    color: #fff
  }

  .file.is-red-dark.is-focused .file-cta,
  .file.is-red-dark:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(76, 11, 10, .25);
    box-shadow: 0 0 .5em rgba(76, 11, 10, .25);
    color: #fff
  }

  .file.is-red-dark.is-active .file-cta,
  .file.is-red-dark:active .file-cta {
    background-color: #350807;
    border-color: transparent;
    color: #fff
  }

  .file.is-secondary .file-cta {
    background-color: #c2b885;
    border-color: transparent;
    color: #fff
  }

  .file.is-secondary.is-hovered .file-cta,
  .file.is-secondary:hover .file-cta {
    background-color: #beb37d;
    border-color: transparent;
    color: #fff
  }

  .file.is-secondary.is-focused .file-cta,
  .file.is-secondary:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(194, 184, 133, .25);
    box-shadow: 0 0 .5em rgba(194, 184, 133, .25);
    color: #fff
  }

  .file.is-secondary.is-active .file-cta,
  .file.is-secondary:active .file-cta {
    background-color: #baae74;
    border-color: transparent;
    color: #fff
  }

  .file.is-grey-light .file-cta {
    background-color: #f4f5f7;
    border-color: transparent;
    color: #2d2f30
  }

  .file.is-grey-light.is-hovered .file-cta,
  .file.is-grey-light:hover .file-cta {
    background-color: #edeef2;
    border-color: transparent;
    color: #2d2f30
  }

  .file.is-grey-light.is-focused .file-cta,
  .file.is-grey-light:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(244, 245, 247, .25);
    box-shadow: 0 0 .5em rgba(244, 245, 247, .25);
    color: #2d2f30
  }

  .file.is-grey-light.is-active .file-cta,
  .file.is-grey-light:active .file-cta {
    background-color: #e5e8ec;
    border-color: transparent;
    color: #2d2f30
  }

  .file.is-grey .file-cta {
    background-color: #c1c7d0;
    border-color: transparent;
    color: #2d2f30
  }

  .file.is-grey.is-hovered .file-cta,
  .file.is-grey:hover .file-cta {
    background-color: #bac0cb;
    border-color: transparent;
    color: #2d2f30
  }

  .file.is-grey.is-focused .file-cta,
  .file.is-grey:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(193, 199, 208, .25);
    box-shadow: 0 0 .5em rgba(193, 199, 208, .25);
    color: #2d2f30
  }

  .file.is-grey.is-active .file-cta,
  .file.is-grey:active .file-cta {
    background-color: #b2bac5;
    border-color: transparent;
    color: #2d2f30
  }

  .file.is-grey-dark .file-cta {
    background-color: #2d2f30;
    border-color: transparent;
    color: #fff
  }

  .file.is-grey-dark.is-hovered .file-cta,
  .file.is-grey-dark:hover .file-cta {
    background-color: #272929;
    border-color: transparent;
    color: #fff
  }

  .file.is-grey-dark.is-focused .file-cta,
  .file.is-grey-dark:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(45, 47, 48, .25);
    box-shadow: 0 0 .5em rgba(45, 47, 48, .25);
    color: #fff
  }

  .file.is-grey-dark.is-active .file-cta,
  .file.is-grey-dark:active .file-cta {
    background-color: #212223;
    border-color: transparent;
    color: #fff
  }

  .file.is-green .file-cta {
    background-color: #43c683;
    border-color: transparent;
    color: #fff
  }

  .file.is-green.is-hovered .file-cta,
  .file.is-green:hover .file-cta {
    background-color: #3bc27d;
    border-color: transparent;
    color: #fff
  }

  .file.is-green.is-focused .file-cta,
  .file.is-green:focus .file-cta {
    border-color: transparent;
    -webkit-box-shadow: 0 0 .5em rgba(67, 198, 131, .25);
    box-shadow: 0 0 .5em rgba(67, 198, 131, .25);
    color: #fff
  }

  .file.is-green.is-active .file-cta,
  .file.is-green:active .file-cta {
    background-color: #38b876;
    border-color: transparent;
    color: #fff
  }

  .file.is-small {
    font-size: 12px
  }

  .file.is-medium {
    font-size: 22px
  }

  .file.is-medium .file-icon .fa {
    font-size: 21px
  }

  .file.is-large {
    font-size: 32px
  }

  .file.is-large .file-icon .fa {
    font-size: 28px
  }

  .file.has-name .file-cta {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
  }

  .file.has-name .file-name {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
  }

  .file.has-name.is-empty .file-cta {
    border-radius: 4px
  }

  .file.has-name.is-empty .file-name {
    display: none
  }

  .file.is-boxed .file-label {
    -ms-flex-direction: column;
    flex-direction: column
  }

  .file.is-boxed .file-cta {
    -ms-flex-direction: column;
    flex-direction: column;
    height: auto;
    padding: 1em 3em
  }

  .file.is-boxed .file-name {
    border-width: 0 1px 1px
  }

  .file.is-boxed .file-icon {
    height: 1.5em;
    width: 1.5em
  }

  .file.is-boxed .file-icon .fa {
    font-size: 21px
  }

  .file.is-boxed.is-small .file-icon .fa {
    font-size: 14px
  }

  .file.is-boxed.is-medium .file-icon .fa {
    font-size: 28px
  }

  .file.is-boxed.is-large .file-icon .fa {
    font-size: 35px
  }

  .file.is-boxed.has-name .file-cta {
    border-radius: 4px 4px 0 0
  }

  .file.is-boxed.has-name .file-name {
    border-radius: 0 0 4px 4px;
    border-width: 0 1px 1px
  }

  .file.is-centered {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .file.is-fullwidth .file-label {
    width: 100%
  }

  .file.is-fullwidth .file-name {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: none
  }

  .file.is-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
  }

  .file.is-right .file-cta {
    border-radius: 0 4px 4px 0
  }

  .file.is-right .file-name {
    border-radius: 4px 0 0 4px;
    border-width: 1px 0 1px 1px;
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1
  }

  .file-label {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    overflow: hidden
  }

  .file-icon,
  .number {
    -webkit-box-align: center
  }

  .file-label:hover .file-cta {
    background-color: #eee;
    color: #363636
  }

  .file-label:hover .file-name {
    border-color: #d5d5d5
  }

  .file-label:active .file-cta {
    background-color: #e8e8e8;
    color: #363636
  }

  .file-cta,
  .menu-list a:hover,
  .number {
    background-color: #f5f5f5
  }

  .file-label:active .file-name {
    border-color: #cfcfcf
  }

  .file-input {
    height: .01em;
    outline: 0;
    position: absolute;
    top: 0;
    width: .01em
  }

  .file-cta,
  .file-name {
    border-color: #dbdbdb;
    border-radius: 4px;
    font-size: 1em;
    padding-left: 1em;
    padding-right: 1em
  }

  .file-icon .fa,
  .label {
    font-size: 14px
  }

  .control.has-icon:not(.has-icon-right) .input,
  .control.has-icons-left .input,
  .control.has-icons-left .select select {
    padding-left: 2.25em
  }

  .control.has-icon.has-icon-right .input,
  .control.has-icons-right .input,
  .control.has-icons-right .select select {
    padding-right: 2.25em
  }

  .file-cta {
    color: #2d2f30
  }

  .file-name {
    border-color: #dbdbdb;
    border-style: solid;
    border-width: 1px 1px 1px 0;
    display: block;
    max-width: 16em;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis
  }

  .media .media,
  .media+.media {
    border-top: 1px solid rgba(219, 219, 219, .5)
  }

  .field.has-addons,
  .file-icon {
    display: -webkit-box;
    display: -ms-flexbox
  }

  .file-icon {
    -ms-flex-align: center;
    align-items: center;
    display: flex;
    height: 1em;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: .5em;
    width: 1em
  }

  .help,
  .label {
    display: block
  }

  .label {
    color: #363636;
    font-weight: 900
  }

  .label:not(:last-child) {
    margin-bottom: .5em
  }

  .label.is-small {
    font-size: 12px
  }

  .label.is-medium {
    font-size: 22px
  }

  .label.is-large {
    font-size: 32px
  }

  .help {
    font-size: 12px;
    margin-top: .25rem
  }

  .help.is-white {
    color: #fff
  }

  .help.is-black {
    color: #0a0a0a
  }

  .help.is-light {
    color: #f5f5f5
  }

  .help.is-dark {
    color: #363636
  }

  .help.is-primary {
    color: #e32126
  }

  .help.is-link {
    color: #3273dc
  }

  .help.is-info {
    color: #209cee
  }

  .help.is-success {
    color: #23d160
  }

  .help.is-warning {
    color: #ffdd57
  }

  .help.is-danger {
    color: #ff3860
  }

  .help.is-gold {
    color: #c2b885
  }

  .help.is-red {
    color: #e32126
  }

  .help.is-red-dark {
    color: #4c0b0a
  }

  .help.is-secondary {
    color: #c2b885
  }

  .help.is-grey-light {
    color: #f4f5f7
  }

  .help.is-grey {
    color: #c1c7d0
  }

  .help.is-grey-dark {
    color: #2d2f30
  }

  .help.is-green {
    color: #43c683
  }

  .field.has-addons {
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
  }

  .field.has-addons .control:not(:last-child) {
    margin-right: -1px
  }

  .field.has-addons .control:not(:first-child):not(:last-child) .button,
  .field.has-addons .control:not(:first-child):not(:last-child) .input,
  .field.has-addons .control:not(:first-child):not(:last-child) .select select {
    border-radius: 0
  }

  .field.has-addons .control:first-child .button,
  .field.has-addons .control:first-child .input,
  .field.has-addons .control:first-child .select select {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
  }

  .field.has-addons .control:last-child .button,
  .field.has-addons .control:last-child .input,
  .field.has-addons .control:last-child .select select {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
  }

  .image img.is-rounded,
  .number {
    border-radius: 290486px
  }

  .field.has-addons .control .button.is-hovered,
  .field.has-addons .control .button:hover,
  .field.has-addons .control .input.is-hovered,
  .field.has-addons .control .input:hover,
  .field.has-addons .control .select select.is-hovered,
  .field.has-addons .control .select select:hover {
    z-index: 2
  }

  .field.has-addons .control .button.is-active,
  .field.has-addons .control .button.is-focused,
  .field.has-addons .control .button:active,
  .field.has-addons .control .button:focus,
  .field.has-addons .control .input.is-active,
  .field.has-addons .control .input.is-focused,
  .field.has-addons .control .input:active,
  .field.has-addons .control .input:focus,
  .field.has-addons .control .select select.is-active,
  .field.has-addons .control .select select.is-focused,
  .field.has-addons .control .select select:active,
  .field.has-addons .control .select select:focus {
    z-index: 3
  }

  .field.has-addons .control .button.is-active:hover,
  .field.has-addons .control .button.is-focused:hover,
  .field.has-addons .control .button:active:hover,
  .field.has-addons .control .button:focus:hover,
  .field.has-addons .control .input.is-active:hover,
  .field.has-addons .control .input.is-focused:hover,
  .field.has-addons .control .input:active:hover,
  .field.has-addons .control .input:focus:hover,
  .field.has-addons .control .select select.is-active:hover,
  .field.has-addons .control .select select.is-focused:hover,
  .field.has-addons .control .select select:active:hover,
  .field.has-addons .control .select select:focus:hover {
    z-index: 4
  }

  .field.has-addons .control.is-expanded {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
  }

  .field.has-addons.has-addons-centered {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .field.has-addons.has-addons-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
  }

  .field.has-addons.has-addons-fullwidth .control {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0
  }

  .field.is-grouped {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
  }

  .field.is-grouped>.control {
    -ms-flex-negative: 0;
    flex-shrink: 0
  }

  .field.is-grouped>.control:not(:last-child) {
    margin-bottom: 0;
    margin-right: 15px
  }

  .field.is-grouped>.control.is-expanded {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1
  }

  .field.is-grouped.is-grouped-centered {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .field.is-grouped.is-grouped-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
  }

  .field.is-grouped.is-grouped-multiline {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }

  .field.is-grouped.is-grouped-multiline>.control:last-child,
  .field.is-grouped.is-grouped-multiline>.control:not(:last-child) {
    margin-bottom: 15px
  }

  .field.is-grouped.is-grouped-multiline:last-child {
    margin-bottom: -15px
  }

  .field.is-grouped.is-grouped-multiline:not(:last-child) {
    margin-bottom: 0
  }

  .field-label .label {
    font-size: inherit
  }

  @media screen and (max-width:767px) {
    .field-label {
      margin-bottom: .5rem
    }
  }

  .field-body .field .field {
    margin-bottom: 0
  }

  @media screen and (min-width:768px),
  print {
    .field.is-horizontal {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    .field-label {
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      margin-right: 1.5rem;
      text-align: right
    }

    .field-label.is-small {
      font-size: 12px;
      padding-top: .375em
    }

    .field-label.is-normal {
      padding-top: .375em
    }

    .field-label.is-medium {
      font-size: 22px;
      padding-top: .375em
    }

    .field-label.is-large {
      font-size: 32px;
      padding-top: .375em
    }

    .field-body {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 5;
      -ms-flex-positive: 5;
      flex-grow: 5;
      -ms-flex-negative: 1;
      flex-shrink: 1
    }

    .field-body .field {
      margin-bottom: 0
    }

    .field-body>.field {
      -ms-flex-negative: 1;
      flex-shrink: 1
    }

    .field-body>.field:not(.is-narrow) {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1
    }

    .field-body>.field:not(:last-child) {
      margin-right: 15px
    }
  }

  .heading,
  .image,
  .image img {
    display: block
  }

  .control {
    font-size: 14px;
    position: relative;
    text-align: left
  }

  .control.has-icon .icon,
  .control.has-icons-left .icon,
  .control.has-icons-right .icon {
    pointer-events: none;
    position: absolute;
    top: 0
  }

  .control.has-icon .icon {
    color: #dbdbdb;
    height: 2.25em;
    width: 2.25em;
    z-index: 4
  }

  .control.has-icon .input:focus+.icon,
  .control.has-icons-left .input:focus~.icon,
  .control.has-icons-left .select:focus~.icon,
  .control.has-icons-right .input:focus~.icon,
  .control.has-icons-right .select:focus~.icon {
    color: #c1c7d0
  }

  .control.has-icon .input.is-small+.icon {
    font-size: 12px
  }

  .control.has-icon .input.is-medium+.icon {
    font-size: 22px
  }

  .control.has-icon .input.is-large+.icon {
    font-size: 32px
  }

  .control.has-icons-left .input.is-small~.icon,
  .control.has-icons-left .select.is-small~.icon,
  .control.has-icons-right .input.is-small~.icon,
  .control.has-icons-right .select.is-small~.icon {
    font-size: 12px
  }

  .control.has-icons-left .input.is-medium~.icon,
  .control.has-icons-left .select.is-medium~.icon,
  .control.has-icons-right .input.is-medium~.icon,
  .control.has-icons-right .select.is-medium~.icon {
    font-size: 22px
  }

  .control.has-icons-left .input.is-large~.icon,
  .control.has-icons-left .select.is-large~.icon,
  .control.has-icons-right .input.is-large~.icon,
  .control.has-icons-right .select.is-large~.icon {
    font-size: 32px
  }

  .control.is-loading::after {
    position: absolute !important;
    right: .625em;
    top: .625em;
    z-index: 4
  }

  .control.is-loading.is-small:after {
    font-size: 12px
  }

  .control.is-loading.is-medium:after {
    font-size: 22px
  }

  .control.is-loading.is-large:after {
    font-size: 32px
  }

  .image {
    position: relative
  }

  .image img {
    height: auto;
    width: 100%
  }

  .image.is-16by9 img,
  .image.is-1by1 img,
  .image.is-1by2 img,
  .image.is-1by3 img,
  .image.is-2by1 img,
  .image.is-2by3 img,
  .image.is-3by1 img,
  .image.is-3by2 img,
  .image.is-3by4 img,
  .image.is-3by5 img,
  .image.is-4by3 img,
  .image.is-4by5 img,
  .image.is-5by3 img,
  .image.is-5by4 img,
  .image.is-9by16 img,
  .image.is-square img {
    height: 100%;
    width: 100%
  }

  .image.is-1by1,
  .image.is-square {
    padding-top: 100%
  }

  .image.is-5by4 {
    padding-top: 80%
  }

  .image.is-4by3 {
    padding-top: 75%
  }

  .image.is-3by2 {
    padding-top: 66.6666%
  }

  .image.is-5by3 {
    padding-top: 60%
  }

  .image.is-16by9 {
    padding-top: 56.25%
  }

  .image.is-2by1 {
    padding-top: 50%
  }

  .image.is-3by1 {
    padding-top: 33.3333%
  }

  .image.is-4by5 {
    padding-top: 125%
  }

  .image.is-3by4 {
    padding-top: 133.3333%
  }

  .image.is-2by3 {
    padding-top: 150%
  }

  .image.is-3by5 {
    padding-top: 166.6666%
  }

  .image.is-9by16 {
    padding-top: 177.7777%
  }

  .image.is-1by2 {
    padding-top: 200%
  }

  .image.is-1by3 {
    padding-top: 300%
  }

  .image.is-16x16 {
    height: 16px;
    width: 16px
  }

  .image.is-24x24 {
    height: 24px;
    width: 24px
  }

  .image.is-32x32 {
    height: 32px;
    width: 32px
  }

  .image.is-48x48 {
    height: 48px;
    width: 48px
  }

  .image.is-64x64 {
    height: 64px;
    width: 64px
  }

  .image.is-96x96 {
    height: 96px;
    width: 96px
  }

  .image.is-128x128 {
    height: 128px;
    width: 128px
  }

  .subtitle,
  .title {
    word-break: break-word
  }

  .subtitle em,
  .subtitle span,
  .title em,
  .title span {
    font-weight: inherit
  }

  .subtitle sub,
  .subtitle sup,
  .title sub,
  .title sup {
    font-size: .75em
  }

  .subtitle .tag,
  .title .tag {
    vertical-align: middle
  }

  .level img,
  .number {
    vertical-align: top
  }

  .title {
    color: #363636;
    font-size: 32px;
    font-weight: 900;
    line-height: 1.6
  }

  @media screen and (max-width:1169px) {
    .title {
      line-height: 1.2
    }
  }

  .title strong {
    color: inherit;
    font-weight: 900
  }

  .title+.highlight {
    margin-top: -.75rem
  }

  .subtitle:not(.is-spaced)+.title,
  .title:not(.is-spaced)+.subtitle {
    margin-top: -25px
  }

  .title.is-1 {
    font-size: 68px
  }

  .title.is-2 {
    font-size: 46px
  }

  .title.is-3 {
    font-size: 32px
  }

  .title.is-4 {
    font-size: 22px
  }

  .title.is-5 {
    font-size: 14px
  }

  .title.is-6 {
    font-size: 12px
  }

  .title.is-7 {
    font-size: 10px
  }

  .subtitle {
    color: #2d2f30;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4
  }

  .subtitle strong {
    color: #363636;
    font-weight: 600
  }

  .subtitle.is-1 {
    font-size: 68px
  }

  .subtitle.is-2 {
    font-size: 46px
  }

  .subtitle.is-3 {
    font-size: 32px
  }

  .subtitle.is-4 {
    font-size: 22px
  }

  .subtitle.is-5 {
    font-size: 14px
  }

  .subtitle.is-6 {
    font-size: 12px
  }

  .subtitle.is-7 {
    font-size: 10px
  }

  .heading {
    font-size: 11px;
    letter-spacing: 1px;
    margin-bottom: 5px
  }

  .level-item .subtitle,
  .level-item .title,
  .level.is-mobile .level-item:not(:last-child) {
    margin-bottom: 0
  }

  .highlight {
    font-weight: 500;
    max-width: 100%;
    overflow: hidden;
    padding: 0
  }

  .highlight pre {
    overflow: auto;
    max-width: 100%
  }

  .number {
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 22px;
    height: 2em;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 1.5rem;
    min-width: 2.5em;
    padding: .25rem .5rem;
    text-align: center
  }

  .level {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
  }

  .level code {
    border-radius: 4px
  }

  .level img {
    display: inline-block
  }

  .level.is-mobile,
  .level.is-mobile .level-left,
  .level.is-mobile .level-right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  .level.is-mobile .level-left+.level-right {
    margin-top: 0
  }

  .level.is-mobile .level-item {
    margin-right: .75rem
  }

  .level.is-mobile .level-item:not(.is-narrow) {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
  }

  @media screen and (min-width:768px),
  print {
    .level {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    .level>.level-item:not(.is-narrow) {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1
    }

    .level-left .level-item:not(:last-child),
    .level-right .level-item:not(:last-child) {
      margin-right: .75rem
    }
  }

  .level-item,
  .media {
    display: -webkit-box;
    display: -ms-flexbox
  }

  .level-item,
  .level-left {
    -webkit-box-align: center
  }

  .level-item {
    -ms-flex-align: center;
    align-items: center;
    display: flex;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .level-left,
  .level-right {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0
  }

  .level-left .level-item.is-flexible,
  .level-right .level-item.is-flexible {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
  }

  .level-left {
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
  }

  @media screen and (max-width:767px) {
    .level-item:not(:last-child) {
      margin-bottom: .75rem
    }

    .level-left+.level-right {
      margin-top: 1.5rem
    }
  }

  .level-right {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
  }

  @media screen and (min-width:768px),
  print {

    .level-left,
    .level-right {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }
  }

  .media {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: flex;
    text-align: left
  }

  .media .content:not(:last-child) {
    margin-bottom: .75rem
  }

  .media .media {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: .75rem
  }

  .media .media .content:not(:last-child),
  .media .media .control:not(:last-child) {
    margin-bottom: .5rem
  }

  .media .media .media {
    padding-top: .5rem
  }

  .media .media .media+.media {
    margin-top: .5rem
  }

  .media+.media {
    margin-top: 1rem;
    padding-top: 1rem
  }

  .media.is-large+.media {
    margin-top: 1.5rem;
    padding-top: 1.5rem
  }

  .media-left,
  .media-right {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0
  }

  .media-left {
    margin-right: 1rem
  }

  .media-right {
    margin-left: 1rem
  }

  .media-content {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    text-align: left
  }

  .menu {
    font-size: 14px
  }

  .menu.is-small {
    font-size: 12px
  }

  .menu.is-medium {
    font-size: 22px
  }

  .menu.is-large {
    font-size: 32px
  }

  .menu-list {
    line-height: 1.25
  }

  .menu-list a {
    border-radius: 2px;
    color: #2d2f30;
    display: block;
    padding: .5em .75em
  }

  .menu-list a:hover {
    color: #363636
  }

  .menu-list a.is-active {
    background-color: #e32126;
    color: #fff
  }

  .menu-list li ul {
    border-left: 1px solid #dbdbdb;
    margin: .75em;
    padding-left: .75em
  }

  .menu-label {
    color: #7a7a7a;
    font-size: .75em;
    letter-spacing: .1em
  }

  .menu-label:not(:first-child) {
    margin-top: 1em
  }

  .menu-label:not(:last-child) {
    margin-bottom: 1em
  }

  .modal {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    z-index: 40
  }

  .modal-card,
  .modal.is-active {
    display: -webkit-box;
    display: -ms-flexbox
  }

  .modal.is-active {
    display: flex
  }

  .modal-background {
    background-color: rgba(255, 255, 255, .8)
  }

  .modal-card,
  .modal-content {
    margin: 0 20px;
    max-height: calc(100vh - 160px);
    overflow: auto;
    position: relative;
    width: 100%
  }

  .hero-video,
  .line-with-text,
  .modal-card {
    overflow: hidden
  }

  @media screen and (min-width:768px),
  print {

    .modal-card,
    .modal-content {
      margin: 0 auto;
      max-height: calc(100vh - 40px);
      width: 640px
    }
  }

  .modal-close {
    background: 0 0;
    height: 40px;
    position: fixed;
    right: 20px;
    top: 20px;
    width: 40px
  }

  .modal-card {
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    max-height: calc(100vh - 40px)
  }

  .modal-card-foot,
  .modal-card-head {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #f5f5f5;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    padding: 20px;
    position: relative
  }

  .modal-card-head {
    border-bottom: 1px solid #dbdbdb;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px
  }

  .modal-card-title {
    color: #363636;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 22px;
    line-height: 1
  }

  .modal-card-foot {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top: 1px solid #dbdbdb
  }

  .modal-card-foot .button:not(:last-child) {
    margin-right: 10px
  }

  .modal-card-body {
    background-color: #fff;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    overflow: auto;
    padding: 20px
  }

  .navbar {
    background-color: transparent;
    position: relative;
    z-index: 30
  }

  .navbar.is-white {
    background-color: #fff;
    color: #0a0a0a
  }

  .navbar.is-white .navbar-brand .navbar-link,
  .navbar.is-white .navbar-brand>.navbar-item {
    color: #0a0a0a
  }

  .navbar.is-white .navbar-brand .navbar-link.is-active,
  .navbar.is-white .navbar-brand .navbar-link:hover,
  .navbar.is-white .navbar-brand>a.navbar-item.is-active,
  .navbar.is-white .navbar-brand>a.navbar-item:hover {
    background-color: #f2f2f2;
    color: #0a0a0a
  }

  .navbar.is-white .navbar-brand .navbar-link::after {
    border-color: #0a0a0a
  }

  @media screen and (min-width:1170px) {

    .navbar.is-white .navbar-end .navbar-link.is-active,
    .navbar.is-white .navbar-end .navbar-link:hover,
    .navbar.is-white .navbar-end>a.navbar-item.is-active,
    .navbar.is-white .navbar-end>a.navbar-item:hover,
    .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-white .navbar-start .navbar-link.is-active,
    .navbar.is-white .navbar-start .navbar-link:hover,
    .navbar.is-white .navbar-start>a.navbar-item.is-active,
    .navbar.is-white .navbar-start>a.navbar-item:hover {
      background-color: #f2f2f2;
      color: #0a0a0a
    }

    .navbar.is-white .navbar-end .navbar-link,
    .navbar.is-white .navbar-end>.navbar-item,
    .navbar.is-white .navbar-start .navbar-link,
    .navbar.is-white .navbar-start>.navbar-item {
      color: #0a0a0a
    }

    .navbar.is-white .navbar-end .navbar-link::after,
    .navbar.is-white .navbar-start .navbar-link::after {
      border-color: #0a0a0a
    }

    .navbar.is-white .navbar-dropdown a.navbar-item.is-active {
      background-color: #fff;
      color: #0a0a0a
    }
  }

  .navbar.is-black {
    background-color: #0a0a0a;
    color: #fff
  }

  .navbar.is-black .navbar-brand .navbar-link,
  .navbar.is-black .navbar-brand>.navbar-item {
    color: #fff
  }

  .navbar.is-black .navbar-brand .navbar-link.is-active,
  .navbar.is-black .navbar-brand .navbar-link:hover,
  .navbar.is-black .navbar-brand>a.navbar-item.is-active,
  .navbar.is-black .navbar-brand>a.navbar-item:hover {
    background-color: #000;
    color: #fff
  }

  .navbar.is-black .navbar-brand .navbar-link::after {
    border-color: #fff
  }

  @media screen and (min-width:1170px) {

    .navbar.is-black .navbar-end .navbar-link.is-active,
    .navbar.is-black .navbar-end .navbar-link:hover,
    .navbar.is-black .navbar-end>a.navbar-item.is-active,
    .navbar.is-black .navbar-end>a.navbar-item:hover,
    .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-black .navbar-start .navbar-link.is-active,
    .navbar.is-black .navbar-start .navbar-link:hover,
    .navbar.is-black .navbar-start>a.navbar-item.is-active,
    .navbar.is-black .navbar-start>a.navbar-item:hover {
      background-color: #000;
      color: #fff
    }

    .navbar.is-black .navbar-end .navbar-link,
    .navbar.is-black .navbar-end>.navbar-item,
    .navbar.is-black .navbar-start .navbar-link,
    .navbar.is-black .navbar-start>.navbar-item {
      color: #fff
    }

    .navbar.is-black .navbar-end .navbar-link::after,
    .navbar.is-black .navbar-start .navbar-link::after {
      border-color: #fff
    }

    .navbar.is-black .navbar-dropdown a.navbar-item.is-active {
      background-color: #0a0a0a;
      color: #fff
    }
  }

  .navbar.is-light {
    background-color: #f5f5f5;
    color: #363636
  }

  .navbar.is-light .navbar-brand .navbar-link,
  .navbar.is-light .navbar-brand>.navbar-item {
    color: #363636
  }

  .navbar.is-light .navbar-brand .navbar-link.is-active,
  .navbar.is-light .navbar-brand .navbar-link:hover,
  .navbar.is-light .navbar-brand>a.navbar-item.is-active,
  .navbar.is-light .navbar-brand>a.navbar-item:hover {
    background-color: #e8e8e8;
    color: #363636
  }

  .navbar.is-light .navbar-brand .navbar-link::after {
    border-color: #363636
  }

  @media screen and (min-width:1170px) {

    .navbar.is-light .navbar-end .navbar-link.is-active,
    .navbar.is-light .navbar-end .navbar-link:hover,
    .navbar.is-light .navbar-end>a.navbar-item.is-active,
    .navbar.is-light .navbar-end>a.navbar-item:hover,
    .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-light .navbar-start .navbar-link.is-active,
    .navbar.is-light .navbar-start .navbar-link:hover,
    .navbar.is-light .navbar-start>a.navbar-item.is-active,
    .navbar.is-light .navbar-start>a.navbar-item:hover {
      background-color: #e8e8e8;
      color: #363636
    }

    .navbar.is-light .navbar-end .navbar-link,
    .navbar.is-light .navbar-end>.navbar-item,
    .navbar.is-light .navbar-start .navbar-link,
    .navbar.is-light .navbar-start>.navbar-item {
      color: #363636
    }

    .navbar.is-light .navbar-end .navbar-link::after,
    .navbar.is-light .navbar-start .navbar-link::after {
      border-color: #363636
    }

    .navbar.is-light .navbar-dropdown a.navbar-item.is-active {
      background-color: #f5f5f5;
      color: #363636
    }
  }

  .navbar.is-dark {
    background-color: #363636;
    color: #f5f5f5
  }

  .navbar.is-dark .navbar-brand .navbar-link,
  .navbar.is-dark .navbar-brand>.navbar-item {
    color: #f5f5f5
  }

  .navbar.is-dark .navbar-brand .navbar-link.is-active,
  .navbar.is-dark .navbar-brand .navbar-link:hover,
  .navbar.is-dark .navbar-brand>a.navbar-item.is-active,
  .navbar.is-dark .navbar-brand>a.navbar-item:hover {
    background-color: #292929;
    color: #f5f5f5
  }

  .navbar.is-dark .navbar-brand .navbar-link::after {
    border-color: #f5f5f5
  }

  @media screen and (min-width:1170px) {

    .navbar.is-dark .navbar-end .navbar-link.is-active,
    .navbar.is-dark .navbar-end .navbar-link:hover,
    .navbar.is-dark .navbar-end>a.navbar-item.is-active,
    .navbar.is-dark .navbar-end>a.navbar-item:hover,
    .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-dark .navbar-start .navbar-link.is-active,
    .navbar.is-dark .navbar-start .navbar-link:hover,
    .navbar.is-dark .navbar-start>a.navbar-item.is-active,
    .navbar.is-dark .navbar-start>a.navbar-item:hover {
      background-color: #292929;
      color: #f5f5f5
    }

    .navbar.is-dark .navbar-end .navbar-link,
    .navbar.is-dark .navbar-end>.navbar-item,
    .navbar.is-dark .navbar-start .navbar-link,
    .navbar.is-dark .navbar-start>.navbar-item {
      color: #f5f5f5
    }

    .navbar.is-dark .navbar-end .navbar-link::after,
    .navbar.is-dark .navbar-start .navbar-link::after {
      border-color: #f5f5f5
    }

    .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {
      background-color: #363636;
      color: #f5f5f5
    }
  }

  .navbar.is-info .navbar-brand .navbar-link::after,
  .navbar.is-link .navbar-brand .navbar-link::after,
  .navbar.is-primary .navbar-brand .navbar-link::after,
  .navbar.is-success .navbar-brand .navbar-link::after {
    border-color: #fff
  }

  .navbar.is-primary {
    background-color: #e32126;
    color: #fff
  }

  .navbar.is-primary .navbar-brand .navbar-link,
  .navbar.is-primary .navbar-brand>.navbar-item {
    color: #fff
  }

  .navbar.is-primary .navbar-brand .navbar-link.is-active,
  .navbar.is-primary .navbar-brand .navbar-link:hover,
  .navbar.is-primary .navbar-brand>a.navbar-item.is-active,
  .navbar.is-primary .navbar-brand>a.navbar-item:hover {
    background-color: #d01a1f;
    color: #fff
  }

  @media screen and (min-width:1170px) {

    .navbar.is-primary .navbar-end .navbar-link.is-active,
    .navbar.is-primary .navbar-end .navbar-link:hover,
    .navbar.is-primary .navbar-end>a.navbar-item.is-active,
    .navbar.is-primary .navbar-end>a.navbar-item:hover,
    .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-primary .navbar-start .navbar-link.is-active,
    .navbar.is-primary .navbar-start .navbar-link:hover,
    .navbar.is-primary .navbar-start>a.navbar-item.is-active,
    .navbar.is-primary .navbar-start>a.navbar-item:hover {
      background-color: #d01a1f;
      color: #fff
    }

    .navbar.is-primary .navbar-end .navbar-link,
    .navbar.is-primary .navbar-end>.navbar-item,
    .navbar.is-primary .navbar-start .navbar-link,
    .navbar.is-primary .navbar-start>.navbar-item {
      color: #fff
    }

    .navbar.is-primary .navbar-end .navbar-link::after,
    .navbar.is-primary .navbar-start .navbar-link::after {
      border-color: #fff
    }

    .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {
      background-color: #e32126;
      color: #fff
    }
  }

  .navbar.is-link {
    background-color: #3273dc;
    color: #fff
  }

  .navbar.is-link .navbar-brand .navbar-link,
  .navbar.is-link .navbar-brand>.navbar-item {
    color: #fff
  }

  .navbar.is-link .navbar-brand .navbar-link.is-active,
  .navbar.is-link .navbar-brand .navbar-link:hover,
  .navbar.is-link .navbar-brand>a.navbar-item.is-active,
  .navbar.is-link .navbar-brand>a.navbar-item:hover {
    background-color: #2366d1;
    color: #fff
  }

  @media screen and (min-width:1170px) {

    .navbar.is-link .navbar-end .navbar-link.is-active,
    .navbar.is-link .navbar-end .navbar-link:hover,
    .navbar.is-link .navbar-end>a.navbar-item.is-active,
    .navbar.is-link .navbar-end>a.navbar-item:hover,
    .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-link .navbar-start .navbar-link.is-active,
    .navbar.is-link .navbar-start .navbar-link:hover,
    .navbar.is-link .navbar-start>a.navbar-item.is-active,
    .navbar.is-link .navbar-start>a.navbar-item:hover {
      background-color: #2366d1;
      color: #fff
    }

    .navbar.is-link .navbar-end .navbar-link,
    .navbar.is-link .navbar-end>.navbar-item,
    .navbar.is-link .navbar-start .navbar-link,
    .navbar.is-link .navbar-start>.navbar-item {
      color: #fff
    }

    .navbar.is-link .navbar-end .navbar-link::after,
    .navbar.is-link .navbar-start .navbar-link::after {
      border-color: #fff
    }

    .navbar.is-link .navbar-dropdown a.navbar-item.is-active {
      background-color: #3273dc;
      color: #fff
    }
  }

  .navbar.is-info {
    background-color: #209cee;
    color: #fff
  }

  .navbar.is-info .navbar-brand .navbar-link,
  .navbar.is-info .navbar-brand>.navbar-item {
    color: #fff
  }

  .navbar.is-info .navbar-brand .navbar-link.is-active,
  .navbar.is-info .navbar-brand .navbar-link:hover,
  .navbar.is-info .navbar-brand>a.navbar-item.is-active,
  .navbar.is-info .navbar-brand>a.navbar-item:hover {
    background-color: #118fe4;
    color: #fff
  }

  @media screen and (min-width:1170px) {

    .navbar.is-info .navbar-end .navbar-link.is-active,
    .navbar.is-info .navbar-end .navbar-link:hover,
    .navbar.is-info .navbar-end>a.navbar-item.is-active,
    .navbar.is-info .navbar-end>a.navbar-item:hover,
    .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-info .navbar-start .navbar-link.is-active,
    .navbar.is-info .navbar-start .navbar-link:hover,
    .navbar.is-info .navbar-start>a.navbar-item.is-active,
    .navbar.is-info .navbar-start>a.navbar-item:hover {
      background-color: #118fe4;
      color: #fff
    }

    .navbar.is-info .navbar-end .navbar-link,
    .navbar.is-info .navbar-end>.navbar-item,
    .navbar.is-info .navbar-start .navbar-link,
    .navbar.is-info .navbar-start>.navbar-item {
      color: #fff
    }

    .navbar.is-info .navbar-end .navbar-link::after,
    .navbar.is-info .navbar-start .navbar-link::after {
      border-color: #fff
    }

    .navbar.is-info .navbar-dropdown a.navbar-item.is-active {
      background-color: #209cee;
      color: #fff
    }
  }

  .navbar.is-success {
    background-color: #23d160;
    color: #fff
  }

  .navbar.is-success .navbar-brand .navbar-link,
  .navbar.is-success .navbar-brand>.navbar-item {
    color: #fff
  }

  .navbar.is-success .navbar-brand .navbar-link.is-active,
  .navbar.is-success .navbar-brand .navbar-link:hover,
  .navbar.is-success .navbar-brand>a.navbar-item.is-active,
  .navbar.is-success .navbar-brand>a.navbar-item:hover {
    background-color: #20bc56;
    color: #fff
  }

  @media screen and (min-width:1170px) {

    .navbar.is-success .navbar-end .navbar-link.is-active,
    .navbar.is-success .navbar-end .navbar-link:hover,
    .navbar.is-success .navbar-end>a.navbar-item.is-active,
    .navbar.is-success .navbar-end>a.navbar-item:hover,
    .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-success .navbar-start .navbar-link.is-active,
    .navbar.is-success .navbar-start .navbar-link:hover,
    .navbar.is-success .navbar-start>a.navbar-item.is-active,
    .navbar.is-success .navbar-start>a.navbar-item:hover {
      background-color: #20bc56;
      color: #fff
    }

    .navbar.is-success .navbar-end .navbar-link,
    .navbar.is-success .navbar-end>.navbar-item,
    .navbar.is-success .navbar-start .navbar-link,
    .navbar.is-success .navbar-start>.navbar-item {
      color: #fff
    }

    .navbar.is-success .navbar-end .navbar-link::after,
    .navbar.is-success .navbar-start .navbar-link::after {
      border-color: #fff
    }

    .navbar.is-success .navbar-dropdown a.navbar-item.is-active {
      background-color: #23d160;
      color: #fff
    }
  }

  .navbar.is-warning,
  .navbar.is-warning .navbar-brand .navbar-link,
  .navbar.is-warning .navbar-brand>.navbar-item {
    color: rgba(0, 0, 0, .7)
  }

  .navbar.is-warning {
    background-color: #ffdd57
  }

  .navbar.is-warning .navbar-brand .navbar-link.is-active,
  .navbar.is-warning .navbar-brand .navbar-link:hover,
  .navbar.is-warning .navbar-brand>a.navbar-item.is-active,
  .navbar.is-warning .navbar-brand>a.navbar-item:hover {
    background-color: #ffd83d;
    color: rgba(0, 0, 0, .7)
  }

  .navbar.is-warning .navbar-brand .navbar-link::after {
    border-color: rgba(0, 0, 0, .7)
  }

  @media screen and (min-width:1170px) {

    .navbar.is-warning .navbar-end .navbar-link.is-active,
    .navbar.is-warning .navbar-end .navbar-link:hover,
    .navbar.is-warning .navbar-end>a.navbar-item.is-active,
    .navbar.is-warning .navbar-end>a.navbar-item:hover,
    .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-warning .navbar-start .navbar-link.is-active,
    .navbar.is-warning .navbar-start .navbar-link:hover,
    .navbar.is-warning .navbar-start>a.navbar-item.is-active,
    .navbar.is-warning .navbar-start>a.navbar-item:hover {
      background-color: #ffd83d;
      color: rgba(0, 0, 0, .7)
    }

    .navbar.is-warning .navbar-end .navbar-link,
    .navbar.is-warning .navbar-end>.navbar-item,
    .navbar.is-warning .navbar-start .navbar-link,
    .navbar.is-warning .navbar-start>.navbar-item {
      color: rgba(0, 0, 0, .7)
    }

    .navbar.is-warning .navbar-end .navbar-link::after,
    .navbar.is-warning .navbar-start .navbar-link::after {
      border-color: rgba(0, 0, 0, .7)
    }

    .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {
      background-color: #ffdd57;
      color: rgba(0, 0, 0, .7)
    }
  }

  .navbar.is-danger .navbar-brand .navbar-link::after,
  .navbar.is-gold .navbar-brand .navbar-link::after,
  .navbar.is-red .navbar-brand .navbar-link::after,
  .navbar.is-red-dark .navbar-brand .navbar-link::after,
  .navbar.is-secondary .navbar-brand .navbar-link::after {
    border-color: #fff
  }

  .navbar.is-danger {
    background-color: #ff3860;
    color: #fff
  }

  .navbar.is-danger .navbar-brand .navbar-link,
  .navbar.is-danger .navbar-brand>.navbar-item {
    color: #fff
  }

  .navbar.is-danger .navbar-brand .navbar-link.is-active,
  .navbar.is-danger .navbar-brand .navbar-link:hover,
  .navbar.is-danger .navbar-brand>a.navbar-item.is-active,
  .navbar.is-danger .navbar-brand>a.navbar-item:hover {
    background-color: #ff1f4b;
    color: #fff
  }

  @media screen and (min-width:1170px) {

    .navbar.is-danger .navbar-end .navbar-link.is-active,
    .navbar.is-danger .navbar-end .navbar-link:hover,
    .navbar.is-danger .navbar-end>a.navbar-item.is-active,
    .navbar.is-danger .navbar-end>a.navbar-item:hover,
    .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-danger .navbar-start .navbar-link.is-active,
    .navbar.is-danger .navbar-start .navbar-link:hover,
    .navbar.is-danger .navbar-start>a.navbar-item.is-active,
    .navbar.is-danger .navbar-start>a.navbar-item:hover {
      background-color: #ff1f4b;
      color: #fff
    }

    .navbar.is-danger .navbar-end .navbar-link,
    .navbar.is-danger .navbar-end>.navbar-item,
    .navbar.is-danger .navbar-start .navbar-link,
    .navbar.is-danger .navbar-start>.navbar-item {
      color: #fff
    }

    .navbar.is-danger .navbar-end .navbar-link::after,
    .navbar.is-danger .navbar-start .navbar-link::after {
      border-color: #fff
    }

    .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {
      background-color: #ff3860;
      color: #fff
    }
  }

  .navbar.is-gold {
    background-color: #c2b885;
    color: #fff
  }

  .navbar.is-gold .navbar-brand .navbar-link,
  .navbar.is-gold .navbar-brand>.navbar-item {
    color: #fff
  }

  .navbar.is-gold .navbar-brand .navbar-link.is-active,
  .navbar.is-gold .navbar-brand .navbar-link:hover,
  .navbar.is-gold .navbar-brand>a.navbar-item.is-active,
  .navbar.is-gold .navbar-brand>a.navbar-item:hover {
    background-color: #baae74;
    color: #fff
  }

  @media screen and (min-width:1170px) {

    .navbar.is-gold .navbar-end .navbar-link.is-active,
    .navbar.is-gold .navbar-end .navbar-link:hover,
    .navbar.is-gold .navbar-end>a.navbar-item.is-active,
    .navbar.is-gold .navbar-end>a.navbar-item:hover,
    .navbar.is-gold .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-gold .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-gold .navbar-start .navbar-link.is-active,
    .navbar.is-gold .navbar-start .navbar-link:hover,
    .navbar.is-gold .navbar-start>a.navbar-item.is-active,
    .navbar.is-gold .navbar-start>a.navbar-item:hover {
      background-color: #baae74;
      color: #fff
    }

    .navbar.is-gold .navbar-end .navbar-link,
    .navbar.is-gold .navbar-end>.navbar-item,
    .navbar.is-gold .navbar-start .navbar-link,
    .navbar.is-gold .navbar-start>.navbar-item {
      color: #fff
    }

    .navbar.is-gold .navbar-end .navbar-link::after,
    .navbar.is-gold .navbar-start .navbar-link::after {
      border-color: #fff
    }

    .navbar.is-gold .navbar-dropdown a.navbar-item.is-active {
      background-color: #c2b885;
      color: #fff
    }
  }

  .navbar.is-red {
    background-color: #e32126;
    color: #fff
  }

  .navbar.is-red .navbar-brand .navbar-link,
  .navbar.is-red .navbar-brand>.navbar-item {
    color: #fff
  }

  .navbar.is-red .navbar-brand .navbar-link.is-active,
  .navbar.is-red .navbar-brand .navbar-link:hover,
  .navbar.is-red .navbar-brand>a.navbar-item.is-active,
  .navbar.is-red .navbar-brand>a.navbar-item:hover {
    background-color: #d01a1f;
    color: #fff
  }

  @media screen and (min-width:1170px) {

    .navbar.is-red .navbar-end .navbar-link.is-active,
    .navbar.is-red .navbar-end .navbar-link:hover,
    .navbar.is-red .navbar-end>a.navbar-item.is-active,
    .navbar.is-red .navbar-end>a.navbar-item:hover,
    .navbar.is-red .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-red .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-red .navbar-start .navbar-link.is-active,
    .navbar.is-red .navbar-start .navbar-link:hover,
    .navbar.is-red .navbar-start>a.navbar-item.is-active,
    .navbar.is-red .navbar-start>a.navbar-item:hover {
      background-color: #d01a1f;
      color: #fff
    }

    .navbar.is-red .navbar-end .navbar-link,
    .navbar.is-red .navbar-end>.navbar-item,
    .navbar.is-red .navbar-start .navbar-link,
    .navbar.is-red .navbar-start>.navbar-item {
      color: #fff
    }

    .navbar.is-red .navbar-end .navbar-link::after,
    .navbar.is-red .navbar-start .navbar-link::after {
      border-color: #fff
    }

    .navbar.is-red .navbar-dropdown a.navbar-item.is-active {
      background-color: #e32126;
      color: #fff
    }
  }

  .navbar.is-red-dark {
    background-color: #4c0b0a;
    color: #fff
  }

  .navbar.is-red-dark .navbar-brand .navbar-link,
  .navbar.is-red-dark .navbar-brand>.navbar-item {
    color: #fff
  }

  .navbar.is-red-dark .navbar-brand .navbar-link.is-active,
  .navbar.is-red-dark .navbar-brand .navbar-link:hover,
  .navbar.is-red-dark .navbar-brand>a.navbar-item.is-active,
  .navbar.is-red-dark .navbar-brand>a.navbar-item:hover {
    background-color: #350807;
    color: #fff
  }

  @media screen and (min-width:1170px) {

    .navbar.is-red-dark .navbar-end .navbar-link.is-active,
    .navbar.is-red-dark .navbar-end .navbar-link:hover,
    .navbar.is-red-dark .navbar-end>a.navbar-item.is-active,
    .navbar.is-red-dark .navbar-end>a.navbar-item:hover,
    .navbar.is-red-dark .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-red-dark .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-red-dark .navbar-start .navbar-link.is-active,
    .navbar.is-red-dark .navbar-start .navbar-link:hover,
    .navbar.is-red-dark .navbar-start>a.navbar-item.is-active,
    .navbar.is-red-dark .navbar-start>a.navbar-item:hover {
      background-color: #350807;
      color: #fff
    }

    .navbar.is-red-dark .navbar-end .navbar-link,
    .navbar.is-red-dark .navbar-end>.navbar-item,
    .navbar.is-red-dark .navbar-start .navbar-link,
    .navbar.is-red-dark .navbar-start>.navbar-item {
      color: #fff
    }

    .navbar.is-red-dark .navbar-end .navbar-link::after,
    .navbar.is-red-dark .navbar-start .navbar-link::after {
      border-color: #fff
    }

    .navbar.is-red-dark .navbar-dropdown a.navbar-item.is-active {
      background-color: #4c0b0a;
      color: #fff
    }
  }

  .navbar.is-secondary {
    background-color: #c2b885;
    color: #fff
  }

  .navbar.is-secondary .navbar-brand .navbar-link,
  .navbar.is-secondary .navbar-brand>.navbar-item {
    color: #fff
  }

  .navbar.is-secondary .navbar-brand .navbar-link.is-active,
  .navbar.is-secondary .navbar-brand .navbar-link:hover,
  .navbar.is-secondary .navbar-brand>a.navbar-item.is-active,
  .navbar.is-secondary .navbar-brand>a.navbar-item:hover {
    background-color: #baae74;
    color: #fff
  }

  @media screen and (min-width:1170px) {

    .navbar.is-secondary .navbar-end .navbar-link.is-active,
    .navbar.is-secondary .navbar-end .navbar-link:hover,
    .navbar.is-secondary .navbar-end>a.navbar-item.is-active,
    .navbar.is-secondary .navbar-end>a.navbar-item:hover,
    .navbar.is-secondary .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-secondary .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-secondary .navbar-start .navbar-link.is-active,
    .navbar.is-secondary .navbar-start .navbar-link:hover,
    .navbar.is-secondary .navbar-start>a.navbar-item.is-active,
    .navbar.is-secondary .navbar-start>a.navbar-item:hover {
      background-color: #baae74;
      color: #fff
    }

    .navbar.is-secondary .navbar-end .navbar-link,
    .navbar.is-secondary .navbar-end>.navbar-item,
    .navbar.is-secondary .navbar-start .navbar-link,
    .navbar.is-secondary .navbar-start>.navbar-item {
      color: #fff
    }

    .navbar.is-secondary .navbar-end .navbar-link::after,
    .navbar.is-secondary .navbar-start .navbar-link::after {
      border-color: #fff
    }

    .navbar.is-secondary .navbar-dropdown a.navbar-item.is-active {
      background-color: #c2b885;
      color: #fff
    }
  }

  .navbar.is-grey .navbar-brand .navbar-link::after,
  .navbar.is-grey-light .navbar-brand .navbar-link::after {
    border-color: #2d2f30
  }

  .navbar.is-grey-light {
    background-color: #f4f5f7;
    color: #2d2f30
  }

  .navbar.is-grey-light .navbar-brand .navbar-link,
  .navbar.is-grey-light .navbar-brand>.navbar-item {
    color: #2d2f30
  }

  .navbar.is-grey-light .navbar-brand .navbar-link.is-active,
  .navbar.is-grey-light .navbar-brand .navbar-link:hover,
  .navbar.is-grey-light .navbar-brand>a.navbar-item.is-active,
  .navbar.is-grey-light .navbar-brand>a.navbar-item:hover {
    background-color: #e5e8ec;
    color: #2d2f30
  }

  @media screen and (min-width:1170px) {

    .navbar.is-grey-light .navbar-end .navbar-link.is-active,
    .navbar.is-grey-light .navbar-end .navbar-link:hover,
    .navbar.is-grey-light .navbar-end>a.navbar-item.is-active,
    .navbar.is-grey-light .navbar-end>a.navbar-item:hover,
    .navbar.is-grey-light .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-grey-light .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-grey-light .navbar-start .navbar-link.is-active,
    .navbar.is-grey-light .navbar-start .navbar-link:hover,
    .navbar.is-grey-light .navbar-start>a.navbar-item.is-active,
    .navbar.is-grey-light .navbar-start>a.navbar-item:hover {
      background-color: #e5e8ec;
      color: #2d2f30
    }

    .navbar.is-grey-light .navbar-end .navbar-link,
    .navbar.is-grey-light .navbar-end>.navbar-item,
    .navbar.is-grey-light .navbar-start .navbar-link,
    .navbar.is-grey-light .navbar-start>.navbar-item {
      color: #2d2f30
    }

    .navbar.is-grey-light .navbar-end .navbar-link::after,
    .navbar.is-grey-light .navbar-start .navbar-link::after {
      border-color: #2d2f30
    }

    .navbar.is-grey-light .navbar-dropdown a.navbar-item.is-active {
      background-color: #f4f5f7;
      color: #2d2f30
    }
  }

  .navbar.is-grey {
    background-color: #c1c7d0;
    color: #2d2f30
  }

  .navbar.is-grey .navbar-brand .navbar-link,
  .navbar.is-grey .navbar-brand>.navbar-item {
    color: #2d2f30
  }

  .navbar.is-grey .navbar-brand .navbar-link.is-active,
  .navbar.is-grey .navbar-brand .navbar-link:hover,
  .navbar.is-grey .navbar-brand>a.navbar-item.is-active,
  .navbar.is-grey .navbar-brand>a.navbar-item:hover {
    background-color: #b2bac5;
    color: #2d2f30
  }

  @media screen and (min-width:1170px) {

    .navbar.is-grey .navbar-end .navbar-link.is-active,
    .navbar.is-grey .navbar-end .navbar-link:hover,
    .navbar.is-grey .navbar-end>a.navbar-item.is-active,
    .navbar.is-grey .navbar-end>a.navbar-item:hover,
    .navbar.is-grey .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-grey .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-grey .navbar-start .navbar-link.is-active,
    .navbar.is-grey .navbar-start .navbar-link:hover,
    .navbar.is-grey .navbar-start>a.navbar-item.is-active,
    .navbar.is-grey .navbar-start>a.navbar-item:hover {
      background-color: #b2bac5;
      color: #2d2f30
    }

    .navbar.is-grey .navbar-end .navbar-link,
    .navbar.is-grey .navbar-end>.navbar-item,
    .navbar.is-grey .navbar-start .navbar-link,
    .navbar.is-grey .navbar-start>.navbar-item {
      color: #2d2f30
    }

    .navbar.is-grey .navbar-end .navbar-link::after,
    .navbar.is-grey .navbar-start .navbar-link::after {
      border-color: #2d2f30
    }

    .navbar.is-grey .navbar-dropdown a.navbar-item.is-active {
      background-color: #c1c7d0;
      color: #2d2f30
    }
  }

  .navbar.is-green .navbar-brand .navbar-link::after,
  .navbar.is-grey-dark .navbar-brand .navbar-link::after {
    border-color: #fff
  }

  .navbar.is-grey-dark {
    background-color: #2d2f30;
    color: #fff
  }

  .navbar.is-grey-dark .navbar-brand .navbar-link,
  .navbar.is-grey-dark .navbar-brand>.navbar-item {
    color: #fff
  }

  .navbar.is-grey-dark .navbar-brand .navbar-link.is-active,
  .navbar.is-grey-dark .navbar-brand .navbar-link:hover,
  .navbar.is-grey-dark .navbar-brand>a.navbar-item.is-active,
  .navbar.is-grey-dark .navbar-brand>a.navbar-item:hover {
    background-color: #212223;
    color: #fff
  }

  @media screen and (min-width:1170px) {

    .navbar.is-grey-dark .navbar-end .navbar-link.is-active,
    .navbar.is-grey-dark .navbar-end .navbar-link:hover,
    .navbar.is-grey-dark .navbar-end>a.navbar-item.is-active,
    .navbar.is-grey-dark .navbar-end>a.navbar-item:hover,
    .navbar.is-grey-dark .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-grey-dark .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-grey-dark .navbar-start .navbar-link.is-active,
    .navbar.is-grey-dark .navbar-start .navbar-link:hover,
    .navbar.is-grey-dark .navbar-start>a.navbar-item.is-active,
    .navbar.is-grey-dark .navbar-start>a.navbar-item:hover {
      background-color: #212223;
      color: #fff
    }

    .navbar.is-grey-dark .navbar-end .navbar-link,
    .navbar.is-grey-dark .navbar-end>.navbar-item,
    .navbar.is-grey-dark .navbar-start .navbar-link,
    .navbar.is-grey-dark .navbar-start>.navbar-item {
      color: #fff
    }

    .navbar.is-grey-dark .navbar-end .navbar-link::after,
    .navbar.is-grey-dark .navbar-start .navbar-link::after {
      border-color: #fff
    }

    .navbar.is-grey-dark .navbar-dropdown a.navbar-item.is-active {
      background-color: #2d2f30;
      color: #fff
    }
  }

  .navbar.is-green {
    background-color: #43c683;
    color: #fff
  }

  .navbar.is-green .navbar-brand .navbar-link,
  .navbar.is-green .navbar-brand>.navbar-item {
    color: #fff
  }

  .navbar.is-green .navbar-brand .navbar-link.is-active,
  .navbar.is-green .navbar-brand .navbar-link:hover,
  .navbar.is-green .navbar-brand>a.navbar-item.is-active,
  .navbar.is-green .navbar-brand>a.navbar-item:hover {
    background-color: #38b876;
    color: #fff
  }

  @media screen and (min-width:1170px) {

    .navbar.is-green .navbar-end .navbar-link.is-active,
    .navbar.is-green .navbar-end .navbar-link:hover,
    .navbar.is-green .navbar-end>a.navbar-item.is-active,
    .navbar.is-green .navbar-end>a.navbar-item:hover,
    .navbar.is-green .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-green .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-green .navbar-start .navbar-link.is-active,
    .navbar.is-green .navbar-start .navbar-link:hover,
    .navbar.is-green .navbar-start>a.navbar-item.is-active,
    .navbar.is-green .navbar-start>a.navbar-item:hover {
      background-color: #38b876;
      color: #fff
    }

    .navbar.is-green .navbar-end .navbar-link,
    .navbar.is-green .navbar-end>.navbar-item,
    .navbar.is-green .navbar-start .navbar-link,
    .navbar.is-green .navbar-start>.navbar-item {
      color: #fff
    }

    .navbar.is-green .navbar-end .navbar-link::after,
    .navbar.is-green .navbar-start .navbar-link::after {
      border-color: #fff
    }

    .navbar.is-green .navbar-dropdown a.navbar-item.is-active {
      background-color: #43c683;
      color: #fff
    }
  }

  .navbar>.container {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 45.5px;
    min-height: 3.25rem;
    width: 100%
  }

  .navbar.has-shadow {
    -webkit-box-shadow: 0 2px 0 0 #f5f5f5;
    box-shadow: 0 2px 0 0 #f5f5f5
  }

  .navbar.is-fixed-bottom,
  .navbar.is-fixed-top {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30
  }

  .navbar.is-fixed-bottom {
    bottom: 0
  }

  .navbar.is-fixed-bottom.has-shadow {
    -webkit-box-shadow: 0 -2px 0 0 #f5f5f5;
    box-shadow: 0 -2px 0 0 #f5f5f5
  }

  .navbar.is-fixed-top {
    top: 0
  }

  body.has-navbar-fixed-top,
  html.has-navbar-fixed-top {
    padding-top: 3.25rem
  }

  body.has-navbar-fixed-bottom,
  html.has-navbar-fixed-bottom {
    padding-bottom: 3.25rem
  }

  .navbar-brand,
  .navbar-tabs {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    min-height: 45.5px;
    min-height: 3.25rem
  }

  .navbar-brand a.navbar-item:hover {
    background-color: transparent
  }

  .navbar-tabs {
    -webkit-overflow-scrolling: touch;
    max-width: 100vw;
    overflow-x: auto;
    overflow-y: hidden
  }

  .navbar-burger {
    display: block;
    height: 45.5px;
    height: 3.25rem;
    position: relative;
    width: 45.5px;
    width: 3.25rem;
    margin-left: auto
  }

  .navbar-burger span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transition-duration: 86ms;
    transition-duration: 86ms;
    -webkit-transition-property: background-color, opacity, -webkit-transform;
    transition-property: background-color, opacity, -webkit-transform;
    transition-property: background-color, opacity, transform;
    transition-property: background-color, opacity, transform, -webkit-transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    width: 16px
  }

  .navbar-burger span:nth-child(1) {
    top: calc(50% - 6px)
  }

  .navbar-burger span:nth-child(2) {
    top: calc(50% - 1px)
  }

  .navbar-burger span:nth-child(3) {
    top: calc(50% + 4px)
  }

  .navbar-burger:hover {
    background-color: rgba(0, 0, 0, .05)
  }

  .navbar-burger.is-active span:nth-child(1) {
    -webkit-transform: translateY(5px) rotate(45deg);
    transform: translateY(5px) rotate(45deg)
  }

  .navbar-burger.is-active span:nth-child(2) {
    opacity: 0
  }

  .navbar-burger.is-active span:nth-child(3) {
    -webkit-transform: translateY(-5px) rotate(-45deg);
    transform: translateY(-5px) rotate(-45deg)
  }

  .navbar-menu {
    display: none
  }

  .navbar-item,
  .navbar-link {
    color: #2d2f30;
    display: block;
    line-height: 1.5;
    padding: 15px;
    position: relative
  }

  .navbar-item .icon:only-child,
  .navbar-link .icon:only-child {
    margin-left: -.25rem;
    margin-right: -.25rem
  }

  .navbar-link.is-active,
  .navbar-link:hover,
  a.navbar-item.is-active,
  a.navbar-item:hover {
    background-color: transparent;
    color: #4c0b0a
  }

  .navbar-item {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0
  }

  .navbar-item img {
    max-height: 70px
  }

  .navbar-item.has-dropdown {
    padding: 0
  }

  .navbar-item.is-expanded {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1
  }

  .navbar-item.is-tab {
    border-bottom: 1px solid transparent;
    min-height: 45.5px;
    min-height: 3.25rem;
    padding-bottom: calc(.5rem - 1px)
  }

  .navbar-item.is-tab.is-active,
  .navbar-item.is-tab:hover {
    background-color: transparent;
    border-bottom-color: #e32126
  }

  .navbar-item.is-tab.is-active {
    border-bottom-style: solid;
    border-bottom-width: 3px;
    color: #e32126;
    padding-bottom: calc(.5rem - 3px)
  }

  .navbar-content {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1
  }

  .navbar-link {
    padding-right: 2.5em
  }

  .navbar-link::after {
    border-color: #e32126;
    margin-top: -.375em;
    right: 1.125em
  }

  .navbar-dropdown {
    font-size: 12.25px;
    font-size: .875rem;
    padding-bottom: .5rem;
    padding-top: .5rem
  }

  .navbar-dropdown .navbar-item {
    padding-left: 1.5rem;
    padding-right: 1.5rem
  }

  .navbar-divider {
    background-color: #f5f5f5;
    border: none;
    display: none;
    height: 2px;
    margin: .5rem 0
  }

  @media screen and (max-width:1169px) {
    .navbar>.container {
      display: block
    }

    .navbar-brand .navbar-item,
    .navbar-tabs .navbar-item {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    .navbar-link::after {
      display: none
    }

    .navbar-menu {
      background-color: transparent;
      -webkit-box-shadow: 0 8px 16px rgba(45, 47, 48, .1);
      box-shadow: 0 8px 16px rgba(45, 47, 48, .1);
      padding: .5rem 0
    }

    .navbar-menu.is-active {
      display: block
    }

    .navbar.is-fixed-bottom-touch,
    .navbar.is-fixed-top-touch {
      left: 0;
      position: fixed;
      right: 0;
      z-index: 30
    }

    .navbar.is-fixed-bottom-touch {
      bottom: 0
    }

    .navbar.is-fixed-bottom-touch.has-shadow {
      -webkit-box-shadow: 0 -2px 3px rgba(45, 47, 48, .1);
      box-shadow: 0 -2px 3px rgba(45, 47, 48, .1)
    }

    .navbar.is-fixed-top-touch {
      top: 0
    }

    .navbar.is-fixed-top .navbar-menu,
    .navbar.is-fixed-top-touch .navbar-menu {
      -webkit-overflow-scrolling: touch;
      max-height: calc(100vh - 3.25rem);
      overflow: auto
    }

    body.has-navbar-fixed-top-touch,
    html.has-navbar-fixed-top-touch {
      padding-top: 3.25rem
    }

    body.has-navbar-fixed-bottom-touch,
    html.has-navbar-fixed-bottom-touch {
      padding-bottom: 3.25rem
    }
  }

  @media screen and (min-width:1170px) {

    .navbar,
    .navbar-end,
    .navbar-menu,
    .navbar-start {
      -webkit-box-align: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    .navbar {
      min-height: 3.25rem
    }

    .navbar.is-spaced {
      padding: 1rem 2rem
    }

    .navbar.is-spaced .navbar-end,
    .navbar.is-spaced .navbar-start {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center
    }

    .navbar.is-spaced .navbar-link,
    .navbar.is-spaced a.navbar-item {
      border-radius: 4px
    }

    .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link,
    .navbar.is-transparent .navbar-link.is-active,
    .navbar.is-transparent .navbar-link:hover,
    .navbar.is-transparent a.navbar-item.is-active,
    .navbar.is-transparent a.navbar-item:hover {
      background-color: transparent !important
    }

    .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {
      background-color: #f5f5f5;
      color: #2d2f30
    }

    .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {
      background-color: #f5f5f5;
      color: #e32126
    }

    .navbar-burger {
      display: none
    }

    .navbar-item,
    .navbar-link {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    .navbar-item {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    .navbar-item.has-dropdown {
      -webkit-box-align: stretch;
      -ms-flex-align: stretch;
      align-items: stretch
    }

    .navbar-item.has-dropdown-up .navbar-link::after {
      -webkit-transform: rotate(135deg) translate(.25em, -.25em);
      transform: rotate(135deg) translate(.25em, -.25em)
    }

    .navbar-item.has-dropdown-up .navbar-dropdown {
      border-bottom: 2px solid #dbdbdb;
      border-radius: 6px 6px 0 0;
      border-top: none;
      bottom: 100%;
      -webkit-box-shadow: 0 -8px 8px rgba(45, 47, 48, .1);
      box-shadow: 0 -8px 8px rgba(45, 47, 48, .1);
      top: auto
    }

    .navbar-item.is-active .navbar-dropdown,
    .navbar-item.is-hoverable:hover .navbar-dropdown {
      display: block
    }

    .navbar-item.is-active .navbar-dropdown.is-boxed,
    .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,
    .navbar.is-spaced .navbar-item.is-active .navbar-dropdown,
    .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown {
      opacity: 1;
      pointer-events: auto;
      -webkit-transform: translateY(0);
      transform: translateY(0)
    }

    .navbar-menu {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-negative: 0;
      flex-shrink: 0
    }

    .navbar-start {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      margin-right: auto
    }

    .navbar-end {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      margin-left: auto
    }

    .navbar-dropdown {
      background-color: #fff;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      border-top: 2px solid #dbdbdb;
      -webkit-box-shadow: 0 8px 8px rgba(45, 47, 48, .1);
      box-shadow: 0 8px 8px rgba(45, 47, 48, .1);
      display: none;
      font-size: .875rem;
      left: 0;
      min-width: 100%;
      position: absolute;
      top: 100%;
      z-index: 20
    }

    .navbar-dropdown .navbar-item {
      padding: .375rem 1rem;
      white-space: nowrap
    }

    .navbar-dropdown a.navbar-item {
      padding-right: 3rem
    }

    .navbar-dropdown a.navbar-item:hover {
      background-color: #f5f5f5;
      color: #2d2f30
    }

    .navbar-dropdown a.navbar-item.is-active {
      background-color: #f5f5f5;
      color: #e32126
    }

    .navbar-dropdown.is-boxed,
    .navbar.is-spaced .navbar-dropdown {
      border-radius: 6px;
      border-top: none;
      -webkit-box-shadow: 0 8px 8px rgba(45, 47, 48, .1), 0 0 0 1px rgba(45, 47, 48, .1);
      box-shadow: 0 8px 8px rgba(45, 47, 48, .1), 0 0 0 1px rgba(45, 47, 48, .1);
      display: block;
      opacity: 0;
      pointer-events: none;
      top: calc(100% + -4px);
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
      -webkit-transition-duration: 86ms;
      transition-duration: 86ms;
      -webkit-transition-property: opacity, -webkit-transform;
      transition-property: opacity, -webkit-transform;
      transition-property: opacity, transform;
      transition-property: opacity, transform, -webkit-transform
    }

    .navbar-dropdown.is-right {
      left: auto;
      right: 0
    }

    .navbar-divider {
      display: block
    }

    .container>.navbar .navbar-brand,
    .navbar>.container .navbar-brand {
      margin-left: -15px
    }

    .container>.navbar .navbar-menu,
    .navbar>.container .navbar-menu {
      margin-right: -15px
    }

    .navbar.is-fixed-bottom-desktop,
    .navbar.is-fixed-top-desktop {
      left: 0;
      position: fixed;
      right: 0;
      z-index: 30
    }

    .navbar.is-fixed-bottom-desktop {
      bottom: 0
    }

    .navbar.is-fixed-bottom-desktop.has-shadow {
      -webkit-box-shadow: 0 -2px 3px rgba(45, 47, 48, .1);
      box-shadow: 0 -2px 3px rgba(45, 47, 48, .1)
    }

    .navbar.is-fixed-top-desktop {
      top: 0
    }

    body.has-navbar-fixed-top-desktop,
    html.has-navbar-fixed-top-desktop {
      padding-top: 3.25rem
    }

    body.has-navbar-fixed-bottom-desktop,
    html.has-navbar-fixed-bottom-desktop {
      padding-bottom: 3.25rem
    }

    body.has-spaced-navbar-fixed-top,
    html.has-spaced-navbar-fixed-top {
      padding-top: 5.25rem
    }

    body.has-spaced-navbar-fixed-bottom,
    html.has-spaced-navbar-fixed-bottom {
      padding-bottom: 5.25rem
    }

    .navbar-link.is-active,
    a.navbar-item.is-active {
      color: #2d2f30
    }

    .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar-item.has-dropdown:hover .navbar-link,
    .navbar-link.is-active:not(:hover),
    a.navbar-item.is-active:not(:hover) {
      background-color: transparent
    }
  }

  .column {
    display: block;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    padding: 15px
  }

  .columns.is-mobile,
  .hero {
    display: -webkit-box;
    display: -ms-flexbox
  }

  .columns.is-mobile>.column.is-narrow {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none
  }

  .columns.is-mobile>.column.is-full {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 100%
  }

  .columns.is-mobile>.column.is-three-quarters {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 75%
  }

  .columns.is-mobile>.column.is-two-thirds {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 66.6666%
  }

  .columns.is-mobile>.column.is-half {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 50%
  }

  .columns.is-mobile>.column.is-one-third {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 33.3333%
  }

  .columns.is-mobile>.column.is-one-quarter {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 25%
  }

  .columns.is-mobile>.column.is-one-fifth {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 20%
  }

  .columns.is-mobile>.column.is-two-fifths {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 40%
  }

  .columns.is-mobile>.column.is-three-fifths {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 60%
  }

  .columns.is-mobile>.column.is-four-fifths {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 80%
  }

  .columns.is-mobile>.column.is-offset-three-quarters {
    margin-left: 75%
  }

  .columns.is-mobile>.column.is-offset-two-thirds {
    margin-left: 66.6666%
  }

  .columns.is-mobile>.column.is-offset-half {
    margin-left: 50%
  }

  .columns.is-mobile>.column.is-offset-one-third {
    margin-left: 33.3333%
  }

  .columns.is-mobile>.column.is-offset-one-quarter {
    margin-left: 25%
  }

  .columns.is-mobile>.column.is-offset-one-fifth {
    margin-left: 20%
  }

  .columns.is-mobile>.column.is-offset-two-fifths {
    margin-left: 40%
  }

  .columns.is-mobile>.column.is-offset-three-fifths {
    margin-left: 60%
  }

  .columns.is-mobile>.column.is-offset-four-fifths {
    margin-left: 80%
  }

  .columns.is-mobile>.column.is-1 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 8.33333%
  }

  .columns.is-mobile>.column.is-offset-1 {
    margin-left: 8.33333%
  }

  .columns.is-mobile>.column.is-2 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 16.66667%
  }

  .columns.is-mobile>.column.is-offset-2 {
    margin-left: 16.66667%
  }

  .columns.is-mobile>.column.is-3 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 25%
  }

  .columns.is-mobile>.column.is-offset-3 {
    margin-left: 25%
  }

  .columns.is-mobile>.column.is-4 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 33.33333%
  }

  .columns.is-mobile>.column.is-offset-4 {
    margin-left: 33.33333%
  }

  .columns.is-mobile>.column.is-5 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 41.66667%
  }

  .columns.is-mobile>.column.is-offset-5 {
    margin-left: 41.66667%
  }

  .columns.is-mobile>.column.is-6 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 50%
  }

  .columns.is-mobile>.column.is-offset-6 {
    margin-left: 50%
  }

  .columns.is-mobile>.column.is-7 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 58.33333%
  }

  .columns.is-mobile>.column.is-offset-7 {
    margin-left: 58.33333%
  }

  .columns.is-mobile>.column.is-8 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 66.66667%
  }

  .columns.is-mobile>.column.is-offset-8 {
    margin-left: 66.66667%
  }

  .columns.is-mobile>.column.is-9 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 75%
  }

  .columns.is-mobile>.column.is-offset-9 {
    margin-left: 75%
  }

  .columns.is-mobile>.column.is-10 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 83.33333%
  }

  .columns.is-mobile>.column.is-offset-10 {
    margin-left: 83.33333%
  }

  .columns.is-mobile>.column.is-11 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 91.66667%
  }

  .columns.is-mobile>.column.is-offset-11 {
    margin-left: 91.66667%
  }

  .columns.is-mobile>.column.is-12 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 100%
  }

  .columns.is-mobile>.column.is-offset-12 {
    margin-left: 100%
  }

  @media screen and (max-width:767px) {
    .column.is-narrow-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none
    }

    .column.is-full-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 100%
    }

    .column.is-three-quarters-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 75%
    }

    .column.is-two-thirds-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 66.6666%
    }

    .column.is-half-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 50%
    }

    .column.is-one-third-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 33.3333%
    }

    .column.is-one-quarter-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 25%
    }

    .column.is-one-fifth-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 20%
    }

    .column.is-two-fifths-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 40%
    }

    .column.is-three-fifths-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 60%
    }

    .column.is-four-fifths-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 80%
    }

    .column.is-offset-three-quarters-mobile {
      margin-left: 75%
    }

    .column.is-offset-two-thirds-mobile {
      margin-left: 66.6666%
    }

    .column.is-offset-half-mobile {
      margin-left: 50%
    }

    .column.is-offset-one-third-mobile {
      margin-left: 33.3333%
    }

    .column.is-offset-one-quarter-mobile {
      margin-left: 25%
    }

    .column.is-offset-one-fifth-mobile {
      margin-left: 20%
    }

    .column.is-offset-two-fifths-mobile {
      margin-left: 40%
    }

    .column.is-offset-three-fifths-mobile {
      margin-left: 60%
    }

    .column.is-offset-four-fifths-mobile {
      margin-left: 80%
    }

    .column.is-1-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 8.33333%
    }

    .column.is-offset-1-mobile {
      margin-left: 8.33333%
    }

    .column.is-2-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 16.66667%
    }

    .column.is-offset-2-mobile {
      margin-left: 16.66667%
    }

    .column.is-3-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 25%
    }

    .column.is-offset-3-mobile {
      margin-left: 25%
    }

    .column.is-4-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 33.33333%
    }

    .column.is-offset-4-mobile {
      margin-left: 33.33333%
    }

    .column.is-5-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 41.66667%
    }

    .column.is-offset-5-mobile {
      margin-left: 41.66667%
    }

    .column.is-6-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 50%
    }

    .column.is-offset-6-mobile {
      margin-left: 50%
    }

    .column.is-7-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 58.33333%
    }

    .column.is-offset-7-mobile {
      margin-left: 58.33333%
    }

    .column.is-8-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 66.66667%
    }

    .column.is-offset-8-mobile {
      margin-left: 66.66667%
    }

    .column.is-9-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 75%
    }

    .column.is-offset-9-mobile {
      margin-left: 75%
    }

    .column.is-10-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 83.33333%
    }

    .column.is-offset-10-mobile {
      margin-left: 83.33333%
    }

    .column.is-11-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 91.66667%
    }

    .column.is-offset-11-mobile {
      margin-left: 91.66667%
    }

    .column.is-12-mobile {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 100%
    }

    .column.is-offset-12-mobile {
      margin-left: 100%
    }
  }

  @media screen and (min-width:768px),
  print {

    .column.is-narrow,
    .column.is-narrow-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none
    }

    .column.is-full,
    .column.is-full-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 100%
    }

    .column.is-three-quarters,
    .column.is-three-quarters-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 75%
    }

    .column.is-two-thirds,
    .column.is-two-thirds-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 66.6666%
    }

    .column.is-half,
    .column.is-half-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 50%
    }

    .column.is-one-third,
    .column.is-one-third-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 33.3333%
    }

    .column.is-one-quarter,
    .column.is-one-quarter-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 25%
    }

    .column.is-one-fifth,
    .column.is-one-fifth-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 20%
    }

    .column.is-two-fifths,
    .column.is-two-fifths-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 40%
    }

    .column.is-three-fifths,
    .column.is-three-fifths-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 60%
    }

    .column.is-four-fifths,
    .column.is-four-fifths-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 80%
    }

    .column.is-offset-three-quarters,
    .column.is-offset-three-quarters-tablet {
      margin-left: 75%
    }

    .column.is-offset-two-thirds,
    .column.is-offset-two-thirds-tablet {
      margin-left: 66.6666%
    }

    .column.is-offset-half,
    .column.is-offset-half-tablet {
      margin-left: 50%
    }

    .column.is-offset-one-third,
    .column.is-offset-one-third-tablet {
      margin-left: 33.3333%
    }

    .column.is-offset-one-quarter,
    .column.is-offset-one-quarter-tablet {
      margin-left: 25%
    }

    .column.is-offset-one-fifth,
    .column.is-offset-one-fifth-tablet {
      margin-left: 20%
    }

    .column.is-offset-two-fifths,
    .column.is-offset-two-fifths-tablet {
      margin-left: 40%
    }

    .column.is-offset-three-fifths,
    .column.is-offset-three-fifths-tablet {
      margin-left: 60%
    }

    .column.is-offset-four-fifths,
    .column.is-offset-four-fifths-tablet {
      margin-left: 80%
    }

    .column.is-1,
    .column.is-1-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 8.33333%
    }

    .column.is-offset-1,
    .column.is-offset-1-tablet {
      margin-left: 8.33333%
    }

    .column.is-2,
    .column.is-2-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 16.66667%
    }

    .column.is-offset-2,
    .column.is-offset-2-tablet {
      margin-left: 16.66667%
    }

    .column.is-3,
    .column.is-3-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 25%
    }

    .column.is-offset-3,
    .column.is-offset-3-tablet {
      margin-left: 25%
    }

    .column.is-4,
    .column.is-4-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 33.33333%
    }

    .column.is-offset-4,
    .column.is-offset-4-tablet {
      margin-left: 33.33333%
    }

    .column.is-5,
    .column.is-5-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 41.66667%
    }

    .column.is-offset-5,
    .column.is-offset-5-tablet {
      margin-left: 41.66667%
    }

    .column.is-6,
    .column.is-6-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 50%
    }

    .column.is-offset-6,
    .column.is-offset-6-tablet {
      margin-left: 50%
    }

    .column.is-7,
    .column.is-7-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 58.33333%
    }

    .column.is-offset-7,
    .column.is-offset-7-tablet {
      margin-left: 58.33333%
    }

    .column.is-8,
    .column.is-8-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 66.66667%
    }

    .column.is-offset-8,
    .column.is-offset-8-tablet {
      margin-left: 66.66667%
    }

    .column.is-9,
    .column.is-9-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 75%
    }

    .column.is-offset-9,
    .column.is-offset-9-tablet {
      margin-left: 75%
    }

    .column.is-10,
    .column.is-10-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 83.33333%
    }

    .column.is-offset-10,
    .column.is-offset-10-tablet {
      margin-left: 83.33333%
    }

    .column.is-11,
    .column.is-11-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 91.66667%
    }

    .column.is-offset-11,
    .column.is-offset-11-tablet {
      margin-left: 91.66667%
    }

    .column.is-12,
    .column.is-12-tablet {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 100%
    }

    .column.is-offset-12,
    .column.is-offset-12-tablet {
      margin-left: 100%
    }
  }

  @media screen and (max-width:1169px) {
    .column.is-narrow-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none
    }

    .column.is-full-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 100%
    }

    .column.is-three-quarters-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 75%
    }

    .column.is-two-thirds-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 66.6666%
    }

    .column.is-half-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 50%
    }

    .column.is-one-third-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 33.3333%
    }

    .column.is-one-quarter-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 25%
    }

    .column.is-one-fifth-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 20%
    }

    .column.is-two-fifths-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 40%
    }

    .column.is-three-fifths-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 60%
    }

    .column.is-four-fifths-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 80%
    }

    .column.is-offset-three-quarters-touch {
      margin-left: 75%
    }

    .column.is-offset-two-thirds-touch {
      margin-left: 66.6666%
    }

    .column.is-offset-half-touch {
      margin-left: 50%
    }

    .column.is-offset-one-third-touch {
      margin-left: 33.3333%
    }

    .column.is-offset-one-quarter-touch {
      margin-left: 25%
    }

    .column.is-offset-one-fifth-touch {
      margin-left: 20%
    }

    .column.is-offset-two-fifths-touch {
      margin-left: 40%
    }

    .column.is-offset-three-fifths-touch {
      margin-left: 60%
    }

    .column.is-offset-four-fifths-touch {
      margin-left: 80%
    }

    .column.is-1-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 8.33333%
    }

    .column.is-offset-1-touch {
      margin-left: 8.33333%
    }

    .column.is-2-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 16.66667%
    }

    .column.is-offset-2-touch {
      margin-left: 16.66667%
    }

    .column.is-3-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 25%
    }

    .column.is-offset-3-touch {
      margin-left: 25%
    }

    .column.is-4-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 33.33333%
    }

    .column.is-offset-4-touch {
      margin-left: 33.33333%
    }

    .column.is-5-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 41.66667%
    }

    .column.is-offset-5-touch {
      margin-left: 41.66667%
    }

    .column.is-6-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 50%
    }

    .column.is-offset-6-touch {
      margin-left: 50%
    }

    .column.is-7-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 58.33333%
    }

    .column.is-offset-7-touch {
      margin-left: 58.33333%
    }

    .column.is-8-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 66.66667%
    }

    .column.is-offset-8-touch {
      margin-left: 66.66667%
    }

    .column.is-9-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 75%
    }

    .column.is-offset-9-touch {
      margin-left: 75%
    }

    .column.is-10-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 83.33333%
    }

    .column.is-offset-10-touch {
      margin-left: 83.33333%
    }

    .column.is-11-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 91.66667%
    }

    .column.is-offset-11-touch {
      margin-left: 91.66667%
    }

    .column.is-12-touch {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 100%
    }

    .column.is-offset-12-touch {
      margin-left: 100%
    }
  }

  @media screen and (min-width:1170px) {
    .column.is-narrow-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none
    }

    .column.is-full-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 100%
    }

    .column.is-three-quarters-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 75%
    }

    .column.is-two-thirds-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 66.6666%
    }

    .column.is-half-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 50%
    }

    .column.is-one-third-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 33.3333%
    }

    .column.is-one-quarter-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 25%
    }

    .column.is-one-fifth-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 20%
    }

    .column.is-two-fifths-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 40%
    }

    .column.is-three-fifths-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 60%
    }

    .column.is-four-fifths-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 80%
    }

    .column.is-offset-three-quarters-desktop {
      margin-left: 75%
    }

    .column.is-offset-two-thirds-desktop {
      margin-left: 66.6666%
    }

    .column.is-offset-half-desktop {
      margin-left: 50%
    }

    .column.is-offset-one-third-desktop {
      margin-left: 33.3333%
    }

    .column.is-offset-one-quarter-desktop {
      margin-left: 25%
    }

    .column.is-offset-one-fifth-desktop {
      margin-left: 20%
    }

    .column.is-offset-two-fifths-desktop {
      margin-left: 40%
    }

    .column.is-offset-three-fifths-desktop {
      margin-left: 60%
    }

    .column.is-offset-four-fifths-desktop {
      margin-left: 80%
    }

    .column.is-1-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 8.33333%
    }

    .column.is-offset-1-desktop {
      margin-left: 8.33333%
    }

    .column.is-2-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 16.66667%
    }

    .column.is-offset-2-desktop {
      margin-left: 16.66667%
    }

    .column.is-3-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 25%
    }

    .column.is-offset-3-desktop {
      margin-left: 25%
    }

    .column.is-4-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 33.33333%
    }

    .column.is-offset-4-desktop {
      margin-left: 33.33333%
    }

    .column.is-5-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 41.66667%
    }

    .column.is-offset-5-desktop {
      margin-left: 41.66667%
    }

    .column.is-6-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 50%
    }

    .column.is-offset-6-desktop {
      margin-left: 50%
    }

    .column.is-7-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 58.33333%
    }

    .column.is-offset-7-desktop {
      margin-left: 58.33333%
    }

    .column.is-8-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 66.66667%
    }

    .column.is-offset-8-desktop {
      margin-left: 66.66667%
    }

    .column.is-9-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 75%
    }

    .column.is-offset-9-desktop {
      margin-left: 75%
    }

    .column.is-10-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 83.33333%
    }

    .column.is-offset-10-desktop {
      margin-left: 83.33333%
    }

    .column.is-11-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 91.66667%
    }

    .column.is-offset-11-desktop {
      margin-left: 91.66667%
    }

    .column.is-12-desktop {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 100%
    }

    .column.is-offset-12-desktop {
      margin-left: 100%
    }
  }

  .columns {
    margin-left: -15px;
    margin-right: -15px;
    margin-top: -15px
  }

  .columns:last-child {
    margin-bottom: -15px
  }

  .columns:not(:last-child) {
    margin-bottom: 15px
  }

  .columns.is-centered {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .columns.is-gapless {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0
  }

  .columns.is-gapless>.column {
    margin: 0;
    padding: 0 !important
  }

  .columns.is-gapless:not(:last-child) {
    margin-bottom: 15px
  }

  .columns.is-gapless:last-child {
    margin-bottom: 0
  }

  .columns.is-mobile {
    display: flex
  }

  .columns.is-multiline {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }

  .columns.is-vcentered {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  @media screen and (min-width:768px),
  print {
    .columns:not(.is-desktop) {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }
  }

  @media screen and (min-width:1170px) {
    .columns.is-desktop {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }
  }

  .columns.is-variable {
    --columnGap: 10.5px;
    --columnGap: 0.75rem;
    margin-left: calc(-1 * var(--columnGap));
    margin-right: calc(-1 * var(--columnGap))
  }

  .columns.is-variable .column {
    padding-left: var(--columnGap);
    padding-right: var(--columnGap)
  }

  .columns.is-variable.is-0 {
    --columnGap: 0px;
    --columnGap: 0rem
  }

  .columns.is-variable.is-1 {
    --columnGap: 3.5px;
    --columnGap: 0.25rem
  }

  .columns.is-variable.is-2 {
    --columnGap: 7px;
    --columnGap: 0.5rem
  }

  .columns.is-variable.is-3 {
    --columnGap: 10.5px;
    --columnGap: 0.75rem
  }

  .columns.is-variable.is-4 {
    --columnGap: 14px;
    --columnGap: 1rem
  }

  .columns.is-variable.is-5 {
    --columnGap: 17.5px;
    --columnGap: 1.25rem
  }

  .columns.is-variable.is-6 {
    --columnGap: 21px;
    --columnGap: 1.5rem
  }

  .columns.is-variable.is-7 {
    --columnGap: 24.5px;
    --columnGap: 1.75rem
  }

  .columns.is-variable.is-8 {
    --columnGap: 28px;
    --columnGap: 2rem
  }

  .tile {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: block;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    min-height: -webkit-min-content;
    min-height: -moz-min-content;
    min-height: min-content
  }

  .tile.is-ancestor {
    margin-left: -.75rem;
    margin-right: -.75rem;
    margin-top: -.75rem
  }

  .tile.is-ancestor:last-child {
    margin-bottom: -.75rem
  }

  .tile.is-ancestor:not(:last-child) {
    margin-bottom: .75rem
  }

  .tile.is-child {
    margin: 0 !important
  }

  .tile.is-parent {
    padding: .75rem
  }

  .tile.is-vertical {
    -ms-flex-direction: column;
    flex-direction: column
  }

  .tile.is-vertical>.tile.is-child:not(:last-child) {
    margin-bottom: 1.5rem !important
  }

  @media screen and (min-width:768px),
  print {
    .tile:not(.is-child) {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    .tile.is-1 {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 8.33333%
    }

    .tile.is-2 {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 16.66667%
    }

    .tile.is-3 {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 25%
    }

    .tile.is-4 {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 33.33333%
    }

    .tile.is-5 {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 41.66667%
    }

    .tile.is-6 {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 50%
    }

    .tile.is-7 {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 58.33333%
    }

    .tile.is-8 {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 66.66667%
    }

    .tile.is-9 {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 75%
    }

    .tile.is-10 {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 83.33333%
    }

    .tile.is-11 {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 91.66667%
    }

    .tile.is-12 {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 100%
    }
  }

  .hero {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
  }

  .hero .navbar {
    background: 0 0
  }

  .hero .tabs ul {
    border-bottom: none
  }

  .hero.is-white {
    background-color: #fff;
    color: #0a0a0a
  }

  .hero.is-white a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-white strong {
    color: inherit
  }

  .hero.is-white .title {
    color: #0a0a0a
  }

  .hero.is-white .subtitle {
    color: rgba(10, 10, 10, .9)
  }

  .hero.is-white .subtitle a:not(.button),
  .hero.is-white .subtitle strong {
    color: #0a0a0a
  }

  @media screen and (max-width:1169px) {
    .hero.is-white .navbar-menu {
      background-color: #fff
    }
  }

  .hero.is-white .navbar-item,
  .hero.is-white .navbar-link {
    color: rgba(10, 10, 10, .7)
  }

  .hero.is-white .navbar-link.is-active,
  .hero.is-white .navbar-link:hover,
  .hero.is-white a.navbar-item.is-active,
  .hero.is-white a.navbar-item:hover {
    background-color: #f2f2f2;
    color: #0a0a0a
  }

  .hero.is-white .tabs a {
    color: #0a0a0a;
    opacity: .9
  }

  .hero.is-white .tabs a:hover,
  .hero.is-white .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-white .tabs.is-boxed a,
  .hero.is-white .tabs.is-toggle a {
    color: #0a0a0a
  }

  .hero.is-white .tabs.is-boxed a:hover,
  .hero.is-white .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-white .tabs.is-boxed li.is-active a,
  .hero.is-white .tabs.is-boxed li.is-active a:hover,
  .hero.is-white .tabs.is-toggle li.is-active a,
  .hero.is-white .tabs.is-toggle li.is-active a:hover {
    background-color: #0a0a0a;
    border-color: #0a0a0a;
    color: #fff
  }

  .hero.is-white.is-bold {
    background-image: linear-gradient(141deg, #e6e6e6 0, #fff 71%, #fff 100%)
  }

  @media screen and (max-width:767px) {
    .hero.is-white.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #e6e6e6 0, #fff 71%, #fff 100%)
    }

    .hero.is-black.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #000 0, #0a0a0a 71%, #181616 100%)
    }
  }

  .hero.is-black {
    background-color: #0a0a0a;
    color: #fff
  }

  .hero.is-black a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-black strong {
    color: inherit
  }

  .hero.is-black .title {
    color: #fff
  }

  .hero.is-black .subtitle {
    color: rgba(255, 255, 255, .9)
  }

  .hero.is-black .subtitle a:not(.button),
  .hero.is-black .subtitle strong {
    color: #fff
  }

  @media screen and (max-width:1169px) {
    .hero.is-black .navbar-menu {
      background-color: #0a0a0a
    }
  }

  .hero.is-black .navbar-item,
  .hero.is-black .navbar-link {
    color: rgba(255, 255, 255, .7)
  }

  .hero.is-black .navbar-link.is-active,
  .hero.is-black .navbar-link:hover,
  .hero.is-black a.navbar-item.is-active,
  .hero.is-black a.navbar-item:hover {
    background-color: #000;
    color: #fff
  }

  .hero.is-black .tabs a {
    color: #fff;
    opacity: .9
  }

  .hero.is-black .tabs a:hover,
  .hero.is-black .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-black .tabs.is-boxed a,
  .hero.is-black .tabs.is-toggle a {
    color: #fff
  }

  .hero.is-black .tabs.is-boxed a:hover,
  .hero.is-black .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-black .tabs.is-boxed li.is-active a,
  .hero.is-black .tabs.is-boxed li.is-active a:hover,
  .hero.is-black .tabs.is-toggle li.is-active a,
  .hero.is-black .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #0a0a0a
  }

  .hero.is-black.is-bold {
    background-image: linear-gradient(141deg, #000 0, #0a0a0a 71%, #181616 100%)
  }

  .hero.is-light {
    background-color: #f5f5f5;
    color: #363636
  }

  .hero.is-light a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-light strong {
    color: inherit
  }

  .hero.is-light .title {
    color: #363636
  }

  .hero.is-light .subtitle {
    color: rgba(54, 54, 54, .9)
  }

  .hero.is-light .subtitle a:not(.button),
  .hero.is-light .subtitle strong {
    color: #363636
  }

  @media screen and (max-width:1169px) {
    .hero.is-light .navbar-menu {
      background-color: #f5f5f5
    }
  }

  .hero.is-light .navbar-item,
  .hero.is-light .navbar-link {
    color: rgba(54, 54, 54, .7)
  }

  .hero.is-light .navbar-link.is-active,
  .hero.is-light .navbar-link:hover,
  .hero.is-light a.navbar-item.is-active,
  .hero.is-light a.navbar-item:hover {
    background-color: #e8e8e8;
    color: #363636
  }

  .hero.is-light .tabs a {
    color: #363636;
    opacity: .9
  }

  .hero.is-light .tabs a:hover,
  .hero.is-light .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-light .tabs.is-boxed a,
  .hero.is-light .tabs.is-toggle a {
    color: #363636
  }

  .hero.is-light .tabs.is-boxed a:hover,
  .hero.is-light .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-light .tabs.is-boxed li.is-active a,
  .hero.is-light .tabs.is-boxed li.is-active a:hover,
  .hero.is-light .tabs.is-toggle li.is-active a,
  .hero.is-light .tabs.is-toggle li.is-active a:hover {
    background-color: #363636;
    border-color: #363636;
    color: #f5f5f5
  }

  .hero.is-light.is-bold {
    background-image: linear-gradient(141deg, #dfd8d9 0, #f5f5f5 71%, #fff 100%)
  }

  @media screen and (max-width:767px) {
    .hero.is-light.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #dfd8d9 0, #f5f5f5 71%, #fff 100%)
    }

    .hero.is-dark.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #1f191a 0, #363636 71%, #46403f 100%)
    }
  }

  .hero.is-dark {
    background-color: #363636;
    color: #f5f5f5
  }

  .hero.is-dark a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-dark strong {
    color: inherit
  }

  .hero.is-dark .title {
    color: #f5f5f5
  }

  .hero.is-dark .subtitle {
    color: rgba(245, 245, 245, .9)
  }

  .hero.is-dark .subtitle a:not(.button),
  .hero.is-dark .subtitle strong {
    color: #f5f5f5
  }

  @media screen and (max-width:1169px) {
    .hero.is-dark .navbar-menu {
      background-color: #363636
    }
  }

  .hero.is-dark .navbar-item,
  .hero.is-dark .navbar-link {
    color: rgba(245, 245, 245, .7)
  }

  .hero.is-dark .navbar-link.is-active,
  .hero.is-dark .navbar-link:hover,
  .hero.is-dark a.navbar-item.is-active,
  .hero.is-dark a.navbar-item:hover {
    background-color: #292929;
    color: #f5f5f5
  }

  .hero.is-dark .tabs a {
    color: #f5f5f5;
    opacity: .9
  }

  .hero.is-dark .tabs a:hover,
  .hero.is-dark .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-dark .tabs.is-boxed a,
  .hero.is-dark .tabs.is-toggle a {
    color: #f5f5f5
  }

  .hero.is-dark .tabs.is-boxed a:hover,
  .hero.is-dark .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-dark .tabs.is-boxed li.is-active a,
  .hero.is-dark .tabs.is-boxed li.is-active a:hover,
  .hero.is-dark .tabs.is-toggle li.is-active a,
  .hero.is-dark .tabs.is-toggle li.is-active a:hover {
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    color: #363636
  }

  .hero.is-dark.is-bold {
    background-image: linear-gradient(141deg, #1f191a 0, #363636 71%, #46403f 100%)
  }

  .hero.is-primary {
    background-color: #e32126;
    color: #fff
  }

  .hero.is-primary a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-primary strong {
    color: inherit
  }

  .hero.is-primary .title {
    color: #fff
  }

  .hero.is-primary .subtitle {
    color: rgba(255, 255, 255, .9)
  }

  .hero.is-primary .subtitle a:not(.button),
  .hero.is-primary .subtitle strong {
    color: #fff
  }

  @media screen and (max-width:1169px) {
    .hero.is-primary .navbar-menu {
      background-color: #e32126
    }
  }

  .hero.is-primary .navbar-item,
  .hero.is-primary .navbar-link {
    color: rgba(255, 255, 255, .7)
  }

  .hero.is-primary .navbar-link.is-active,
  .hero.is-primary .navbar-link:hover,
  .hero.is-primary a.navbar-item.is-active,
  .hero.is-primary a.navbar-item:hover {
    background-color: #d01a1f;
    color: #fff
  }

  .hero.is-primary .tabs a {
    color: #fff;
    opacity: .9
  }

  .hero.is-primary .tabs a:hover,
  .hero.is-primary .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-primary .tabs.is-boxed a,
  .hero.is-primary .tabs.is-toggle a {
    color: #fff
  }

  .hero.is-primary .tabs.is-boxed a:hover,
  .hero.is-primary .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-primary .tabs.is-boxed li.is-active a,
  .hero.is-primary .tabs.is-boxed li.is-active a:hover,
  .hero.is-primary .tabs.is-toggle li.is-active a,
  .hero.is-primary .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #e32126
  }

  .hero.is-primary.is-bold {
    background-image: linear-gradient(141deg, #c40d30 0, #e32126 71%, #eb4c32 100%)
  }

  @media screen and (max-width:767px) {
    .hero.is-primary.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #c40d30 0, #e32126 71%, #eb4c32 100%)
    }

    .hero.is-link.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #1577c6 0, #3273dc 71%, #4366e5 100%)
    }
  }

  .hero.is-link {
    background-color: #3273dc;
    color: #fff
  }

  .hero.is-link a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-link strong {
    color: inherit
  }

  .hero.is-link .title {
    color: #fff
  }

  .hero.is-link .subtitle {
    color: rgba(255, 255, 255, .9)
  }

  .hero.is-link .subtitle a:not(.button),
  .hero.is-link .subtitle strong {
    color: #fff
  }

  @media screen and (max-width:1169px) {
    .hero.is-link .navbar-menu {
      background-color: #3273dc
    }
  }

  .hero.is-link .navbar-item,
  .hero.is-link .navbar-link {
    color: rgba(255, 255, 255, .7)
  }

  .hero.is-link .navbar-link.is-active,
  .hero.is-link .navbar-link:hover,
  .hero.is-link a.navbar-item.is-active,
  .hero.is-link a.navbar-item:hover {
    background-color: #2366d1;
    color: #fff
  }

  .hero.is-link .tabs a {
    color: #fff;
    opacity: .9
  }

  .hero.is-link .tabs a:hover,
  .hero.is-link .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-link .tabs.is-boxed a,
  .hero.is-link .tabs.is-toggle a {
    color: #fff
  }

  .hero.is-link .tabs.is-boxed a:hover,
  .hero.is-link .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-link .tabs.is-boxed li.is-active a,
  .hero.is-link .tabs.is-boxed li.is-active a:hover,
  .hero.is-link .tabs.is-toggle li.is-active a,
  .hero.is-link .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #3273dc
  }

  .hero.is-link.is-bold {
    background-image: linear-gradient(141deg, #1577c6 0, #3273dc 71%, #4366e5 100%)
  }

  .hero.is-info {
    background-color: #209cee;
    color: #fff
  }

  .hero.is-info a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-info strong {
    color: inherit
  }

  .hero.is-info .title {
    color: #fff
  }

  .hero.is-info .subtitle {
    color: rgba(255, 255, 255, .9)
  }

  .hero.is-info .subtitle a:not(.button),
  .hero.is-info .subtitle strong {
    color: #fff
  }

  @media screen and (max-width:1169px) {
    .hero.is-info .navbar-menu {
      background-color: #209cee
    }
  }

  .hero.is-info .navbar-item,
  .hero.is-info .navbar-link {
    color: rgba(255, 255, 255, .7)
  }

  .hero.is-info .navbar-link.is-active,
  .hero.is-info .navbar-link:hover,
  .hero.is-info a.navbar-item.is-active,
  .hero.is-info a.navbar-item:hover {
    background-color: #118fe4;
    color: #fff
  }

  .hero.is-info .tabs a {
    color: #fff;
    opacity: .9
  }

  .hero.is-info .tabs a:hover,
  .hero.is-info .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-info .tabs.is-boxed a,
  .hero.is-info .tabs.is-toggle a {
    color: #fff
  }

  .hero.is-info .tabs.is-boxed a:hover,
  .hero.is-info .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-info .tabs.is-boxed li.is-active a,
  .hero.is-info .tabs.is-boxed li.is-active a:hover,
  .hero.is-info .tabs.is-toggle li.is-active a,
  .hero.is-info .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #209cee
  }

  .hero.is-info.is-bold {
    background-image: linear-gradient(141deg, #04a6d7 0, #209cee 71%, #3287f5 100%)
  }

  @media screen and (max-width:767px) {
    .hero.is-info.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #04a6d7 0, #209cee 71%, #3287f5 100%)
    }

    .hero.is-success.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #12af2f 0, #23d160 71%, #2ce28a 100%)
    }
  }

  .hero.is-success {
    background-color: #23d160;
    color: #fff
  }

  .hero.is-success a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-success strong {
    color: inherit
  }

  .hero.is-success .title {
    color: #fff
  }

  .hero.is-success .subtitle {
    color: rgba(255, 255, 255, .9)
  }

  .hero.is-success .subtitle a:not(.button),
  .hero.is-success .subtitle strong {
    color: #fff
  }

  @media screen and (max-width:1169px) {
    .hero.is-success .navbar-menu {
      background-color: #23d160
    }
  }

  .hero.is-success .navbar-item,
  .hero.is-success .navbar-link {
    color: rgba(255, 255, 255, .7)
  }

  .hero.is-success .navbar-link.is-active,
  .hero.is-success .navbar-link:hover,
  .hero.is-success a.navbar-item.is-active,
  .hero.is-success a.navbar-item:hover {
    background-color: #20bc56;
    color: #fff
  }

  .hero.is-success .tabs a {
    color: #fff;
    opacity: .9
  }

  .hero.is-success .tabs a:hover,
  .hero.is-success .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-success .tabs.is-boxed a,
  .hero.is-success .tabs.is-toggle a {
    color: #fff
  }

  .hero.is-success .tabs.is-boxed a:hover,
  .hero.is-success .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-success .tabs.is-boxed li.is-active a,
  .hero.is-success .tabs.is-boxed li.is-active a:hover,
  .hero.is-success .tabs.is-toggle li.is-active a,
  .hero.is-success .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #23d160
  }

  .hero.is-success.is-bold {
    background-image: linear-gradient(141deg, #12af2f 0, #23d160 71%, #2ce28a 100%)
  }

  .hero.is-warning {
    background-color: #ffdd57;
    color: rgba(0, 0, 0, .7)
  }

  .hero.is-warning a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-warning strong {
    color: inherit
  }

  .hero.is-warning .title {
    color: rgba(0, 0, 0, .7)
  }

  .hero.is-warning .subtitle {
    color: rgba(0, 0, 0, .9)
  }

  .hero.is-warning .navbar-item,
  .hero.is-warning .navbar-link,
  .hero.is-warning .subtitle a:not(.button),
  .hero.is-warning .subtitle strong,
  .hero.is-warning .tabs a,
  .hero.is-warning .tabs.is-boxed a,
  .hero.is-warning .tabs.is-toggle a {
    color: rgba(0, 0, 0, .7)
  }

  @media screen and (max-width:1169px) {
    .hero.is-warning .navbar-menu {
      background-color: #ffdd57
    }
  }

  .hero.is-warning .navbar-link.is-active,
  .hero.is-warning .navbar-link:hover,
  .hero.is-warning a.navbar-item.is-active,
  .hero.is-warning a.navbar-item:hover {
    background-color: #ffd83d;
    color: rgba(0, 0, 0, .7)
  }

  .hero.is-warning .tabs a {
    opacity: .9
  }

  .hero.is-warning .tabs a:hover,
  .hero.is-warning .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-warning .tabs.is-boxed a:hover,
  .hero.is-warning .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-warning .tabs.is-boxed li.is-active a,
  .hero.is-warning .tabs.is-boxed li.is-active a:hover,
  .hero.is-warning .tabs.is-toggle li.is-active a,
  .hero.is-warning .tabs.is-toggle li.is-active a:hover {
    background-color: rgba(0, 0, 0, .7);
    border-color: rgba(0, 0, 0, .7);
    color: #ffdd57
  }

  .hero.is-warning.is-bold {
    background-image: linear-gradient(141deg, #ffaf24 0, #ffdd57 71%, #fffa70 100%)
  }

  @media screen and (max-width:767px) {
    .hero.is-warning.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #ffaf24 0, #ffdd57 71%, #fffa70 100%)
    }

    .hero.is-danger.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #ff0561 0, #ff3860 71%, #ff5257 100%)
    }
  }

  .hero.is-danger {
    background-color: #ff3860;
    color: #fff
  }

  .hero.is-danger a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-danger strong {
    color: inherit
  }

  .hero.is-danger .title {
    color: #fff
  }

  .hero.is-danger .subtitle {
    color: rgba(255, 255, 255, .9)
  }

  .hero.is-danger .subtitle a:not(.button),
  .hero.is-danger .subtitle strong {
    color: #fff
  }

  @media screen and (max-width:1169px) {
    .hero.is-danger .navbar-menu {
      background-color: #ff3860
    }
  }

  .hero.is-danger .navbar-item,
  .hero.is-danger .navbar-link {
    color: rgba(255, 255, 255, .7)
  }

  .hero.is-danger .navbar-link.is-active,
  .hero.is-danger .navbar-link:hover,
  .hero.is-danger a.navbar-item.is-active,
  .hero.is-danger a.navbar-item:hover {
    background-color: #ff1f4b;
    color: #fff
  }

  .hero.is-danger .tabs a {
    color: #fff;
    opacity: .9
  }

  .hero.is-danger .tabs a:hover,
  .hero.is-danger .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-danger .tabs.is-boxed a,
  .hero.is-danger .tabs.is-toggle a {
    color: #fff
  }

  .hero.is-danger .tabs.is-boxed a:hover,
  .hero.is-danger .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-danger .tabs.is-boxed li.is-active a,
  .hero.is-danger .tabs.is-boxed li.is-active a:hover,
  .hero.is-danger .tabs.is-toggle li.is-active a,
  .hero.is-danger .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #ff3860
  }

  .hero.is-danger.is-bold {
    background-image: linear-gradient(141deg, #ff0561 0, #ff3860 71%, #ff5257 100%)
  }

  .hero.is-gold {
    background-color: #c2b885;
    color: #fff
  }

  .hero.is-gold a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-gold strong {
    color: inherit
  }

  .hero.is-gold .title {
    color: #fff
  }

  .hero.is-gold .subtitle {
    color: rgba(255, 255, 255, .9)
  }

  .hero.is-gold .subtitle a:not(.button),
  .hero.is-gold .subtitle strong {
    color: #fff
  }

  @media screen and (max-width:1169px) {
    .hero.is-gold .navbar-menu {
      background-color: #c2b885
    }
  }

  .hero.is-gold .navbar-item,
  .hero.is-gold .navbar-link {
    color: rgba(255, 255, 255, .7)
  }

  .hero.is-gold .navbar-link.is-active,
  .hero.is-gold .navbar-link:hover,
  .hero.is-gold a.navbar-item.is-active,
  .hero.is-gold a.navbar-item:hover {
    background-color: #baae74;
    color: #fff
  }

  .hero.is-gold .tabs a {
    color: #fff;
    opacity: .9
  }

  .hero.is-gold .tabs a:hover,
  .hero.is-gold .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-gold .tabs.is-boxed a,
  .hero.is-gold .tabs.is-toggle a {
    color: #fff
  }

  .hero.is-gold .tabs.is-boxed a:hover,
  .hero.is-gold .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-gold .tabs.is-boxed li.is-active a,
  .hero.is-gold .tabs.is-boxed li.is-active a:hover,
  .hero.is-gold .tabs.is-toggle li.is-active a,
  .hero.is-gold .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #c2b885
  }

  .hero.is-gold.is-bold {
    background-image: linear-gradient(141deg, #bd9b57 0, #c2b885 71%, #cece92 100%)
  }

  @media screen and (max-width:767px) {
    .hero.is-gold.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #bd9b57 0, #c2b885 71%, #cece92 100%)
    }

    .hero.is-red.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #c40d30 0, #e32126 71%, #eb4c32 100%)
    }
  }

  .hero.is-red {
    background-color: #e32126;
    color: #fff
  }

  .hero.is-red a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-red strong {
    color: inherit
  }

  .hero.is-red .title {
    color: #fff
  }

  .hero.is-red .subtitle {
    color: rgba(255, 255, 255, .9)
  }

  .hero.is-red .subtitle a:not(.button),
  .hero.is-red .subtitle strong {
    color: #fff
  }

  @media screen and (max-width:1169px) {
    .hero.is-red .navbar-menu {
      background-color: #e32126
    }
  }

  .hero.is-red .navbar-item,
  .hero.is-red .navbar-link {
    color: rgba(255, 255, 255, .7)
  }

  .hero.is-red .navbar-link.is-active,
  .hero.is-red .navbar-link:hover,
  .hero.is-red a.navbar-item.is-active,
  .hero.is-red a.navbar-item:hover {
    background-color: #d01a1f;
    color: #fff
  }

  .hero.is-red .tabs a {
    color: #fff;
    opacity: .9
  }

  .hero.is-red .tabs a:hover,
  .hero.is-red .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-red .tabs.is-boxed a,
  .hero.is-red .tabs.is-toggle a {
    color: #fff
  }

  .hero.is-red .tabs.is-boxed a:hover,
  .hero.is-red .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-red .tabs.is-boxed li.is-active a,
  .hero.is-red .tabs.is-boxed li.is-active a:hover,
  .hero.is-red .tabs.is-toggle li.is-active a,
  .hero.is-red .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #e32126
  }

  .hero.is-red.is-bold {
    background-image: linear-gradient(141deg, #c40d30 0, #e32126 71%, #eb4c32 100%)
  }

  .hero.is-red-dark {
    background-color: #4c0b0a;
    color: #fff
  }

  .hero.is-red-dark a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-red-dark strong {
    color: inherit
  }

  .hero.is-red-dark .title {
    color: #fff
  }

  .hero.is-red-dark .subtitle {
    color: rgba(255, 255, 255, .9)
  }

  .hero.is-red-dark .subtitle a:not(.button),
  .hero.is-red-dark .subtitle strong {
    color: #fff
  }

  @media screen and (max-width:1169px) {
    .hero.is-red-dark .navbar-menu {
      background-color: #4c0b0a
    }
  }

  .hero.is-red-dark .navbar-item,
  .hero.is-red-dark .navbar-link {
    color: rgba(255, 255, 255, .7)
  }

  .hero.is-red-dark .navbar-link.is-active,
  .hero.is-red-dark .navbar-link:hover,
  .hero.is-red-dark a.navbar-item.is-active,
  .hero.is-red-dark a.navbar-item:hover {
    background-color: #350807;
    color: #fff
  }

  .hero.is-red-dark .tabs a {
    color: #fff;
    opacity: .9
  }

  .hero.is-red-dark .tabs a:hover,
  .hero.is-red-dark .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-red-dark .tabs.is-boxed a,
  .hero.is-red-dark .tabs.is-toggle a {
    color: #fff
  }

  .hero.is-red-dark .tabs.is-boxed a:hover,
  .hero.is-red-dark .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-red-dark .tabs.is-boxed li.is-active a,
  .hero.is-red-dark .tabs.is-boxed li.is-active a:hover,
  .hero.is-red-dark .tabs.is-toggle li.is-active a,
  .hero.is-red-dark .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #4c0b0a
  }

  .hero.is-red-dark.is-bold {
    background-image: linear-gradient(141deg, #210207 0, #4c0b0a 71%, #651b0a 100%)
  }

  @media screen and (max-width:767px) {
    .hero.is-red-dark.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #210207 0, #4c0b0a 71%, #651b0a 100%)
    }

    .hero.is-secondary.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #bd9b57 0, #c2b885 71%, #cece92 100%)
    }
  }

  .hero.is-secondary {
    background-color: #c2b885;
    color: #fff
  }

  .hero.is-secondary a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-secondary strong {
    color: inherit
  }

  .hero.is-secondary .title {
    color: #fff
  }

  .hero.is-secondary .subtitle {
    color: rgba(255, 255, 255, .9)
  }

  .hero.is-secondary .subtitle a:not(.button),
  .hero.is-secondary .subtitle strong {
    color: #fff
  }

  @media screen and (max-width:1169px) {
    .hero.is-secondary .navbar-menu {
      background-color: #c2b885
    }
  }

  .hero.is-secondary .navbar-item,
  .hero.is-secondary .navbar-link {
    color: rgba(255, 255, 255, .7)
  }

  .hero.is-secondary .navbar-link.is-active,
  .hero.is-secondary .navbar-link:hover,
  .hero.is-secondary a.navbar-item.is-active,
  .hero.is-secondary a.navbar-item:hover {
    background-color: #baae74;
    color: #fff
  }

  .hero.is-secondary .tabs a {
    color: #fff;
    opacity: .9
  }

  .hero.is-secondary .tabs a:hover,
  .hero.is-secondary .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-secondary .tabs.is-boxed a,
  .hero.is-secondary .tabs.is-toggle a {
    color: #fff
  }

  .hero.is-secondary .tabs.is-boxed a:hover,
  .hero.is-secondary .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-secondary .tabs.is-boxed li.is-active a,
  .hero.is-secondary .tabs.is-boxed li.is-active a:hover,
  .hero.is-secondary .tabs.is-toggle li.is-active a,
  .hero.is-secondary .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #c2b885
  }

  .hero.is-secondary.is-bold {
    background-image: linear-gradient(141deg, #bd9b57 0, #c2b885 71%, #cece92 100%)
  }

  .hero.is-grey-light {
    background-color: #f4f5f7;
    color: #2d2f30
  }

  .hero.is-grey-light a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-grey-light strong {
    color: inherit
  }

  .hero.is-grey-light .title {
    color: #2d2f30
  }

  .hero.is-grey-light .subtitle {
    color: rgba(45, 47, 48, .9)
  }

  .hero.is-grey-light .subtitle a:not(.button),
  .hero.is-grey-light .subtitle strong {
    color: #2d2f30
  }

  @media screen and (max-width:1169px) {
    .hero.is-grey-light .navbar-menu {
      background-color: #f4f5f7
    }
  }

  .hero.is-grey-light .navbar-item,
  .hero.is-grey-light .navbar-link {
    color: rgba(45, 47, 48, .7)
  }

  .hero.is-grey-light .navbar-link.is-active,
  .hero.is-grey-light .navbar-link:hover,
  .hero.is-grey-light a.navbar-item.is-active,
  .hero.is-grey-light a.navbar-item:hover {
    background-color: #e5e8ec;
    color: #2d2f30
  }

  .hero.is-grey-light .tabs a {
    color: #2d2f30;
    opacity: .9
  }

  .hero.is-grey-light .tabs a:hover,
  .hero.is-grey-light .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-grey-light .tabs.is-boxed a,
  .hero.is-grey-light .tabs.is-toggle a {
    color: #2d2f30
  }

  .hero.is-grey-light .tabs.is-boxed a:hover,
  .hero.is-grey-light .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-grey-light .tabs.is-boxed li.is-active a,
  .hero.is-grey-light .tabs.is-boxed li.is-active a:hover,
  .hero.is-grey-light .tabs.is-toggle li.is-active a,
  .hero.is-grey-light .tabs.is-toggle li.is-active a:hover {
    background-color: #2d2f30;
    border-color: #2d2f30;
    color: #f4f5f7
  }

  .hero.is-grey-light.is-bold {
    background-image: linear-gradient(141deg, #d3dce5 0, #f4f5f7 71%, #fff 100%)
  }

  @media screen and (max-width:767px) {
    .hero.is-grey-light.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #d3dce5 0, #f4f5f7 71%, #fff 100%)
    }

    .hero.is-grey.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #9cb2c2 0, #c1c7d0 71%, #cdd1dd 100%)
    }
  }

  .hero.is-grey {
    background-color: #c1c7d0;
    color: #2d2f30
  }

  .hero.is-grey a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-grey strong {
    color: inherit
  }

  .hero.is-grey .title {
    color: #2d2f30
  }

  .hero.is-grey .subtitle {
    color: rgba(45, 47, 48, .9)
  }

  .hero.is-grey .subtitle a:not(.button),
  .hero.is-grey .subtitle strong {
    color: #2d2f30
  }

  @media screen and (max-width:1169px) {
    .hero.is-grey .navbar-menu {
      background-color: #c1c7d0
    }
  }

  .hero.is-grey .navbar-item,
  .hero.is-grey .navbar-link {
    color: rgba(45, 47, 48, .7)
  }

  .hero.is-grey .navbar-link.is-active,
  .hero.is-grey .navbar-link:hover,
  .hero.is-grey a.navbar-item.is-active,
  .hero.is-grey a.navbar-item:hover {
    background-color: #b2bac5;
    color: #2d2f30
  }

  .hero.is-grey .tabs a {
    color: #2d2f30;
    opacity: .9
  }

  .hero.is-grey .tabs a:hover,
  .hero.is-grey .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-grey .tabs.is-boxed a,
  .hero.is-grey .tabs.is-toggle a {
    color: #2d2f30
  }

  .hero.is-grey .tabs.is-boxed a:hover,
  .hero.is-grey .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-grey .tabs.is-boxed li.is-active a,
  .hero.is-grey .tabs.is-boxed li.is-active a:hover,
  .hero.is-grey .tabs.is-toggle li.is-active a,
  .hero.is-grey .tabs.is-toggle li.is-active a:hover {
    background-color: #2d2f30;
    border-color: #2d2f30;
    color: #c1c7d0
  }

  .hero.is-grey.is-bold {
    background-image: linear-gradient(141deg, #9cb2c2 0, #c1c7d0 71%, #cdd1dd 100%)
  }

  .hero.is-grey-dark {
    background-color: #2d2f30;
    color: #fff
  }

  .hero.is-grey-dark a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-grey-dark strong {
    color: inherit
  }

  .hero.is-grey-dark .title {
    color: #fff
  }

  .hero.is-grey-dark .subtitle {
    color: rgba(255, 255, 255, .9)
  }

  .hero.is-grey-dark .subtitle a:not(.button),
  .hero.is-grey-dark .subtitle strong {
    color: #fff
  }

  @media screen and (max-width:1169px) {
    .hero.is-grey-dark .navbar-menu {
      background-color: #2d2f30
    }
  }

  .hero.is-grey-dark .navbar-item,
  .hero.is-grey-dark .navbar-link {
    color: rgba(255, 255, 255, .7)
  }

  .hero.is-grey-dark .navbar-link.is-active,
  .hero.is-grey-dark .navbar-link:hover,
  .hero.is-grey-dark a.navbar-item.is-active,
  .hero.is-grey-dark a.navbar-item:hover {
    background-color: #212223;
    color: #fff
  }

  .hero.is-grey-dark .tabs a {
    color: #fff;
    opacity: .9
  }

  .hero.is-grey-dark .tabs a:hover,
  .hero.is-grey-dark .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-grey-dark .tabs.is-boxed a,
  .hero.is-grey-dark .tabs.is-toggle a {
    color: #fff
  }

  .hero.is-grey-dark .tabs.is-boxed a:hover,
  .hero.is-grey-dark .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-grey-dark .tabs.is-boxed li.is-active a,
  .hero.is-grey-dark .tabs.is-boxed li.is-active a:hover,
  .hero.is-grey-dark .tabs.is-toggle li.is-active a,
  .hero.is-grey-dark .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #2d2f30
  }

  .hero.is-grey-dark.is-bold {
    background-image: linear-gradient(141deg, #121718 0, #2d2f30 71%, #363b40 100%)
  }

  @media screen and (max-width:767px) {
    .hero.is-grey-dark.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #121718 0, #2d2f30 71%, #363b40 100%)
    }

    .hero.is-green.is-bold .navbar-menu {
      background-image: linear-gradient(141deg, #27af53 0, #43c683 71%, #51d1a5 100%)
    }
  }

  .hero.is-green {
    background-color: #43c683;
    color: #fff
  }

  .hero.is-green a:not(.button):not(.dropdown-item):not(.tag),
  .hero.is-green strong {
    color: inherit
  }

  .hero.is-green .title {
    color: #fff
  }

  .hero.is-green .subtitle {
    color: rgba(255, 255, 255, .9)
  }

  .hero.is-green .subtitle a:not(.button),
  .hero.is-green .subtitle strong {
    color: #fff
  }

  @media screen and (max-width:1169px) {
    .hero.is-green .navbar-menu {
      background-color: #43c683
    }
  }

  .hero.is-green .navbar-item,
  .hero.is-green .navbar-link {
    color: rgba(255, 255, 255, .7)
  }

  .hero.is-green .navbar-link.is-active,
  .hero.is-green .navbar-link:hover,
  .hero.is-green a.navbar-item.is-active,
  .hero.is-green a.navbar-item:hover {
    background-color: #38b876;
    color: #fff
  }

  .hero.is-green .tabs a {
    color: #fff;
    opacity: .9
  }

  .hero.is-green .tabs a:hover,
  .hero.is-green .tabs li.is-active a {
    opacity: 1
  }

  .hero.is-green .tabs.is-boxed a,
  .hero.is-green .tabs.is-toggle a {
    color: #fff
  }

  .hero.is-green .tabs.is-boxed a:hover,
  .hero.is-green .tabs.is-toggle a:hover {
    background-color: rgba(45, 47, 48, .1)
  }

  .hero.is-green .tabs.is-boxed li.is-active a,
  .hero.is-green .tabs.is-boxed li.is-active a:hover,
  .hero.is-green .tabs.is-toggle li.is-active a,
  .hero.is-green .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #43c683
  }

  .hero.is-green.is-bold {
    background-image: linear-gradient(141deg, #27af53 0, #43c683 71%, #51d1a5 100%)
  }

  .hero.is-small .hero-body {
    padding-bottom: 1.5rem;
    padding-top: 1.5rem
  }

  .hero.is-fullheight .hero-body,
  .hero.is-halfheight .hero-body {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  .hero.is-fullheight .hero-body>.container,
  .hero.is-halfheight .hero-body>.container {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1
  }

  .hero.is-halfheight {
    min-height: 50vh
  }

  .hero.is-fullheight {
    min-height: 100vh
  }

  .hero-video video {
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0)
  }

  .hero-video.is-transparent {
    opacity: .3
  }

  .hero-buttons {
    margin-top: 1.5rem
  }

  @media screen and (max-width:767px) {
    .hero-video {
      display: none
    }

    .hero-buttons .button {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    .hero-buttons .button:not(:last-child) {
      margin-bottom: .75rem
    }
  }

  @media screen and (min-width:768px),
  print {
    .hero.is-medium .hero-body {
      padding-bottom: 9rem;
      padding-top: 9rem
    }

    .hero.is-large .hero-body {
      padding-bottom: 18rem;
      padding-top: 18rem
    }

    .hero-buttons {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center
    }

    .hero-buttons .button:not(:last-child) {
      margin-right: 1.5rem
    }
  }

  .hero-foot,
  .hero-head {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0
  }

  .section {
    padding: 15px
  }

  .section.is-first-section {
    padding-top: 15px !important
  }

  .section.is-last-section {
    padding-bottom: 0 !important
  }

  .section.is-gapless-besides {
    padding-left: 0 !important;
    padding-right: 0 !important
  }

  .section.is-gapless-top-bottom {
    padding-top: 0 !important;
    padding-bottom: 0 !important
  }

  @media screen and (max-width:1169px) {
    .section.is-medium {
      padding: 30px 15px
    }

    .section.is-large {
      padding: 90px 15px
    }
  }

  @media screen and (min-width:1170px) {
    .section.is-medium {
      padding: 30px 15px
    }

    .section.is-large {
      padding: 90px 15px
    }

    main {
      min-height: 55vh
    }
  }

  .footer {
    background-color: #fafafa;
    padding: 3rem 1.5rem 6rem
  }

  body {
    min-height: 100vh
  }

  .turbolinks-progress-bar {
    height: 3px;
    background-color: #e32126
  }

  .button-social {
    border-radius: 2px;
    height: 50px;
    width: 100%;
    text-align: center;
    padding: 0 20px;
    font-size: 14px;
    color: #fff;
    border: none
  }

  .button-social:focus {
    outline: 0
  }

  .button-social>.fab {
    font-size: 20px;
    float: left
  }

  .button-social.-facebook {
    background-color: #3b5999
  }

  .button-social.-google-plus {
    background-color: #f62b00
  }

  .button-social+.button-social {
    margin-top: 10px
  }

  .line-with-text {
    position: relative;
    text-align: center;
    font-size: 12px
  }

  .line-with-text span {
    position: relative;
    background: #fff;
    padding: 0 10px;
    z-index: 2
  }

  .line-with-text:after {
    content: '';
    position: absolute;
    height: 1px;
    background-color: #c1c7d0;
    width: 100%;
    left: 0;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: 0 auto
  }

  .menu,
  .warpper {
    position: relative
  }

  .error-msg {
    font-size: 13px;
    color: red;
    display: block;
    padding-top: 5px
  }

  .static-page-subtitle,
  .static-page-title {
    color: #e32126;
    font-family: Avenir, Kanit, Georgia, serif
  }

  .menu {
    height: 100%
  }

  .static-page-content {
    margin-top: 20px;
    margin-bottom: 60px
  }

  .page-content {
    margin-top: 20px;
    margin-bottom: 20px
  }

  .static-page-title {
    font-size: 32px;
    font-weight: 900;
    line-height: 44px;
    margin-bottom: 10px
  }

  .page-title,
  .static-page-subtitle {
    font-size: 22px;
    font-weight: 900;
    line-height: 30px
  }

  .static-page-subtitle {
    margin-bottom: 6px
  }

  .page-title {
    color: #4c0b0a
  }

  .hero-body {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: 30px 15px
  }

  .hero-body .subtitle {
    color: #2d2f30
  }

  .price,
  .product-qty {
    color: #e32126;
    font-size: 22px;
    font-weight: 900
  }

  .warpper {
    z-index: 1
  }

  .breadcrumb.has-arrow-separator li+li {
    padding: 0 5px 0 15px;
    position: relative
  }

  .breadcrumb.has-arrow-separator li+li:before {
    content: '>';
    position: absolute;
    left: 0
  }

  .product-qty {
    padding: 0 15px;
    line-height: 20px
  }

  .product-qty .qty {
    padding: 0 5px;
    min-width: 40px
  }

  .product-qty .icon {
    width: 21px;
    -webkit-transition: opacity .2s;
    transition: opacity .2s
  }

  .product-qty .icon.-disabled {
    opacity: .5
  }

  .product-qty .icon.-disabled:hover {
    cursor: auto
  }

  .input-file:hover,
  button:hover {
    cursor: pointer
  }

  .price {
    line-height: 22px
  }

  .price.price-before-discount {
    font-size: 14px;
    line-height: 14px;
    color: #999;
    font-weight: 400
  }

  * {
    -webkit-overflow-scrolling: touch
  }

  .block-image-circle {
    display: inline-block;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
    background: #eee
  }

  .has-text-ellipse {
    text-overflow: ellipsis;
    overflow: hidden
  }

  @media screen and (max-width:767px) {
    .columns-buttons.is-mobile .column:not(:last-child) {
      padding-right: 7.5px
    }

    .columns-buttons.is-mobile .column+.column {
      padding-left: 7.5px
    }

    .columns-buttons.is-mobile .button {
      padding-left: 7.5px;
      padding-right: 7.5px
    }

    .columns-buttons:not(.is-mobile) .column+.column,
    .is-paddingless-top-mobile {
      padding-top: 0
    }
  }

  @media screen and (min-width:768px),
  print {
    .columns-buttons .column:first-child {
      padding-right: 7.5px
    }

    .columns-buttons .column:last-child {
      padding-left: 7.5px
    }

    .is-paddingless-top-tablet {
      padding-top: 0
    }
  }

  .column-has-text-nowrap {
    overflow: auto
  }

  .column-has-text-nowrap .text-nowrap {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
  }

  .group-buttons-full .button {
    margin-bottom: 10px
  }

  .group-buttons-full .button:last-child {
    margin-bottom: 0
  }

  .image-center img {
    display: block;
    margin: 0 auto
  }

  .has-text-nowrap.-text-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden
  }

  .is-paddingless-y {
    padding-top: 0;
    padding-bottom: 0
  }

  .is-paddingless-x {
    padding-right: 0;
    padding-left: 0
  }

  .is-paddingless-top {
    padding-top: 0
  }

  .is-paddingless-bottom {
    padding-bottom: 0
  }

  @media screen and (max-width:767px) {
    .is-paddingless-bottom-mobile {
      padding-bottom: 0
    }

    .columns.is-reverse-mobile {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    .columns.is-reverse-mobile .column {
      width: 100%
    }

    .is-fullwidth-mobile {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 100%
    }
  }

  @media screen and (max-width:1169px) {
    .is-paddingless-top-touch {
      padding-top: 0
    }

    .is-paddingless-bottom-touch {
      padding-bottom: 0
    }

    .columns.is-reverse-touch {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse
    }

    .is-fullwidth-touch {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 100%
    }
  }

  @media screen and (min-width:768px),
  print {
    .is-paddingless-bottom-tablet {
      padding-bottom: 0
    }

    .columns.is-reverse-tablet {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse
    }
  }

  @media screen and (min-width:768px),
  print {
    .is-fullwidth-tablet {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 100%
    }

    .is-marginless-tablet {
      margin: 0 !important
    }
  }

  @media screen and (min-width:1170px) {
    .is-paddingless-top-desktop {
      padding-top: 0
    }

    .is-paddingless-bottom-desktop {
      padding-bottom: 0
    }

    .columns.is-reverse-desktop {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse
    }

    .is-fullwidth-desktop {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 100%
    }

    .is-marginless-desktop {
      margin: 0 !important
    }
  }

  .columns.is-vend {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end
  }

  @media screen and (max-width:1169px) {
    .is-marginless-touch {
      margin: 0 !important
    }
  }

  .is-transition {
    position: relative
  }

  [v-cloak]>* {
    display: none
  }

  .link-icon,
  .link-icon>span {
    display: block
  }

  html.is-clipped {
    height: 100%;
    overflow: hidden
  }

  html.is-clipped body {
    overflow: hidden
  }

  @media screen and (max-width:767px) {
    .is-marginless-mobile {
      margin: 0 !important
    }

    html.is-clipped body {
      height: 100%
    }
  }

  .icon-size-32 {
    font-size: 32px
  }

  .icon-size-36 {
    font-size: 36px
  }

  .link-icon>i {
    margin-bottom: 5px
  }

  .default-hero-banner {
    height: 500px
  }

  .arrow-down {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #2d2f30
  }

  .flag-language .inactive {
    -webkit-filter: brightness(50%);
    filter: brightness(50%)
  }

  .profile-image {
    width: 40px;
    height: 40px;
    background-color: #eee;
    overflow: hidden
  }

  .profile-menu.is-active .navbar-link,
  .profile-menu:hover .navbar-link {
    background: 0 0 !important
  }

  .profile-menu.is-active .arrow-down {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
  }

  .profile-menu .navbar-link {
    padding-right: .75rem
  }

  .profile-menu .navbar-link:after {
    display: none
  }

  .profile-menu .profile-name {
    padding: 0 5px
  }

  .profile-menu .navbar-link,
  .profile-menu .navbar-link:hover {
    color: #2d2f30
  }

  .profile-menu .arrow-menu {
    position: absolute;
    top: 97%;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    width: 23px;
    z-index: 2
  }

  .profile-menu .navbar-dropdown {
    min-width: auto;
    border: none;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: 0 0;
    z-index: 5;
    display: none;
    opacity: 0;
    font-size: 14px
  }

  .button-upload-file,
  .modal .button {
    min-width: 160px
  }

  .profile-menu .navbar-dropdown .navbar-item {
    padding: 10px
  }

  .profile-menu .navbar-dropdown .navbar-item:hover {
    background: 0 0
  }

  .profile-menu .navbar-dropdown .wrapper {
    margin-top: 12px;
    padding: 10px 0;
    border: 1px solid #c1c7d0;
    background: #fff;
    position: relative;
    z-index: 1;
    -webkit-box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, .1);
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, .1)
  }

  .profile-menu .navbar-dropdown:after,
  .profile-menu .navbar-dropdown:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    z-index: 2;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 20px solid #c1c7d0
  }

  .profile-menu .navbar-dropdown:after {
    top: 2px;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 20px solid #fff
  }

  .profile-menu .navbar-dropdown a {
    color: #e32126
  }

  .profile-menu .navbar-dropdown a:hover {
    color: #4c0b0a
  }

  @media screen and (min-width:1170px) {
    .profile-menu .navbar-dropdown {
      width: 170px;
      left: -42px;
      right: auto;
      margin: 0 auto
    }

    .profile-menu .profile-image {
      border-radius: 50%;
      overflow: hidden
    }
  }

  @media screen and (max-width:1169px) {
    .profile-menu .navbar-dropdown {
      top: 35px;
      position: absolute;
      right: 0;
      left: auto;
      width: 180px;
      display: none
    }

    .profile-menu .navbar-dropdown:after,
    .profile-menu .navbar-dropdown:before {
      right: 15px;
      left: auto
    }

    .profile-menu .profile-image {
      width: 30px;
      height: 30px;
      border-radius: 2px
    }

    .profile-menu .arrow-down,
    .profile-menu .profile-name {
      display: none
    }
  }

  @media screen and (min-width:1170px) {
    .sub-navigation {
      background-color: #e32126
    }

    .sub-navigation .nav-category {
      position: relative;
      height: 65px
    }

    .sub-navigation .nav-category .nav-menu {
      padding: 0 10px
    }

    .sub-navigation .nav-category .nav-menu.menu-has-dropdown .menu span {
      position: relative;
      padding-right: 15px
    }

    .sub-navigation .nav-category .nav-menu.menu-has-dropdown .menu span:after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #fff
    }

    .sub-navigation .nav-category .nav-menu.is-active .menu,
    .sub-navigation .nav-category .nav-menu:hover .menu {
      background: #fff;
      color: #e32126
    }

    .sub-navigation .nav-category .nav-menu.is-active .menu span:after,
    .sub-navigation .nav-category .nav-menu:hover .menu span:after {
      -webkit-transform: translateY(-50%) rotate(180deg);
      transform: translateY(-50%) rotate(180deg);
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #e32126
    }

    .sub-navigation .nav-category .nav-menu.is-active .nav-dropdown,
    .sub-navigation .nav-category .nav-menu:hover .nav-dropdown {
      display: block
    }

    .sub-navigation .nav-category .menu {
      height: 100%;
      padding: 0 15px;
      color: #fff;
      display: block;
      line-height: 65px;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      white-space: nowrap
    }

    .sub-navigation .nav-category .title {
      color: #4c0b0a;
      font-weight: 900;
      font-size: 68px;
      line-height: 70px;
      margin: 40px 0 30px;
      position: relative
    }

    .sub-navigation .nav-category .nav-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 2;
      margin: 0 auto;
      background: #fff;
      min-height: 220px;
      display: none;
      width: 1110px
    }

    .sub-navigation .nav-category .nav-dropdown:before {
      content: '';
      width: 300%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      -webkit-box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, .1);
      box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, .1);
      background: #fff;
      z-index: -1
    }

    .sub-navigation .nav-category .nav-dropdown .wrapper-sub-menu {
      margin: 0;
      position: relative;
      z-index: 1
    }

    .sub-navigation .nav-category .nav-dropdown .sub-menu {
      color: #e32126;
      font-weight: 900;
      font-size: 32px;
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      padding: 0 25px;
      -webkit-transition: color .2s;
      transition: color .2s;
      position: relative;
      display: block
    }

    .sub-navigation .nav-category .nav-dropdown .sub-menu:hover {
      color: #4c0b0a
    }

    .sub-navigation .nav-category .nav-dropdown .sub-menu:first-child {
      padding-left: 0 !important
    }

    .sub-navigation .nav-category .bubble-new {
      position: absolute;
      top: -100%;
      margin: 0 auto;
      background: #e32126;
      color: #fff;
      display: inline-block;
      padding: 10px;
      text-align: center;
      border-radius: 4px;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      font-size: 14px
    }

    .sub-navigation .nav-category .bubble-new:after {
      position: absolute;
      z-index: 10;
      bottom: -10px;
      right: 0;
      left: 0;
      margin: 0 auto;
      content: '';
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 10px solid #e32126
    }

    .sub-navigation .sub-menu>ul {
      margin: 10px auto 30px
    }

    .sub-navigation .sub-menu>ul a {
      display: block;
      font-size: 22px;
      font-weight: 500
    }
  }

  .navbar {
    min-height: 70px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
  }

  .navbar .navbar-logo {
    padding-top: 0;
    padding-bottom: 0;
    overflow: hidden
  }

  .navbar .navbar-logo img {
    display: block;
    height: 70px;
    width: 70px
  }

  .navbar-menu {
    -webkit-box-shadow: none;
    box-shadow: none
  }

  @media screen and (max-width:1169px) {
    .navbar-menu {
      -webkit-box-align: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }
  }

  .navbar-menu .navbar-start {
    margin-left: 0 !important
  }

  @media screen and (max-width:767px) {
    .navbar-menu .navbar-start {
      display: none
    }
  }

  @media screen and (min-width:768px),
  print {
    .navbar-menu {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-negative: 0;
      flex-shrink: 0
    }

    .navbar-menu .navbar-end,
    .navbar-menu .navbar-start {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-left: auto
    }
  }

  .navbar-menu .navbar-end {
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  @media screen and (max-width:1169px) {
    .navbar-menu .navbar-end {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    .navbar-menu .navbar-end .navbar-item {
      padding: 0 7.5px
    }

    .navbar-menu .navbar-end .navbar-link {
      padding: 0
    }

    .navbar-menu .navbar-end .navbar-dropdown .navbar-item {
      padding: 5px 10px
    }

    .navbar-menu .navbar-end .button.button-login {
      height: 30px;
      border-radius: 2px;
      width: 30px;
      padding: 0;
      border: none
    }
  }

  .navbar-flag a,
  .navbar-flag a img {
    width: 30px;
    height: 20px;
    display: block
  }

  @media screen and (min-width:1170px) {
    .navbar-menu .navbar-end .navbar-item {
      padding: 0 7.5px
    }

    .navbar-menu .navbar-end .navbar-dropdown .navbar-item {
      padding: 5px 10px
    }

    .button.is-primary,
    .button.is-secondary {
      min-width: 160px
    }
  }

  .navbar-flag:last-child {
    margin-right: 7.5px
  }

  .navbar-flag a {
    overflow: hidden;
    position: relative
  }

  .navbar-flag a img {
    position: absolute;
    top: 0
  }

  @media screen and (max-width:1169px) {
    .navbar-flag a {
      width: 30px;
      height: 30px;
      border-radius: 2px
    }

    .navbar-flag a img {
      height: 30px;
      width: 40px;
      max-width: none;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%)
    }
  }

  .button-location .text {
    display: block;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 40px
  }

  .container-menu {
    padding-bottom: 30px
  }

  .navbar-menu-category a {
    display: block
  }

  .navbar-menu-category .expand-submenu {
    background-color: #e32126;
    color: #fff;
    font-size: 22px;
    font-weight: 900;
    position: relative;
    padding: 15px;
    min-height: 65px
  }

  .navbar-menu-category .expand-submenu:after {
    content: '';
    position: absolute;
    top: 27px;
    margin-left: 5px;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #fff
  }

  .navbar-menu-category .expand-submenu.is-active:after {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg)
  }

  .navbar-menu-category .menu {
    font-size: 22px;
    font-weight: 900;
    position: relative;
    padding-left: 25px
  }

  .navbar-menu-category .menu:hover {
    color: #e32126
  }

  .navbar-menu-category .menu:after,
  .navbar-menu-category .menu:before {
    content: '';
    position: absolute;
    left: 0;
    top: 13px;
    height: 4px;
    border-radius: 4px;
    width: 17px;
    display: block;
    background-color: #e32126
  }

  .navbar-menu-category .menu:after {
    -webkit-transform: translateX(0) rotate(90deg);
    transform: translateX(0) rotate(90deg);
    -webkit-transition: all .2s;
    transition: all .2s
  }

  .navbar-menu-category .wrapper-menu {
    padding: 7.5px 15px
  }

  .navbar-menu-category .wrapper-menu .menu.is-active:after {
    opacity: 0;
    -webkit-transform: translateY(10px) rotate(90deg);
    transform: translateY(10px) rotate(90deg)
  }

  .navbar-menu-category .menu-dropdown {
    display: none;
    padding-left: 25px
  }

  .navbar-menu-category .sub-menu {
    color: #4c0b0a;
    font-size: 22px;
    font-weight: 900
  }

  .navbar-menu-category .sub-menu a {
    color: #4c0b0a
  }

  .navbar-menu-category .sub-menu>ul {
    margin: 10px 0 10px 20px
  }

  .navbar-menu-category .sub-menu>ul a {
    color: #4c0b0a;
    display: block;
    font-size: 16px;
    font-weight: 500
  }

  .header-sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 30;
    background: #fff
  }

  .fake-div {
    height: 135px
  }

  .fake-div.is-not-has-subnav {
    height: 70px
  }

  .footer-container {
    background-color: #4c0b0a;
    color: #fff;
    text-align: center
  }

  @media screen and (max-width:767px) {
    .footer-container {
      padding-bottom: 40px
    }
  }

  .footer-container .footer-menu {
    text-align: left;
    margin-top: 10px
  }

  .group-button-map,
  .modal .title,
  .modal-otp .title {
    text-align: center
  }

  .footer-container .footer-menu .title {
    margin-bottom: 10px;
    color: #fff
  }

  .footer-container .footer-menu .wrapper-menu a {
    display: block;
    padding: 2px 0;
    color: #fff
  }

  .footer-container .footer-copyright {
    margin-top: 5px
  }

  .footer-container .social-icons {
    padding: 15px 0
  }

  .footer-container .social-icons>.columns .column {
    padding: 15px 7.5px
  }

  .footer-container .social-icons a {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    display: block;
    position: relative;
    text-align: center
  }

  .footer-container .social-icons .fab {
    font-size: 24px;
    line-height: 40px
  }

  .footer-container .social-icons .icon-line img {
    display: block;
    margin: 7px auto
  }

  .footer-container .fab,
  .footer-container .fas {
    color: #fff
  }

  .footer-container .fa-phone {
    font-size: 34px
  }

  .button,
  .input,
  .select,
  .textarea {
    height: 40px;
    font-size: 14px;
    font-weight: 500
  }

  .button:active,
  .button:focus,
  .button:hover,
  .input:active,
  .input:focus,
  .input:hover,
  .select:active,
  .select:focus,
  .select:hover,
  .textarea:active,
  .textarea:focus,
  .textarea:hover {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .control.has-icons-left .icon,
  .control.has-icons-left .input:focus~.icon,
  .control.has-icons-right .icon,
  .control.has-icons-right .input:focus~.icon {
    height: 100%;
    width: 40px;
    font-size: 16px;
    color: #2d2f30;
    z-index: 1
  }

  .field .control-input {
    position: relative
  }

  .field .control-input:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    border-bottom: 1px solid red;
    -webkit-transition: width .3s;
    transition: width .3s
  }

  .input,
  .input:focus,
  .input:hover {
    border-color: #c1c7d0
  }

  .field.has-error .control-input:after {
    width: 100%
  }

  .field:not(:last-child) {
    margin-bottom: 15px
  }

  .input {
    border-width: 0 0 1px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0;
    height: 55px;
    padding: 20px 0 5px;
    z-index: 5;
    background: 0 0 !important
  }

  .input:focus+.label-float,
  .input:not(:placeholder-shown)+.label-float {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }

  .input:focus+.label-float .placeholder,
  .input:not(:placeholder-shown)+.label-float .placeholder {
    -webkit-transform: scale(.85);
    transform: scale(.85)
  }

  .input+.label-float {
    -webkit-transition: -webkit-transform .2s ease-in-out;
    transition: -webkit-transform .2s ease-in-out;
    transition: transform .2s ease-in-out;
    transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;
    -webkit-transform: translateY(17px);
    transform: translateY(17px)
  }

  .input-datepicker .vdp-datepicker {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%
  }

  .input-datepicker .vdp-datepicker input {
    width: 100%;
    height: 55px;
    background-color: transparent;
    border: none;
    opacity: 0
  }

  .input-datepicker .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
  .input-datepicker .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
  .input-datepicker .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
    border-color: #e32126
  }

  .input-datepicker .vdp-datepicker__calendar .cell.selected {
    background: #e32126;
    color: #fff
  }

  .input-datepicker .vdp-datepicker__calendar .cell.selected:hover {
    background: #e32126
  }

  .label-float {
    position: absolute;
    font-weight: 500;
    top: 0;
    left: 0;
    width: 100%;
    color: #c1c7d0;
    pointer-events: none;
    z-index: 1
  }

  .label-float>span {
    pointer-events: none;
    display: block
  }

  .label-float .placeholder {
    -webkit-transition: -webkit-transform .2s ease-in-out;
    transition: -webkit-transform .2s ease-in-out;
    transition: transform .2s ease-in-out;
    transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;
    -webkit-transform: scale(1);
    transform: scale(1);
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%
  }

  .label-float.has-optional {
    padding-right: 30px
  }

  .label-float.has-optional .optional {
    right: 0;
    top: 5px;
    position: absolute;
    font-size: 10px
  }

  .checkbox {
    position: relative;
    margin-top: 7.5px
  }

  .checkbox input {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    height: 30px;
    width: 30px;
    z-index: -1
  }

  .checkbox .checkbox-custom,
  .checkbox .checkbox-custom:before {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0
  }

  .checkbox input:checked+.checkbox-custom i {
    opacity: 1;
    -webkit-transition: opacity .2s;
    transition: opacity .2s
  }

  .checkbox input:disabled+.checkbox-custom,
  .checkbox input:disabled+.checkbox-custom+.inner {
    opacity: .6
  }

  .checkbox .checkbox-custom i {
    color: #c3272a;
    font-size: 14px;
    padding: 4px 0 0 3px;
    opacity: 0
  }

  .checkbox .checkbox-custom:before {
    content: '';
    border: 1px solid #c1c7d0;
    display: block;
    border-radius: 2px
  }

  .input-datepicker:before,
  .select-input:before,
  .select-timepicker:before {
    top: 50%;
    right: 5px;
    position: absolute;
    content: ''
  }

  .checkbox .inner {
    padding-left: 30px;
    padding-top: 2px;
    font-size: 14px
  }

  .checkbox .inner a {
    color: #c3272a
  }

  .input-datepicker:before {
    z-index: 1;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000
  }

  .select-input select,
  .select-timepicker select {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10;
    border: none;
    background: 0 0;
    opacity: 0;
    font-size: 14px
  }

  .select-input:before,
  .select-timepicker:before {
    z-index: 1;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000
  }

  .select-input input,
  .select-timepicker input {
    padding-right: 20px
  }

  .input-file {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: #00f;
    opacity: 0
  }

  .input-file:active,
  .input-file:focus,
  .input-file:hover {
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .textarea {
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .total-message {
    padding: 0 5px;
    border-bottom: 1px solid #c1c7d0;
    line-height: 29px;
    color: #c2b885
  }

  .group-cake-message {
    margin: 5px 0 15px
  }

  .group-cake-message button {
    background: 0 0;
    border: 1px solid #c2b885;
    border-radius: 4px;
    color: #c2b885;
    margin: 0 5px 5px 0
  }

  .select-date-of-birth {
    margin: 0 -15px !important
  }

  .select-date-of-birth .column {
    padding-top: 0;
    padding-bottom: 0
  }

  .login-card-header-title {
    font-size: 20px
  }

  .admin-login-button {
    padding: 0 30px
  }

  .control .admin-input,
  .control .login-input {
    border-width: 1px;
    border-radius: 3px;
    padding: 5px
  }

  .control .admin-input {
    width: 60%;
    height: 30px
  }

  .control .admin-input.textarea {
    height: unset;
    width: 100%
  }

  .control .login-input {
    width: 100%;
    height: 30px
  }

  .control .login-input.textarea {
    height: unset;
    width: 100%
  }

  .control .select {
    width: 60%
  }

  .control .select select {
    width: 100%
  }

  .radio input {
    margin-right: 5px
  }

  del,
  s,
  strike {
    text-decoration: line-through
  }

  a.box:active,
  a.box:focus,
  a.box:hover,
  a.box:visited {
    color: #2d2f30;
    -webkit-box-shadow: 0 2px 3px rgba(45, 47, 48, .1), 0 0 0 1px rgba(45, 47, 48, .1) !important;
    box-shadow: 0 2px 3px rgba(45, 47, 48, .1), 0 0 0 1px rgba(45, 47, 48, .1) !important
  }

  a.box.is-active,
  a.box:hover {
    background-color: #f4f5f7
  }

  a.box:not(:last-child) {
    margin-bottom: 15px
  }

  .columns-find-my-location .button-find-location {
    margin-left: 10px
  }

  @media screen and (max-width:767px) {
    .container-box-address>.column {
      padding-bottom: 0
    }

    .columns-find-my-location .button-find-location {
      padding: 5px 10px
    }

    .columns-find-my-location span.text {
      display: none
    }

    .columns-find-my-location span.icon {
      margin: 0 !important
    }
  }

  .button-with-icon,
  .ribbon {
    display: -webkit-box;
    display: -ms-flexbox
  }

  button {
    font-size: 14px;
    font-weight: 500
  }

  button:focus,
  button:hover {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .button {
    border-radius: 8px
  }

  .button.is-primary .fab,
  .button.is-primary .fas,
  .button.is-secondary .fab,
  .button.is-secondary .fas {
    color: #fff;
    font-size: 100%
  }

  .button-with-icon {
    border: 1px solid #4c0b0a;
    color: #4c0b0a;
    background-color: #4c0b0a;
    height: 40px;
    border-radius: 8px;
    padding: 0;
    overflow: hidden;
    display: flex;
    position: relative
  }

  .button-with-icon .icon .fas,
  .button-with-icon:hover .text {
    color: #fff
  }

  .button-with-icon .icon {
    width: 30px;
    height: 100%
  }

  @media screen and (min-width:1170px) {
    .button-with-icon .icon {
      position: absolute;
      left: 0;
      top: 0
    }
  }

  .button-with-icon .text {
    padding: 0 15px 0 45px;
    position: relative;
    z-index: 2;
    -webkit-transition: all .3s linear;
    transition: all .3s linear;
    font-size: 12px
  }

  .button-with-icon .text .fab {
    font-size: 14px
  }

  .button-with-icon:after {
    content: '';
    position: absolute;
    top: 0;
    left: 30px;
    background-color: #fff;
    width: 100%;
    height: 100%;
    z-index: 1;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out
  }

  .button-with-icon:hover:after {
    -webkit-transform: translateX(100%);
    transform: translateX(100%)
  }

  @media screen and (max-width:1169px) {
    .button-with-icon {
      width: 30px;
      height: 30px;
      border-radius: 2px
    }

    .button-with-icon .text {
      display: none
    }
  }

  .button-close {
    height: 32px;
    width: 32px;
    display: block;
    border-radius: 50%;
    position: relative;
    border: none;
    -webkit-transition: background-color .2s;
    transition: background-color .2s;
    background-color: rgba(255, 255, 255, .6)
  }

  .button-close:hover {
    background-color: rgba(0, 0, 0, .4);
    cursor: pointer
  }

  .button-close:hover:after,
  .button-close:hover:before {
    background-color: #fff
  }

  .button-close:after,
  .button-close:before {
    background-color: #2d2f30;
    content: '';
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -webkit-transform-origin: center center;
    transform-origin: center center
  }

  .button-close:before {
    height: 2px;
    width: 50%
  }

  .button-close:after {
    height: 50%;
    width: 2px
  }

  .button-close:focus {
    outline: 0
  }

  .button-total-price.-is-active {
    border-color: #e32126;
    background-color: #e32126
  }

  .button-total-price.-is-active .text {
    font-size: 22px;
    font-weight: 900;
    color: #e32126
  }

  .button-total-price.-is-active:hover .text {
    color: #fff
  }

  .button-find-location {
    border-color: #4c0b0a;
    border-radius: 8px;
    font-size: 12px;
    padding: 5px 15px;
    height: 30px;
    color: #4c0b0a
  }

  .button-find-location .icon {
    margin: 0 10px 0 0 !important
  }

  .button-find-location:active,
  .button-find-location:focus,
  .button-find-location:hover {
    color: #4c0b0a;
    border-color: #4c0b0a;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .modal.modal-dialog {
    padding: 15px
  }

  .modal.modal-dialog .modal-content {
    max-width: 500px !important;
    width: auto;
    min-height: auto !important
  }

  .modal .modal-content {
    position: relative;
    background: #fff;
    max-width: 100%
  }

  @media screen and (max-width:1169px) {
    .modal .modal-content {
      margin: 0;
      max-height: 100%;
      min-height: 100%;
      width: 100%
    }
  }

  @media screen and (min-width:1170px) {
    .modal .modal-content {
      width: 900px;
      max-width: 900px
    }
  }

  .modal .modal-content .container {
    max-width: 100%
  }

  .modal .modal-close {
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 1
  }

  .modal .modal-close:after,
  .modal .modal-close:before {
    background-color: #2d2f30
  }

  .modal .modal-close:hover {
    -webkit-transition: all .2s;
    transition: all .2s
  }

  .modal .button-close {
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 1
  }

  .modal-login .title {
    margin-top: 60px
  }

  @media screen and (min-width:1170px) {
    .modal-login .title {
      margin-top: 85px
    }
  }

  .modal-login .footer-modal {
    margin: 30px auto
  }

  @media screen and (min-width:1170px) {
    .modal-login .footer-modal {
      margin: 70px auto 15px
    }
  }

  .modal-signup .title {
    margin: 40px auto 20px
  }

  .modal-signup .footer-modal {
    margin: 30px auto
  }

  @media screen and (min-width:1170px) {
    .modal-signup .footer-modal {
      margin: 20px auto 10px
    }
  }

  .modal-login,
  .modal-signup {
    z-index: 60
  }

  .modal-otp .modal-content {
    min-height: auto;
    width: 360px;
    padding: 15px;
    margin: 0 auto
  }

  .modal-otp .title {
    margin: 30px auto 0
  }

  .group-button-map {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 250px;
    z-index: 10;
    display: inline-block
  }

  .group-button-map .button {
    margin-bottom: 15px
  }

  .modal-content {
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2)
  }

  .modal-loading {
    z-index: 100
  }

  .modal-loading .modal-background {
    opacity: .8
  }

  .modal-loading .modal-content {
    width: 100%;
    height: 100%;
    background: 0 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    cursor: progress;
    pointer-events: none
  }

  .modal-loading .wrapper-icon {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
  }

  @-webkit-keyframes loadingSpint {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0)
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg)
    }
  }

  @keyframes loadingSpint {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0)
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg)
    }
  }

  .fa-spinner {
    font-size: 30px;
    -webkit-animation-name: loadingSpint;
    animation-name: loadingSpint;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    color: #e32126
  }

  .modal-action .modal-content {
    min-height: auto;
    width: 320px;
    padding: 50px 30px 30px;
    background: #fff
  }

  .container-login,
  .container-signup {
    width: 390px;
    max-width: 100%;
    padding: 0 15px;
    margin: 0 auto
  }

  @media screen and (min-width:1170px) {

    .container-login,
    .container-signup {
      padding: 0 15px
    }
  }

  @media screen and (max-width:1169px) {
    .container-signup .group-button-social>.column:first-child {
      padding-bottom: 5px
    }

    .container-signup .group-button-social>.column:last-child {
      padding-top: 5px
    }
  }

  @media screen and (min-width:1170px) {
    .container-signup .group-button-social .fab {
      padding-top: 10px
    }

    .container-signup .group-button-social>.column:first-child {
      padding-right: 5px
    }

    .container-signup .group-button-social>.column:last-child {
      padding-left: 5px
    }
  }

  .container-map {
    height: 400px !important;
    width: 100% !important
  }

  @media screen and (max-width:767px) {
    .container-map {
      height: 270px !important
    }
  }

  .modal-product-detail .container-detail {
    padding: 15px
  }

  @media screen and (min-width:1170px) {
    .modal-product-detail .container-detail {
      min-height: 350px;
      padding-bottom: 80px;
      position: relative
    }

    .modal-product-detail .container-detail .cart {
      height: 40px;
      position: absolute;
      bottom: 15px;
      left: 0;
      right: 0;
      width: 100%;
      padding: 0 15px
    }
  }

  .product-has-promotion .ribbon:before,
  .ribbon:before {
    content: '';
    bottom: -10px
  }

  .modal-product-detail .title {
    text-align: left;
    color: #e32126;
    margin: 10px 35px 0 0
  }

  .modal-product-detail .subtitle {
    margin: 10px 0 15px !important
  }

  .modal-product-detail .thumbnail {
    position: relative;
    overflow: hidden
  }

  .modal-product-detail .thumbnail img {
    position: absolute;
    top: 0
  }

  @media screen and (max-width:767px) {
    .modal-product-detail .thumbnail {
      height: 185px
    }
  }

  @media screen and (min-width:768px),
  print {
    .modal-product-detail .thumbnail {
      height: 260px
    }
  }

  @media screen and (max-width:1169px) {
    .modal-product-detail .thumbnail img {
      height: auto;
      width: 100%;
      max-height: none;
      top: 50%;
      -webkit-transform: translatey(-50%);
      transform: translatey(-50%);
      left: 0;
      right: 0
    }

    .modal-product-detail .product-qty {
      padding: 0 5px
    }

    .modal-product-detail .column-price-qty {
      padding-bottom: 0
    }

    .modal-product-detail .container-detail {
      padding: 15px 15px 30px
    }
  }

  @media screen and (min-width:1170px) {
    .modal-product-detail .thumbnail {
      width: 350px;
      height: 350px
    }

    .modal-product-detail .thumbnail img {
      height: 100%;
      width: auto;
      max-width: none;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%)
    }
  }

  .modal-location-out-of-area .modal-content {
    padding: 50px 30px 30px;
    width: auto !important
  }

  .container-other-menu,
  .modal-title {
    padding: 15px
  }

  .modal-title {
    background: #e32126;
    color: #fff;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10
  }

  .modal-title .title {
    font-size: 22px;
    color: #fff;
    text-align: left;
    margin-top: 5px
  }

  .modal-title .button-close {
    position: relative;
    top: auto;
    right: auto;
    background: 0 0;
    float: right
  }

  .modal-title .button-close:after,
  .modal-title .button-close:before {
    background: #fff
  }

  .product-has-promotion .ribbon,
  .ribbon {
    background: #e32126;
    z-index: 2;
    color: #fff
  }

  .fake-modal-title {
    height: 70px
  }

  .modal-with-title {
    width: 100%;
    height: 100%
  }

  .container-other-menu a {
    font-size: 22px;
    display: block;
    font-weight: 900
  }

  .container-other-menu ul+ul {
    margin-top: 15px
  }

  .container-other-menu .flag-menu img {
    max-width: 30px;
    position: relative;
    left: 14px;
    left: 1rem;
    top: 4.2px;
    top: .3rem
  }

  .modal-other-menu .profile-image {
    border-radius: 50%
  }

  .modal-update-profile .modal-content {
    padding: 30px
  }

  .ribbon {
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    left: -10px;
    padding: 5px 10px;
    top: 20px;
    min-width: 150px;
    min-height: 50px
  }

  .ribbon:before {
    position: absolute;
    left: 0;
    border-color: #4c0b0a;
    border-style: solid;
    border-width: 10px 0 0;
    border-left: 10px solid transparent
  }

  .ribbon .title {
    line-height: .9
  }

  .ribbon .subtitle {
    line-break: 1
  }

  .ribbon .subtitle,
  .ribbon .title {
    color: #fff;
    margin: 0 !important
  }

  .card-product {
    position: relative
  }

  @media screen and (min-width:1170px) {
    .modal-update-profile .modal-content {
      width: auto
    }

    .card-product {
      width: 255px
    }
  }

  .card-product .card-body {
    padding: 15px;
    height: 100%
  }

  .card-product .card-image {
    overflow: hidden;
    margin: 0 auto
  }

  @media screen and (max-width:767px) {
    .card-product .card-body {
      padding: 10px
    }

    .card-product .card-image {
      width: 90px;
      height: 90px
    }
  }

  @media screen and (min-width:768px),
  print {
    .card-product .card-image {
      width: 150px;
      height: 150px
    }
  }

  @media screen and (min-width:1170px) {
    .card-product .card-image {
      width: 255px;
      height: 255px
    }
  }

  .card-product .card-image img {
    position: absolute;
    top: 0;
    left: 50%;
    right: 0;
    margin: 0 auto;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 100%;
    width: auto;
    max-width: none
  }

  .card-product .card-title {
    margin: 0 auto
  }

  .card-product .card-short-des {
    height: 54px;
    margin: 10px auto;
    overflow: hidden
  }

  .card-product .button-cart {
    min-width: auto !important
  }

  .product-has-promotion .ribbon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    left: -10px;
    padding: 5px 5px 5px 10px;
    top: 10px;
    min-width: 120px;
    min-height: 40px
  }

  .product-has-promotion .ribbon:before {
    position: absolute;
    left: 0;
    border-color: #4c0b0a;
    border-style: solid;
    border-width: 10px 0 0;
    border-left: 10px solid transparent
  }

  @media screen and (max-width:767px) {
    .product-has-promotion .ribbon {
      min-width: 100px;
      min-height: 20px
    }
  }

  @media screen and (min-width:768px) and (max-width:1169px) {
    .product-has-promotion .ribbon {
      min-width: 120px;
      min-height: 30px
    }
  }

  @media screen and (max-width:1169px) {
    .product-has-promotion .ribbon {
      left: -10px;
      top: 0;
      padding: 5px 5px 5px 10px;
      font-size: 12px
    }
  }

  .navbar-mobile {
    background: rgba(238, 238, 238, .95);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 30
  }

  @media screen and (min-width:1170px) {
    .navbar-mobile {
      display: none
    }
  }

  .navbar-mobile .button-menu {
    display: block;
    background: 0 0;
    border: none;
    text-align: center;
    margin: 0 auto;
    color: #4c0b0a;
    height: 64px
  }

  .navbar-mobile .button-menu .menu-icon {
    display: block;
    padding-top: 11px;
    min-height: 37px
  }

  .navbar-mobile .button-menu .menu-icon .fas {
    font-size: 22px
  }

  .mobile-social-footer {
    background-color: #4c0b0a;
    text-align: center;
    color: #fff;
    padding-top: 20px
  }

  .mobile-social-footer .social-icons {
    padding: 15px 0
  }

  .mobile-social-footer .social-icons>.columns .column {
    padding: 15px 7.5px
  }

  .mobile-social-footer .social-icons a {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    display: block;
    position: relative;
    text-align: center
  }

  .mobile-social-footer .social-icons .fab {
    font-size: 24px;
    line-height: 39px
  }

  .mobile-social-footer .social-icons .icon-line img {
    display: block;
    margin: 7px auto
  }

  .mobile-social-footer .social-icons .is-narrow {
    margin: 0 10px
  }

  .mobile-social-footer .fab,
  .mobile-social-footer .fas {
    color: #fff
  }

  .mobile-social-footer .fa-phone {
    font-size: 26px
  }

  @media screen and (max-width:1169px) {

    .fake-div,
    .footer-container,
    .header-sticky {
      display: none
    }

    .main-container {
      padding-bottom: 64px
    }

    .mobile-social-icon {
      display: inline-block;
      padding: 15px
    }

    .mobile-social-icon img {
      height: 45px;
      margin-bottom: -15px
    }

    .container-other-menu {
      min-height: calc(100vh - 200px)
    }
  }

  .button-badge .wrapper {
    position: relative;
    margin: 0 auto
  }

  .button-badge .badge {
    position: absolute;
    top: -10px;
    right: -5px;
    background-color: #e32126;
    color: #fff;
    border-radius: 10px;
    padding: 1px 3px;
    font-size: 11px;
    line-height: 13px;
    min-width: 15px;
    font-weight: 400
  }

  .component-page-title {
    text-align: center;
    position: relative
  }

  .component-page-title .sticky-title {
    height: 60px;
    padding: 15px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 30;
    background: #fff;
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    box-shadow: 0 0 5px rgba(0, 0, 0, .2)
  }

  .component-page-title .fake-title {
    height: 60px
  }

  .home-hero {
    position: relative
  }

  .home-hero .black-border {
    border-color: #2d2f30 !important
  }

  .home-hero .wrapper-map input {
    background-color: transparent;
    font-size: 14px
  }

  @media screen and (max-width:767px) {
    .home-hero .wrapper-map {
      padding: 15px 0 30px
    }
  }

  @media screen and (min-width:768px),
  print {
    .home-hero .wrapper-map {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      z-index: 10
    }
  }

  .home-promotions .button-inside {
    position: absolute;
    right: 30px;
    bottom: 20px
  }

  .see-menu {
    font-size: 16px;
    font-weight: 800
  }

  .mobile-header {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .breadcrumb{font-size:14px;white-space:nowrap}.breadcrumb a{align-items:center;color:#2d2f30;display:flex;justify-content:center;padding:0 7.5px}.breadcrumb a:hover{color:#4c0b0a}.breadcrumb li{align-items:center;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#2d2f30;cursor:default;pointer-events:none}.breadcrumb li+li::before{color:#2d2f30;content:"/"}.breadcrumb ol,.breadcrumb ul{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{justify-content:flex-end}.breadcrumb.is-small{font-size:12px}.breadcrumb.is-medium{font-size:22px}.breadcrumb.is-large{font-size:32px}.breadcrumb.has-arrow-separator li+li::before{content:"→"}.breadcrumb.has-bullet-separator li+li::before{content:"•"}.breadcrumb.has-dot-separator li+li::before{content:"·"}.breadcrumb.has-succeeds-separator li+li::before{content:"≻"}
</style>
