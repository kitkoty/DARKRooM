const stage = document.getElementById('stage');
const lightSource = document.getElementById('light-source');
const hero = document.getElementById('hero');
const tagline = document.getElementById('tagline');
const transitionText = document.getElementById('transition-text');
const clickPrompt = document.getElementById('click-prompt');
const menu = document.getElementById('selection-menu');
const menuQuestion = document.getElementById('menu-question');

const stepColor = document.getElementById('step-color');
const stepFilm = document.getElementById('step-film');
const filmsColor = document.getElementById('films-color');
const filmsBw = document.getElementById('films-bw');
const goBackButton = document.getElementById('go-back');

let selectedType = null;
let selectedFilm = null;
let isTransitioning = false;
let menuFadeFrame = null;

const allPhotos = [
  'photos/01-kodak-colorplus-200.jpg',
  'photos/02-kodak-colorplus-200.jpg',
  'photos/03-kodak-colorplus-200.jpg',
  'photos/04-filmneverdie-suibo-500t.jpg',
  'photos/05-lucky-400.jpg',
  'photos/06-kentmere-400.jpg',
  'photos/07-kentmere-400.jpg',
  'photos/08-lucky-400.jpg',
  'photos/09-lucky-400.jpg',
  'photos/10-lucky-400.jpg',
  'photos/11-kentmere-400.jpg',
  'photos/12-lucky-400.jpg',
  'photos/13-kentmere-400.jpg',
  'photos/14-kentmere-400.jpg',
  'photos/15-lucky-400.jpg',
  'photos/16-lucky-400.jpg',
  'photos/17-kentmere-400.jpg',
  'photos/18-kodak-ultramax-400.jpg',
  'photos/19-kodak-colorplus-200.jpg',
  'photos/20-kodak-gold-200.jpg',
  'photos/21-kentmere-400.jpg',
  'photos/22-lucky-400.jpg',
  'photos/23-lucky-400.jpg',
  'photos/24-kodak-colorplus-200.jpg',
  'photos/25-kodak-colorplus-200.jpg',
  'photos/26-kodak-colorplus-200.jpg',
  'photos/27-kodak-colorplus-200.jpg',
  'photos/28-kodak-colorplus-200.jpg',
  'photos/29-kodak-colorplus-200.jpg',
  'photos/30-kodak-colorplus-200.jpg',
  'photos/31-kodak-colorplus-200.jpg',
  'photos/32-kodak-colorplus-200.jpg',
  'photos/33-kodak-colorplus-200.jpg',
  'photos/34-kodak-colorplus-200.jpg',
  'photos/35-kodak-colorplus-200.jpg',
  'photos/36-kodak-colorplus-200.jpg',
  'photos/37-kodak-colorplus-200.jpg',
  'photos/38-kodak-colorplus-200.jpg',
  'photos/39-fujifilm-400.jpg',
  'photos/40-kodak-colorpluse-200.jpg',
  'photos/41-fujifilm-400.jpg',
  'photos/42-fujifilm-400.jpg',
  'photos/43-fujifilm-400.jpg',
  'photos/44-fujifilm-400.jpg',
  'photos/45-fujifilm-400.jpg',
  'photos/46-fujifilm-400.jpg',
  'photos/47-fomapan-200.jpg',
  'photos/48-fomapan-200.jpg',
  'photos/49-fomapan-200.jpg',
  'photos/50-fomapan-200.jpg',
  'photos/51-fomapan-200.jpg',
  'photos/52-fomapan-200.jpg',
  'photos/53-fomapan-200.jpg',
  'photos/54-fomapan-200.jpg',
  'photos/55-fomapan-200.jpg',
  'photos/56-fomapan-200.jpg',
  'photos/57-fomapan-200.webp',
  'photos/58-fomapan-200.webp',
  'photos/59-kodak-colorplus-200.jpg',
  'photos/60-kodak-vision.jpg',
  'photos/61-kodak-vision.jpg',
  'photos/62-kodak-vision.jpg',
  'photos/63-kodak-vision.jpg',
  'photos/64-filmneverdie-sora-200.jpg',
  'photos/65-filmneverdie-sora-200.jpg',
  'photos/66-kodak-colorplus-200.jpg',
  'photos/67-kodak-ultramax-400.webp',
  'photos/68-kodak-ultramax-400.webp',
  'photos/69-kodak-ultramax-400.webp',
  'photos/70-kodak-ultramax-400.webp',
  'photos/71-kodak-gold-200.jpg',
  'photos/72-kodak-gold-200.jpg',
  'photos/73-kodak-gold-200.jpg',
  'photos/74-kodak-gold-200.jpg',
  'photos/75-kodak-gold-200.jpg',
  'photos/76-kodak-gold-200.jpg',
  'photos/77-kodak-gold-200.jpg',
  'photos/78-kodak-gold-200.jpg',
  'photos/79-kodak-gold-200.jpg',
  'photos/80-kodak-gold-200.jpg',
  'photos/81-kodak-gold-200.jpg',
  'photos/82-kodak-gold-200.jpg',
  'photos/83-kodak-gold-200.jpg',
  'photos/84-kodak-gold-200.jpg',
  'photos/85-kodak-gold-200.jpg',
  'photos/86-kodak-gold-200.jpg',
  'photos/87-kodak-gold-200.jpg',
  'photos/88-kodak-gold-200.jpg',
  'photos/89-kodak-gold-200.jpg',
  'photos/90-kodak-gold-200.jpg',
  'photos/91-kodak-colorplus-200.jpg',
  'photos/92-kodak-gold-200.jpg',
  'photos/93-kodak-gold-200.jpg',
  'photos/94-kodak-gold-200.jpg',
  'photos/95-kodak-gold-200.jpg',
  'photos/96-kodak-gold-200.jpg',
  'photos/97-kodak-gold-200.jpg',
  'photos/98-kodak-gold-200.jpg',
  'photos/99-kodak-gold-200.jpg',
  'photos/100-kodak-gold-200.jpg',
  'photos/101-kodak-gold-200.jpg',
  'photos/102-kodak-gold-200.jpg',
  'photos/103-fujifilm-400.jpg',
  'photos/104-fujifilm-400.jpg',
  'photos/105-fujifilm-400.jpg',
  'photos/106-fujifilm-400.jpg',
  'photos/107-fujifilm-400.jpg',
  'photos/108-fujifilm-400.jpg',
  'photos/109-kodak-colorplus-200.jpg',
  'photos/110-kentmere-400.jpg',
  'photos/111-kentmere-400.jpg',
  'photos/112-kentmere-400.jpg',
  'photos/113-fujifilm-400.jpg',
  'photos/114-kodak-ultramax-400.jpg',
  'photos/115-fomapan-200.webp',
  'photos/116-fomapan-200.webp',
  'photos/117-fomapan-200.jpg',
  'photos/118-fomapan-200.jpg',
  'photos/119-fomapan-200.webp',
  'photos/120-lucky-400.jpg',
  'photos/121-kodak-ultramax-400.jpg',
  'photos/122-fujifilm-400.webp',
  'photos/123-fomapan-200.jpg',
  'photos/124-kodak-ultramax-400.jpg',
  'photos/125-fomapan-200.jpg',
  'photos/126-kodak-ultramax-400.webp',
  'photos/127-fomapan-200.webp',
  'photos/128-fomapan-200.webp',
  'photos/129-filmneverdie-sora-200.jpg',
  'photos/130-kentmere-400.jpg',
  'photos/131-lucky-400.jpg',
  'photos/132-kodak-colorplus-200.jpg',
  'photos/133-fujifilm-400.jpg',
  'photos/134-fomapan-200.jpg',
  'photos/135-filmneverdie-sora-200.jpg',
  'photos/136-filmneverdie-sora-200.jpg',
  'photos/137-kodak-ultramax-400.jpg',
  'photos/138-kodak-gold-200.jpg',
  'photos/139-kodak-gold-200.jpg',
  'photos/140-kodak-gold-200.jpg',
  'photos/141-kodak-gold-200.jpg',
  'photos/142-kodak-gold-200.jpg',
  'photos/143-kodak-gold-200.jpg',
  'photos/144-kodak-gold-200.jpg',
  'photos/145-kodak-gold-200.jpg',
  'photos/146-kodak-gold-200.jpg',
  'photos/147-kodak-colorplus-200.jpg',
  'photos/148-kodak-gold-200.jpg',
  'photos/149-kodak-gold-200.jpg',
  'photos/150-kodak-gold-200.jpg',
  'photos/151-kodak-gold-200.jpg',
  'photos/152-kodak-colorplus-200.jpg',
  'photos/153-kodak-ultramax-400.jpg',
  'photos/154-kodak-ultramax-400.webp',
  'photos/155-kodak-colorplus-200.webp',
  'photos/156-kentmere-400.jpg',
  'photos/157-kodak-colorplus-200.jpg',
  'photos/158-kentmere-400.jpg',
  'photos/159-kodak-gold-200.jpg',
  'photos/160-kodak-colorplus-200.jpg',
  'photos/161-lucky-aerial.jpg',
  'photos/162-lucky-aerial.jpg',
  'photos/163-lucky-aerial.jpg',
  'photos/164-lucky-aerial.jpg',
  'photos/165-lucky-aerial.jpg',
  'photos/166-lucky-aerial.jpg',
  'photos/167-lucky-aerial.jpg',
  'photos/168-lucky-aerial.jpg',
  'photos/169-kodak-ultramax-400.jpg',
  'photos/170-kodak-ultramax-400.jpg',
  'photos/171-kodak-ultramax-400.jpg',
  'photos/172-kodak-ultramax-400.jpg',
  'photos/173-kodak-ultramax-400.jpg',
  'photos/174-kodak-ultramax-400.jpg',
  'photos/175-kodak-ultramax-400.jpg',
  'photos/176-kodak-ultramax-400.jpg',
  'photos/177-kodak-ultramax-400.webp',
  'photos/178-kodak-ultramax-400.webp',
  'photos/179-kodak-ultramax-400.webp',
  'photos/180-kodak-gold-200.jpg',
  'photos/181-kodak-gold-200.jpg',
  'photos/182-kodak-gold-200.jpg',
  'photos/183-kodak-gold-200.jpg',
  'photos/184-kodak-gold-200.jpg',
  'photos/185-kodak-gold-200.jpg',
  'photos/186-kodak-gold-200.jpg',
  'photos/187-kodak-gold-200.jpg',
  'photos/188-kodak-gold-200.jpg',
  'photos/189-kodak-gold-200.jpg',
  'photos/190-kodak-gold-200.jpg',
  'photos/191-kodak-gold-200.jpg',
  'photos/192-kodak-gold-200.jpg',
  'photos/193-kodak-gold-200.jpg',
  'photos/194-kodak-ultramax-400.webp',
  'photos/195-kodak-ultramax-400.webp',
  'photos/196-kodak-ultramax-400.webp',
  'photos/197-kodak-ultramax-400.webp',
  'photos/198-filmneverdie-sora-200.jpg',
  'photos/199-filmneverdie-sora-200.jpg',
  'photos/200-kodak-colorplus-200.jpg',
  'photos/201-kodak-colorplus-200.jpg',
  'photos/202-kodak-colorplus-200.jpg',
  'photos/203-kodak-colorplus-200.jpg',
  'photos/204-fujifilm-400.jpg',
  'photos/205-fujifilm-400.jpg',
  'photos/206-fujifilm-400.jpg',
  'photos/207-fujifilm-400.jpg',
  'photos/208-fujifilm-400.jpg',
  'photos/209-fujifilm-400.jpg',
  'photos/210-kodak-colorplus-200.jpg',
  'photos/211-kodak-colorplus-200.jpg',
  'photos/212-kodak-gold-200.jpg',
  'photos/213-kodak-gold-200.jpg',
  'photos/214-kodak-gold-200.jpg',
  'photos/215-kodak-gold-200.jpg',
  'photos/216-kodak-gold-200.jpg',
  'photos/217-kodak-gold-200.jpg',
  'photos/218-kodak-gold-200.jpg',
  'photos/219-kodak-gold-200.jpg',
  'photos/220-kodak-gold-200.jpg',
  'photos/221-kodak-gold-200.jpg',
  'photos/222-kodak-gold-200.jpg',
  'photos/223-kodak-gold-200.jpg',
  'photos/224-kodak-gold-200.jpg',
  'photos/225-kodak-gold-200.jpg',
  'photos/226-kodak-trix-400.jpg',
  'photos/227-kodak-trix-400.jpg',
  'photos/228-kodak-trix-400.jpg',
  'photos/229-kodak-trix-400.jpg',
  'photos/230-kodak-trix-400.jpg',
  'photos/231-kodak-trix-400.jpg',
  'photos/232-kodak-trix-400.jpg',
  'photos/233-ilford-hp5-plus.jpg',
  'photos/234-ilford-hp5-plus.jpg',
  'photos/235-ilford-hp5-plus.jpg',
  'photos/236-ilford-hp5-plus.jpg',
  'photos/237-ilford-hp5-plus.jpg',
  'photos/238-ilford-hp5-plus.jpg',
  'photos/239-kodak-trix-400.jpg',
  'photos/240-filmneverdie-sora-200.jpg',
  'photos/241-filmneverdie-sora-200.jpg',
  'photos/242-filmneverdie-sora-200.jpg',
  'photos/243-kodak-trix-400.jpg',
  'photos/244-kodak-trix-400.jpg',
  'photos/245-ilford-hp5-plus.jpg',
  'photos/246-filmneverdie-sora-200.jpg',
  'photos/247-filmneverdie-sora-200.jpg',
  'photos/248-filmneverdie-sora-200.jpg',
  'photos/249-filmneverdie-sora-200.jpg',
  'photos/250-kodak-colorplus-200.jpg',
  'photos/251-kodak-colorplus-200.jpg',
  'photos/252-kodak-colorplus-200.jpg',
  'photos/253-kodak-colorplus-200.jpg',
  'photos/254-kodak-colorplus-200.jpg',
  'photos/255-kodak-colorplus-200.jpg',
  'photos/256-kodak-colorplus-200.jpg',
  'photos/257-kodak-colorplus-200.jpg',
  'photos/258-kodak-colorplus-200.jpg',
  'photos/259-kodak-colorplus-200.jpg',
  'photos/260-kodak-colorplus-200.jpg',
  'photos/261-kodak-colorplus-200.jpg',
  'photos/262-kodak-colorplus-200.jpg',
  'photos/263-kodak-colorplus-200.jpg',
  'photos/264-kodak-vision.jpg',
  'photos/265-kodak-vision.jpg',
  'photos/266-kodak-vision.jpg',
  'photos/267-kodak-vision.jpg',
  'photos/268-kodak-colorplus-200.jpg',
  'photos/269-kodak-vision.jpg',
  'photos/270-kodak-vision.jpg',
  'photos/271-kodak-colorplus-200.jpg',
  'photos/272-kodak-vision.jpg',
  'photos/273-kodak-colorplus-200.jpg',
  'photos/274-kodak-vision.jpg',
  'photos/275-fujifilm-400.jpg',
  'photos/276-fujifilm-400.jpg',
  'photos/277-fujifilm-400.jpg',
  'photos/278-fujifilm-400.jpg',
  'photos/279-fujifilm-400.jpg',
  'photos/280-filmneverdie-suibo-500t.jpg',
  'photos/281-filmneverdie-suibo-500t.jpg',
  'photos/282-filmneverdie-suibo-500t.jpg',
  'photos/283-filmneverdie-suibo-500t.jpg',
  'photos/284-filmneverdie-suibo-500t.jpg',
  'photos/285-filmneverdie-suibo-500t.jpg',
  'photos/286-filmneverdie-suibo-500t.jpg',
  'photos/287-filmneverdie-suibo-500t.jpg',
  'photos/288-filmneverdie-suibo-500t.jpg',
  'photos/289-fujifilm-400.jpg',
  'photos/290-filmneverdie-suibo-500t.jpg',
  'photos/291-filmneverdie-suibo-500t.jpg',
  'photos/292-filmneverdie-suibo-500t.jpg',
  'photos/293-filmneverdie-suibo-500t.jpg',
  'photos/294-filmneverdie-suibo-500t.jpg',
  'photos/295-filmneverdie-suibo-500t.jpg',
  'photos/296-filmneverdie-suibo-500t.jpg',
  'photos/297-filmneverdie-suibo-500t.jpg',
  'photos/298-filmneverdie-suibo-500t.jpg',
  'photos/299-fujifilm-400.jpg',
  'photos/300-filmneverdie-sora-200.jpg',
  'photos/301-filmneverdie-sora-200.jpg',
  'photos/302-filmneverdie-sora-200.jpg',
  'photos/303-kodak-trix-400.jpg',
  'photos/304-kodak-colorplus-200.jpg',
  'photos/305-kodak-colorplus-200.jpg',
  'photos/306-kodak-colorplus-200.jpg',
  'photos/307-kodak-colorplus-200.jpg',
  'photos/308-kodak-colorplus-200.jpg',
  'photos/309-kodak-colorplus-200.jpg',
  'photos/310-kodak-colorplus-200.jpg',
  'photos/311-kodak-colorplus-200.jpg',
  'photos/312-kodak-colorplus-200.jpg',
  'photos/313-kodak-colorplus-200.jpg',
  'photos/314-kodak-colorplus-200.jpg',
  'photos/315-kodak-colorplus-200.jpg',
  'photos/316-kodak-colorplus-200.jpg',
  'photos/317-kodak-colorplus-200.jpg',
  'photos/318-kodak-colorplus-200.jpg',
  'photos/319-kodak-gold-200.jpg',
  'photos/320-kodak-gold-200.jpg',
  'photos/321-kodak-colorplus-200.jpg',
  'photos/322-kodak-colorplus-200.jpg',
  'photos/323-kodak-colorplus-200.jpg',
  'photos/324-kodak-colorplus-200.jpg',
  'photos/325-kodak-colorplus-200.jpg',
  'photos/326-kodak-colorplus-200.jpg',
  'photos/327-kodak-colorplus-200.jpg',
  'photos/328-kodak-colorplus-200.jpg',
  'photos/329-kodak-colorplus-200.jpg',
  'photos/330-kodak-colorplus-200.jpg',
  'photos/331-kodak-colorplus-200.jpg',
  'photos/332-kodak-colorplus-200.jpg',
  'photos/333-kodak-colorplus-200.jpg',
  'photos/334-kodak-colorplus-200.jpg',
  'photos/335-fujifilm-400.jpg',
  'photos/336-fujifilm-400.jpg',
  'photos/337-fujifilm-400.jpg',
  'photos/338-kodak-colorplus-200.jpg',
  'photos/339-kodak-colorplus-200.jpg',
  'photos/340-kodak-colorplus-200.jpg',
  'photos/341-kodak-vision.jpg',
  'photos/342-kodak-colorplus-200.jpg',
  'photos/343-kodak-colorplus-200.jpg',
  'photos/344-kodak-colorplus-200.jpg',
  'photos/345-kodak-colorplus-200.jpg',
  'photos/346-kodak-colorplus-200.jpg',
  'photos/347-kodak-colorplus-200.jpg',
  'photos/348-kodak-colorplus-200.jpg',
  'photos/349-kodak-colorplus-200.jpg',
  'photos/350-kodak-colorplus-200.jpg',
  'photos/351-kodak-colorplus-200.jpg',
  'photos/352-kodak-colorplus-200.jpg',
  'photos/353-kodak-vision.jpg',
  'photos/354-kodak-vision.jpg',
  'photos/355-kodak-vision.jpg',
  'photos/356-kodak-vision.jpg',
  'photos/357-kodak-vision.jpg',
  'photos/358-kodak-colorplus-200.jpg',
  'photos/359-fujifilm-400.jpg',
  'photos/360-kodak-colorplus-200.jpg',
  'photos/361-kodak-colorplus-200.jpg',
  'photos/362-kodak-colorplus-200.jpg',
  'photos/363-kodak-colorplus-200.jpg',
  'photos/364-portra-400.jpg',
  'photos/365-portra-400.jpg',
  'photos/366-portra-400.jpg',
  'photos/367-portra-400.jpg',
  'photos/368-portra-400.jpg',
  'photos/369-portra-400.jpg',
  'photos/370-portra-400.jpg',
  'photos/371-portra-400.jpg',
  'photos/372-portra-400.jpg',
  'photos/373-portra-400.jpg',
  'photos/374-portra-400.jpg',
  'photos/375-portra-400.jpg',
  'photos/376-portra-400.jpg',
  'photos/377-portra-400.jpg',
  'photos/378-portra-400.jpg',
  'photos/379-portra-400.jpg',
  'photos/380-portra-400.jpg',
  'photos/381-portra-400.jpg',
  'photos/382-kodak-colorplus-200.jpg',
  'photos/383-kodak-colorplus-200.jpg',
  'photos/384-kodak-colorplus-200.jpg',
  'photos/385-kodak-colorplus-200.jpg',
  'photos/386-kodak-colorplus-200.jpg',
  'photos/387-kodak-colorplus-200.jpg',
  'photos/388-kodak-colorplus-200.jpg',
  'photos/389-kodak-colorplus-200.jpg',
  'photos/390-kodak-colorplus-200.jpg',
  'photos/391-kodak-colorplus-200.jpg',
  'photos/392-kodak-colorplus-200.jpg',
  'photos/393-kodak-colorplus-200.jpg',
  'photos/394-kodak-colorplus-200.jpg',
  'photos/395-kodak-colorplus-200.jpg',
  'photos/396-kodak-ultramax-400.jpg',
  'photos/397-kodak-ultramax-400.jpg',
  'photos/398-kodak-ultramax-400.jpg',
  'photos/399-kodak-ultramax-400.jpg',
  'photos/400-kodak-ultramax-400.jpg',
  'photos/401-fujicolor-c200.jpg',
  'photos/402-fujicolor-c200.jpg',
  'photos/403-fujicolor-c200.jpg',
  'photos/404-kodak-vision.jpg',
  'photos/405-kodak-vision.jpg',
  'photos/406-kodak-vision.jpg',
  'photos/407-kodak-vision.jpg'
];

