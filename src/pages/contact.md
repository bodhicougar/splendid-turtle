---
title: Kontakt
hide_title: false
sections:
  - section_id: contact-form
    type: section_form
    content: >-
      Hi there! Thank you so much for your interest in working together. Please
      fill the contact form below or send us an email at
      [example@example.com](mailto:example@example.com).
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
          - Facebook
          - Sonstiges
        is_required: true
      - input_type: textarea
        name: message
        label: Nachricht
        default_value: Ihre Nachricht an uns
        is_required: false
      - input_type: checkbox
        name: consent
        label: 'Ich bin einverstanden, daß dieses Formular meine Daten übermittelt.'
    submit_label: Send Message
template: advanced
---
