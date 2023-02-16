import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSuperMagaSalesClientLForm from './forms/i-i-s-super-maga-sales-client-l';
import IISSuperMagaSalesInvioceLForm from './forms/i-i-s-super-maga-sales-invioce-l';
import IISSuperMagaSalesProductLForm from './forms/i-i-s-super-maga-sales-product-l';
import IISSuperMagaSalesClientEForm from './forms/i-i-s-super-maga-sales-client-e';
import IISSuperMagaSalesInvioceEForm from './forms/i-i-s-super-maga-sales-invioce-e';
import IISSuperMagaSalesProductEForm from './forms/i-i-s-super-maga-sales-product-e';
import IISSuperMagaSalesClientModel from './models/i-i-s-super-maga-sales-client';
import IISSuperMagaSalesInvioceModel from './models/i-i-s-super-maga-sales-invioce';
import IISSuperMagaSalesProductItemModel from './models/i-i-s-super-maga-sales-product-item';
import IISSuperMagaSalesProductModel from './models/i-i-s-super-maga-sales-product';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-super-maga-sales-client': IISSuperMagaSalesClientModel,
    'i-i-s-super-maga-sales-invioce': IISSuperMagaSalesInvioceModel,
    'i-i-s-super-maga-sales-product-item': IISSuperMagaSalesProductItemModel,
    'i-i-s-super-maga-sales-product': IISSuperMagaSalesProductModel
  },

  'application-name': 'Продажи',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Продажи',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Продажи',
          title: 'Продажи'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'подсистема-продаж': {
          caption: 'Подсистема продаж',
          title: 'Подсистема продаж',
          'i-i-s-super-maga-sales-invioce-l': {
            caption: 'Накладная',
            title: ''
          },
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-super-maga-sales-product-l': {
              caption: 'Товар',
              title: 'Product'
            },
            'i-i-s-super-maga-sales-client-l': {
              caption: 'Клиент',
              title: 'Client'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-super-maga-sales-client-l': IISSuperMagaSalesClientLForm,
    'i-i-s-super-maga-sales-invioce-l': IISSuperMagaSalesInvioceLForm,
    'i-i-s-super-maga-sales-product-l': IISSuperMagaSalesProductLForm,
    'i-i-s-super-maga-sales-client-e': IISSuperMagaSalesClientEForm,
    'i-i-s-super-maga-sales-invioce-e': IISSuperMagaSalesInvioceEForm,
    'i-i-s-super-maga-sales-product-e': IISSuperMagaSalesProductEForm
  },

});

export default translations;