let filteredPhotos = [];
let photoIndex = 0;
const MAX_PHOTOS = 25;
const OFFSET = 12;

const TAGLINE_PARTS = ['where analog', 'meets algorithm'];
const TAGLINE_WIDTH_RATIO = 0.85;
const TAGLINE_LETTER_MS = 50;
const INTRO_LOGO_MS = 1000;
const INTRO_DOOR_MS = 2000;
const DOOR_OPEN_CSS_MS = 3100;

const SHADOW_CLOSE_DELAY_MS = 3900;

const DOOR_CLOSED_FRAME = {
  opacity: 0,
  clipPath: 'polygon(2cm 0, calc(2cm + .5%) 0, calc(2cm + .5%) 100%, 110% 115%, -10% 115%, 2cm 100%)'
};
const DOOR_OPEN_FRAME = {
  opacity: 1,
  clipPath: 'polygon(2cm 0, calc(4cm + 12%) 0, 100% calc(100% - 6cm), 110% 115%, -10% 115%, 0 100%)'
};
const CM = 96 / 2.54;
const DOOR_EASING = 'cubic-bezier(.2, .72, .2, 1)';
const DOOR_CLOSE_EASING = 'cubic-bezier(.45, 0, .55, 1)';
const DOOR_CLOSE_FRAMES = [
  { opacity: 1, clipPath: DOOR_OPEN_FRAME.clipPath, filter: 'blur(24px)' },
  { opacity: 1, clipPath: DOOR_CLOSED_FRAME.clipPath, filter: 'blur(1px)', offset: 0.97 },
  { opacity: 0, clipPath: DOOR_CLOSED_FRAME.clipPath, filter: 'blur(1px)', offset: 1 }
];
const DOOR_CLOSE_MS = 1600;
const DOOR_OPEN_FAST_MS = 2000;
const DOOR_DARK_PAUSE_MS = 300;
const MENU_FADE_MS = 400;

