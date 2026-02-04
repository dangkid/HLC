FROM httpd:2.4 
ARG PROYECTO
ARG USUARIO
ARG TIPO
COPY src/ /usr/local/apache2/htdocs/
RUN chmod -R 755 /usr/local/apache2/htdocs/
EXPOSE 80