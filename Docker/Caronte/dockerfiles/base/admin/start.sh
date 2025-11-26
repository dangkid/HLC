#!/bin/bash
# carga las variables de entono pasadas desde el D.Compose
set -e

source /root/admin/base/usuarios/mainUsuarios.sh
source /root/admin/base/ssh/mainSsh.sh
# source /root/admin/base/ssh/mainSSH.sh

# source /root/admin/base/usuarios/makeUsuariosPostgress

main() {
    # gestion usuario ---> getsUser.sh
    # gestion del sudo ---> gestSudo.sh
    # gestion del ssh ---> gestSsh.sh
    # ...
    touch /root/logs/informe.log
    newUser
    if [ "$?" -eq 0 ]
    then
        make_ssh
    fi

    # Ejecutar SSH en primer plano - esto mantiene el contenedor vivo
    exec /usr/sbin/sshd -D
}

main