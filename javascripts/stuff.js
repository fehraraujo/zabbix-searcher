$(document).on('search:ready', function () {
  $(".input-search").focus()
  $(".loading").remove()
})

function focusOnSearch (e) {
  var searchField = $('.input-search')[0]
  if (e.keyCode == 191 && !searchField.length) {
    searchField.focus()
    var t = searchField.get(0)
    if (t.value.length) {
      t.selectionStart = 0
      t.selectionEnd = t.value.length
    }
    return false
  }
}

var counter = 1
$.getJSON('/zabbix-searcher/sources/github-community-repos.json', function (projects) {  
  var container = $('.container')
  Object.keys(projects).forEach( function (key) {
    var project = projects[key]
    var charHTML
    var icon = 'file'
    $.each(project["keywords"], function( index, value ){
      if (value in faicons) {
        icon = faicons[value]
        return false
      }
    });    
    charHTML = "<div><a target='_blank' title='#" + counter + " " + project['name'] + "' href='" + 
      project['url'] + "'><i class='fa fa-" + icon + "'></i> " + project['name'] + "</a></div>"
    container.append("<li class='result emoji-wrapper'>" +
      charHTML + "<span class='keywords'>" + project["keywords"] + "</span></li>")
    counter++
  })
  $(document).trigger('source-github:ready')
})
$(document).on('source-github:ready', function () {  
  $.getJSON('/zabbix-searcher/sources/share-zabbix.json', function (projects) {
    var container = $('.container')
    Object.keys(projects).forEach( function (key) {
      var project = projects[key]
      var charHTML
      var icon = 'file'
      $.each(project["keywords"], function( index, value ){
        if (value in faicons) {
          icon = faicons[value]
          return false
        }
      });    
      charHTML = "<div><a target='_blank' title='#" + counter + " " + project['name'] + "' href='" + 
        project['url'] + "'><i class='fa fa-" + icon + "'></i> " + project['name'] + "</a></div>"
      container.append("<li class='result emoji-wrapper'>" +
        charHTML + "<span class='keywords'>" + project["keywords"] + "</span></li>")
      counter++
    })
    $(document).trigger('source-share:ready')
  })
})  
$(document).on('source-share:ready', function () {
  $.getJSON('/zabbix-searcher/sources/zabbix-wiki.json', function (projects) {
    var container = $('.container')
    Object.keys(projects).forEach( function (key) {
      var project = projects[key]
      var charHTML
      var icon = 'file'
      $.each(project["keywords"], function( index, value ){
        if (value in faicons) {
          icon = faicons[value]
          return false
        }
      });    
      charHTML = "<div><a target='_blank' title='#" + counter + " " + project['name'] + "' href='" + 
        project['url'] + "'><i class='fa fa-" + icon + "'></i> " + project['name'] + "</a></div>"
      container.append("<li class='result emoji-wrapper'>" +
        charHTML + "<span class='keywords'>" + project["keywords"] + "</span></li>")
      counter++
    })
    $(document).trigger('search:ready')
  })
})

$(document).keydown(function (e) { focusOnSearch(e) })

$(document).on('keydown', '.emoji-wrapper input', function (e) {
  $(".input-search").blur()
  focusOnSearch(e)
})

$(document).on('click', '.js-clear-search, .mojigroup.active', function () {
  location.hash = ""
  return false
})

$(document).on('click', '.js-contribute', function () {
  ga('send', 'event', 'contribute', 'click')
})

