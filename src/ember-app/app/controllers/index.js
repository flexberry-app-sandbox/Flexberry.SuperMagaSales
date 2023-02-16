import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.подсистема-продаж.caption'),
          title: i18n.t('forms.application.sitemap.подсистема-продаж.title'),
          children: [{
            link: 'i-i-s-super-maga-sales-invioce-l',
            caption: i18n.t('forms.application.sitemap.подсистема-продаж.i-i-s-super-maga-sales-invioce-l.caption'),
            title: i18n.t('forms.application.sitemap.подсистема-продаж.i-i-s-super-maga-sales-invioce-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.подсистема-продаж.справочники.caption'),
            title: i18n.t('forms.application.sitemap.подсистема-продаж.справочники.title'),
            children: [{
              link: 'i-i-s-super-maga-sales-product-l',
              caption: i18n.t('forms.application.sitemap.подсистема-продаж.справочники.i-i-s-super-maga-sales-product-l.caption'),
              title: i18n.t('forms.application.sitemap.подсистема-продаж.справочники.i-i-s-super-maga-sales-product-l.title'),
              icon: 'folder',
              children: null
            }, {
              link: 'i-i-s-super-maga-sales-client-l',
              caption: i18n.t('forms.application.sitemap.подсистема-продаж.справочники.i-i-s-super-maga-sales-client-l.caption'),
              title: i18n.t('forms.application.sitemap.подсистема-продаж.справочники.i-i-s-super-maga-sales-client-l.title'),
              icon: 'tags',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})