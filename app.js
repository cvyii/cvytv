/* CvyTV Family Edition v2.1
   Direct stream URLs are intentionally blank until permission and device playback are verified.
*/
(function () {
  'use strict';

  var channels = [
    { id: 'rudaw', name: 'Rudaw', category: 'Kurdish', short: 'R', officialPage: 'https://rudaw.net/english/live-tv', pageKind: 'watch' },
    { id: 'k24', name: 'Kurdistan 24', category: 'Kurdish', short: 'K24', officialPage: 'https://www.kurdistan24.net/en/live_tv', pageKind: 'watch' },
    { id: 'kurdistan-tv', name: 'Kurdistan TV', category: 'Kurdish', short: 'KTV', officialPage: 'https://www.kurdistantv.net/english/live', pageKind: 'watch' },
    { id: 'nrt', name: 'NRT', category: 'Kurdish', short: 'NRT', officialPage: 'https://www.nrttv.com/', pageKind: 'website' },
    { id: 'channel8', name: 'Channel 8', category: 'Kurdish', short: 'C8', officialPage: 'https://channel8.com/', pageKind: 'website' },
    { id: 'speda', name: 'Speda TV', category: 'Kurdish', short: 'S', pageKind: 'pending' },
    { id: 'kurdsat', name: 'Kurdsat', category: 'Kurdish', short: 'KS', pageKind: 'pending' },
    { id: 'iraqiya', name: 'Al Iraqiya', category: 'Iraqi', short: 'IQ', officialPage: 'https://imn.iq/en/channels', pageKind: 'website' },
    { id: 'sharqiya', name: 'Al Sharqiya', category: 'Iraqi', short: 'SH', officialPage: 'https://www.alsharqiya.com/', pageKind: 'website' },
    { id: 'sumaria', name: 'Al Sumaria', category: 'Iraqi', short: 'SUM', officialPage: 'https://www.alsumaria.tv/', pageKind: 'website' },
    { id: 'utv', name: 'UTV Iraq', category: 'Iraqi', short: 'UTV', officialPage: 'https://utviraq.net/', pageKind: 'website' },
    { id: 'mbc-iraq', name: 'MBC Iraq', category: 'Iraqi', short: 'MBC', officialPage: 'https://www.mbc.net/', pageKind: 'website' },
    { id: 'aljazeera-ar', name: 'Al Jazeera Arabic', category: 'Arab', short: 'AJ', officialPage: 'https://www.aljazeera.net/video/live', pageKind: 'watch' },
    { id: 'alarabiya', name: 'Al Arabiya', category: 'Arab', short: 'AR', officialPage: 'https://shahid.mbc.net/en/livestream/Al-Arabiya/livechannel-387286', pageKind: 'watch' },
    { id: 'sky-arabia', name: 'Sky News Arabia', category: 'Arab', short: 'SNA', officialPage: 'https://www.skynewsarabia.com/', pageKind: 'website' },
    { id: 'aljazeera-en', name: 'Al Jazeera English', category: 'International', short: 'AJE', officialPage: 'https://www.aljazeera.com/', pageKind: 'website' },
    { id: 'dw-news', name: 'DW News', category: 'International', short: 'DW', officialPage: 'https://www.dw.com/', pageKind: 'website' },
    { id: 'france24', name: 'France 24', category: 'International', short: 'F24', officialPage: 'https://www.france24.com/en/', pageKind: 'website' }
  ];

  // Add a streamUrl only when the broadcaster authorizes direct use and it has been tested on the target TV.
  // Example: streamUrl: 'https://authorized.example/live.m3u8', streamType: 'hls'

  var words = {
    en: {
      eyebrow: 'YOUR LOCAL TV HUB', heroTitle: 'Kurdish, Iraqi & world channels', heroSubtitle: 'Your channels, in one place.',
      home: 'Home', favorites: 'Favorites', recent: 'Recently watched', search: 'Search channels...',
      all: 'All channels', Kurdish: 'Kurdish', Iraqi: 'Iraqi', Arab: 'Arab', International: 'International',
      list: 'Explore channels', remote: 'Use the arrow keys and OK on your TV remote', noResults: 'No channels found. Try another search or category.',
      officialWatch: 'Official watch page', officialWebsite: 'Official website', pending: 'Official link not added',
      noStreamTitle: 'Direct playback is not configured', noStreamBody: 'No authorized direct stream has been added for this channel. You can visit its official page instead.',
      openOfficial: 'Open official page', close: 'Close', player: 'CvyTV Player', live: '● LIVE', channelLabel: 'CHANNEL',
      playerReady: 'Ready when an authorized stream is added.', pressPlay: 'Stream loaded. Press Play on the video controls.', opening: 'The official broadcaster page is available. Select Open official page to visit it.',
      unsupported: 'This TV browser does not report native HLS support, and no compatible HLS playback library is installed.',
      playError: 'The TV browser could not start this stream. Check the URL, rights, network, and supported format.',
      videoError: 'The video could not be played. The stream may be offline, blocked, or incompatible.',
      deviceTest: 'Device test', deviceIntro: 'These values come from this browser. They do not confirm the exact TV model or VIDAA version.',
      device: 'Device / browser', resolution: 'Screen size', nativeHls: 'Native HLS support', mse: 'Media Source Extensions', hlsjs: 'Hls.js library', storage: 'Local storage',
      footer: 'A channel name does not mean direct playback is available. Use only official pages or streams you are authorized to distribute.',
      version: 'CvyTV test build v2.1', pageKindWatch: 'Official watch page', pageKindWebsite: 'Official website', pageKindPending: 'No official page added yet'
    },
    ku: {
      eyebrow: 'تەماشای تەلەفزیۆن لە یەک شوێن', heroTitle: 'کەناڵە کوردی، عێراقی و جیهانییەکان', heroSubtitle: 'کەناڵەکانت لە یەک شوێن.',
      home: 'سەرەکی', favorites: 'دڵخوازەکان', recent: 'بینراوەکان', search: 'گەڕان بۆ کەناڵ...',
      all: 'هەموو کەناڵەکان', Kurdish: 'کوردی', Iraqi: 'عێراقی', Arab: 'عەرەبی', International: 'نێودەوڵەتی',
      list: 'کەناڵەکان', remote: 'بە دوگمەکانی تیر و OK بگەڕێ', noResults: 'هیچ کەناڵێک نەدۆزرایەوە. وشەیەکی تر تاقی بکەرەوە.',
      officialWatch: 'پەڕەی بینینی فەرمی', officialWebsite: 'ماڵپەڕی فەرمی', pending: 'لینکی فەرمی زیاد نەکراوە',
      noStreamTitle: 'پەخشی ڕاستەوخۆ ڕێک نەخراوە', noStreamBody: 'هیچ لینکی ڕاستەوخۆی ڕێگەپێدراو بۆ ئەم کەناڵە زیاد نەکراوە. دەتوانیت پەڕەی فەرمییەکەی بکەیتەوە.',
      openOfficial: 'کردنەوەی پەڕەی فەرمی', close: 'داخستن', player: 'یاریزانی CvyTV', live: '● ڕاستەوخۆ', channelLabel: 'کەناڵ',
      playerReady: 'کاتێک لینکی ڕێگەپێدراو زیاد بکرێت ئامادە دەبێت.', pressPlay: 'پەخش بارکرا. لە کۆنترۆڵی ڤیدیۆ دوگمەی Play دابگرە.', opening: 'پەڕەی فەرمیی کەناڵ بەردەستە. دوگمەی کردنەوەی پەڕەی فەرمی هەڵبژێرە.',
      unsupported: 'وێبگەڕی ئەم تەلەفزیۆنە پشتگیری HLSی سروشتی نیشان نادات و هیچ کتێبخانەیەکی گونجاوی HLS دانەمەزراوە.',
      playError: 'وێبگەڕی تەلەفزیۆن نەیتوانی ئەم پەخشە دەست پێ بکات. لینک، مۆڵەت، ئینتەرنێت و جۆری فایل بپشکنە.',
      videoError: 'ڤیدیۆکە نەیتوانی پەخش بکرێت. لەوانەیە پەخشەکە وەستابێت یان گونجاو نەبێت.',
      deviceTest: 'تاقیکردنەوەی ئامێر', deviceIntro: 'ئەم زانیارییانە لە وێبگەڕەکەوە وەرگیراون. مۆدێل یان وەشانی VIDAA پشتڕاست ناکەنەوە.',
      device: 'ئامێر / وێبگەڕ', resolution: 'قەبارەی شاشە', nativeHls: 'پشتگیری HLSی سروشتی', mse: 'Media Source Extensions', hlsjs: 'کتێبخانەی Hls.js', storage: 'بیرگەی ناوخۆیی',
      footer: 'ناوی کەناڵ بە مانای بەردەستبوونی پەخشی ڕاستەوخۆ نییە. تەنها پەڕەی فەرمی یان لینکی ڕێگەپێدراو بەکاربهێنە.',
      version: 'وەشانی تاقیکردنەوەی CvyTV ٢.١', pageKindWatch: 'پەڕەی بینینی فەرمی', pageKindWebsite: 'ماڵپەڕی فەرمی', pageKindPending: 'هێشتا پەڕەی فەرمی نییە'
    },
    ar: {
      eyebrow: 'منصة التلفزيون المحلية', heroTitle: 'قنوات كردية وعراقية وعالمية', heroSubtitle: 'قنواتك في مكان واحد.',
      home: 'الرئيسية', favorites: 'المفضلة', recent: 'المشاهدة مؤخراً', search: 'ابحث عن القنوات...',
      all: 'كل القنوات', Kurdish: 'كردية', Iraqi: 'عراقية', Arab: 'عربية', International: 'عالمية',
      list: 'استكشف القنوات', remote: 'استخدم الأسهم وزر OK في جهاز التحكم', noResults: 'لم يتم العثور على قنوات. جرّب بحثاً أو فئة أخرى.',
      officialWatch: 'صفحة المشاهدة الرسمية', officialWebsite: 'الموقع الرسمي', pending: 'لم تتم إضافة رابط رسمي',
      noStreamTitle: 'التشغيل المباشر غير مهيأ', noStreamBody: 'لم تتم إضافة بث مباشر مصرح به لهذه القناة. يمكنك فتح صفحتها الرسمية بدلاً من ذلك.',
      openOfficial: 'فتح الصفحة الرسمية', close: 'إغلاق', player: 'مشغل CvyTV', live: '● مباشر', channelLabel: 'قناة',
      playerReady: 'سيكون جاهزاً عند إضافة بث مصرح به.', pressPlay: 'تم تحميل البث. اضغط Play من أدوات التحكم بالفيديو.', opening: 'الصفحة الرسمية متاحة. اختر فتح الصفحة الرسمية لزيارتها.',
      unsupported: 'متصفح التلفزيون لا يعلن عن دعم HLS الأصلي، ولا توجد مكتبة HLS متوافقة مثبتة.',
      playError: 'تعذر على متصفح التلفزيون تشغيل البث. تحقق من الرابط والحقوق والشبكة والتنسيق المدعوم.',
      videoError: 'تعذر تشغيل الفيديو. قد يكون البث متوقفاً أو محجوباً أو غير متوافق.',
      deviceTest: 'فحص الجهاز', deviceIntro: 'هذه المعلومات من المتصفح الحالي ولا تؤكد طراز التلفزيون أو إصدار VIDAA.',
      device: 'الجهاز / المتصفح', resolution: 'حجم الشاشة', nativeHls: 'دعم HLS الأصلي', mse: 'Media Source Extensions', hlsjs: 'مكتبة Hls.js', storage: 'التخزين المحلي',
      footer: 'وجود اسم القناة لا يعني توفر بث مباشر. استخدم الصفحات الرسمية أو البث الذي تملك إذناً بتوزيعه فقط.',
      version: 'نسخة CvyTV التجريبية 2.1', pageKindWatch: 'صفحة مشاهدة رسمية', pageKindWebsite: 'موقع رسمي', pageKindPending: 'لم تتم إضافة صفحة رسمية'
    }
  };

  var categoryOrder = ['Kurdish', 'Iraqi', 'Arab', 'International'];
  var category = 'All';
  var view = 'all';
  var selectedChannel = null;
  var hlsInstance = null;
  var video = document.getElementById('video');
  var grid = document.getElementById('grid');
  var search = document.getElementById('search');
  var languageSelect = document.getElementById('language');
  var player = document.getElementById('player');
  var playerMessage = document.getElementById('playerMessage');
  var playerStatus = document.getElementById('playerStatus');
  var officialPageButton = document.getElementById('officialPageButton');
  var currentLanguage = safeRead('cvytv-language', 'ku');
  if (!words[currentLanguage]) currentLanguage = 'ku';

  function safeRead(key, fallback) {
    try {
      var value = localStorage.getItem(key);
      return value === null ? fallback : value;
    } catch (error) { return fallback; }
  }
  function safeWrite(key, value) {
    try { localStorage.setItem(key, value); return true; }
    catch (error) { return false; }
  }
  function readArray(key) {
    try {
      var value = JSON.parse(safeRead(key, '[]'));
      return Array.isArray(value) ? value : [];
    } catch (error) { return []; }
  }
  var favorites = readArray('cvytv-favorites');
  var recent = readArray('cvytv-recent');

  function t(key) { return words[currentLanguage][key] || words.en[key] || key; }
  function categoryText(name) { return name === 'All' ? t('all') : t(name); }
  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }
  function applyLanguage() {
    var rtl = currentLanguage !== 'en';
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    languageSelect.value = currentLanguage;
    setText('eyebrow', t('eyebrow'));
    setText('heroTitle', t('heroTitle'));
    setText('heroSubtitle', t('heroSubtitle'));
    setText('homeButton', t('home'));
    document.querySelector('[data-view="favorites"]').textContent = t('favorites');
    document.querySelector('[data-view="recent"]').textContent = t('recent');
    search.placeholder = t('search');
    search.setAttribute('aria-label', t('search'));
    setText('remoteHint', t('remote'));
    setText('deviceInfoButton', t('deviceTest'));
    setText('deviceTitle', t('deviceTest'));
    setText('deviceIntro', t('deviceIntro'));
    setText('footerText', t('footer'));
    setText('footerHint', t('version'));
    setText('liveLabel', t('channelLabel'));
    setText('closePlayer', t('close'));
    setText('closeDevicePanel', t('close'));
    renderFilters();
    render();
  }

  function renderFilters() {
    var filters = document.getElementById('filters');
    filters.innerHTML = '';
    var all = ['All'].concat(categoryOrder);
    all.forEach(function (name) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'chip' + (category === name ? ' selected' : '');
      button.textContent = categoryText(name);
      button.setAttribute('data-category', name);
      button.setAttribute('data-focusable', 'true');
      button.setAttribute('aria-pressed', category === name ? 'true' : 'false');
      filters.appendChild(button);
    });
  }

  function visibleChannels() {
    var q = search.value.trim().toLowerCase();
    return channels.filter(function (channel) {
      var categoryMatch = category === 'All' || channel.category === category;
      var viewMatch = view === 'favorites' ? favorites.indexOf(channel.id) !== -1 :
        view === 'recent' ? recent.indexOf(channel.id) !== -1 : true;
      var queryMatch = !q || channel.name.toLowerCase().indexOf(q) !== -1 || channel.category.toLowerCase().indexOf(q) !== -1;
      return categoryMatch && viewMatch && queryMatch;
    });
  }

  function render() {
    var focusedId = document.activeElement && document.activeElement.id;
    var list = visibleChannels();
    grid.innerHTML = '';
    document.getElementById('empty').hidden = list.length > 0;
    setText('listTitle', view === 'favorites' ? t('favorites') : view === 'recent' ? t('recent') : t('list'));

    list.forEach(function (channel) {
      var card = document.createElement('article');
      card.id = 'channel-' + channel.id;
      card.className = 'channel';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('data-focusable', 'true');
      card.setAttribute('aria-label', channel.name + ', ' + categoryText(channel.category));

      var logo = document.createElement('div');
      logo.className = 'logo-box';
      logo.textContent = channel.short;

      var copy = document.createElement('div');
      copy.className = 'channel-copy';
      var title = document.createElement('h3');
      title.textContent = channel.name;
      var subtitle = document.createElement('small');
      subtitle.textContent = categoryText(channel.category);
      var status = document.createElement('div');
      status.className = 'channel-status';
      status.textContent = channel.officialPage ? (channel.pageKind === 'watch' ? t('officialWatch') : t('officialWebsite')) : t('pending');
      copy.appendChild(title);
      copy.appendChild(subtitle);
      copy.appendChild(document.createElement('br'));
      copy.appendChild(status);

      var star = document.createElement('button');
      star.id = 'favorite-' + channel.id;
      star.type = 'button';
      star.className = 'favorite-button' + (favorites.indexOf(channel.id) !== -1 ? ' on' : '');
      star.textContent = '★';
      star.setAttribute('data-focusable', 'true');
      star.setAttribute('aria-label', favorites.indexOf(channel.id) !== -1 ? 'Remove ' + channel.name + ' from favorites' : 'Add ' + channel.name + ' to favorites');
      star.setAttribute('aria-pressed', favorites.indexOf(channel.id) !== -1 ? 'true' : 'false');
      star.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleFavorite(channel.id);
      });

      card.appendChild(logo);
      card.appendChild(copy);
      card.appendChild(star);
      card.addEventListener('click', function (event) {
        if (event.target === star) return;
        openChannel(channel);
      });
      card.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openChannel(channel);
        }
      });
      grid.appendChild(card);
    });

    if (focusedId) {
      var previous = document.getElementById(focusedId);
      if (previous && typeof previous.focus === 'function') previous.focus();
    }
    updateNavState();
  }

  function updateNavState() {
    Array.prototype.forEach.call(document.querySelectorAll('.nav-button'), function (button) {
      var active = button.getAttribute('data-view') === view;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function toggleFavorite(id) {
    var index = favorites.indexOf(id);
    if (index === -1) favorites.push(id); else favorites.splice(index, 1);
    safeWrite('cvytv-favorites', JSON.stringify(favorites));
    render();
  }

  function addRecent(id) {
    recent = [id].concat(recent.filter(function (item) { return item !== id; })).slice(0, 20);
    safeWrite('cvytv-recent', JSON.stringify(recent));
  }

  function setPlayerMessage(title, body) {
    video.hidden = true;
    playerMessage.hidden = false;
    setText('playerMessageTitle', title);
    setText('playerMessageBody', body);
  }

  function destroyPlayer() {
    if (hlsInstance) {
      try { hlsInstance.destroy(); } catch (error) { /* ignore cleanup error */ }
      hlsInstance = null;
    }
    try { video.pause(); } catch (error) { /* ignore */ }
    video.removeAttribute('src');
    try { video.load(); } catch (error) { /* ignore */ }
    video.hidden = true;
  }

  function openChannel(channel) {
    selectedChannel = channel;
    addRecent(channel.id);
    setText('playingName', channel.name);
    setText('liveLabel', t('channelLabel'));
    player.hidden = false;
    officialPageButton.hidden = !channel.officialPage;
    officialPageButton.textContent = t('openOfficial');
    destroyPlayer();

    if (channel.streamUrl) {
      startStream(channel);
    } else {
      setPlayerMessage(t('noStreamTitle'), t('noStreamBody'));
      playerStatus.textContent = channel.officialPage ? t('opening') : t('playerReady');
    }
    try { player.scrollIntoView(false); } catch (error) { /* ignore */ }
    document.getElementById('closePlayer').focus();
  }

  function attemptVideoPlay() {
    var result;
    try { result = video.play(); }
    catch (error) { playerStatus.textContent = t('playError'); return; }
    if (result && typeof result.then === 'function') {
      result.then(function () { playerStatus.textContent = ''; }, function () { playerStatus.textContent = t('playError'); });
    }
  }

  function startStream(channel) {
    var url = channel.streamUrl;
    var isHls = channel.streamType === 'hls' || /\.m3u8($|\?)/i.test(url);
    playerMessage.hidden = true;
    video.hidden = false;
    playerStatus.textContent = '';

    if (isHls && video.canPlayType && (video.canPlayType('application/vnd.apple.mpegurl') || video.canPlayType('application/x-mpegURL'))) {
      video.src = url;
      attemptVideoPlay();
    } else if (isHls && window.Hls && window.Hls.isSupported && window.Hls.isSupported()) {
      try {
        hlsInstance = new window.Hls({ enableWorker: false });
        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () { playerStatus.textContent = t('pressPlay'); });
        hlsInstance.on(window.Hls.Events.ERROR, function (event, data) {
          if (data && data.fatal) {
            destroyPlayer();
            setPlayerMessage(t('noStreamTitle'), t('videoError'));
            playerStatus.textContent = t('videoError');
          }
        });
        hlsInstance.loadSource(url);
        hlsInstance.attachMedia(video);
      } catch (error) {
        setPlayerMessage(t('noStreamTitle'), t('unsupported'));
        return;
      }
    } else if (isHls) {
      setPlayerMessage(t('noStreamTitle'), t('unsupported'));
      return;
    } else {
      video.src = url;
      attemptVideoPlay();
    }
  }

  function closePlayer() {
    destroyPlayer();
    player.hidden = true;
    selectedChannel = null;
  }

  function openOfficialPage() {
    if (!selectedChannel || !selectedChannel.officialPage) return;
    // Same-tab navigation is more reliable on TV browsers than pop-up windows.
    window.location.href = selectedChannel.officialPage;
  }

  function deviceDiagnostics() {
    var nativeHls = 'No';
    try {
      nativeHls = (video.canPlayType('application/vnd.apple.mpegurl') || video.canPlayType('application/x-mpegURL')) || 'No';
    } catch (error) { nativeHls = 'Unavailable'; }
    var storage = 'Unavailable';
    try { localStorage.setItem('cvytv-test', '1'); localStorage.removeItem('cvytv-test'); storage = 'Available'; }
    catch (error) { storage = 'Blocked'; }
    var items = [
      [t('device'), navigator.userAgent || 'Unknown'],
      [t('resolution'), (window.screen && screen.width ? screen.width + ' × ' + screen.height : 'Unknown')],
      [t('nativeHls'), nativeHls],
      [t('mse'), !!(window.MediaSource || window.WebKitMediaSource) ? 'Available' : 'Not detected'],
      [t('hlsjs'), window.Hls ? 'Loaded' : 'Not loaded'],
      [t('storage'), storage]
    ];
    var box = document.getElementById('diagnostics');
    box.innerHTML = '';
    items.forEach(function (item) {
      var row = document.createElement('div');
      row.className = 'diagnostic';
      var label = document.createElement('b');
      label.textContent = item[0];
      var value = document.createElement('span');
      value.textContent = String(item[1]);
      row.appendChild(label);
      row.appendChild(value);
      box.appendChild(row);
    });
  }

  function focusableElements() {
    return Array.prototype.slice.call(document.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href], video[controls], [tabindex="0"]')).filter(function (el) {
      if (el.hidden) return false;
      var rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });
  }

  function moveFocus(direction) {
    var current = document.activeElement;
    var list = focusableElements();
    if (!list.length) return;
    if (!current || current === document.body || list.indexOf(current) === -1) {
      list[0].focus();
      return;
    }
    var rect = current.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    var best = null;
    var bestScore = Infinity;
    list.forEach(function (candidate) {
      if (candidate === current) return;
      var r = candidate.getBoundingClientRect();
      var x = r.left + r.width / 2;
      var y = r.top + r.height / 2;
      var primary = 0;
      var cross = 0;
      if (direction === 'right' && x > cx + 4) { primary = x - cx; cross = Math.abs(y - cy); }
      else if (direction === 'left' && x < cx - 4) { primary = cx - x; cross = Math.abs(y - cy); }
      else if (direction === 'down' && y > cy + 4) { primary = y - cy; cross = Math.abs(x - cx); }
      else if (direction === 'up' && y < cy - 4) { primary = cy - y; cross = Math.abs(x - cx); }
      else return;
      var score = primary + cross * 1.65;
      if (score < bestScore) { bestScore = score; best = candidate; }
    });
    if (best) best.focus();
  }

  function handleRemoteKey(event) {
    var key = event.key || '';
    var code = event.keyCode || event.which || 0;
    var back = key === 'Escape' || key === 'Backspace' || code === 8 || code === 27 || code === 461 || code === 10009;

    if (back) {
      if (!player.hidden) { event.preventDefault(); closePlayer(); document.getElementById('homeButton').focus(); return; }
      if (!document.getElementById('devicePanel').hidden) { event.preventDefault(); document.getElementById('devicePanel').hidden = true; document.getElementById('deviceInfoButton').focus(); return; }
      if (view !== 'all') { event.preventDefault(); view = 'all'; category = 'All'; search.value = ''; renderFilters(); render(); document.getElementById('homeButton').focus(); return; }
      if (document.activeElement === search) { search.blur(); return; }
    }

    if (!player.hidden && key === 'MediaPlayPause') {
      event.preventDefault();
      if (video.paused) attemptVideoPlay(); else video.pause();
      return;
    }
    if (!player.hidden && key === 'MediaPlay') { event.preventDefault(); attemptVideoPlay(); return; }
    if (!player.hidden && key === 'MediaPause') { event.preventDefault(); video.pause(); return; }
    if (!player.hidden && key === 'MediaStop') { event.preventDefault(); closePlayer(); return; }

    if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].indexOf(key) === -1) {
      if (code >= 37 && code <= 40) key = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'][code - 37];
      else return;
    }
    if (document.activeElement === video) return;
    if (document.activeElement === languageSelect) return;
    if (document.activeElement === search && (key === 'ArrowLeft' || key === 'ArrowRight')) return;
    event.preventDefault();
    moveFocus(key.replace('Arrow', '').toLowerCase());
  }

  Array.prototype.forEach.call(document.querySelectorAll('.nav-button'), function (button) {
    button.addEventListener('click', function () {
      view = button.getAttribute('data-view');
      render();
    });
  });
  document.getElementById('filters').addEventListener('click', function (event) {
    var button = event.target;
    while (button && button !== event.currentTarget && !button.getAttribute('data-category')) button = button.parentNode;
    if (!button || button === event.currentTarget) return;
    category = button.getAttribute('data-category');
    renderFilters();
    render();
    var selectedFilter = document.querySelector('.chip.selected');
    if (selectedFilter) selectedFilter.focus();
  });
  search.addEventListener('input', render);
  languageSelect.addEventListener('change', function () {
    currentLanguage = languageSelect.value;
    safeWrite('cvytv-language', currentLanguage);
    applyLanguage();
  });
  document.getElementById('closePlayer').addEventListener('click', closePlayer);
  officialPageButton.addEventListener('click', openOfficialPage);
  document.getElementById('deviceInfoButton').addEventListener('click', function () {
    deviceDiagnostics();
    document.getElementById('devicePanel').hidden = false;
    try { document.getElementById('devicePanel').scrollIntoView(false); } catch (error) { /* ignore */ }
    document.getElementById('closeDevicePanel').focus();
  });
  document.getElementById('closeDevicePanel').addEventListener('click', function () {
    document.getElementById('devicePanel').hidden = true;
  });
  video.addEventListener('error', function () {
    playerStatus.textContent = t('videoError');
    setText('liveLabel', t('channelLabel'));
  });
  video.addEventListener('playing', function () { playerStatus.textContent = ''; setText('liveLabel', t('live')); });
  video.addEventListener('waiting', function () { playerStatus.textContent = 'Buffering…'; });
  document.addEventListener('keydown', handleRemoteKey, true);
  window.addEventListener('pagehide', destroyPlayer);

  applyLanguage();
  var firstCard = grid.querySelector('.channel');
  if (firstCard) firstCard.focus();
})();