const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

let doorAnimation = null;

function playDoor(direction, duration) {
  const isClosing = direction === 'close';
  if (doorAnimation) doorAnimation.cancel();
  doorAnimation = lightSource.animate(
    isClosing ? DOOR_CLOSE_FRAMES : [DOOR_CLOSED_FRAME, DOOR_OPEN_FRAME],
    { duration, easing: isClosing ? DOOR_CLOSE_EASING : DOOR_EASING, fill: 'forwards' }
  );
  return doorAnimation.finished;
}

function fadeMenuTo(target, duration) {
  if (menuFadeFrame) window.cancelAnimationFrame(menuFadeFrame);
  const from = Number(getComputedStyle(menu).opacity) || 0;
  const start = performance.now();

  return new Promise((resolve) => {
    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      menu.style.opacity = String(from + (target - from) * progress);
      if (progress < 1) {
        menuFadeFrame = window.requestAnimationFrame(step);
      } else {
        menuFadeFrame = null;
        resolve();
      }
    };
    menuFadeFrame = window.requestAnimationFrame(step);
  });
}

function showMenu() {
  menu.style.opacity = '0';
  menu.classList.remove('hidden');
  return fadeMenuTo(1, MENU_FADE_MS);
}

async function changeStepWithDoor(swapStep) {
  isTransitioning = true;
  goBackButton.classList.add('hidden');

  await fadeMenuTo(0, MENU_FADE_MS);
  await playDoor('close', DOOR_CLOSE_MS);
  menu.classList.add('hidden');
  swapStep();

  await wait(DOOR_DARK_PAUSE_MS);
  await playDoor('open', DOOR_OPEN_FAST_MS);
  goBackButton.classList.toggle('hidden', selectedType === null);
  await showMenu();
  isTransitioning = false;
}

