  //Start of HappyFox Live Chat Script-->
    
    window.HFCHAT_CONFIG = {
         EMBED_TOKEN: "544cca30-ced6-11e5-8f92-1b85d2156a63",
         ACCESS_TOKEN: "22667820ee5e4f13bc58ee6bff217254",
         HOST_URL: "https://happyfoxchat.com",
         ASSETS_URL: "https://d1l7z5ofrj6ab8.cloudfront.net/visitor"
     };

    (function() {
      var scriptTag = document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.async = true;
      scriptTag.src = window.HFCHAT_CONFIG.ASSETS_URL + '/js/widget-loader.js';

      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(scriptTag, s);
    })();

   // <!--End of HappyFox Live Chat Script-->