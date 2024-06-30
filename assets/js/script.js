// ideals section start
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tabs ul li");
    const contentDivs = document.querySelectorAll(".content-deals-main-of-c div");
    const borderIndicator = document.querySelector(".border-indicator");

    function clearActive() {
      contentDivs.forEach((div) => {
        div.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
    }

    function setActiveTab(tab) {
      const targetClass = tab.dataset.target;
      clearActive();
      document.querySelector(`.${targetClass}`).classList.add("active");
      tab.classList.add("active");

      const tabRect = tab.getBoundingClientRect();
      const tabsRect = tab.parentNode.getBoundingClientRect();
      borderIndicator.style.width = `${tabRect.width}px`;
      borderIndicator.style.left = `${tabRect.left - tabsRect.left}px`;
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        setActiveTab(this);
      });
    });

    // Show the first tab content and set the initial position of the border indicator
    setActiveTab(tabs[0]);
  });
// ideals section end
// panel script start
function toggleMenu() {
  const panel = document.getElementById('sidePanel');
  const body = document.getElementById('idparentcontainer');

  panel.classList.toggle('open');
  body.classList.toggle('dimmed');

  if (panel.classList.contains('open')) {
      document.addEventListener('click', closeMenuOnClickOutside);
  } else {
      document.removeEventListener('click', closeMenuOnClickOutside);
  }
}

function closeMenuOnClickOutside(event) {
  const panel = document.getElementById('sidePanel');
  const menuIcon = document.querySelector('.nav-right-ham-burger-menu');
  const body = document.getElementById('idparentcontainer');

  if (!panel.contains(event.target) && !menuIcon.contains(event.target)) {
      panel.classList.remove('open');
      body.classList.remove('dimmed');
      document.removeEventListener('click', closeMenuOnClickOutside);
  }
}



// panel script end


// panel sub-item script start
function toggleSubItem() {
  const subPanel = document.getElementById('subPanel');
  const icon = document.querySelector('.whyadopt-sidepanel > i');

  if (subPanel.style.display === 'none' || subPanel.style.display === '') {
      subPanel.style.display = 'block';
      icon.classList.add('icon-rotate');
  } else {
      subPanel.style.display = 'none';
      icon.classList.remove('icon-rotate');
  }
}

// panel sub-item script end

// subpanel sub-item-script start
function toggleSubItemSubChild() {
  const subPanelChild = document.getElementById('subPanelChild');
  const icon = document.querySelector('.subpanel-subitem-contents > i');

  if (subPanelChild.style.display === 'none' || subPanelChild.style.display === '') {
    subPanelChild.style.display = 'block';
      icon.classList.add('icon-rotate');
  } else {
    subPanelChild.style.display = 'none';
      icon.classList.remove('icon-rotate');
  }
}
function toggleSubItemSubChildPlatform() {
  const subPanelChild = document.getElementById('subPanelChildPlatform');
  const icon = document.querySelector('.subitem-arrow-rotate-use');

  if (subPanelChild.style.display === 'none' || subPanelChild.style.display === '') {
    subPanelChild.style.display = 'block';
      icon.classList.add('icon-rotate');
  } else {
    subPanelChild.style.display = 'none';
      icon.classList.remove('icon-rotate');
  }
}

function toggleSubItemSubChildAdopt() {
  const subPanelChild = document.getElementById('subPanelChildPlatformAdopt');
  const icon = document.querySelector('.adopt-sub-child-rotate');

  if (subPanelChild.style.display === 'none' || subPanelChild.style.display === '') {
    subPanelChild.style.display = 'block';
      icon.classList.add('icon-rotate');
  } else {
    subPanelChild.style.display = 'none';
      icon.classList.remove('icon-rotate');
  }
}
// subpanel sub-item-script end


// sidepanel solution start
function toggleSolution() {
  const subPanelChild = document.getElementById('subPanelSolution');
  const icon = document.querySelector('.sidepanel-solution-arrow');

  if (subPanelChild.style.display === 'none' || subPanelChild.style.display === '') {
    subPanelChild.style.display = 'block';
      icon.classList.add('icon-rotate');
  } else {
    subPanelChild.style.display = 'none';
      icon.classList.remove('icon-rotate');
  }
}

// personas section start
function toggleSubItemSubChildPersonas() {
  const subPanelChild = document.getElementById('subPanelChildPersonasItems');
  const icon = document.querySelector('.subitem-arrow-rotate-use-personas');

  if (subPanelChild.style.display === 'none' || subPanelChild.style.display === '') {
    subPanelChild.style.display = 'block';
      icon.classList.add('icon-rotate');
  } else {
    subPanelChild.style.display = 'none';
      icon.classList.remove('icon-rotate');
  }
}
// personas section end
// use cases section start
function toggleSubItemSubChildUseCases() {
  const subPanelChild = document.getElementById('subPanelChildUsecasesItems');
  const icon = document.querySelector('.subitem-arrow-rotate-use-usecases');

  if (subPanelChild.style.display === 'none' || subPanelChild.style.display === '') {
    subPanelChild.style.display = 'block';
      icon.classList.add('icon-rotate');
  } else {
    subPanelChild.style.display = 'none';
      icon.classList.remove('icon-rotate');
  }
}
// use cases section start

// sidepanel solution end
// panel-resources section start
function toggleSubItemSubChildResources() {
  const subPanelChild = document.getElementById('toggleSubItemSubChildResourcesSubItem');
  const icon = document.querySelector('.subitem-arrow-rotate-use-resources');

  if (subPanelChild.style.display === 'none' || subPanelChild.style.display === '') {
    subPanelChild.style.display = 'block';
      icon.classList.add('icon-rotate');
  } else {
    subPanelChild.style.display = 'none';
      icon.classList.remove('icon-rotate');
  }
}
// panel-resources section end