function showFilmStep() {
  stepColor.classList.add('hidden');
  stepFilm.classList.remove('hidden');
  filmsColor.classList.toggle('hidden', selectedType !== 'color');
  filmsBw.classList.toggle('hidden', selectedType === 'color');
}

function showColorStep() {
  stepFilm.classList.add('hidden');
  stepColor.classList.remove('hidden');
}

function buildTagline() {
  tagline.textContent = '';
  for (const text of TAGLINE_PARTS) {
    const part = document.createElement('div');
    part.className = 'tagline-part';
    for (const char of text) {
      const span = document.createElement('span');
      span.className = 'tagline-char';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = char === ' ' ? '\u00A0' : char;
      part.appendChild(span);
    }
    tagline.appendChild(part);
  }
}

// Подбирает размер шрифта слогана под заданную долю ширины DARK / RooM
function fitTagline() {
  tagline.style.fontSize = '';
  for (const part of tagline.children) {
    part.style.transform = 'none';
    part.style.fontSize = '';
  }
  const baseSize = parseFloat(getComputedStyle(tagline).fontSize);
  const heroSize = parseFloat(getComputedStyle(hero).fontSize);
  let naturalWidth = 0;
  for (const char of tagline.querySelectorAll('.tagline-char')) naturalWidth += char.getBoundingClientRect().width;
  const targetWidth = tagline.clientWidth;
  if (!naturalWidth || !targetWidth) return;
  tagline.style.fontSize = `${(baseSize * (targetWidth * TAGLINE_WIDTH_RATIO) / naturalWidth) / heroSize}em`;
  placeTagline();
}

