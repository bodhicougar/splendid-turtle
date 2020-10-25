---
title: Kontakt
hide_title: false
sections:
  - section_id: contact-form
    type: section_form
    content: >-
      Servus! Vielen Dank für Ihr Interesse an unseren Services.

      Bitte senden Sie uns einfach untenstehendes Formular ausgefüllt zu, oder
      benützen diesen Link - 
      [info@blackboxmd.fyi](mailto:info@blackboxmd.fyi)    - um uns ein E-Mail
      zu schicken.


      Selbstverständlich gilt die [DSGVO](/dsgvo) & die
      [Datenschutzerklärung](/datenschutz).
    form_id: contactForm
    form_action: /thank-you
    form_fields:
      - input_type: text
        name: name
        label: Vorname & Nachname
        default_value: Ihr Name oder Firma
        is_required: true
      - input_type: email
        name: email
        label: E-Mail
        default_value: Ihre E-Mail Adresse
        is_required: true
        options: []
      - input_type: select
        name: Betreff
        label: Betreff
        default_value: Bitte auswählen
        options:
          - Google Ads
          - YouTube
          - Amazon Ads
          - LinkedIn Ads
          - lorem-ipsum
        is_required: true
      - input_type: textarea
        name: message
        label: Nachricht
        default_value: Ihre Nachricht an uns
        is_required: false
      - input_type: checkbox
        name: consent
        label: >-
          Ich bin zur Übermittlung meiner Eingaben in diesem Formular zwecks
          Kontaktaufnahme einverstanden.
        is_required: true
    submit_label: Senden
template: advanced
---
