let containerHelpUser = `
<div class="pop-user-help" id="pop-user-help">
<div class="header-user-help">
    <img src="img/recordar-usuario.png" alt="Icono del popup recordar el usuario">
    <h2 class="title-user-help">¿Olvidó su usuario?</h2>
    <a aria-hidden="true" href="#" id="btn-close-pop-user-help" class="btn-close-pop-user-help"> <i class="fas fa-times"></i></a>
</div>
<div class="info-user-help">
    <p class="cont-user-help">No se preocupe. El nombre de usuario es normalmente la dirección de correo electrónico. Sin embargo, si no lo recuerda le ayudaremos a recuperarlo aquí.</p>
    <div class="c-btn-user-help">
        <label class="btn-ok" id="btn-ok-pop-user-help">Recuperar el usuario</label>
        <label class="btn-cancel" id="btn-cancel-pop-user-help">Cancelar</label>
    </div>
</div>
</div>
`

documet.getElementById("c-modal-user-help").innerHTML = containerHelpUser