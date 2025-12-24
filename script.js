/* script.js */

// Import data from data.js

document.addEventListener('DOMContentLoaded', () => {
  // initTheme(); // Commented out lightmode toggle functionality
  if(document.getElementById('typewriter')) initTypewriter();
  if(document.querySelector('.sliding-skills')) initSkillBar();
  initBinarySelector();
  initFlipCard();
  initAboutBoxes();
});

/* --- Theme Toggle --- */
// Commented out lightmode toggle functionality
/*
function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  if (localStorage.getItem('theme') === 'light') {
      body.classList.add('light-mode');
      toggle.innerText = '🌙';
  }
  toggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
      localStorage.setItem('theme', theme);
      toggle.innerText = theme === 'light' ? '🌙' : '☀️';
  });
}
*/

/* --- Typewriter --- */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  const words = PROFILE.taglines;
  let wordIndex = 0, charIndex = 0, isDeleting = false;

  function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
          el.innerText = currentWord.substring(0, charIndex - 1);
          charIndex--;
      } else {
          el.innerText = currentWord.substring(0, charIndex + 1);
          charIndex++;
      }
      let typeSpeed = isDeleting ? 50 : 100;
      if (!isDeleting && charIndex === currentWord.length) {
          typeSpeed = 2000; isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
          isDeleting = false; wordIndex = (wordIndex + 1) % words.length; typeSpeed = 500;
      }
      setTimeout(type, typeSpeed);
  }
  type();
}

/* --- Sliding Skill Bar --- */
function initSkillBar() {
  const container = document.querySelector('.sliding-skills');
  const skills = PROFILE.skills;
  
  // Map skills to their icon classes
  const skillIcons = {
    'Python': 'fab fa-python',
    'Java': 'fab fa-java',
    'C++': 'fas fa-code',
    'React': 'fab fa-react',
    'Node.js': 'fab fa-node-js',
    'PyTorch': 'fas fa-brain',
    'AWS': 'fab fa-aws',
    'OpenCV': 'fas fa-eye'
  };
  
  // Create skill items
  skills.forEach(skill => {
      const item = document.createElement('div');
      item.className = 'skill-item';
      // Use specific icon for each skill, fallback to fa-code if not found
      const iconClass = skillIcons[skill] || 'fas fa-code';
      item.innerHTML = `<i class="${iconClass}"></i> <span>${skill}</span>`;
      container.appendChild(item);
  });

  // Clone items for seamless loop
  const items = Array.from(container.children);
  items.forEach(item => {
      let clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', true);
      container.appendChild(clone);
  });
}

/* --- Education Flip --- */
function initFlipCard() {
  const card = document.querySelector('.flip-card');
  if(card) card.addEventListener('click', () => card.classList.toggle('flipped'));
}

/* --- Binary Project Selector --- */
function initBinarySelector() {
  const toggles = document.querySelectorAll('.binary-toggle-btn');
  const indexDisplay = document.getElementById('project-index');
  const displayCard = document.getElementById('binary-display-card');
  const randomBtn = document.getElementById('random-project-btn');

  if (!displayCard) return;

  function updateProject() {
      let val = 0;
      toggles.forEach(toggle => {
          if (toggle.classList.contains('active')) {
              val += Math.pow(2, parseInt(toggle.dataset.bit));
          }
      });

      const projectIndex = val % PROJECTS.length;
      const project = PROJECTS[projectIndex];

      indexDisplay.innerText = val;

      document.getElementById('proj-title').innerText = project.title;
      document.getElementById('proj-desc').innerText = project.blurb;
      document.getElementById('proj-link-icon').href = project.link;
      
      const techContainer = document.getElementById('proj-tech');
      techContainer.innerHTML = '';
      project.tech.forEach(t => {
          const tag = document.createElement('span');
          tag.className = 'tech-tag';
          tag.innerText = t;
          techContainer.appendChild(tag);
      });
      
      displayCard.onclick = (e) => {
           // Don't redirect if clicking the external link icon directly
          if (e.target.closest('.external-link-icon')) return;
          window.location.href = `pages/project.html?id=${project.id}`;
      };
  }

  toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
          toggle.classList.toggle('active');
          toggle.innerText = toggle.classList.contains('active') ? '1' : '0';
          updateProject();
      });
  });

  if (randomBtn) {
      randomBtn.addEventListener('click', () => {
          const randVal = Math.floor(Math.random() * 16);
          const binStr = randVal.toString(2).padStart(4, '0');
          
          toggles.forEach((toggle, i) => {
              // binStr is "MSB...LSB", toggles are LSB...MSB in DOM
              const bitValue = binStr[3 - i]; 
              if (bitValue === '1') {
                  toggle.classList.add('active');
                  toggle.innerText = '1';
              } else {
                  toggle.classList.remove('active');
                  toggle.innerText = '0';
              }
          });
          updateProject();
      });
  }

  updateProject();
}

/* --- About Boxes --- */
function initAboutBoxes() {
  const passionsContent = document.getElementById('passions-content');
  const interestsContent = document.getElementById('interests-content');
  const leadershipContent = document.getElementById('leadership-content');
  const randomFactsContent = document.getElementById('random-facts-content');

  // Populate Passions
  if (passionsContent && PROFILE.about.passions && PROFILE.about.passions.length > 0) {
    passionsContent.innerHTML = '<ul>' + PROFILE.about.passions.map(p => `<li>${p}</li>`).join('') + '</ul>';
  }

  // Populate Interests
  if (interestsContent && PROFILE.about.interests && PROFILE.about.interests.length > 0) {
    interestsContent.innerHTML = '<ul>' + PROFILE.about.interests.map(i => `<li>${i}</li>`).join('') + '</ul>';
  }

  // Populate Leadership
  if (leadershipContent && PROFILE.about.leadership && PROFILE.about.leadership.length > 0) {
    leadershipContent.innerHTML = '<ul>' + PROFILE.about.leadership.map(l => `<li>${l}</li>`).join('') + '</ul>';
  } else if (leadershipContent && PROFILE.about.clubs && PROFILE.about.clubs.length > 0) {
    // Fallback to clubs if leadership is empty
    leadershipContent.innerHTML = '<ul>' + PROFILE.about.clubs.map(c => `<li>${c}</li>`).join('') + '</ul>';
  }

  // Populate Random Facts
  if (randomFactsContent && PROFILE.about.randomFacts && PROFILE.about.randomFacts.length > 0) {
    randomFactsContent.innerHTML = '<ul>' + PROFILE.about.randomFacts.map(f => `<li>${f}</li>`).join('') + '</ul>';
  }
}