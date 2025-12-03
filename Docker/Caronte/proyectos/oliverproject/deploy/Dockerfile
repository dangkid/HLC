FROM olivermagallanes/nginx

USER root

# Copiar archivos del sitio web
COPY ./proyectos/oliverproject/src /var/www/html

# Asegurar permisos correctos
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html

WORKDIR /root/admin/sweb/nginx
ENTRYPOINT [ "./admin/start.sh" ]
