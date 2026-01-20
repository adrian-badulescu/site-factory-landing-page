      $(document).ready(function () {
        let selectedPackage = null;

        $(document).on("click", ".order-btn", function () {
          selectedPackage = $(this).data("package");
          console.log("✅ Pachet selectat:", selectedPackage);
        });

        $(document).on("submit", "#modal-contact-form", function (e) {
          e.preventDefault();          

          const name = $(this).find('input[name="name"]').val();
          const email = $(this).find('input[name="email"]').val();
          const phone = $(this).find('input[name="phone"]').val();
          const message = $(this).find('textarea[name="message"]').val();          

          var whatsappMessage =
            "Nuova richiesta di preventivo per sito web:\n" +
            "------------------------------------------\n" +
            "Pacchetto selezionato: " + (selectedPackage || "Non specificato") + "\n" +
            "Nome: " +
            name +
            "\n" +
            "Email: " +
            email +
            "\n" +
            "Telefono: " +
            (phone || "Non fornito") +
            "\n" +
            "------------------------------------------\n" +
            "Messaggio: " +
            message;

          var encodedMessage = encodeURIComponent(whatsappMessage);
          var whatsappURL = "https://wa.me/393532132636?text=" + encodedMessage;

          window.open(whatsappURL, "_blank");

          $.featherlight.close();
          this.reset();
        });
      });