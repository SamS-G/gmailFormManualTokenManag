export const contact = {
  address: '69100 Villeurbanne',
  phone: '06.82.36.76.46',
  email: 'samuel.guichardon@webconceptions.fr',
  title: 'Nouvelle demande de contact',
  contact_name: '{{name}}',
  contact_email: '{{email}}',
  contact_reason: '{{reason}}',
  contact_subject: '{{subject}}',
  contact_message: '{{message}}',
  button_title: 'Répondre au message',
  button_link: `mailto:{{email}}`,
  header_img_url: 'http://localhost:3000/pictures/logo.svg', // TODO url à modifier sur le dossier public dans le nom de domaine ex: https://webconceptions.fr
  header_img_alt: 'webconceptions',
  banner_h1: 'Nouvelle demande de contact',
  banner_text: `Reçu le ${(new Date()).toLocaleDateString('fr-FR')}`,
  year: (new Date()).getFullYear().toString(),
  company_name: 'Webconceptions',
  footer_text:
        'Ce message a été envoyé automatiquement depuis le webconceptions.fr',
}
