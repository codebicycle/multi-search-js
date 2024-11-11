yamlData = `
- name:        compari.ro
  URLTemplate: https://www.compari.ro/CategorySearch.php?st={}
  tags:
    - compare

- name:        price.ro
  URLTemplate: https://www.price.ro/index.php?action=q&text={}&submit=Cauta
  tags:
    - compare

- name:        hagglezon.com
  URLTemplate: https://www.hagglezon.com/en/s/{}
  tags:
    - compare

- name:        dedeman
  URLTemplate: https://www.dedeman.ro/ro/catalogsearch/result/v2?q={}
  tags:
    - DIY

- name:        leroymerlin
  URLTemplate: https://www.leroymerlin.ro/produse/search/{}
  tags:
    - DIY

- name:        bricodepot
  URLTemplate: https://www.bricodepot.ro/catalogsearch/result/?q={}
  tags:
    - DIY

- name:        mathaus
  URLTemplate: https://mathaus.ro/search?pb=true&text={}
  tags:
    - DIY

- name:        hornbach
  URLTemplate: https://www.hornbach.ro/s/{}
  tags:
    - DIY

- name:        olx Iasi
  URLTemplate: https://www.olx.ro/iasi_39939/q-{}
  tags:
    - marketplace

- name:        emag
  URLTemplate: https://www.emag.ro/search/{}
  tags:
    - e-store

- name:        altex
  URLTemplate: https://altex.ro/cauta/?q={}
  tags:
    - e-store

- name:        hotukdeals
  URLTemplate: https://www.hotukdeals.com/search?q={}
  tags:
    - deals

- name:        mydealz
  URLTemplate: https://www.mydealz.de/search?q={}
  tags:
    - deals

- name:        hotukdeals travel
  URLTemplate: https://www.hotukdeals.com/tag/travel
  tags:
    - travel deals

- name:        mydealz travel
  URLTemplate: https://www.mydealz.de/gruppe/reisen
  tags:
    - travel deals

- name:        preisjaeger.at travel
  URLTemplate: https://www.preisjaeger.at/gruppe/reisen
  tags:
    - travel deals

- name:        chollometro travel
  URLTemplate: https://www.chollometro.com/categorias/viajes-y-ocio
  tags:
    - travel deals

- name:        pepper.it travel
  URLTemplate: https://www.pepper.it/categorie/viaggi
  tags:
    - travel deals

- name:        nl.pepper.com travel
  URLTemplate: https://nl.pepper.com/groep/reizen
  tags:
    - travel deals

- name:        fly4free
  URLTemplate: https://www.fly4free.com/flights/flight-deals/europe/
  tags:
    - travel deals

- name:        travelator
  URLTemplate: https://travelator.ro/
  tags:
    - travel deals

- name:        aventurescu
  URLTemplate: https://aventurescu.ro/
  tags:
    - travel deals

- name:        printre carti
  URLTemplate: https://www.printrecarti.ro/?cauta={}
  tags:
    - anticariat

- name:        targul cartii
  URLTemplate: https://www.targulcartii.ro/cauta/{}
  function:    slugify
  tags:
    - anticariat

- name:        anticexlibris
  URLTemplate: https://www.anticexlibris.ro/produse/categorie?cid=-1&q={}
  tags:
    - anticariat

- name:        anticariat-doamnei
  URLTemplate: https://anticariat-doamnei.com/search/?q={}
  tags:
    - anticariat

- name:        anticariat-ursu
  URLTemplate: https://anticariat-ursu.ro/index.php?route=product/search&search={}
  tags:
    - anticariat

- name:        anticariat.net
  URLTemplate: https://www.anticariat.net/cautare-rezultate.php?t={}
  tags:
    - anticariat

- name:        casa literelor
  URLTemplate: https://www.casaliterelor.ro/searchanise/result?q={}
  tags:
    - anticariat

- name:        anticariat-unu
  URLTemplate: https://www.anticariat-unu.ro/cautare?keyword={}
  tags:
    - anticariat

- name:        carti-online
  URLTemplate: https://www.carti-online.ro/?s={}&search_id=product&post_type=product
  tags:
    - anticariat
`