// Ставит обе части слогана вдоль правой диагонали: первая на чёрной стороне над K, вторая на красной от K
function placeTagline() {
  const stageRect = stage.getBoundingClientRect();
  const origin = tagline.getBoundingClientRect();
  const W = stageRect.width;
  const H = stageRect.height;
  const topX = 4 * CM + 0.12 * W;
  const bottomY = H - 6 * CM;
  const len = Math.hypot(W - topX, bottomY);
  const ux = (W - topX) / len;
  const uy = bottomY / len;
  const angle = Math.atan2(uy, ux);
  const gap = 0.6 * CM;

  const edgePoint = (s, offset) => ({
    x: topX + s * ux + offset * uy,
    y: s * uy - offset * ux
  });
  const placePart = (part, p) => {
    const x = p.x + stageRect.left - origin.left;
    const y = p.y + stageRect.top - origin.top;
    part.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
  };
  const stageBox = (el) => {
    const r = el.getBoundingClientRect();
    return { top: r.top - stageRect.top, bottom: r.bottom - stageRect.top };
  };

  const [partA, partB] = tagline.children;
  const logoLines = document.querySelectorAll('.logo-line');
  const K = stageBox(logoLines[0].lastElementChild);

  const sEndA = (K.top - gap + gap * ux) / uy;
  placePart(partA, edgePoint(sEndA - partA.offsetWidth, gap + partA.offsetHeight));

  const sStartB = K.bottom / uy;
  placePart(partB, edgePoint(sStartB, -gap));
}

