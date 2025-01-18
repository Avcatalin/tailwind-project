document.addEventListener("DOMContentLoaded", function () {
  const toggleClasses = (element, classesToAdd, classesToRemove) => {
    element.classList.remove(...classesToRemove);
    element.classList.add(...classesToAdd);
  };
  
  // Modal functionality to show/hide and stop video if user clicks outside or closes the video
  const videoButton = document.getElementById("videoButton");
  const videoModal = document.getElementById("videoModal");
  const closeModalButton = document.getElementById("closeModalButton");
  const iframe = videoModal.querySelector("iframe"); // Get the iframe element

  // Show the modal
  videoButton.addEventListener("click", () => {
    toggleClasses(
      videoModal,
      ["opacity-100", "visible"],
      ["opacity-0", "invisible"]
    );

  });

  // Function to stop the video and hide the modal
  const closeModal = () => {
    toggleClasses(
      videoModal,
      ["opacity-0", "invisible"],
      ["opacity-100", "visible"]
    );
    // Stop the video by resetting the iframe's src
    iframe.src = iframe.src;
  };

  // Hide the modal when clicking the close button
  closeModalButton.addEventListener("click", closeModal);

  // Hide the modal and stop the video when clicking outside the video
  videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
      closeModal();
    }
  });

  // Language code for showing the selected language
  const languageDropdown = document.getElementById("language-dropdown");
  const currentLanguageLabel = document.getElementById("currentLanguage");

  // Add event listener for language selection
  languageDropdown.addEventListener("click", (event) => {
    // Check if the clicked element is a language option
    if (event.target.hasAttribute("data-language")) {
      const selectedLanguage = event.target.getAttribute("data-language");

      // Update the current language label
      currentLanguageLabel.textContent = selectedLanguage;

      // Hide the dropdown menu
      languageDropdown.classList.add("hidden");
    }
  });

  // Show/hide search input on keydown and click events
  const searchForm = document.getElementById("search-form");
  const closeFormButton = document.getElementById("closeFormButton");
  const searchTrigger = document.getElementById("search-trigger");
  const languageSwitcher = document.getElementById("languageTrigger");

  // Function to show the form
  const showForm = () => {
    languageSwitcher.classList.add("pr-0", "sm:pr-36", "md:pr-24");
    toggleClasses(
      searchForm,
      ["opacity-100", "visible"],
      ["opacity-0", "invisible"]
    );

    // Delay focus until the form becomes fully visible
    setTimeout(() => {
      searchForm.querySelector("input").focus();
    }, 50);
  };

  // Function to hide the form
  const hideForm = () => {
    languageSwitcher.classList.remove("pr-0", "sm:pr-36", "md:pr-24");
    toggleClasses(
      searchForm,
      ["opacity-0", "invisible"],
      ["opacity-100", "visible"]
    );
  };

  // Show form when the search trigger is clicked
  searchTrigger.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    showForm();
  });

  // Add keydown listener for ALT + K, Command + K, and ESC
  document.addEventListener("keydown", (event) => {
    // Show form on ALT + K or Command + K
    if (
      (event.altKey && event.key === "k") ||
      (event.metaKey && event.key === "k")
    ) {
      event.preventDefault(); // Prevent default browser behavior
      showForm();
    }

    // Hide form on ESC key
    if (event.key === "Escape") {
      hideForm();
    }
  });

  // Hide form when the close button is clicked
  closeFormButton.addEventListener("click", hideForm);

  // Hide form when clicking outside the form
  document.addEventListener("click", (event) => {
    // Check if the click is outside the form and search trigger
    if (
      !searchForm.contains(event.target) &&
      !searchTrigger.contains(event.target)
    ) {
      hideForm();
    }
  });

  // Mobile menu trigger
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden"); // Show or hide the menu
  });
})
