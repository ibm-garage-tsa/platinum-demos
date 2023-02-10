FROM node:19.6
RUN yarn global add gatsby-cli gatsby gatsby-theme-carbon
EXPOSE 8000
WORKDIR /home
CMD ["bash"]
