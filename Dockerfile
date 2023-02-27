FROM node:18.12
RUN yarn global add gatsby-cli gatsby gatsby-theme-carbon libvips
RUN touch /root/.bashrc || : && echo "export PYTHON=/usr/local/bin/python3" >> /root/.bashrc || : && echo "export NODE_OPTIONS=--openssl-legacy-provider" >> /root/.bashrc
EXPOSE 8000
WORKDIR /home
CMD ["bash"]
