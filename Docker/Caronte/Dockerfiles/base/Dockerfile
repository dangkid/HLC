FROM ubuntu
ARG USUARIO
RUN apt update && apt install -yq --no-install-recommends \ 
    nano \
    git curl \
    net-tools iputils-ping \
    sudo

RUN mkdir /root/admin
COPY admin/start.sh /root/admin/
RUN chmod +x /root/admin/start.sh

RUN useradd -rm -d /home/${USUARIO} -s /bin/bash ${USUARIO}
RUN echo "${USUARIO}:1234" | chpasswd 
RUN echo "Bienvenido a la empresa, ${USUARIO}" > /home/${USUARIO}/hola.txt

# el primer comando que se use el contenedor para mantenerse activo
# CMD ["tail", "-f", "/dev/null"]

ENTRYPOINT ["/root/admin/start.sh"]