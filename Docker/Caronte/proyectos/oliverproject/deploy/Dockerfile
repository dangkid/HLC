FROM olivermagallanes/nginx

USER root

# Copiar archivos del sitio web desde la carpeta src relativa al deploy
COPY ../src /var/www/html

# Asegurar permisos correctos
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html

WORKDIR /root/admin/sweb/nginx
ENTRYPOINT [ "./admin/start.sh" ]
