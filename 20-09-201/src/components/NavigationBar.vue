<template>
  <nav>
    <div class="top_navigationbar">
      <img
        src="@/assets/Logo.svg"
        class="logo_image"
        draggable="false"
        alt="Logo Wikyo"
      />
      <h1 class="logo_title visibilityEffect">Wi<span>kyo</span></h1>
    </div>
    <div class="body_navigationbar">
      <ul class="navigationbar_list">
        <li class="item">
          <a href="#" class="link active">
            <img
              src="@/assets/icons/HomeIcon.svg"
              class="link_icon"
              draggable="false"
              alt="Icône Home"
            />
            <p class="link_text visibilityEffect">Page d'accueil</p>
          </a>
        </li>
        <li class="item">
          <a href="#" class="link">
            <img
              src="@/assets/icons/HomeIcon.svg"
              class="link_icon"
              draggable="false"
              alt="Icône Home"
            />
            <p class="link_text visibilityEffect">Page d'accueil</p>
          </a>
        </li>
        <li class="item">
          <a href="#" class="link">
            <img
              src="@/assets/icons/HomeIcon.svg"
              class="link_icon"
              draggable="false"
              alt="Icône Home"
            />
            <p class="link_text visibilityEffect">Page d'accueil</p>
          </a>
        </li>
        <li class="item">
          <a href="#" class="link">
            <img
              src="@/assets/icons/HomeIcon.svg"
              class="link_icon"
              draggable="false"
              alt="Icône Home"
            />
            <p class="link_text visibilityEffect">Page d'accueil</p>
          </a>
        </li>
        <li class="item">
          <div class="field" @click="handleVisibilityForm()">
            <img
              src="@/assets/icons/SearchIcon.svg"
              class="link_icon"
              draggable="false"
              alt="Icône Home"
            />
            <input
              type="text"
              class="fake-input_text"
              placeholder="Rechercher un wiki..."
              disabled
            />
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom_navigationbar">
      <a href="#" class="link">
        <img
          src="@/assets/icons/SettingsIcon.svg"
          class="link_icon"
          draggable="false"
          alt="Icône Home"
        />
        <p class="link_text visibilityEffect">Paramètres</p>
      </a>
    </div>
    <div class="form_container" :class="{ visible: searchFormVisibility }">
      <img
        src="@/assets/icons/CloseIcon.svg"
        class="close_button"
        @click="handleVisibilityForm()"
      />
      <form method="GET" class="search_form">
        <input type="text" class="input_text" id="input_text" required />
        <label for="input_text" class="label_input"
          >Rechercher un wiki...</label
        >
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchFormVisibility: false,
    };
  },
  methods: {
    handleVisibilityForm() {
      return (this.searchFormVisibility = !this.searchFormVisibility);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/components/_navigationbar.scss";
</style>
