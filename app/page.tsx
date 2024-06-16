"use client";
import React from "react";
import Script from "next/script";

const OwlAssistant = () => {
  return (
    <div className="m-0">
      <flowise-fullchatbot></flowise-fullchatbot>
      <Script
        src="https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js"
        type="module"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Chatbot) {
            window.Chatbot.initFull({
              chatflowid: "b4a8fdf2-8912-4d36-873d-b1ad8d6c97d1",
              apiHost: "https://flowise-r1c3.onrender.com",
              theme: {
                button: {
                  backgroundColor: "#000000",
                  size: "medium",
                  iconColor: "white",
                  customIconSrc:
                    "https://raw.githubusercontent.com/AsharibAli/project-images/main/owl_logo.png",
                },
                chatWindow: {
                  welcomeMessage:
                    "Welcome to the Owl Assistant! I'm here to assist you with any questions you have about the Owl Protocol, Owl Assistant helps developers to build full-stack web3 applications with the help of Owl API.",
                  backgroundColor: "#ffffff",
                  fontSize: 16,
                  poweredByTextColor: "#000000",
                  botMessage: {
                    backgroundColor: "#f7f8ff",
                    textColor: "#000000",
                    showAvatar: true,
                    avatarSrc:
                      "https://raw.githubusercontent.com/AsharibAli/project-images/main/owl_logo.png",
                  },
                  userMessage: {
                    backgroundColor: "#000000",
                    textColor: "#ffffff",
                    showAvatar: true,
                    avatarSrc:
                      "https://raw.githubusercontent.com/AsharibAli/project-images/main/usericon.png",
                  },
                  textInput: {
                    placeholder: "Type your question",
                    backgroundColor: "#ffffff",
                    textColor: "#000000",
                    sendButtonColor: "#000000",
                  },
                  feedback: {
                    color: "#000000",
                  },
                  footer: {
                    textColor: "#000000",
                    text: "Build with ❤️ by",
                    company: "Asharib Ali",
                    companyLink: "https://github.com/AsharibAli/",
                  },
                },
              },
            });
          }
        }}
      />
    </div>
  );
};

export default OwlAssistant;