function typeTagline() {
  return new Promise((resolve) => {
    const chars = tagline.querySelectorAll('.tagline-char');
    let index = 0;

    const typeNextLetter = () => {
      chars[index].classList.add('typed');
      index += 1;
      if (index >= chars.length) {
        resolve();
        return;
      }
      window.setTimeout(typeNextLetter, TAGLINE_LETTER_MS);
    };
    typeNextLetter();
  });
}

async function startIntro() {
  isTransitioning = true;
  await wait(INTRO_LOGO_MS);
  hero.classList.add('shown');
  await wait(INTRO_DOOR_MS - INTRO_LOGO_MS);
  await wait(DOOR_OPEN_CSS_MS);
  await typeTagline();
  await wait(1500);

  hero.classList.add('fade-out');
  await wait(800);

  transitionText.classList.remove('hidden');
  transitionText.classList.add('visible');
  await wait(SHADOW_CLOSE_DELAY_MS);

  await playDoor('close', DOOR_CLOSE_MS);
  transitionText.classList.remove('visible');
  transitionText.classList.add('hidden');

  await wait(DOOR_DARK_PAUSE_MS);
  await playDoor('open', DOOR_OPEN_FAST_MS);
  await showMenu();
  isTransitioning = false;
}

function normalizeFilmSlug(value) {
  return value.toLowerCase().replace(/colorpluse/g, 'colorplus').replace(/[^a-z0-9]+/g, '');
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function photosForFilm(slug) {
  const target = normalizeFilmSlug(slug);
  return allPhotos.filter((path) => normalizeFilmSlug(path).includes(target));
}

function showNextPhoto(x, y) {
  if (!filteredPhotos.length) return;
  const image = document.createElement('img');
  image.src = filteredPhotos[photoIndex % filteredPhotos.length];
  image.alt = '';
  image.draggable = false;
  image.onerror = () => { image.remove(); };

  const bounds = stage.getBoundingClientRect();
  const left = Number.isFinite(x) ? x : bounds.width / 2 - 100;
  const top = Number.isFinite(y) ? y : bounds.height / 2 - 130;

  image.style.left = `${Math.min(Math.max(0, left + OFFSET), Math.max(0, bounds.width - 160))}px`;
  image.style.top = `${Math.min(Math.max(0, top + OFFSET), Math.max(0, bounds.height - 180))}px`;

  stage.appendChild(image);
  photoIndex += 1;

  const images = stage.querySelectorAll('#stage > img');
  if (images.length > MAX_PHOTOS) images[0].remove();
}

document.querySelectorAll('#step-color [data-type]').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    if (isTransitioning) return;

    selectedType = event.currentTarget.dataset.type;
    selectedFilm = null;
    changeStepWithDoor(showFilmStep);
  });
});

