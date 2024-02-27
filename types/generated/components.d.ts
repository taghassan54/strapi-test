import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentPageContent extends Schema.Component {
  collectionName: 'components_content_page_contents';
  info: {
    displayName: 'pageContent';
    icon: 'layout';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    class: Attribute.String;
    media: Attribute.Media;
  };
}

export interface MediaExtraMedia extends Schema.Component {
  collectionName: 'components_media_extra_medias';
  info: {
    displayName: 'extra_media';
    icon: 'filePdf';
  };
  attributes: {
    name: Attribute.String;
    file: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.page-content': ContentPageContent;
      'media.extra-media': MediaExtraMedia;
    }
  }
}
