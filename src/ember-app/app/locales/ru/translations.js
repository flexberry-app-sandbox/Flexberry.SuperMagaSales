import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Продажи',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Продажи',
          title: 'Продажи'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