document.querySelectorAll('#step-film [data-film]').forEach((button) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isTransitioning) return;

    const slug = event.currentTarget.dataset.film;
    selectedFilm = slug;
    filteredPhotos = shuffle(photosForFilm(slug));

    if (!filteredPhotos.length) {
      menuQuestion.textContent = `No photos found for ${event.currentTarget.textContent.trim()}`;
      return;
    }

    isTransitioning = true;
    photoIndex = 0;
    stage.querySelectorAll('#stage > img').forEach((image) => image.remove());

    await fadeMenuTo(0, MENU_FADE_MS);
    await playDoor('close', DOOR_CLOSE_MS);
    menu.classList.add('hidden');

    await wait(DOOR_DARK_PAUSE_MS);
    await playDoor('open', DOOR_OPEN_FAST_MS);
    clickPrompt.classList.remove('hidden');
    isTransitioning = false;
  });
});

goBackButton.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (isTransitioning) return;

  stage.querySelectorAll('#stage > img').forEach((image) => image.remove());

  filteredPhotos = [];
  photoIndex = 0;
  clickPrompt.classList.add('hidden');

  menuQuestion.textContent = 'Which film do you want to look at?';

  if (selectedFilm) {
    selectedFilm = null;
    changeStepWithDoor(showFilmStep);
  } else {
    selectedType = null;
    changeStepWithDoor(showColorStep);
  }
});

stage.addEventListener('click', (event) => {
  if (event.target.closest('button')) return;
  if (isTransitioning) return;
  if (!menu.classList.contains('hidden')) return;
  if (!filteredPhotos.length) return;

  if (!clickPrompt.classList.contains('hidden')) {
    clickPrompt.classList.add('hidden');
  }

  const bounds = stage.getBoundingClientRect();
  showNextPhoto(event.clientX - bounds.left, event.clientY - bounds.top);
});

buildTagline();
Promise.all([
  document.fonts.load("900 1em 'Lexend Tera'"),
  document.fonts.load("400 1em 'MuseoModerno'")
]).catch(() => {}).then(fitTagline);
window.addEventListener('resize', fitTagline);

startIntro();