faicons = {
  // custom icon mapping
  'monitoringartist': 'star',
  'aws': 'amazon', 
  'api': 'retweet',
  'cli': 'terminal',
  'module': 'cube',
  'configuration': 'book',
  'rabbitmq': 'database',
  'db2': 'database',
  'redis': 'database',
  'elasticsearch': 'database',
  'riak': 'database',
  'db': 'database',
  'informix': 'database',
  'postgresql': 'database',
  'mysql': 'database',
  'zbxora': 'database',
  'sql': 'database',
  'redhat': 'linux',
  'ubuntu': 'linux',  
  'debian': 'linux',  
  'printer': 'print',
  'xerox': 'print',
  'workcenter': 'print',
  'laserjet': 'print',  
  'mikrotik': 'wifi',
  'postfix': 'envelope',
  'zimbra': 'envelope',
  'exim': 'envelope',
  'java': 'coffee',
  'jvm': 'coffee',
  'tomcat': 'coffee',
  'jboss': 'coffee',
  'backup': 'hdd-o',
  'array': 'hdd-o',
  'raid': 'hdd-o',
  'qnap': 'hdd-o',
  'hdd': 'hdd-o',
  'disk': 'hdd-o',
  'netapp': 'hdd-o',
  'storwize': 'hdd-o',
  'synology': 'hdd-o',
  'hddtemp': 'hdd-o',
  'iostat': 'hdd-o',
  'emc': 'hdd-o',
  'storage': 'hdd-o',
  'veeam': 'hdd-o',
  'weather': 'bolt',
  'hadoop': 'table',
  'hbase': 'table',
  'storm': 'table',
  'vm': 'server',
  'kvm': 'server',
  'openvz': 'server',
  'cisco': 'sitemap',
  'juniper': 'sitemap',
  'network': 'sitemap',
  'asa': 'sitemap',
  'router': 'sitemap',   
  // auto icon mapping
  'bars': 'bars',
  'caret-down': 'caret-down',
  'flag': 'flag',
  'diamond': 'diamond',
  'camera-retro': 'camera-retro',
  'hand-spock-o': 'hand-spock-o',
  'ship': 'ship',
  'venus': 'venus',
  'file-image-o': 'file-image-o',
  'spinner': 'spinner',
  'check-square': 'check-square',
  'credit-card': 'credit-card',
  'pie-chart': 'pie-chart',
  'won': 'won',
  'file-text-o': 'file-text-o',
  'arrow-right': 'arrow-right',
  'play-circle': 'play-circle',
  'github': 'github',
  'medkit': 'medkit',
  'caret-down': 'caret-down',
  'flag': 'flag',
  'envelope': 'envelope',
  'search': 'search',
  '500px': '500px',
  'amazon': 'amazon',
  'balance-scale': 'balance-scale',
  'battery-0': 'battery-0',
  'battery-1': 'battery-1',
  'battery-2': 'battery-2',
  'battery-3': 'battery-3',
  'battery-4': 'battery-4',
  'battery-empty': 'battery-empty',
  'battery-full': 'battery-full',
  'battery-half': 'battery-half',
  'battery-quarter': 'battery-quarter',
  'battery-three-quarters': 'battery-three-quarters',
  'black-tie': 'black-tie',
  'calendar-check-o': 'calendar-check-o',
  'calendar-minus-o': 'calendar-minus-o',
  'calendar-plus-o': 'calendar-plus-o',
  'calendar-times-o': 'calendar-times-o',
  'cc-diners-club': 'cc-diners-club',
  'cc-jcb': 'cc-jcb',
  'chrome': 'chrome',
  'clone': 'clone',
  'commenting': 'commenting',
  'commenting-o': 'commenting-o',
  'contao': 'contao',
  'creative-commons': 'creative-commons',
  'expeditedssl': 'expeditedssl',
  'firefox': 'firefox',
  'fonticons': 'fonticons',
  'genderless': 'genderless',
  'get-pocket': 'get-pocket',
  'gg': 'gg',
  'gg-circle': 'gg-circle',
  'hand-grab-o': 'hand-grab-o',
  'hand-lizard-o': 'hand-lizard-o',
  'hand-paper-o': 'hand-paper-o',
  'hand-peace-o': 'hand-peace-o',
  'hand-pointer-o': 'hand-pointer-o',
  'hand-rock-o': 'hand-rock-o',
  'hand-scissors-o': 'hand-scissors-o',
  'hand-spock-o': 'hand-spock-o',
  'hand-stop-o': 'hand-stop-o',
  'hourglass': 'hourglass',
  'hourglass-1': 'hourglass-1',
  'hourglass-2': 'hourglass-2',
  'hourglass-3': 'hourglass-3',
  'hourglass-end': 'hourglass-end',
  'hourglass-half': 'hourglass-half',
  'hourglass-o': 'hourglass-o',
  'hourglass-start': 'hourglass-start',
  'houzz': 'houzz',
  'i-cursor': 'i-cursor',
  'industry': 'industry',
  'internet-explorer': 'internet-explorer',
  'map': 'map',
  'map-o': 'map-o',
  'map-pin': 'map-pin',
  'map-signs': 'map-signs',
  'mouse-pointer': 'mouse-pointer',
  'object-group': 'object-group',
  'object-ungroup': 'object-ungroup',
  'odnoklassniki': 'odnoklassniki',
  'odnoklassniki-square': 'odnoklassniki-square',
  'opencart': 'opencart',
  'opera': 'opera',
  'optin-monster': 'optin-monster',
  'registered': 'registered',
  'safari': 'safari',
  'sticky-note': 'sticky-note',
  'sticky-note-o': 'sticky-note-o',
  'television': 'television',
  'trademark': 'trademark',
  'tripadvisor': 'tripadvisor',
  'tv': 'tv',
  'vimeo': 'vimeo',
  'wikipedia-w': 'wikipedia-w',
  'y-combinator': 'y-combinator',
  'yc': 'yc',
  'adjust': 'adjust',
  'anchor': 'anchor',
  'archive': 'archive',
  'area-chart': 'area-chart',
  'arrows': 'arrows',
  'arrows-h': 'arrows-h',
  'arrows-v': 'arrows-v',
  'asterisk': 'asterisk',
  'at': 'at',
  'automobile': 'automobile',
  'balance-scale': 'balance-scale',
  'ban': 'ban',
  'bank': 'bank',
  'bar-chart': 'bar-chart',
  'bar-chart-o': 'bar-chart-o',
  'barcode': 'barcode',
  'bars': 'bars',
  'battery-0': 'battery-0',
  'battery-1': 'battery-1',
  'battery-2': 'battery-2',
  'battery-3': 'battery-3',
  'battery-4': 'battery-4',
  'battery-empty': 'battery-empty',
  'battery-full': 'battery-full',
  'battery-half': 'battery-half',
  'battery-quarter': 'battery-quarter',
  'battery-three-quarters': 'battery-three-quarters',
  'bed': 'bed',
  'beer': 'beer',
  'bell': 'bell',
  'bell-o': 'bell-o',
  'bell-slash': 'bell-slash',
  'bell-slash-o': 'bell-slash-o',
  'bicycle': 'bicycle',
  'binoculars': 'binoculars',
  'birthday-cake': 'birthday-cake',
  'bolt': 'bolt',
  'bomb': 'bomb',
  'book': 'book',
  'bookmark': 'bookmark',
  'bookmark-o': 'bookmark-o',
  'briefcase': 'briefcase',
  'bug': 'bug',
  'building': 'building',
  'building-o': 'building-o',
  'bullhorn': 'bullhorn',
  'bullseye': 'bullseye',
  'bus': 'bus',
  'cab': 'cab',
  'calculator': 'calculator',
  'calendar': 'calendar',
  'calendar-check-o': 'calendar-check-o',
  'calendar-minus-o': 'calendar-minus-o',
  'calendar-o': 'calendar-o',
  'calendar-plus-o': 'calendar-plus-o',
  'calendar-times-o': 'calendar-times-o',
  'camera': 'camera',
  'camera-retro': 'camera-retro',
  'car': 'car',
  'caret-square-o-down': 'caret-square-o-down',
  'caret-square-o-left': 'caret-square-o-left',
  'caret-square-o-right': 'caret-square-o-right',
  'caret-square-o-up': 'caret-square-o-up',
  'cart-arrow-down': 'cart-arrow-down',
  'cart-plus': 'cart-plus',
  'cc': 'cc',
  'certificate': 'certificate',
  'check': 'check',
  'check-circle': 'check-circle',
  'check-circle-o': 'check-circle-o',
  'check-square': 'check-square',
  'check-square-o': 'check-square-o',
  'child': 'child',
  'circle': 'circle',
  'circle-o': 'circle-o',
  'circle-o-notch': 'circle-o-notch',
  'circle-thin': 'circle-thin',
  'clock-o': 'clock-o',
  'clone': 'clone',
  'close': 'close',
  'cloud': 'cloud',
  'cloud-download': 'cloud-download',
  'cloud-upload': 'cloud-upload',
  'code': 'code',
  'code-fork': 'code-fork',
  'coffee': 'coffee',
  'cog': 'cog',
  'cogs': 'cogs',
  'comment': 'comment',
  'comment-o': 'comment-o',
  'commenting': 'commenting',
  'commenting-o': 'commenting-o',
  'comments': 'comments',
  'comments-o': 'comments-o',
  'compass': 'compass',
  'copyright': 'copyright',
  'creative-commons': 'creative-commons',
  'credit-card': 'credit-card',
  'crop': 'crop',
  'crosshairs': 'crosshairs',
  'cube': 'cube',
  'cubes': 'cubes',
  'cutlery': 'cutlery',
  'dashboard': 'dashboard',
  'database': 'database',
  'desktop': 'desktop',
  'diamond': 'diamond',
  'dot-circle-o': 'dot-circle-o',
  'download': 'download',
  'edit': 'edit',
  'ellipsis-h': 'ellipsis-h',
  'ellipsis-v': 'ellipsis-v',
  'envelope': 'envelope',
  'envelope-o': 'envelope-o',
  'envelope-square': 'envelope-square',
  'eraser': 'eraser',
  'exchange': 'exchange',
  'exclamation': 'exclamation',
  'exclamation-circle': 'exclamation-circle',
  'exclamation-triangle': 'exclamation-triangle',
  'external-link': 'external-link',
  'external-link-square': 'external-link-square',
  'eye': 'eye',
  'eye-slash': 'eye-slash',
  'eyedropper': 'eyedropper',
  'fax': 'fax',
  'feed': 'feed',
  'female': 'female',
  'fighter-jet': 'fighter-jet',
  'file-archive-o': 'file-archive-o',
  'file-audio-o': 'file-audio-o',
  'file-code-o': 'file-code-o',
  'file-excel-o': 'file-excel-o',
  'file-image-o': 'file-image-o',
  'file-movie-o': 'file-movie-o',
  'file-pdf-o': 'file-pdf-o',
  'file-photo-o': 'file-photo-o',
  'file-picture-o': 'file-picture-o',
  'file-powerpoint-o': 'file-powerpoint-o',
  'file-sound-o': 'file-sound-o',
  'file-video-o': 'file-video-o',
  'file-word-o': 'file-word-o',
  'file-zip-o': 'file-zip-o',
  'film': 'film',
  'filter': 'filter',
  'fire': 'fire',
  'fire-extinguisher': 'fire-extinguisher',
  'flag': 'flag',
  'flag-checkered': 'flag-checkered',
  'flag-o': 'flag-o',
  'flash': 'flash',
  'flask': 'flask',
  'folder': 'folder',
  'folder-o': 'folder-o',
  'folder-open': 'folder-open',
  'folder-open-o': 'folder-open-o',
  'frown-o': 'frown-o',
  'futbol-o': 'futbol-o',
  'gamepad': 'gamepad',
  'gavel': 'gavel',
  'gear': 'gear',
  'gears': 'gears',
  'gift': 'gift',
  'glass': 'glass',
  'globe': 'globe',
  'graduation-cap': 'graduation-cap',
  'group': 'group',
  'hand-grab-o': 'hand-grab-o',
  'hand-lizard-o': 'hand-lizard-o',
  'hand-paper-o': 'hand-paper-o',
  'hand-peace-o': 'hand-peace-o',
  'hand-pointer-o': 'hand-pointer-o',
  'hand-rock-o': 'hand-rock-o',
  'hand-scissors-o': 'hand-scissors-o',
  'hand-spock-o': 'hand-spock-o',
  'hand-stop-o': 'hand-stop-o',
  'hdd-o': 'hdd-o',
  'headphones': 'headphones',
  'heart': 'heart',
  'heart-o': 'heart-o',
  'heartbeat': 'heartbeat',
  'history': 'history',
  'home': 'home',
  'hotel': 'hotel',
  'hourglass': 'hourglass',
  'hourglass-1': 'hourglass-1',
  'hourglass-2': 'hourglass-2',
  'hourglass-3': 'hourglass-3',
  'hourglass-end': 'hourglass-end',
  'hourglass-half': 'hourglass-half',
  'hourglass-o': 'hourglass-o',
  'hourglass-start': 'hourglass-start',
  'i-cursor': 'i-cursor',
  'image': 'image',
  'inbox': 'inbox',
  'industry': 'industry',
  'info': 'info',
  'info-circle': 'info-circle',
  'institution': 'institution',
  'key': 'key',
  'keyboard-o': 'keyboard-o',
  'language': 'language',
  'laptop': 'laptop',
  'leaf': 'leaf',
  'legal': 'legal',
  'lemon-o': 'lemon-o',
  'level-down': 'level-down',
  'level-up': 'level-up',
  'life-bouy': 'life-bouy',
  'life-buoy': 'life-buoy',
  'life-ring': 'life-ring',
  'life-saver': 'life-saver',
  'lightbulb-o': 'lightbulb-o',
  'line-chart': 'line-chart',
  'location-arrow': 'location-arrow',
  'lock': 'lock',
  'magic': 'magic',
  'magnet': 'magnet',
  'mail-forward': 'mail-forward',
  'mail-reply': 'mail-reply',
  'mail-reply-all': 'mail-reply-all',
  'male': 'male',
  'map': 'map',
  'map-marker': 'map-marker',
  'map-o': 'map-o',
  'map-pin': 'map-pin',
  'map-signs': 'map-signs',
  'meh-o': 'meh-o',
  'microphone': 'microphone',
  'microphone-slash': 'microphone-slash',
  'minus': 'minus',
  'minus-circle': 'minus-circle',
  'minus-square': 'minus-square',
  'minus-square-o': 'minus-square-o',
  'mobile': 'mobile',
  'mobile-phone': 'mobile-phone',
  'money': 'money',
  'moon-o': 'moon-o',
  'mortar-board': 'mortar-board',
  'motorcycle': 'motorcycle',
  'mouse-pointer': 'mouse-pointer',
  'music': 'music',
  'navicon': 'navicon',
  'newspaper-o': 'newspaper-o',
  'object-group': 'object-group',
  'object-ungroup': 'object-ungroup',
  'paint-brush': 'paint-brush',
  'paper-plane': 'paper-plane',
  'paper-plane-o': 'paper-plane-o',
  'paw': 'paw',
  'pencil': 'pencil',
  'pencil-square': 'pencil-square',
  'pencil-square-o': 'pencil-square-o',
  'phone': 'phone',
  'phone-square': 'phone-square',
  'photo': 'photo',
  'picture-o': 'picture-o',
  'pie-chart': 'pie-chart',
  'plane': 'plane',
  'plug': 'plug',
  'plus': 'plus',
  'plus-circle': 'plus-circle',
  'plus-square': 'plus-square',
  'plus-square-o': 'plus-square-o',
  'power-off': 'power-off',
  'print': 'print',
  'puzzle-piece': 'puzzle-piece',
  'qrcode': 'qrcode',
  'question': 'question',
  'question-circle': 'question-circle',
  'quote-left': 'quote-left',
  'quote-right': 'quote-right',
  'random': 'random',
  'recycle': 'recycle',
  'refresh': 'refresh',
  'registered': 'registered',
  'remove': 'remove',
  'reorder': 'reorder',
  'reply': 'reply',
  'reply-all': 'reply-all',
  'retweet': 'retweet',
  'road': 'road',
  'rocket': 'rocket',
  'rss': 'rss',
  'rss-square': 'rss-square',
  'search': 'search',
  'search-minus': 'search-minus',
  'search-plus': 'search-plus',
  'send': 'send',
  'send-o': 'send-o',
  'server': 'server',
  'share': 'share',
  'share-alt': 'share-alt',
  'share-alt-square': 'share-alt-square',
  'share-square': 'share-square',
  'share-square-o': 'share-square-o',
  'shield': 'shield',
  'ship': 'ship',
  'shopping-cart': 'shopping-cart',
  'sign-in': 'sign-in',
  'sign-out': 'sign-out',
  'signal': 'signal',
  'sitemap': 'sitemap',
  'sliders': 'sliders',
  'smile-o': 'smile-o',
  'soccer-ball-o': 'soccer-ball-o',
  'sort': 'sort',
  'sort-alpha-asc': 'sort-alpha-asc',
  'sort-alpha-desc': 'sort-alpha-desc',
  'sort-amount-asc': 'sort-amount-asc',
  'sort-amount-desc': 'sort-amount-desc',
  'sort-asc': 'sort-asc',
  'sort-desc': 'sort-desc',
  'sort-down': 'sort-down',
  'sort-numeric-asc': 'sort-numeric-asc',
  'sort-numeric-desc': 'sort-numeric-desc',
  'sort-up': 'sort-up',
  'space-shuttle': 'space-shuttle',
  'spinner': 'spinner',
  'spoon': 'spoon',
  'square': 'square',
  'square-o': 'square-o',
  'star': 'star',
  'star-half': 'star-half',
  'star-half-empty': 'star-half-empty',
  'star-half-full': 'star-half-full',
  'star-half-o': 'star-half-o',
  'star-o': 'star-o',
  'sticky-note': 'sticky-note',
  'sticky-note-o': 'sticky-note-o',
  'street-view': 'street-view',
  'suitcase': 'suitcase',
  'sun-o': 'sun-o',
  'support': 'support',
  'tablet': 'tablet',
  'tachometer': 'tachometer',
  'tag': 'tag',
  'tags': 'tags',
  'tasks': 'tasks',
  'taxi': 'taxi',
  'television': 'television',
  'terminal': 'terminal',
  'thumb-tack': 'thumb-tack',
  'thumbs-down': 'thumbs-down',
  'thumbs-o-down': 'thumbs-o-down',
  'thumbs-o-up': 'thumbs-o-up',
  'thumbs-up': 'thumbs-up',
  'ticket': 'ticket',
  'times': 'times',
  'times-circle': 'times-circle',
  'times-circle-o': 'times-circle-o',
  'tint': 'tint',
  'toggle-down': 'toggle-down',
  'toggle-left': 'toggle-left',
  'toggle-off': 'toggle-off',
  'toggle-on': 'toggle-on',
  'toggle-right': 'toggle-right',
  'toggle-up': 'toggle-up',
  'trademark': 'trademark',
  'trash': 'trash',
  'trash-o': 'trash-o',
  'tree': 'tree',
  'trophy': 'trophy',
  'truck': 'truck',
  'tty': 'tty',
  'tv': 'tv',
  'umbrella': 'umbrella',
  'university': 'university',
  'unlock': 'unlock',
  'unlock-alt': 'unlock-alt',
  'unsorted': 'unsorted',
  'upload': 'upload',
  'user': 'user',
  'user-plus': 'user-plus',
  'user-secret': 'user-secret',
  'user-times': 'user-times',
  'users': 'users',
  'video-camera': 'video-camera',
  'volume-down': 'volume-down',
  'volume-off': 'volume-off',
  'volume-up': 'volume-up',
  'warning': 'warning',
  'wheelchair': 'wheelchair',
  'wifi': 'wifi',
  'wrench': 'wrench',
  'hand-grab-o': 'hand-grab-o',
  'hand-lizard-o': 'hand-lizard-o',
  'hand-o-down': 'hand-o-down',
  'hand-o-left': 'hand-o-left',
  'hand-o-right': 'hand-o-right',
  'hand-o-up': 'hand-o-up',
  'hand-paper-o': 'hand-paper-o',
  'hand-peace-o': 'hand-peace-o',
  'hand-pointer-o': 'hand-pointer-o',
  'hand-rock-o': 'hand-rock-o',
  'hand-scissors-o': 'hand-scissors-o',
  'hand-spock-o': 'hand-spock-o',
  'hand-stop-o': 'hand-stop-o',
  'thumbs-down': 'thumbs-down',
  'thumbs-o-down': 'thumbs-o-down',
  'thumbs-o-up': 'thumbs-o-up',
  'thumbs-up': 'thumbs-up',
  'ambulance': 'ambulance',
  'automobile': 'automobile',
  'bicycle': 'bicycle',
  'bus': 'bus',
  'cab': 'cab',
  'car': 'car',
  'fighter-jet': 'fighter-jet',
  'motorcycle': 'motorcycle',
  'plane': 'plane',
  'rocket': 'rocket',
  'ship': 'ship',
  'space-shuttle': 'space-shuttle',
  'subway': 'subway',
  'taxi': 'taxi',
  'train': 'train',
  'truck': 'truck',
  'wheelchair': 'wheelchair',
  'genderless': 'genderless',
  'intersex': 'intersex',
  'mars': 'mars',
  'mars-double': 'mars-double',
  'mars-stroke': 'mars-stroke',
  'mars-stroke-h': 'mars-stroke-h',
  'mars-stroke-v': 'mars-stroke-v',
  'mercury': 'mercury',
  'neuter': 'neuter',
  'transgender': 'transgender',
  'transgender-alt': 'transgender-alt',
  'venus': 'venus',
  'venus-double': 'venus-double',
  'venus-mars': 'venus-mars',
  'file': 'file',
  'file-archive-o': 'file-archive-o',
  'file-audio-o': 'file-audio-o',
  'file-code-o': 'file-code-o',
  'file-excel-o': 'file-excel-o',
  'file-image-o': 'file-image-o',
  'file-movie-o': 'file-movie-o',
  'file-o': 'file-o',
  'file-pdf-o': 'file-pdf-o',
  'file-photo-o': 'file-photo-o',
  'file-picture-o': 'file-picture-o',
  'file-powerpoint-o': 'file-powerpoint-o',
  'file-sound-o': 'file-sound-o',
  'file-text': 'file-text',
  'file-text-o': 'file-text-o',
  'file-video-o': 'file-video-o',
  'file-word-o': 'file-word-o',
  'file-zip-o': 'file-zip-o',
  'info-circle': 'info-circle',
  'circle-o-notch': 'circle-o-notch',
  'cog': 'cog',
  'gear': 'gear',
  'refresh': 'refresh',
  'spinner': 'spinner',
  'check-square': 'check-square',
  'check-square-o': 'check-square-o',
  'circle': 'circle',
  'circle-o': 'circle-o',
  'dot-circle-o': 'dot-circle-o',
  'minus-square': 'minus-square',
  'minus-square-o': 'minus-square-o',
  'plus-square': 'plus-square',
  'plus-square-o': 'plus-square-o',
  'square': 'square',
  'square-o': 'square-o',
  'cc-amex': 'cc-amex',
  'cc-diners-club': 'cc-diners-club',
  'cc-discover': 'cc-discover',
  'cc-jcb': 'cc-jcb',
  'cc-mastercard': 'cc-mastercard',
  'cc-paypal': 'cc-paypal',
  'cc-stripe': 'cc-stripe',
  'cc-visa': 'cc-visa',
  'credit-card': 'credit-card',
  'google-wallet': 'google-wallet',
  'paypal': 'paypal',
  'area-chart': 'area-chart',
  'bar-chart': 'bar-chart',
  'bar-chart-o': 'bar-chart-o',
  'line-chart': 'line-chart',
  'pie-chart': 'pie-chart',
  'bitcoin': 'bitcoin',
  'btc': 'btc',
  'cny': 'cny',
  'dollar': 'dollar',
  'eur': 'eur',
  'euro': 'euro',
  'gbp': 'gbp',
  'gg': 'gg',
  'gg-circle': 'gg-circle',
  'ils': 'ils',
  'inr': 'inr',
  'jpy': 'jpy',
  'krw': 'krw',
  'money': 'money',
  'rmb': 'rmb',
  'rouble': 'rouble',
  'rub': 'rub',
  'ruble': 'ruble',
  'rupee': 'rupee',
  'shekel': 'shekel',
  'sheqel': 'sheqel',
  'try': 'try',
  'turkish-lira': 'turkish-lira',
  'usd': 'usd',
  'won': 'won',
  'yen': 'yen',
  'align-center': 'align-center',
  'align-justify': 'align-justify',
  'align-left': 'align-left',
  'align-right': 'align-right',
  'bold': 'bold',
  'chain': 'chain',
  'chain-broken': 'chain-broken',
  'clipboard': 'clipboard',
  'columns': 'columns',
  'copy': 'copy',
  'cut': 'cut',
  'dedent': 'dedent',
  'eraser': 'eraser',
  'file': 'file',
  'file-o': 'file-o',
  'file-text': 'file-text',
  'file-text-o': 'file-text-o',
  'files-o': 'files-o',
  'floppy-o': 'floppy-o',
  'font': 'font',
  'header': 'header',
  'indent': 'indent',
  'italic': 'italic',
  'link': 'link',
  'list': 'list',
  'list-alt': 'list-alt',
  'list-ol': 'list-ol',
  'list-ul': 'list-ul',
  'outdent': 'outdent',
  'paperclip': 'paperclip',
  'paragraph': 'paragraph',
  'paste': 'paste',
  'repeat': 'repeat',
  'rotate-left': 'rotate-left',
  'rotate-right': 'rotate-right',
  'save': 'save',
  'scissors': 'scissors',
  'strikethrough': 'strikethrough',
  'subscript': 'subscript',
  'superscript': 'superscript',
  'table': 'table',
  'text-height': 'text-height',
  'text-width': 'text-width',
  'th': 'th',
  'th-large': 'th-large',
  'th-list': 'th-list',
  'underline': 'underline',
  'undo': 'undo',
  'unlink': 'unlink',
  'angle-double-down': 'angle-double-down',
  'angle-double-left': 'angle-double-left',
  'angle-double-right': 'angle-double-right',
  'angle-double-up': 'angle-double-up',
  'angle-down': 'angle-down',
  'angle-left': 'angle-left',
  'angle-right': 'angle-right',
  'angle-up': 'angle-up',
  'arrow-circle-down': 'arrow-circle-down',
  'arrow-circle-left': 'arrow-circle-left',
  'arrow-circle-o-down': 'arrow-circle-o-down',
  'arrow-circle-o-left': 'arrow-circle-o-left',
  'arrow-circle-o-right': 'arrow-circle-o-right',
  'arrow-circle-o-up': 'arrow-circle-o-up',
  'arrow-circle-right': 'arrow-circle-right',
  'arrow-circle-up': 'arrow-circle-up',
  'arrow-down': 'arrow-down',
  'arrow-left': 'arrow-left',
  'arrow-right': 'arrow-right',
  'arrow-up': 'arrow-up',
  'arrows': 'arrows',
  'arrows-alt': 'arrows-alt',
  'arrows-h': 'arrows-h',
  'arrows-v': 'arrows-v',
  'caret-down': 'caret-down',
  'caret-left': 'caret-left',
  'caret-right': 'caret-right',
  'caret-square-o-down': 'caret-square-o-down',
  'caret-square-o-left': 'caret-square-o-left',
  'caret-square-o-right': 'caret-square-o-right',
  'caret-square-o-up': 'caret-square-o-up',
  'caret-up': 'caret-up',
  'chevron-circle-down': 'chevron-circle-down',
  'chevron-circle-left': 'chevron-circle-left',
  'chevron-circle-right': 'chevron-circle-right',
  'chevron-circle-up': 'chevron-circle-up',
  'chevron-down': 'chevron-down',
  'chevron-left': 'chevron-left',
  'chevron-right': 'chevron-right',
  'chevron-up': 'chevron-up',
  'exchange': 'exchange',
  'hand-o-down': 'hand-o-down',
  'hand-o-left': 'hand-o-left',
  'hand-o-right': 'hand-o-right',
  'hand-o-up': 'hand-o-up',
  'long-arrow-down': 'long-arrow-down',
  'long-arrow-left': 'long-arrow-left',
  'long-arrow-right': 'long-arrow-right',
  'long-arrow-up': 'long-arrow-up',
  'toggle-down': 'toggle-down',
  'toggle-left': 'toggle-left',
  'toggle-right': 'toggle-right',
  'toggle-up': 'toggle-up',
  'arrows-alt': 'arrows-alt',
  'backward': 'backward',
  'compress': 'compress',
  'eject': 'eject',
  'expand': 'expand',
  'fast-backward': 'fast-backward',
  'fast-forward': 'fast-forward',
  'forward': 'forward',
  'pause': 'pause',
  'play': 'play',
  'play-circle': 'play-circle',
  'play-circle-o': 'play-circle-o',
  'random': 'random',
  'step-backward': 'step-backward',
  'step-forward': 'step-forward',
  'stop': 'stop',
  'youtube-play': 'youtube-play',
  'warning': 'warning',
  '500px': '500px',
  'adn': 'adn',
  'amazon': 'amazon',
  'android': 'android',
  'angellist': 'angellist',
  'apple': 'apple',
  'behance': 'behance',
  'behance-square': 'behance-square',
  'bitbucket': 'bitbucket',
  'bitbucket-square': 'bitbucket-square',
  'bitcoin': 'bitcoin',
  'black-tie': 'black-tie',
  'btc': 'btc',
  'buysellads': 'buysellads',
  'cc-amex': 'cc-amex',
  'cc-diners-club': 'cc-diners-club',
  'cc-discover': 'cc-discover',
  'cc-jcb': 'cc-jcb',
  'cc-mastercard': 'cc-mastercard',
  'cc-paypal': 'cc-paypal',
  'cc-stripe': 'cc-stripe',
  'cc-visa': 'cc-visa',
  'chrome': 'chrome',
  'codepen': 'codepen',
  'connectdevelop': 'connectdevelop',
  'contao': 'contao',
  'css3': 'css3',
  'dashcube': 'dashcube',
  'delicious': 'delicious',
  'deviantart': 'deviantart',
  'digg': 'digg',
  'dribbble': 'dribbble',
  'dropbox': 'dropbox',
  'drupal': 'drupal',
  'empire': 'empire',
  'expeditedssl': 'expeditedssl',
  'facebook': 'facebook',
  'facebook-f': 'facebook-f',
  'facebook-official': 'facebook-official',
  'facebook-square': 'facebook-square',
  'firefox': 'firefox',
  'flickr': 'flickr',
  'fonticons': 'fonticons',
  'forumbee': 'forumbee',
  'foursquare': 'foursquare',
  'ge': 'ge',
  'get-pocket': 'get-pocket',
  'gg': 'gg',
  'gg-circle': 'gg-circle',
  'git': 'git',
  'git-square': 'git-square',
  'github': 'github',
  'github-alt': 'github-alt',
  'github-square': 'github-square',
  'gittip': 'gittip',
  'google': 'google',
  'google-plus': 'google-plus',
  'google-plus-square': 'google-plus-square',
  'google-wallet': 'google-wallet',
  'gratipay': 'gratipay',
  'hacker-news': 'hacker-news',
  'houzz': 'houzz',
  'html5': 'html5',
  'instagram': 'instagram',
  'internet-explorer': 'internet-explorer',
  'ioxhost': 'ioxhost',
  'joomla': 'joomla',
  'jsfiddle': 'jsfiddle',
  'lastfm': 'lastfm',
  'lastfm-square': 'lastfm-square',
  'leanpub': 'leanpub',
  'linkedin': 'linkedin',
  'linkedin-square': 'linkedin-square',
  'linux': 'linux',
  'maxcdn': 'maxcdn',
  'meanpath': 'meanpath',
  'medium': 'medium',
  'odnoklassniki': 'odnoklassniki',
  'odnoklassniki-square': 'odnoklassniki-square',
  'opencart': 'opencart',
  'openid': 'openid',
  'opera': 'opera',
  'optin-monster': 'optin-monster',
  'pagelines': 'pagelines',
  'paypal': 'paypal',
  'pied-piper': 'pied-piper',
  'pied-piper-alt': 'pied-piper-alt',
  'pinterest': 'pinterest',
  'pinterest-p': 'pinterest-p',
  'pinterest-square': 'pinterest-square',
  'qq': 'qq',
  'ra': 'ra',
  'rebel': 'rebel',
  'reddit': 'reddit',
  'reddit-square': 'reddit-square',
  'renren': 'renren',
  'safari': 'safari',
  'sellsy': 'sellsy',
  'share-alt': 'share-alt',
  'share-alt-square': 'share-alt-square',
  'shirtsinbulk': 'shirtsinbulk',
  'simplybuilt': 'simplybuilt',
  'skyatlas': 'skyatlas',
  'skype': 'skype',
  'slack': 'slack',
  'slideshare': 'slideshare',
  'soundcloud': 'soundcloud',
  'spotify': 'spotify',
  'stack-exchange': 'stack-exchange',
  'stack-overflow': 'stack-overflow',
  'steam': 'steam',
  'steam-square': 'steam-square',
  'stumbleupon': 'stumbleupon',
  'stumbleupon-circle': 'stumbleupon-circle',
  'tencent-weibo': 'tencent-weibo',
  'trello': 'trello',
  'tripadvisor': 'tripadvisor',
  'tumblr': 'tumblr',
  'tumblr-square': 'tumblr-square',
  'twitch': 'twitch',
  'twitter': 'twitter',
  'twitter-square': 'twitter-square',
  'viacoin': 'viacoin',
  'vimeo': 'vimeo',
  'vimeo-square': 'vimeo-square',
  'vine': 'vine',
  'vk': 'vk',
  'wechat': 'wechat',
  'weibo': 'weibo',
  'weixin': 'weixin',
  'whatsapp': 'whatsapp',
  'wikipedia-w': 'wikipedia-w',
  'windows': 'windows',
  'wordpress': 'wordpress',
  'xing': 'xing',
  'xing-square': 'xing-square',
  'y-combinator': 'y-combinator',
  'y-combinator-square': 'y-combinator-square',
  'yahoo': 'yahoo',
  'yc': 'yc',
  'yc-square': 'yc-square',
  'yelp': 'yelp',
  'youtube': 'youtube',
  'youtube-play': 'youtube-play',
  'youtube-square': 'youtube-square',
  'ambulance': 'ambulance',
  'h-square': 'h-square',
  'heart': 'heart',
  'heart-o': 'heart-o',
  'heartbeat': 'heartbeat',
  'hospital-o': 'hospital-o',
  'medkit': 'medkit',
  'plus-square': 'plus-square',
  'stethoscope': 'stethoscope',
  'user-md': 'user-md',
  'wheelchair': 'wheelchair',
  // custom icon mapping
  'script': 'wrench',
  'hw': 'desktop',
  'hp': 'desktop',
  'integration': 'cogs'  
}