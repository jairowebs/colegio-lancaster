<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
    />
    <link rel="stylesheet" href="/sass/style.css">
    <title>Registro</title>
  </head>


  <body>
    <main>

       <!-- Menu navegacion -->
       <nav>
        <div class="header-1-parent">
            <div class="header-1">
              <a href="/pages/Login/login.html">
              <div class="right-nav">
                <button class="button-app">
                  <div class="login">Ingresa a la APP</div>
                </button>
              </div>
              </a>

              <div class="left-nav">
                <a href="/pages/Index/index.html">
                  <img class="logotype-dark-menu" alt="" src="/assets/img/LOGOCODELOGY.png" />
                </a>
                <div class="nav-items">
                  <a class="enlaces" href="/pages/Index/index.html">
                    <div class="header-menu-default">
                      <div class="label">Inicio</div>
                    </div>
                  </a>
                 
                  <a class="enlaces" href="/pages/Servicios/servicios.html">
                    <div class="header-menu-default">
                      <div class="label">Servicios</div>
                    </div>
                  </a>

                  
                  <div class="header-menu-default">
                    <a class="enlaces" href="/pages/Contacto/contacto.html">Contacto</a>
                      <!-- <div class="label"></div> -->
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
    </nav>
<!-- FIN Menu navegacion -->

    <!-- INICIO FORMULARIO -->
    <div class="sign-up">
      <img
        class="left-background-icon"
        alt=""
        src="/assets/img/left-background.svg"
      />

      <div class="btnsignup">
        <div class="btn"></div>
      </div>

      <div class="sign-up-into-your-account-parent">
        <div class="sign-up-into">Registro Usuarios</div>
        <img class="dummy-logo-icon" alt="" src="/assets/img/LOGOCODELOGY.png" />
      </div>
      <img class="vector-icon" alt="" src="/assets/img/vector.svg" />

      <img class="sign-up-01-1-icon" alt="" src="/assets/img/sign-up01-1@2x.png" />
    </div>

<form action="">

      <div class="inputs">

        <div class="eamil-id">
          <ul>
            <li>
              <label class="first-name" for="Nombres">Nombres</label>
              <input placeholder="Ingresa tu nombre" class="enter-your-name eamil-id-child" type="text"  autofocus required>
            </li>
          </ul>
          <!-- <div class="eamil-id-child"></div> -->
        </div>

        <div class="eamil-id1">
          <ul>
            <li>
              <label class="first-name" for="Email">Email</label>
              <input placeholder="Ingresa tu correo" class="emal-id eamil-id-child" type="email"  autofocus required pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$" >
            </li>
          </ul>
        </div>

        <div class="eamil-id2">
          <ul>
            <li>
              <label class="password" for="Contraseña">Contraseña</label>
              <input placeholder="Ingresa una contraseña" class=" eamil-id-child" type="password"  autofocus required pattern="^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$" >
            </li>
          </ul>
        </div>


        <div class="eamil-id3">
          <div class="eamil-id-child"></div>
          <div class="company-name">Company Name :</div>
          <div class="enter-company-name">Enter company name ...</div>
        </div>

        <div class="eamil-id4">
          <ul>
            <li>
              <label class="last-name" for="apellido" >Apellidos</label>
              <input placeholder="Ingresa tus apellidos" class=" eamil-id-child" type="text"  autofocus required >
            </li>
          </ul>
        </div>

        <div class="eamil-id5">
          <ul>
            <li>
              <label class="mobile-no" for="telefono" >Num. Telefono</label>
              <input placeholder="+57 XXX-XXX-XXX" class=" eamil-id-child" type="number"  autofocus required >
            </li>
          </ul>
        </div>


        <div class="eamil-id6">
        
          <ul>
            <li>
              <label class="confirm-password" for="confirmar-pass">Confirmar Contraseña</label>
              <input placeholder="Ingresa la contraseña de nuevo" class=" eamil-id-child" type="password"  autofocus required pattern="^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$" >
            </li>
          </ul>
        </div>

        <div class="sign-up1">Registrar</div>
      </div>
    </form>

     
     <!-- FIN FORMULARIO -->

        <!-- INICIO FOOTER -->
        <footer>
          <div class="footer-big-1-parent">
              <div class="footer-big-1">
                <div class="big-footer">
                  <div class="col-1">
                    <div class="company">CodeLogy</div>
                    <div class="list-items">
  
                      <div class="about-us">
                        <a class="enlacesFooter" href="/pages/Index/index.html">Inicio</a></div>
  
                      <div class="about-us">
                        <a class="enlacesFooter" href="/pages/Servicios/servicios.html">Servicios</a> </div>
  
                      <div class="about-us">
                        <a class="enlacesFooter" href="/pages/Contacto/contacto.html">Contactanos</a> </div>
  
                      <div class="about-us">Acerca de Nosotros</div>
                    </div>
                  </div>
                  <div class="col-1">
                    <div class="company">
                      <a class="enlacesFooter" href=""> Mapa del sitio</a></div>
                    <!-- <div class="list-items">
                      <div class="about-us">Help Center</div>
                      <div class="about-us">Safety Center</div>
                      <div class="about-us">Community Guidelines</div>
                    </div> -->
                  </div>
                  <div class="col-3">
                    <div class="company">Legal</div>
                    <div class="list-items">
                      <div class="about-us">Politica de privacidad</div>
                      <div class="about-us">Terms of Service</div>  
                    </div>
                  </div>
                  <div class="col-1">
                    <div class="install-app">Descarga la APP</div>
                    <div class="badges">
                      <img
                        class="download-badge-google-play-b"
                        alt=""
                        src="/assets/img/download-badge--google-play-badge.svg"
                      />
        
                      <img
                        class="download-badge-google-play-b"
                        alt=""
                        src="/assets/img/download-badge--app-store-badge.svg"
                      />
                    </div>
                  </div>
                </div>
                <img class="divider-icon" alt="" src="/assets/img/divider.svg" />
        
                <div class="small-footer">
                  <div class="landify-ui-kit">
                    © 2023 Codelogy All rights reserved
                  </div>
                  <div class="social-links">
                    <div class="social-icons">
                      <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img
                        class="social-icons1"
                        alt="perfil-instagram"
                        src="/assets/img/social-icons.svg"/>
                      </a>
                      
                      <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img
                        class="social-icons1"
                        alt="perfiltwitter"
                        src="/assets/img/social-icons2.svg"
                      />
                      </a>
                   
                      <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img
                        class="social-icons1"
                        alt="youtube"
                        src="/assets/img/social-icons3.svg"
                      />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </footer>
      <!-- FIN FOOTER -->
  </main>
  </body>
</html>
