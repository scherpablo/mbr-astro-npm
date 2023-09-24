<Fragment>
  <section class="conatinerSection">
    <div class="divSection">
      <div class="divText">
        <h2 class="h2One">
          Con <span>MBR</span> expresá
        </h2>
        <h2 class="h2Two">tu estilo y confianza</h2>
        <h2 class="h2Three">en cualquier ocasión.</h2>
      </div>
      <div class="divSocialNet">
        <p>Seguinos en las redes</p>
        <div class="divLink">
          <a
            href="https://www.facebook.com/profile.php?id=100048890242534"
            target="_blank"
            rel="noreferer"
            class="linkMenu"
            name="icon-facebook"
          >
            <i class="fa-brands fa-square-facebook fa-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/estilo.mbr/"
            target="_blank"
            rel="noreferer"
            class="linkMenu"
          >
            <i class="fa-brands fa-instagram fa-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <style>{`
  .conatinerSection {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("/img/sectionFive/img-sectionFive-min.webp");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .divSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 100px;
  }
  .divText {
    font-size: 50px;
    font-family: var(--fontImpact);
    letter-spacing: 3px;
    line-height: 120px;
  }
  .divText h2 {
    color: var(--yellowText);
  }
  .h2Two {
    margin-left: 50px;
  }
  .h2Three {
    margin-left: 100px;
  }
  .divText span {
    color: var(--whiteText);
    font-size: 90px;
  }
  .divSocialNet {
    align-items: center;
    text-align: center;
    margin-top: 350px;
    padding: 50px;
  }
  .divSocialNet p {
    font-family: var(--fontParagraph);
    font-size: 22px;
    font-weight: 600;
    color: var(--whiteText);
    margin-right: 10px;
  }
  .divSocialNet i {
    padding: 10px;
    color: var(--yellowText);
  }
  .divLink {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    .conatinerSection {
      height: auto;
      /* background-image: none; */
      background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url("/img/sectionFive/img2-sectionFive-min.webp");
      background-color: #606060;
    }
    .divSection {
      flex-direction: column;
      padding: 80px;
    }
    .divText {
      font-size: 30px;
      line-height: 60px;
    }
    .h2Two,
    .h2Three {
      margin-left: 0;
    }
    .divSocialNet p {
      color: var(--whiteText);
      font-size: 20px;
    }
    .divText span {
      font-size: 60px;
      color: var(--whiteText);
    }
    .divSocialNet {
      margin-top: 50px;
    }
  }
  @media (max-width: 480px) {
    .divSection {
      padding: 20px;
      padding-top: 60px;
    }
    .divText {
      font-size: 20px;
    }
    .divText h2 {
      text-align: center;
    }
    .divText span {
      font-size: 40px;
    }
    .divSocialNet p {
      font-size: 18px;
    }
  }
`}</style>
</Fragment>;
